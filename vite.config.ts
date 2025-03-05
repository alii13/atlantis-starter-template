import { defineConfig, UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import tailwind, { Config as TailwindConfig } from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'

// ESM compatible __dirname

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// https://vite.dev/config/
export default defineConfig(({ mode: _mode }: ConfigEnv): UserConfig => {
    return {
        plugins: [vue()],
        envDir: '../',
        server: {
            proxy: {
                '/': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        resolve: {
            alias: {
                '~/': path.resolve(__dirname, 'src'),
                '@/': path.resolve(__dirname, 'src/components'),
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
