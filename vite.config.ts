// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Build target switching:
// - Default (Lovable preview/publish) → Cloudflare Workers via the wrapper's bundled plugin.
// - When NETLIFY=true (set by Netlify CI or `npm run build:netlify`) → swap Cloudflare for
//   Netlify's TanStack Start plugin so the build outputs Netlify Functions + static assets.
const isNetlify = process.env.NETLIFY === "true" || process.env.BUILD_TARGET === "netlify";

export default defineConfig({
  tanstackStart: {
    // Keep our SSR error wrapper as the server entry on Cloudflare builds only.
    // Netlify plugin manages its own server entry.
    ...(isNetlify ? {} : { server: { entry: "server" } }),
  },
  // Disable Cloudflare plugin when building for Netlify.
  cloudflare: isNetlify ? false : undefined,
  vite: isNetlify
    ? {
        plugins: [netlify()],
      }
    : undefined,
});
