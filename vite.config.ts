import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const viteConfig =  defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from outside the container
    strictPort:true,
    port: 8080, // Specify the port
    watch: {
      usePolling: true,
    },
  },
})


export default viteConfig