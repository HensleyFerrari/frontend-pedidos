import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home'
import PedidosMedicos from "../pages/pedidosMedicos";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pedidos-medicos" element={<PedidosMedicos />} />
            </Routes>
        </BrowserRouter>
    )
}