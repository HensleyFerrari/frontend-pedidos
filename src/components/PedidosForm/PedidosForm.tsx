import { Container } from "./styles";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";

function PedidosForm() {
  return (
    <Container>
      <Input
        placeholder="Informe o nome do Paciente"
        type="text"
        label="Nome do Paciente"
        helpText={"Não foi possivel Registrar"}
      />
      <Input
        placeholder="Informe o nome do Paciente"
        type="text"
        label="Nome do Paciente"
        helpText={"Não foi possivel Registrar"}
      />
      <Input
        placeholder="Informe o nome do Paciente"
        type="text"
        label="Nome do Paciente"
        helpText={"Não foi possivel Registrar"}
      />
      <Input
        placeholder="Informe o nome do Paciente"
        type="text"
        label="Nome do Paciente"
        helpText={"Não foi possivel Registrar"}
      />
      <Input
        placeholder="Informe o nome do Paciente"
        type="text"
        label="Nome do Paciente"
        helpText={"Não foi possivel Registrar"}
      />
      <Input
        placeholder="Informe o nome do Paciente"
        type="text"
        label="Nome do Paciente"
        helpText={"Não foi possivel Registrar"}
      />
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
}

export default PedidosForm;
