import { Layout } from 'modules/base'
import { UserProvider } from 'common/contexts'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  // see: https://nextjs.org/docs/basic-features/layouts
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <UserProvider>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </UserProvider>
  )
}

export default MyApp
