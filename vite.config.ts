import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/react-learning/',
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "react-learning",
        short_name: "react-learning",
        description: "react-learning",
        scope: '/your-repo-name/',
        start_url: "/react-learning/",
        display:"standalone",
        orientation: "portrait",
        theme_color: '#3f51b2',
        background_color: "#efeff4",
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon-512x512-mask.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      }
    })
  ],
})
