import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'WillowUIKit',
      formats: ['es', 'umd'],
      fileName: (format) => `ui-kit.${format}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
        '@mui/material/styles',
        '@mui/system'
      ],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
          '@mui/material': 'MaterialUI',
          '@mui/material/styles': 'MaterialUIStyles',
          '@mui/system': 'MaterialUISystem'
        }
      }
    }
  }
}) 