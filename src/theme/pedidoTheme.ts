const lightScheme = {
    "gray-50": "#f9fafb",
    "gray-100": "#f1f5f9",
    "grey-200": "#e2e8f0",
    "grey-300": "#cbd5e1",
    "grey-400": "#94a3b8",
    "grey-500": "#64748b",
    "grey-600": "#475569",
    "grey-700": "#334155",
    "grey-800": "#1e293b",
    "grey-900": "#0f172a",
    "grey-950": "#020617",

    "green-500": "#22c55e",
    "green-600": "#16a34a",

    "red-500": "#ef4444",
    "red-600": "#dc2626",

    "blue-500": "#3b82f6",

    textColor: "#18181b",  // slate-900
    iconColor: "#18181b", // slate-900

    error: "#dc2626", // red-600

    primary: "#1e3a8a" // blue-900
}

const pedidoTheme = {
    space: {
        px: "1px",
        1: "0.25rem",
        2: "0.50rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.50rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
    },
    borderRadius : {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: "9999px",
    },
    colors: {
        ...lightScheme,
    },
    breakpoint: {
        sm: "@media (max-width: 640px)",
        md: "@media (max-width: 768px)",
        lg: "@media (max-width: 1024px)",
        xl: "@media (max-width: 1280px)",
        "2xl": "@media (max-width: 1536px)",
    }
}

export type PedidoTheme = typeof pedidoTheme;

export type SpacesScheme = keyof PedidoTheme["space"];
export type BorderRadiusScheme = keyof PedidoTheme["borderRadius"];
export type ColorsScheme = keyof PedidoTheme["colors"];
export type BreakPoinsScheme = keyof PedidoTheme["breakpoint"];

export type PedidoThemeProps = { theme?: PedidoTheme};

export default pedidoTheme;