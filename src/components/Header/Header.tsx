import { Container, Nav, NavLink, Logo } from "./styles";
import { Link } from "react-router-dom";
import logo from '../../assets/Logo-A3Data.png'

function Header() {
  return (
    <Container>
        <Link to={"/"}>
            <Logo src={logo} alt="Foto A3DATA" />
        </Link>

        <Nav>
            <NavLink to={"/"}>Pagina Inicial</NavLink>
            <NavLink to={"/pedidos-medicos"}>Pedidos</NavLink>
        </Nav>
    </Container>
  )
}

export default Header