import "styled-components"
import { PedidoTheme } from "../theme"

declare module "styled-components" {
    export interface DefaultTheme extends PedidoTheme {}
}