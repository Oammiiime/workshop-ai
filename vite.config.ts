import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const tailwind = (await import('@tailwindcss/vite')).default;
  const { default: react } = await import('@vitejs/plugin-react')

  return {
    plugins: [
      react(),
      tailwind(),
    ],
  }
})
