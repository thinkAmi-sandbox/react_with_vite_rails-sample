import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react(),
  ],
  resolve: {
    alias: {'@': path.resolve(__dirname, 'frontend', 'src')}
  },
  // Vite.js用環境変数ファイル (.env.*)はフロントエンドのディレクトリの中に入れておく
  envDir: path.resolve(__dirname, 'frontend', 'src')
})
