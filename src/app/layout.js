import './globals.css'
import './global-styles.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <script src="https://eligibility.clan.africa/assets/scripts/client.js"></script>
      <body className={inter.className}>{children}</body>
      <script src="https://eligibility.clan.africa/assets/scripts/client.js"></script>
      <link rel="icon" href="/favicon-16x16.png" />
    </html>
  )
}
