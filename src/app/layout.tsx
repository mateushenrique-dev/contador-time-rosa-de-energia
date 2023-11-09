import '../global.css';

export const metadata = {
  title: 'Contador de dias com energia',
  description: 'Contador criado para marcar quantos dias estamos o time todo com energia!'
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
