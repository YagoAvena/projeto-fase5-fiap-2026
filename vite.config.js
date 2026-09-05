import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        'fale-conosco': 'fale-conosco.html',
        marketplace: 'marketplace.html',
        'quem-somos': 'quem-somos.html',
        rastreamento: 'rastreamento.html'
      }
    }
  }
})