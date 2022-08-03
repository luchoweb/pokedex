import Header from "./common/header";
import Footer from "./common/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout">
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout;