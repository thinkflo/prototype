import Top_Nav from "@/components/Global_Components/Top_Nav";
import Footer from "@/components/Global_Components/Footer";
 
const Layout = ({ children, topNav, footer }) => {

  return (
  <>
    <a className="top-0 left-1/2 -translate-x-1/2 bg-indigo-500 text-white p-3 transform -translate-y-full z-50 absolute focus:translate-y-0" href="#main">Skip to Main Content</a>
    <Top_Nav blok={topNav} />
      {children}
    <Footer blok={footer} />
  </>
  )
};
 
export default Layout;