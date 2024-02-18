import { Container } from "./styles";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";
import { ChangeEvent } from "react";
import { usePedidoForm } from "../../hooks/usePedidoForm";
import { TextArea } from "../textArea/TextArea";
import Select from "../Select/Select";
import { Hospitals, Procedimentos, Salas } from "./data/options";

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
      <Select 
        {...register("procedimento")}
        placeholder="Selecione o procedimento cirúrgico"
        label="Procedimento Cirúrgico"
        helpText={errors.hospital?.message}
        options={Procedimentos || []}
      />
      <Select 
        {...register("sala")}
        placeholder="Selecione a sala para o procedimento cirúrgico"
        label="Sala da cirurgia"
        helpText={errors.hospital?.message}
        options={Salas || []}
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
      <Select 
        {...register("hospital")}
        placeholder="Selecione o Hospital"
        label="Hospital para o Procedimento"
        helpText={errors.hospital?.message}
        options={Hospitals || []}
      />
      <TextArea 
        placeholder="Observações médicas"
        {...register("observacao")}
        label="Observações Médicas"
        helpText={errors.observacao?.message}
      />
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
}

export default PedidosForm;
