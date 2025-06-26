import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'claude_ext',
  description: 'MCP server for extending Claude Code with session management commands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}