import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
})

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
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
