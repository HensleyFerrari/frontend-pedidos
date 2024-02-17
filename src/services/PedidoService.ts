import { PedidoParams } from "../@types/pedidos";
import { httpCliente } from "./httpClient";
import { redirect } from "react-router-dom";

type PedidoReponse = Array<PedidoParams>

export class PedidoService{
    static async findAllPedidos() {
        try {
            const {data} = await httpCliente.get<PedidoReponse>(
                `/pedidos`
            )
            return data
        } catch(erro) {
            alert('Não foi possivel buscar os pedidos')
        }
    }

    static async createPedido(data: PedidoParams) {
        try {
            await httpCliente.post('/pedido', {
                ...data,
                data_cirurgia: new Date(data.data_cirurgia).toISOString(),
            })
        } catch (error) {
            alert('Não foi possivel criar o pedido');
        }
    }

    static async updatePedido({ codigo,...params} : PedidoParams) {
        const {data} = await  httpCliente.put(`/pedido/${codigo}`, params);
        return data;
    }

    static async removePedido({codigo} : PedidoParams) {
        await httpCliente.delete(`/pedido/${codigo}`)
    
        return redirect('/pedidos-medicos')
    }
}