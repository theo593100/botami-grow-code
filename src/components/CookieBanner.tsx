import { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem("cookie_dismissed"); } catch { return true; }
  });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-center gap-4 text-sm font-body" style={{ backgroundColor: "#1A1A1A", color: "#D1D5DB" }}>
      <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
      <button
        onClick={() => { setVisible(false); try { localStorage.setItem("cookie_dismissed", "1"); } catch {} }}
        className="font-semibold px-4 py-1.5 rounded text-sm transition-colors"
        style={{ backgroundColor: "#C4872C", color: "#FFFFFF" }}
      >
        Compris
      </button>
    </div>
  );
};

export default CookieBanner;
