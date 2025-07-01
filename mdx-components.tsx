import React from 'react'
import type { MDXComponents } from 'mdx/types'

// Basit Aifano logo örneği — mor renklerde
export const AifanoLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="120" height="40" rx="8" fill="#6a0dad" /> {/* Mor arka plan */}
    <text
      x="60"
      y="25"
      fill="white"
      fontSize="20"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
      textAnchor="middle"
    >
      Aifano
    </text>
  </svg>
)

const mdxComponents: MDXComponents = {
  h1: (props) => <h1 style={{ color: '#6a0dad' }} {...props} />,           // Mor tonunda başlık
  h2: (props) => <h2 style={{ color: '#800080' }} {...props} />,           // Koyu mor alt başlık
  p: (props) => (
    <p
      style={{
        fontSize: '18px',
        lineHeight: 1.6,
        color: '#4b0082', // Indigo-mor ton
      }}
      {...props}
    />
  ),
  AifanoLogo,  // MDX içinde <AifanoLogo /> olarak kullanılabilir
}

export default mdxComponents
