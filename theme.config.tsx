import React from 'react'
import mdxComponents from './mdx-components'

const config = {
  logo: (
    <span
      style={{
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: '#6b21a8' // Mor renk
      }}
    >
      Aifano
    </span>
  ),
  project: {
    link: 'https://github.com/serenaytoptan/my-nextra-docs'
  },
  docsRepositoryBase: 'https://github.com/serenaytoptan/my-nextra-docs/blob/main',
  footer: {
    text: '© 2025 Serenay Toptan'
  },
  primaryHue: 270, // Mor renk tonu (270 = mor)
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Aifano Docs'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  banner: {
    key: 'aifano-update',
    text: (
      <a
        href="https://v0-open-in-v0-chi-ten.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#6b21a8', fontWeight: 'bold' }}
      >
        🎉 Yeni sürüm yayında! Tıkla ve incele!
      </a>
    )
  },
  // Burada mdxComponents'i ekliyoruz
  components: mdxComponents
}

export default config
