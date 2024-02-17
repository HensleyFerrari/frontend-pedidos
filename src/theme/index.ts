import pedidoTheme, {PedidoTheme} from "./pedidoTheme";
import * as themeSelector from './selectors'

const themes = {pedidoTheme};
type Themes = keyof typeof themes;

export {pedidoTheme, themeSelector, themes};
export type {PedidoTheme, Themes}