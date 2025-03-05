import { defineConfig, UserConfig, ConfigEnv,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import tailwind, { Config as TailwindConfig } from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'

// ESM compatible __dirname

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [vue()],
        envDir: '../',
        server: {
            proxy: {
                '/workflows': {
                    target: env.VITE_DEV_API_BASE_URL, // Uses the backend URL from .env
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        resolve: {
            alias: {
                '~/': path.resolve(__dirname, 'src'),
                '@/': path.resolve(__dirname, 'src/components'),
                '@api': path.resolve(__dirname, 'src/apiClient'),
            },
        },
        define: {
            'process.env': process.env,
        },
        css: {
            postcss: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                plugins: [tailwind(tailwindConfig as TailwindConfig)],
            },
            modules: {
                scopeBehaviour: 'local',
                // globalModulePaths: ['./styles/antd.less']
            },
        },
    }
})
