import './globals.css'
import './global-styles.scss'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import QueryProvider from '@/components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import TagManager from 'react-gtm-module';
// import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ileyah | Rent Now Pay Later | Pay Rent Instalmentally',
  description: 'Rent Loan | Pay monthly | Pay rent installmentally | Artisans',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8XC2913QCD');
          `,
          }}
        />
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-8XC2913QCD`} />
        <title>Ileyah | Rent Now Pay Later | Pay Rent Instalmentally</title>
        <meta name="description" content="Rent Loan | Pay monthly | Pay rent installmentally | Artisans" />
        <meta name="google-site-verification" content="XpmonODFr23ZEwrl50lvuT8h3tBUhheDChhFd23WOg4" />
        <link rel="icon" href="./fav.png" />
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
