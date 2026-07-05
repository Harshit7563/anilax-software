import { Capacitor } from "@capacitor/core";
import { App as CapApp } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

export async function initNativeShell() {
  if (!Capacitor.isNativePlatform()) return;

  document.documentElement.classList.add("app--admin-native");

  try {
    CapApp.addListener("backButton", () => {
      if (window.history.length > 1) window.history.back();
      else CapApp.minimizeApp();
    });
  } catch {
    /* ignore */
  }

  try {
    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: "#0a0a0f" });
  } catch {
    /* ignore */
  }

  try {
    await SplashScreen.hide();
  } catch {
    /* ignore */
  }
}
