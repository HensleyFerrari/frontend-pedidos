import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PedidoService } from "../services/PedidoService";

const schema = z.object({
    sala: z.string().nonempty("Sala cirúrgica é obrigatória."),
    procedimento: z.string().nonempty("Procedimento cirúrgico é obrigatório."),
    doutor: z.string().nonempty("Doutor responsável é obrigatório."),
    paciente: z.string().nonempty("Nome do paciente é obrigatório."),
    hospital: z.string().nonempty("Nome do hospital é obrigatório."),
    data_cirurgia: z
    .string({
        errorMap: () => {
            return {
                message: "Data de agendamento é obrigatório."
            }
        }
    })
    .nonempty("Data de agendamento é obrigatório."),
    observacao: z.string().nonempty("Observação é obrigatório.")
})

type FormData = z.infer<typeof schema>;

export function usePedidoForm() {
    const {
        handleSubmit: hookFormHandleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(schema)
    })

    const [selectedDate, setSelectedDate] = useState("")

    const handleSubmit = hookFormHandleSubmit(async (data) => {
        // @ts-expect-error Para compor o Docker
        await PedidoService.createPedido(data);
    })

    const handleUpdate = hookFormHandleSubmit(async (data) => {
        // @ts-expect-error Para compor o Docker
        await PedidoService.updatePedido(data);
    })

    return {
        handleSubmit,
        register,
        errors,
        selectedDate,
        setSelectedDate,
        handleUpdate
    }
}