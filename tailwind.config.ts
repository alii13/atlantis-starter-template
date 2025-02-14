import colors from 'tailwindcss/colors'
import typographyPlugin from '@tailwindcss/typography'
import type { Config as TailwindConfig } from 'tailwindcss'

export default  {
    jit: true,
    important: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Avenir'],
                serif: ['Avenir'],
                mono: ['Menlo'],
            },
            colors: {
                primary: {
                    DEFAULT: '#3C71DF',
                    focus: '#F4F6FD',
                    light: '#F4F6FD',
                    menu: '#f0f7ff',
                    selected: {
                        focus: '#dbeafe',
                    },
                },
                body: '#fff',
                button: {
                    DEFAULT: '#6596eb',
                },
                gray: {
                    DEFAULT: '#34394B',
                    light: '#F3F3F3',
                    500: '#6A7692',
                    400: '#bfbfbf',
                    300: '#E0E4EB',
                    200: '#EFF1F5',
                    100: '#FAFAFA',
                },
                neutral: {
                    DEFAULT: '#f9fafb',
                    100: '#f9fafb',
                },
                pink: {
                    light: '#FEF5F8',
                    default: '#F34D77',
                },
                success: {
                    DEFAULT: '#00B28A',
                    muted: '#F0FFFC',
                },
                error: {
                    DEFAULT: '#CC4747',
                    muted: '#FFF0F0',
                },
                alert: {
                    DEFAULT: '#F7B43D',
                    muted: '#FEF7E4',
                },
                warning: {
                    DEFAULT: '#ff751f',
                    light: '#FFF8E5',
                },
                blueGray: {
                    light: '#e8e8f8',
                    DEFAULT: '#64748B',
                },
                secondary: {
                    DEFAULT: '#AC52D7',
                    light: '#F9F4FD',
                },
                purple: {
                    DEFAULT: '#6D6DDA',
                },
                orange: {
                    DEFAULT: '#E96625',
                    100: '#FFF6F0',
                    200: '#F29E53',
                    dark: '#FB923C',
                    light: '#FDDFBD',
                    verylight: '#FFF2E4',
                },
                new: {
                    gray: {
                        DEFAULT: '#34394b', // Equals to 800
                        900: '#1b1f29',
                        800: '#34394b',
                        700: '#525c73',
                        600: '#6a7692',
                        500: '#6F7590',
                        300: '#e0e4eb',
                        200: '#eff1f5',
                        100: '#f6f7f9',
                    },
                    red: {
                        700: '#820000',
                        600: '#a50505',
                        500: '#bf1b1b',
                        400: '#cc4747',
                        300: '#e48a8a',
                        200: '#f1b6b6',
                        100: '#fff0f0',
                    },

                    green: {
                        800: '#197B8E',
                        700: '#047960',
                        600: '#069a7a',
                        500: '#00b28a',
                        400: '#47ccaf',
                        300: '#8ae4d1',
                        200: '#b6f1e4',
                        100: '#f0fffc',
                    },

                    blue: {
                        800: '#6671D4',
                        700: '#00379a',
                        600: '#0f46b8',
                        500: '#225bd2',
                        400: '#3c71df',
                        300: '#85a4e6',
                        200: '#c0d2fa',
                        100: '#f4f6fd',
                        gray: '#C0D2FA',
                        selected: '#F0F7FF',
                    },

                    yellow: {
                        700: '#9d6e05',
                        600: '#d9950d',
                        500: '#f7b43d',
                        400: '#ffca65',
                        300: '#fbda8a',
                        200: '#fef3d7',
                        100: '#fef7e4',
                    },
                    orange: {
                        100: '#FDECE1',
                        400: '#F48E44',
                    },
                    white: '#fff',
                },
                green: colors.emerald,
                yellow: colors.amber,
                semitransparent: {
                    white: {
                        700: 'rgba(255, 255, 255, 0.7)',
                    },
                },
            },
            outline: {
                primary: ['1px solid #5277D7', '0px'],
            },
            boxShadow: {
                rc: '1px 2px 3px 0px #0000000D',
                btn: '0px 1px 0px 0px #0000000D',
                card: '0px 1px 4px 0px #0000001F',
                lincontrols: '0px 6px 12px 0px rgba(12, 13, 38, 0.06)',
                btnBottom: '0px 1px 0px rgba(0, 0, 0, 0.05)',
                dropdown: '0px 9px 32px 0px rgba(0, 0, 0, 0.12)',
                input: '0px 0px 1px #0000000f, 0px 1px 2px 0px #0000000f, 0px 1px 4px 0px #00000012',
                inputActive:
                    '0px 0px 0px 1px #225bd2, 0px 1px 2px 0px #225bd2, 0px 1px 4px 0px #00000012',
                'dropdown-sm': '0px 1px 2px 0px #0000000d',
                collapse: '0px 8px 24px rgba(25, 32, 56, 0.04)',
            },
            minWidth: {
                4: '1rem',
            },
            width: {
                76: '19rem',
            },
            fontWeight: {
                550: '550',
            },
            animation: {
                fadeOut: 'fadeOut 1.5s cubic-bezier(.73,-0.01,1,0) forwards',
            },
            keyframes: {
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { transform: 'scale3d(0, 0, 0)', opacity: '0' },
                },
            },
        },
    },
    safelist: [
        {
            pattern: /col-span-.+/,
        },
        {
            pattern: /col-start-.+/,
        },
        {
            pattern: /col-end-.+/,
        },
        {
            pattern: /row-span-.+/,
        },
        {
            pattern: /grid-cols-.+/,
        },
        'shadow-rc',
        'col-auto',
        'row-auto',
    ],
    plugins: [typographyPlugin],
} satisfies TailwindConfig
