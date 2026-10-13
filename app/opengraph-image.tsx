import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #15348A 0%, #0B1220 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#F0A830",
            }}
          />
          <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: 1 }}>
            {siteConfig.name.toUpperCase()}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>
          Nutrition and education, together, for every child
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 24, color: "#C7D2E8" }}>
          {`${siteConfig.tagline} · NUTRI-ED Program`}
        </div>
      </div>
    ),
    { ...size }
  );
}
