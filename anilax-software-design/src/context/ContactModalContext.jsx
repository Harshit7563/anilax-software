import { createContext, useContext, useState, useCallback } from "react";

const ContactModalContext = createContext(null);

/** @typedef {{ apiName?: string, categoryTitle?: string, categoryId?: string }} ContactPrefill */

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState(null);

  const openContact = useCallback((/** @type {ContactPrefill | void} */ options) => {
    setPrefill(options ?? null);
    setOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setOpen(false);
    setPrefill(null);
  }, []);

  return (
    <ContactModalContext.Provider value={{ open, prefill, openContact, closeContact }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}
