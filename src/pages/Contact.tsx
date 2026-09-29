export default function ContactPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #1e1b4b 0%, #0b3b5f 50%, #052e2b 100%)",
        minHeight: "100vh",
        padding: "80px 20px",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: 40,
          marginBottom: 10,
          color: "#e2e8f0",
          fontWeight: 900,
          letterSpacing: "-1px",
        }}
      >
        Contact NOAH
      </h1>

      <p
        style={{
          color: "#a5b4fc",
          fontWeight: 700,
          marginBottom: 40,
          fontSize: 16,
        }}
      >
        Connect with the language + accessibility platform
      </p>

      {/* CARD */}
      <div
        style={{
          maxWidth: 460,
          margin: "0 auto",
          padding: 40,
          borderRadius: 18,
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          border: "1px solid rgba(148,163,184,0.25)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {/* BUSINESS */}
          <a
            href="https://www.sonicresume.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: 14,
              borderRadius: 12,
              border: "1px solid rgba(168,85,247,0.4)",
              background:
                "linear-gradient(90deg, #8b5cf6, #3b82f6)",
              color: "#0b0f19",
              fontWeight: "900",
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 8px 20px rgba(59,130,246,0.25)",
              transition: "0.2s",
            }}
          >
            💼 Contact Support / Business
          </a>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/profile.php?id=61585916721060"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: 14,
              borderRadius: 12,
              border: "1px solid rgba(34,197,94,0.4)",
              background:
                "linear-gradient(90deg, #22c55e, #3b82f6)",
              color: "#0b0f19",
              fontWeight: "900",
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 8px 20px rgba(34,197,94,0.25)",
              transition: "0.2s",
            }}
          >
            🌍 Facebook Community
          </a>
        </div>
      </div>
    </div>
  );
}