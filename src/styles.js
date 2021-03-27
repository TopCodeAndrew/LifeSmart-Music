import { css } from 'styled-components'

export const setColor = {
    primaryColor: '#af9a70',
    mainWhite: '#fff',
    mainBlack: '#222',
    mainGrey: '#ececec',
    lightGrey: '#f7f7f7'
}

export const setFont = {
    main: "font-family: 'Lato', sans-serif;",
    slanted: "font-family: 'Courgette', cursive;"
}

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
    return `display: flex; align-items: ${y}; justify-content:${x}`
}

export const setBackground = ({ img = "https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", color = "rgba(0,0,0,0)", position = 'center' } = {}) => {
    return `   
    background: linear-gradient(${color}, ${color}), 
    url(${img}) ${position}/cover fixed no-repeat;`
}

export const setRem = (number = 16) => {
    return `
        ${number / 16}rem
    `
}

export const setLetterSpacing = (number = 2) => {
    return `letter-spacing: ${number}px`
}

export const setShadow = {
    light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
    dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
    darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
};

export const setBorder = ({ width = '2px', style = 'solid', color = 'black' } = {}) => {
    return `border: ${width} ${style} ${color}`
}

export const media = {
    phone: (cssArgs) => {
        return css`@media(max-width: 576px){
            ${cssArgs};
        }`
    },
    tablet: (...cssArgs) => {
        return css`@media(min-width: 768px){
            ${css(...cssArgs)};
        }`
    },
    desktop: (...cssArgs) => {
        return css`@media(min-width: 992px){
            ${css(...cssArgs)};
        }`
    },
    large: (...cssArgs) => {
        return css`@media(min-width: 1200px){
            ${css(...cssArgs)};
        }`
    }
}

export const setTransition = ({ property = "all", time = "0.3s", timing = "ease-in-out" } = {}) => {
    return `transition: ${property} ${time} ${timing}`
}