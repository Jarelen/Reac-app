import {Link} from "react-router-dom"
import style from "./navbar-style.module.css"
export default function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link className={style["Link-styles"]} to="/">Home</Link>
                </li>
                <li>
                    <Link className={style["Link-styles"]} to="/owner">Owner</Link>
                </li>
            </ul>
        </nav>
    )
}