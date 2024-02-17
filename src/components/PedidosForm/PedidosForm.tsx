import { Container } from "./styles";
import { Input } from "../Input/Input";

function PedidosForm() {
  return (
    <Container>
      <Input
        placeholder="Informe o nome do Paciente"
        type="text"
        label="Nome do Paciente"
        helpText={"Não foi possivel Registrar"}
      />
    </Container>
  );
}

export default PedidosForm;
