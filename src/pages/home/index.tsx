import Header from "../../components/Header/Header";
import { Container } from "./styles";
import PedidosForm from "../../components/PedidosForm/PedidosForm";

function Home() {
  return (
    <Container>
      <Header />
      <PedidosForm />
    </Container>
  );
}

export default Home;
