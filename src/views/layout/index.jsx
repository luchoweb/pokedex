import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

//import "./styles.scss";

const Layout = ({ classname = 'light', children }) => {
  return (
    <>
      <Header />
      <main className={`layout ${classname}`}>
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout;