import { Container } from "./styles";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";
import { ChangeEvent } from "react";
import { usePedidoForm } from "../../hooks/usePedidoForm";

function PedidosForm() {
  const { errors, handleSubmit, setSelectedDate, selectedDate, register } =
    usePedidoForm();

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Input
        {...register("paciente")}
        placeholder="Informe o nome do Paciente"
        type="text"
        label="Nome do Paciente"
        helpText={errors.paciente?.message}
      />
      <Input
        {...register("procedimento")}
        placeholder="Informe o procedimento cirúrgico"
        type="text"
        label="Procedimento Cirúrgico"
        helpText={errors.procedimento?.message}
      />
      <Input
        {...register("sala")}
        placeholder="Informe a sala para o procedimento cirúrgico"
        type="text"
        label="Sala da Cirurgia"
        helpText={errors.sala?.message}
      />
      <Input
        {...register("doutor")}
        placeholder="Informe o médico responsável pelo procedimento"
        type="text"
        label="Médico Responsável"
        helpText={errors.doutor?.message}
      />
      <Input
        {...register("data_cirurgia")}
        type="date"
        label="Data do Procedimento Cirúrgico"
        helpText={errors.data_cirurgia?.message}
        value={selectedDate}
        onChange={handleDataChange}
      />
      <Input
        {...register("hospital")}
        placeholder="Informe o hospital do procedimento cirúrgico"
        type="text"
        label="Hospital para o Procedimento"
        helpText={errors.hospital?.message}
      />
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
}

export default PedidosForm;
