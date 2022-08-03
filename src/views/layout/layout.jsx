import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

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