import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

// Updated metadata for the CAPA infographic
export const metadata: Metadata = {
  title: "AI-Powered CAPA Transformation | From Reactive to Proactive",
  description:
    "Transforming Corrective and Preventive Action processes with Artificial Intelligence - Interactive infographic showing the journey from reactive problem-solving to proactive anomaly detection.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
