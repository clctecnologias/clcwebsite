"use client";

import { useState, useEffect, useCallback } from "react";

export interface CookiePreferences {
  necessary: boolean; // Sempre ativo por segurança e funcionamento essencial
  analytics: boolean; // Métricas e desempenho
  functional: boolean; // Preferências de interface e idioma/sessão
  marketing: boolean; // Campanhas e remarketing
  updatedAt?: string;
}

const STORAGE_KEY = "clc_cookie_consent_v1";
const OPEN_MODAL_EVENT = "clc:open-cookie-modal";

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: true,
  marketing: false,
};

function writeConsentCookie(prefs: CookiePreferences) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 180; // 180 dias
  const serialized = encodeURIComponent(JSON.stringify(prefs));
  document.cookie = `${STORAGE_KEY}=${serialized}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function openCookieSettingsModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_MODAL_EVENT));
  }
}

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>(
    DEFAULT_COOKIE_PREFERENCES
  );
  const [hasSavedConsent, setHasSavedConsent] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CookiePreferences;
        setPreferences({
          necessary: true,
          analytics: Boolean(parsed.analytics),
          functional: Boolean(parsed.functional),
          marketing: Boolean(parsed.marketing),
          updatedAt: parsed.updatedAt,
        });
        setHasSavedConsent(true);
      } else {
        setHasSavedConsent(false);
      }
    } catch {
      setHasSavedConsent(false);
    }

    const handleOpenEvent = () => setIsModalOpen(true);
    window.addEventListener(OPEN_MODAL_EVENT, handleOpenEvent);
    return () => window.removeEventListener(OPEN_MODAL_EVENT, handleOpenEvent);
  }, []);

  const persistPreferences = useCallback((next: CookiePreferences) => {
    const payload: CookiePreferences = {
      ...next,
      necessary: true,
      updatedAt: new Date().toISOString(),
    };

    setPreferences(payload);
    setHasSavedConsent(true);
    setIsModalOpen(false);

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignora restrições de armazenamento privado
    }

    writeConsentCookie(payload);

    // Notifica scripts opcionais (ex.: Analytics/Marketing) sobre atualização de consentimento
    window.dispatchEvent(
      new CustomEvent("clc:cookie-consent-updated", { detail: payload })
    );
  }, []);

  const acceptAll = useCallback(() => {
    persistPreferences({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
  }, [persistPreferences]);

  const rejectNonEssential = useCallback(() => {
    persistPreferences({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
  }, [persistPreferences]);

  const saveCustomPreferences = useCallback(
    (custom: Omit<CookiePreferences, "necessary" | "updatedAt">) => {
      persistPreferences({
        necessary: true,
        analytics: custom.analytics,
        functional: custom.functional,
        marketing: custom.marketing,
      });
    },
    [persistPreferences]
  );

  return {
    preferences,
    hasSavedConsent,
    isModalOpen,
    setIsModalOpen,
    acceptAll,
    rejectNonEssential,
    saveCustomPreferences,
  };
}