export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e5",
        marginTop: "80px",
        padding: "30px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* LEFT — LOGO */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#111111",
          }}
        >
          <img
            src="/logo.png"
            alt="NOAH AI"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
            }}
          />

          <span style={{ fontWeight: 700 }}>
            <span style={{ color: "#35d07f" }}>NOAH</span>{" "}
            <span style={{ color: "#222222" }}>
              AI Visual Scanner
            </span>
          </span>
        </a>

        {/* CENTER — LINKS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <a href="/privacy" style={link}>
            Privacy
          </a>

          <a href="/terms" style={link}>
            Terms
          </a>
        </div>

        {/* RIGHT — COPYRIGHT */}
        <div
          style={{
            fontSize: "13px",
            color: "#666666",
          }}
        >
          © {new Date().getFullYear()} SonicResume Group
        </div>
      </div>
    </footer>
  );
}

const link: React.CSSProperties = {
  textDecoration: "none",
  color: "#555555",
  fontSize: "14px",
};