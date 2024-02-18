import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home'
import PedidosMedicos from "../pages/pedidosMedicos";
import EditPedidoMedico from "../pages/editPedidoMedico/EditPedidoMedico";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pedidos-medicos" element={<PedidosMedicos />} />
                <Route path="/pedidos-medicos/:codigo" element={<EditPedidoMedico />} />
            </Routes>
        </BrowserRouter>
    )
}