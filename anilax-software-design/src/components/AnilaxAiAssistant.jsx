import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContactModal } from "../context/ContactModalContext";
import { SHREE_DISCLAIMER } from "../data/shreeKnowledge";
import {
  createShreeSession,
  getShreeSuggestions,
  getShreeWelcome,
  processShreeMessage,
  syncShreeToAdmin,
} from "../lib/aiAssistant";
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
  const sessionRef = useRef(createShreeSession());
  const [panelOpen, setPanelOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [typingLabel, setTypingLabel] = useState("");
  const [adminSynced, setAdminSynced] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const [suggestions, setSuggestions] = useState(() =>
    getShreeSuggestions(sessionRef.current, pathname),
  );

  const scrollToEnd = useCallback(() => {
    requestAnimationFrame(() => {
      if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
    });
  }, []);

  useEffect(() => {
    if (panelOpen) {
      scrollToEnd();
      inputRef.current?.focus();
      document.body.classList.add("shree-panel-open");
    } else {
      document.body.classList.remove("shree-panel-open");
    }
    return () => document.body.classList.remove("shree-panel-open");
  }, [panelOpen, messages, typing, scrollToEnd]);

  const openPanel = () => {
    setPanelOpen(true);
    if (messages.length === 0) {
      sessionRef.current.greeted = true;
      setMessages([getShreeWelcome(pathname)]);
      setSuggestions(getShreeSuggestions(sessionRef.current, pathname));
    }
  };

  const appendAssistant = (payload) => {
    setMessages((prev) => [...prev, { role: "assistant", ...payload }]);
  };

  const sendMessage = async (text) => {
    const q = text.trim();
    if (!q || typing) return;

    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTypingLabel(
      sessionRef.current.lang === "en" ? "Shree is typing…" : "Shree type kar rahi hai…",
    );

    const res = await processShreeMessage(q, sessionRef.current, pathname);
    setSuggestions(getShreeSuggestions(sessionRef.current, pathname));
    await delay(res.delay ?? 500);

    appendAssistant({
      text: res.text,
      links: res.links ?? [],
      confidence: res.confidence,
    });
    setTyping(false);

    if (res.escalate && !sessionRef.current.adminSynced) {
      setTyping(true);
      setTypingLabel("Admin team ko bhej rahi hoon…");
      await delay(600);
      const sync = await syncShreeToAdmin(sessionRef.current, pathname, "Customer query handoff");
      setTyping(false);
      if (sync.ok && !sync.already) {
        setAdminSynced(true);
        appendAssistant({
          text:
            sessionRef.current.lang === "en"
              ? "Done — I've **shared this chat with our admin team**. A real person from Anilax will follow up soon. You can also reach us anytime if urgent."
              : "Ho gaya — maine **poori baat admin team ko bhej di hai**. Anilax ki team jald contact karegi. Urgent ho to call bhi kar sakte ho.",
          links: [],
          confidence: "high",
          handoff: true,
        });
      }
    }
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
        <span className="ai-assistant-fab__label">{panelOpen ? "Close" : "Ask Shree"}</span>
      </button>

      {panelOpen && (
        <>
          <button
            type="button"
            className="ai-assistant-backdrop"
            aria-label="Close Shree chat"
            onClick={() => setPanelOpen(false)}
          />
          <div
            id="anilax-ai-panel"
            className="ai-assistant-panel"
            role="dialog"
            aria-label="Shree AI from Anilax Software"
            aria-modal="true"
          >
          <header className="ai-assistant-panel__head">
            <div className="ai-assistant-panel__avatar" aria-hidden="true">
              S
            </div>
            <div className="ai-assistant-panel__meta">
              <div className="ai-assistant-panel__title-row">
                <h2 className="ai-assistant-panel__title">Shree AI</h2>
                <span className="ai-assistant-panel__live">
                  <span className="ai-assistant-panel__dot" /> Online
                </span>
              </div>
              <p className="ai-assistant-panel__sub">Anilax Software</p>
              {adminSynced && (
                <p className="ai-assistant-panel__badge">Team ko bhej diya ✓</p>
              )}
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
                className={`ai-assistant-msg ai-assistant-msg--${msg.role} ${msg.handoff ? "ai-assistant-msg--handoff" : ""} ${msg.special ? "ai-assistant-msg--special" : ""}`}
              >
                {msg.role === "assistant" && (
                  <span className="ai-assistant-msg__who">Shree</span>
                )}
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
                          <a key={link.label} href={link.href} className="ai-assistant-msg__link">
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
                <span className="ai-assistant-msg__who">Shree</span>
                <span className="ai-assistant-typing" aria-label={typingLabel}>
                  <span />
                  <span />
                  <span />
                </span>
                <span className="ai-assistant-typing__label">{typingLabel}</span>
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
              placeholder="Ask about software, payments, or your business needs…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={typing}
              autoComplete="off"
            />
            <button type="submit" className="ai-assistant-panel__send" disabled={typing || !input.trim()}>
              Send
            </button>
          </form>

          <p className="ai-assistant-panel__disclaimer">{SHREE_DISCLAIMER}</p>
        </div>
        </>
      )}
    </>
  );
}
