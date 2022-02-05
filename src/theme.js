import {createGlobalStyle} from "styled-components";
import pictures from './img/space.jpg'
import pictureWite from './img/stardust.jpg'

export const darkTheme = {
    accent: '#FFC700',
    main: '#fff',
    bgd: '#222527',
    modalBgd: 'rgb(239 236 236 / 90%)',
    btnText: '#060803', 
    moto: '#7A7982',
    backgroundImage: { pictures }
  };
  
  export const lightTheme = {
    accent: '#4B526A',
    main: '#15141D',
    bgd: '#EBEBEB',
    modalBgd: 'rgb(21 20 29 / 90%)',
    btnText: '#fff',
    moto: '#fff',
    backgroundImage:{ pictureWite }
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
    background-image: ${props => props.theme.backgroundImage}  
   }
   .codex--light{
    background-image:  ${props => props.theme.backgroundImage} ;
   }
   .about--light{
    background-image:  ${props => props.theme.backgroundImage} ;
   }
    `