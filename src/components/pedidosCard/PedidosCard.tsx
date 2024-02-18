import { PedidoParams } from "../../@types/pedidos";
import {
  Container,
  NomePaciente,
  Info,
  EditButton,
  DeleteButton,
  FlexRow,
  FlexBetween,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

type PedidoCard = {
  data: PedidoParams[];
  onDelete: (codigo: number) => Promise<void>;
  setData: (data: PedidoParams[]) => void;
};

function PedidosCard({ data, onDelete }: PedidoCard) {
  const navigate = useNavigate();
  const handleEdit = (codigo: number) => {
    navigate(`/pedidos-medicos/${codigo}`);
  };

  const handleDelete = async (codigo: number) => {
    await onDelete(codigo);
  };

  return (
    <>
      {data.map((pedido) => {
        const dataCirurgia = new Date(pedido.data_cirurgia);

        return (
          <Container key={pedido.codigo}>
            <Wrapper>
              <FlexBetween>
                <NomePaciente>{pedido.paciente}</NomePaciente>
                <Info>
                  <b>Data: </b>
                  {`${dataCirurgia.getDate()}/${dataCirurgia
                    .getMonth()
                    .toString()
                    .padStart(2, "0")}/${dataCirurgia.getFullYear()} `}
                </Info>
              </FlexBetween>
              <Info>
                <b>Procedimento: </b>
                {pedido.procedimento}
              </Info>
              <Info>
                <b>Médico: </b>
                {pedido.doutor}
              </Info>
              <Info>
                <b>Local: </b>
                {pedido.hospital} - sala {pedido.sala}
              </Info>
              <Info>
                <b>Observação: </b>
                {pedido.observacao}
              </Info>
            </Wrapper>
            <FlexRow>
              <EditButton onClick={() => handleEdit(pedido.codigo)}>
                Editar
              </EditButton>
              <DeleteButton
                onClick={() => {
                  handleDelete(pedido.codigo);
                  window.location.reload();
                }}
              >
                Deletar
              </DeleteButton>
            </FlexRow>
          </Container>
        );
      })}
    </>
  );
}

export default PedidosCard;
