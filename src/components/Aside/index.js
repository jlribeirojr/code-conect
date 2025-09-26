import Image from "next/image"
import logo from "./logo.png"
import Styles from './aside.module.css'
export const Aside = () =>{
    return(
        <aside className={Styles.aside}>
            {/* <img src="/logo.png" alt="logo da code conect"/> */}
            <Image src={logo} alt="logo da code conect"/>
            
        </aside>
    )
}
export default Aside
