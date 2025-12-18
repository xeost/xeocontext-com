import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <span className="font-bold text-xl">XeoContext</span>,
    project: {
        link: 'https://github.com/xeost/xeocontext',
    },
    docsRepositoryBase: 'https://github.com/xeost/xeocontext-com/blob/main',
    footer: {
        text: (
            <span>
                {new Date().getFullYear()} ©{' '}
                <a href="https://xeocontext.com" target="_blank" rel="noopener noreferrer">
                    XeoContext
                </a>
                .
            </span>
        ),
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – XeoContext',
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="XeoContext" />
            <meta property="og:description" content="The Source of Truth for your Architecture" />
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-title" content="XeoContext" />
            <link rel="manifest" href="/site.webmanifest" />
        </>
    ),
    darkMode: true,
    nextThemes: {
        defaultTheme: 'system',
    },
    primaryHue: 250, // Purple-ish
    primarySaturation: 80,
}

export default config
