import Navbar from "./navbar"
import ITServices from "./compnenet/ITservice"
import Products from "./compnenet/prodct"
import Testimonials from "./compnenet/testmon"
import Footer from "./compnenet/Footer"
import ShopPage from "./compnenet/shop"
import ShopPageh from "./compnenet/shoppageh"


export default function Home(){
    return (<>
         <Navbar />
   <ITServices />
   <ShopPageh />
   <Testimonials />

   
        </>)
}