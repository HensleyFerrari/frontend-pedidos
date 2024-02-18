import Header from "../../components/Header/Header";
import PedidosCard from "../../components/pedidosCard/PedidosCard";
import React, { useEffect, useState } from "react";
import { PedidoParams } from "../../@types/pedidos";
import { PedidoService } from "../../services/PedidoService";
import { Container, Main } from "./styles";

function PedidosMedicos({ children }: React.PropsWithChildren) {
  const [data, setData] = useState<PedidoParams[]>([]);

  useEffect(() => {
    findAllPedidos();
  }, []);

  const findAllPedidos = async () => {
    const pedidos = await PedidoService.findAllPedidos();
    setData(pedidos);
  };

  const onDelete = async (codigo: number) => {
    const deletePedido = await PedidoService.removePedido(codigo);
    return deletePedido;
  };
  return (
    <Container>
      <Header />
      <Main>
        {children}
        <PedidosCard
          data={data}
          onDelete={onDelete}
          setData={setData}
        />
      </Main>
    </Container>
  );
}

export default PedidosMedicos;
