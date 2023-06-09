import './globals.css'
import './global-styles.scss'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import QueryProvider from '@/components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ileyah',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ileyah</title>
        <meta name="description" content="Statisense" />
        <link rel="icon" href="./favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </head>

      <body>
        <QueryProvider>
          <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark">
          </ToastContainer>
            {children}
        </QueryProvider>
      </body>
      <Script src='https://eligibility.clan.africa/assets/scripts/client.js' />
      <Script src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js" />
    </html>
  )
}
