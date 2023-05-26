import Top_Nav from "@/components/Global_Components/Top_Nav";
import Footer from "@/components/Global_Components/Footer";
 
const Layout = ({ children, topNav, footer }) => {

  return (
  <>
    <Top_Nav blok={topNav} />
      {children}
    <Footer blok={footer} />
  </>
  )
};
 
export default Layout;