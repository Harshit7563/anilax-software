import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContactModal } from "../context/ContactModalContext";
import { AI_DISCLAIMER } from "../data/aiKnowledge";
import { getAiResponse, getSuggestions, getWelcomeMessage } from "../lib/aiAssistant";
import "../styles/ai-assistant.css";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function renderText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part.split("\n").map((line, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line}
      </span>
    ));
  });
}

export function AnilaxAiAssistant() {
  const { pathname } = useLocation();
  const { openContact } = useContactModal();
  const [panelOpen, setPanelOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const suggestions = getSuggestions(pathname);

  const scrollToEnd = useCallback(() => {
    requestAnimationFrame(() => {
      if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
    });
  }, []);

  useEffect(() => {
    if (panelOpen) {
      scrollToEnd();
      inputRef.current?.focus();
    }
  }, [panelOpen, messages, typing, scrollToEnd]);

  const openPanel = () => {
    setPanelOpen(true);
    if (messages.length === 0) {
      setMessages([getWelcomeMessage(pathname)]);
    }
  };

  const sendMessage = async (text) => {
    const q = text.trim();
    if (!q || typing) return;

    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    await delay(350 + Math.min(q.length * 12, 400));

    const res = getAiResponse(q, pathname);
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: res.text,
        links: res.links,
        confidence: res.confidence,
      },
    ]);
    setTyping(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleLink = (link) => {
    if (link.action === "contact") {
      openContact();
      return;
    }
    setPanelOpen(false);
  };

  if (pathname === "/docs") return null;

  return (
    <>
      <button
        type="button"
        className={`ai-assistant-fab ${panelOpen ? "ai-assistant-fab--open" : ""}`}
        onClick={() => (panelOpen ? setPanelOpen(false) : openPanel())}
        aria-expanded={panelOpen}
        aria-controls="anilax-ai-panel"
      >
        <span className="ai-assistant-fab__icon" aria-hidden="true">
          {panelOpen ? "×" : "✦"}
        </span>
        <span className="ai-assistant-fab__label">{panelOpen ? "Close" : "Ask Anilax AI"}</span>
      </button>

      {panelOpen && (
        <div
          id="anilax-ai-panel"
          className="ai-assistant-panel"
          role="dialog"
          aria-label="Anilax AI assistant"
        >
          <header className="ai-assistant-panel__head">
            <div>
              <p className="ai-assistant-panel__eyebrow">AI-assisted</p>
              <h2 className="ai-assistant-panel__title">Anilax AI</h2>
              <p className="ai-assistant-panel__sub">Integration & product answers</p>
            </div>
            <button
              type="button"
              className="ai-assistant-panel__close"
              onClick={() => setPanelOpen(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </header>

          <div className="ai-assistant-panel__messages" ref={listRef}>
            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`ai-assistant-msg ai-assistant-msg--${msg.role}`}
              >
                <p className="ai-assistant-msg__text">{renderText(msg.text)}</p>
                {msg.links?.length > 0 && (
                  <div className="ai-assistant-msg__links">
                    {msg.links.map((link) =>
                      link.href ? (
                        link.href.startsWith("/") ? (
                          <Link
                            key={link.label}
                            to={link.href}
                            className="ai-assistant-msg__link"
                            onClick={() => setPanelOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            key={link.label}
                            href={link.href}
                            className="ai-assistant-msg__link"
                          >
                            {link.label}
                          </a>
                        )
                      ) : (
                        <button
                          key={link.label}
                          type="button"
                          className="ai-assistant-msg__link"
                          onClick={() => handleLink(link)}
                        >
                          {link.label}
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="ai-assistant-msg ai-assistant-msg--assistant ai-assistant-msg--typing">
                <span className="ai-assistant-typing" aria-label="Thinking">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            )}
          </div>

          <div className="ai-assistant-panel__chips">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                className="ai-assistant-chip"
                onClick={() => sendMessage(s)}
                disabled={typing}
              >
                {s}
              </button>
            ))}
          </div>

          <form className="ai-assistant-panel__form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="ai-assistant-panel__input"
              placeholder="Ask about AePS, APIs, onboarding…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={typing}
              autoComplete="off"
            />
            <button type="submit" className="ai-assistant-panel__send" disabled={typing || !input.trim()}>
              Send
            </button>
          </form>

          <p className="ai-assistant-panel__disclaimer">{AI_DISCLAIMER}</p>
        </div>
      )}
    </>
  );
}
