import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from "../components"
import { AppContextProvider } from "../contexts/ AppContextProvider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}
