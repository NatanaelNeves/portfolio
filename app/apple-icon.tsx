import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c0c0c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="130"
          height="130"
        >
          <rect x="4" y="4" width="5" height="24" fill="#c8ff00" />
          <rect x="23" y="4" width="5" height="24" fill="#c8ff00" />
          <polygon points="9,4 14,4 23,28 18,28" fill="#c8ff00" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
