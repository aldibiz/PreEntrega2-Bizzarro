import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"

function NavBar() {
    return (
    <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h1>Tiendita Gym</h1>
        <section>
            <Link to="/category/elementos"> Elementos </Link>
            <Link to="/category/accesorios"> Accesorios </Link>
            <Link to="/category/bolsos"> Bolsos </Link>
        </section>
        <CartWidget />
    </nav>
    );
}

export default NavBar