import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a plain HTML/CSS/JS bundle into `out/` — no Node server at runtime.
  // Consequence: server actions, route handlers, ISR and next/image
  // optimization are unavailable. Nothing on this site needs them.
  output: "export",

  // next/image cannot optimize at request time without a server.
  images: { unoptimized: true },
};

export default nextConfig;
