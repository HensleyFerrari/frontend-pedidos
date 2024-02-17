import { PedidoThemeProps } from "./pedidoTheme";
import { getSpace, getBorderRadius, getColor, getBreakPoint } from "./getters";

export type Selectors<Tme> = (props: PedidoThemeProps) => Tme;

export type OmitProps<Args extends any[]> = 
Args[3] extends PedidoThemeProps
? [Args[0], Args[1], Args[2]] 
: Args[2] extends PedidoThemeProps
? [Args[0], Args[1]] 
: [Args[0]];

const createSelector = <Tme extends (...args: any) => any>(getter: Tme) =>{
    function select(
        ...args: OmitProps<Parameters<Tme>>
    ): Selectors<ReturnType<Tme>>;

    function select(...args: Parameters<Tme>) : ReturnType<Tme>;

    function select(...args: any) {
        if(args.length === getter.length) {
            return getter(...args)
        }

        return (props: PedidoThemeProps) => getter(...args, props)
    }

    return select
}

export const space = createSelector(getSpace);
export const borderRadius = createSelector(getBorderRadius);
export const color = createSelector(getColor);
export const breakpoint = createSelector(getBreakPoint);