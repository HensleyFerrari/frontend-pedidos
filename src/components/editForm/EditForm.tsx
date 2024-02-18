import { Container } from "../PedidosForm/styles";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { usePedidoForm } from "../../hooks/usePedidoForm";
import { TextArea } from "../textArea/TextArea";
import { useParams } from "react-router-dom";
import { PedidoService } from "../../services/PedidoService";
import { PedidoParams } from './../../@types/pedidos.d';
import Select from "../Select/Select";
import { Hospitals, Procedimentos, Salas } from "../PedidosForm/data/options";

function EditForm() {
  const { codigo } = useParams();
  const [data, setData] = useState<PedidoParams>()

  useEffect(() => {
    // @ts-expect-error Para compor o Docker
    findOnePedido(codigo)
  }, [codigo]);

  const findOnePedido = async (codigo: number) => {
    const pedidos = await PedidoService.findOnePedido(codigo);
    // @ts-expect-error Para compor o Docker
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
     <Select 
        {...register("procedimento")}
        placeholder="Selecione o procedimento cirúrgico"
        label="Procedimento Cirúrgico"
        helpText={errors.hospital?.message}
        options={Procedimentos || []}
        value={data?.procedimento || ""}
      />
      <Select 
        {...register("sala")}
        placeholder="Selecione a sala para o procedimento cirúrgico"
        label="Sala da cirurgia"
        helpText={errors.hospital?.message}
        options={Salas || []}
        value={data?.sala || ""}
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
       <Select 
        {...register("hospital")}
        placeholder="Selecione o Hospital"
        label="Hospital para o Procedimento"
        helpText={errors.hospital?.message}
        options={Hospitals || []}
        value={data?.hospital || ""}
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
