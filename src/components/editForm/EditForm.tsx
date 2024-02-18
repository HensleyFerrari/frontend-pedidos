import { Container } from "../PedidosForm/styles";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { usePedidoForm } from "../../hooks/usePedidoForm";
import { TextArea } from "../textArea/TextArea";
import { useParams } from "react-router-dom";
import { PedidoService } from "../../services/PedidoService";
import { PedidoParams } from './../../@types/pedidos.d';

function EditForm() {
  const { codigo } = useParams();
  const [data, setData] = useState<PedidoParams[]>([])

  useEffect(() => {
    findOnePedido(codigo)
  }, [codigo]);

  const findOnePedido = async (codigo: number) => {
    const pedidos = await PedidoService.findOnePedido(codigo);
    setData(pedidos);
  };
  const { errors, handleUpdate, setSelectedDate, selectedDate, register } =
    usePedidoForm();

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };
  return (
    <Container onSubmit={handleUpdate}>
      <Input
        {...register("paciente")}
        placeholder="Informe o nome do Paciente"
        type="text"
        value={data?.paciente || ""}
        label="Nome do Paciente"
        helpText={errors.paciente?.message}
      />
      <Input
        {...register("procedimento")}
        placeholder="Informe o procedimento cirúrgico"
        type="text"
        value={data?.procedimento || ""}
        label="Procedimento Cirúrgico"
        helpText={errors.procedimento?.message}
      />
      <Input
        {...register("sala")}
        placeholder="Informe a sala para o procedimento cirúrgico"
        type="text"
        label="Sala da Cirurgia"
        value={data?.sala || ""}
        helpText={errors.sala?.message}
      />
      <Input
        {...register("doutor")}
        placeholder="Informe o médico responsável pelo procedimento"
        type="text"
        value={data?.doutor || ""}
        label="Médico Responsável"
        helpText={errors.doutor?.message}
      />
      <Input
        {...register("data_cirurgia")}
        type="date"
        label="Data do Procedimento Cirúrgico"
        helpText={errors.data_cirurgia?.message}
        value={data?.data_cirurgia || selectedDate}
        onChange={handleDataChange}
      />
      <Input
        {...register("hospital")}
        placeholder="Informe o hospital do procedimento cirúrgico"
        type="text"
        value={data?.hospital || ""}
        label="Hospital para o Procedimento"
        helpText={errors.hospital?.message}
      />
      <TextArea
        placeholder="Observações médicas"
        {...register("observacao")}
        label="Observações Médicas"
        value={data?.observacao || ""}
        helpText={errors.observacao?.message}
      />
      <Button type="submit">Editar</Button>
    </Container>
  );
}

export default EditForm;
