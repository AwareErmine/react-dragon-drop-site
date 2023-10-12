import "../styles/globals.css"

export const metadata = {
  title: 'Dragon Drag and Drop',
  description: 'React drag and drop library with a dragon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-amber-100 bg-slate-600">{children}</body>
    </html>
  )
}
