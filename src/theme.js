



import { createContext, useState, useMemo } from "react"
import { createTheme } from "@mui/material/styles"


// color tokens

export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            primary: {
                100: "#d5d7da",
                200: "#aab0b5",
                300: "#80888f",
                400: "#55616a",
                500: "#2b3945",
                600: "#222e37",
                700: "#1a2229",
                800: "#11171c",
                900: "#090b0e"
            },

            text: '#fcfcfc'
        }
        : {
            primary: {
                100: "#e7e7e7",
                200: "#cecece",
                300: "#b6b6b6",
                400: "#9d9d9d",
                500: "#e7e7e7",
                600: "#6a6a6a",
                700: "#505050",
                800: "#353535",
                900: "#1b1b1b"
            },

            text: "#090b0e"
        }
    )
})



// material ui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                        light: 'hsl(209, 23%, 22%)'
                    },

                    secondary: {
                        main: 'hsl(209, 23%, 22%)'
                    },

                    background: {
                        default: colors.primary[600]
                    },

                    text: {
                        main: '#fff'
                    }
                }
                : {
                    primary: {
                        main: 'hsl(0, 0%, 98%)',
                    },
                    
                    background: {
                        default: 'hsl(0, 0%, 98%)'
                    },

                    text: {
                        default: 'hsl(200, 15%, 8%)'
                    }
                }
            )
        },

        typography: {
            fontFamily: [ "Source Sans", "sans-serif" ].join(","),
            fontSize: 12,
            h1: {
                fontFamily: [ "Source Sans", "sans-serif" ].join(","),
                fontSize: 40, 
            },
            h2: {
                fontFamily: [ "Source Sans", "sans-serif" ].join(","),
                fontSize: 32, 
            },
            h3: {
                fontFamily: [ "Source Sans", "sans-serif" ].join(","),
                fontSize: 24, 
            },
            h4: {
                fontFamily: [ "Source Sans", "sans-serif" ].join(","),
                fontSize: 20, 
            },
            h5: {
                fontFamily: [ "Source Sans", "sans-serif" ].join(","),
                fontSize: 16, 
            },
            h6: {
                fontFamily: [ "Source Sans", "sans-serif" ].join(","),
                fontSize: 14, 
            }
        }
    }
}


export const ColorModeContext = createContext({
    toggleMode: () => {}
});

export const useMode = () => {
    const [ mode, setMode ] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleMode: () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))
        }),
        []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [ theme, colorMode ];
}


