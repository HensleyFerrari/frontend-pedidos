import Header from "../../components/Header/Header";
import PedidosCard from "../../components/pedidosCard/PedidosCard";
import React, { useEffect, useState } from "react";
import { PedidoParams } from "../../@types/pedidos";
import { PedidoService } from "../../services/PedidoService";
import { Content, Main } from "./styles";
import { Container } from "../home/styles";

function PedidosMedicos({ children }: React.PropsWithChildren) {
  const [data, setData] = useState<PedidoParams[]>([]);

  useEffect(() => {
    findAllPedidos();
  }, []);

  const findAllPedidos = async () => {
    const pedidos = await PedidoService.findAllPedidos();
    // @ts-expect-error Para compor o Docker
    setData(pedidos);
  };

  const onDelete = async (codigo: number) => {
    const deletePedido = await PedidoService.removePedido(codigo);
    return deletePedido;
  };
  return (
    <Container>
      <Header />
      <Content>        
        <Main>
          {children}
          <PedidosCard data={data} onDelete={onDelete} setData={setData} />
        </Main>
      </Content>
    </Container>
  );
}

export default PedidosMedicos;
