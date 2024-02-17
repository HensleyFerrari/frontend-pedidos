import pedidoTheme, * as Tme from "./pedidoTheme";

const getTheme = ({ theme } : Tme.PedidoThemeProps) => {
    return  theme && theme.colors ? theme: pedidoTheme;
}

export const getSpace = (space: Tme.SpacesScheme, props: Tme.PedidoThemeProps) => {
    return getTheme(props).space[space];
}

export const getBorderRadius = (borderRadius: Tme.BorderRadiusScheme, props: Tme.PedidoThemeProps) => {
    return getTheme(props).borderRadius[borderRadius];
}

export const getColor = (color: Tme.ColorsScheme, props: Tme.PedidoThemeProps) => {
    return getTheme(props).colors[color];
}

export const getBreakPoint = (breakpoint: Tme.BreakPoinsScheme, props: Tme.PedidoThemeProps) => {
    return getTheme(props).breakpoint[breakpoint];
}