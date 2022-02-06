import {createGlobalStyle} from "styled-components";
import pictures from './img/space.jpg'
import pictureWite from './img/stardust.jpg'

//const a = require("./img/space.jpg")
export const darkTheme = {
    pic: {pictures},
    accent: '#FFC700',
    main: '#fff',
    bgd: '#222527',
    modalBgd: 'rgb(239 236 236 / 90%)',
    btnText: '#060803', 
    moto: '#7A7982',
    backgroundImage: require('./img/space.jpg')
     
  };
  
  export const lightTheme = {
    accent: '#4B526A',
    main: '#15141D',
    bgd: '#EBEBEB',
    modalBgd: 'rgb(21 20 29 / 90%)',
    btnText: '#fff',
    moto: '#fff',
    backgroundImage: require('./img/stardust.jpg')
    
  };
  
  export const GlobalStyles = createGlobalStyle`
   :root  {
    --theme-accent: ${props => props.theme.accent};
    --theme-bgd: ${props => props.theme.bgd};
    --theme-modal-bgd: ${props => props.theme.modalBgd};
    --theme-btn-text: ${props => props.theme.btnText};
    --theme-main:${props => props.theme.main};
    --theme-moto-text: ${props => props.theme.main};
   }
   .about {
    background-image:url(${props => props.theme.backgroundImage}) ; 
   }
   .codex--light{
    background-image:url(${props => props.theme.backgroundImage}) ;
   }
   .about--light{
    background-image:url(${props => props.theme.backgroundImage}) ;
   }
   .codex{
    background-image: url(${props => props.theme.backgroundImage}) ;
   }
    `