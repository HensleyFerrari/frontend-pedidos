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

function PedidosCard() {
  return (
    <>
      <Container>
        <Wrapper>
          <FlexBetween>
            <NomePaciente>
              <b>Nome: </b>Carlos Silva
            </NomePaciente>
            <Info>
              <b>Data do Procedimento: </b>19/02/2024
            </Info>
          </FlexBetween>
          <FlexRow>
            <Info>
              <b>Procedimento: </b>Cirurgia ocular
            </Info>
            <Info>
              <b>Médico Responsável: </b>Doutor Carlos Cruz
            </Info>
          </FlexRow>
          <FlexRow>
            <Info>
              <b>Hospital: </b>Hospital das Cruzes
            </Info>
            <Info>
              <b>Sala da Cirurgia: </b>305
            </Info>
          </FlexRow>
          <Info>
            <b>Observação: </b> O paciente está apto para a cirurgia
          </Info>
          <FlexRow>
            <EditButton>Editar</EditButton>
            <DeleteButton>Deletar</DeleteButton>
          </FlexRow>
        </Wrapper>
      </Container>
    </>
  );
}

export default PedidosCard;
