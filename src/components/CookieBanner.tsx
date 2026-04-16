import { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem("cookie_consent"); } catch { return true; }
  });

  if (!visible) return null;

  const handleAccept = () => {
    setVisible(false);
    try { localStorage.setItem("cookie_consent", "accepted"); } catch {}
  };

  const handleRefuse = () => {
    setVisible(false);
    try { localStorage.setItem("cookie_consent", "refused"); } catch {}
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-center gap-4 text-sm font-body" style={{ backgroundColor: "#1A1A1A", color: "#D1D5DB" }}>
      <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
      <div className="flex gap-2">
        <button
          onClick={handleRefuse}
          className="font-semibold px-4 py-1.5 rounded text-sm transition-colors border"
          style={{ borderColor: "#6B7280", color: "#D1D5DB", backgroundColor: "transparent" }}
        >
          Refuser
        </button>
        <button
          onClick={handleAccept}
          className="font-semibold px-4 py-1.5 rounded text-sm transition-colors"
          style={{ backgroundColor: "#C4872C", color: "#FFFFFF" }}
        >
          Accepter
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
