import { Header } from 'modules/base'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <div data-fullscreen-modal-root></div>
  </>
)

export default Layout
