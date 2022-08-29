import { Header } from 'modules/base'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
