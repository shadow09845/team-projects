import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../assets/logo (1).png"
import "../components/Header.css"
export default function Header() {
    
  return (
    <>
     <section className='main_page'>
        <header>
            <nav>
                <img src={logo} alt="logo" className='logo_img' style={{display:"block"}}/>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Review</a></li>
                    <li><a href="">Contact</a></li>
                    <li><CiSearch size={30} color="white" style={{border:"1px solid white", borderRadius:"50%",}}/> </li>
                    <li><CiShoppingCart size={30} color="white" style={{border:"1px solid white", borderRadius:"50%",}}/> </li>

                </ul>
            </nav>
        </header>
        <div className="header_title">
            <h1 >Keep your dreams aroused with a cup of coffee.</h1>
            <p>The coffee ideas shared by these generators are not cool at all, as they are not a human being.</p>
            <button>Buy Now</button>
        </div>
     </section>
    </>
  )
}
