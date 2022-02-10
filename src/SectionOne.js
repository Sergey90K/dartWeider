import React from "react";
import { motion } from 'framer-motion';
import dartWeider from './img/darth-vader.png';
import dethStar from './img/death-star.png';

const pictureAnimations = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ( {
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

function SectionOne(props){
    return(
        <motion.section initial = "hidden"  whileInView = "visible" className="about">
        <motion.img custom={2} variants={pictureAnimations} src= {dethStar} alt="death star" className="death-star-img"/>
        <motion.img custom={1} variants={pictureAnimations}  src= {dartWeider} alt="darth vader" className="dart-vader-img"/>
        <div className="container">
            <header>
                <motion.a custom={3} variants={pictureAnimations} href="/" className="logo">
                    <svg width="72" height="32" viewBox="0 0 72 32" fill="#FFC700" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M0 10.0032V15.0061H14.6854C16.3924 15.0061 18.5732 13.4333 18.5732 10.8313C18.5732 9.78485 18.9748 9.10223 17.7405 7.71801L15.8622 5.5001C14.7858 4.49951 15.9907 4.49951 16.8948 4.49951H23.0951V15.0061H28.0124V4.49951H34.6397V0H13.1793C10.5683 0 9.29155 2.49832 9.36339 3.79909C9.43562 5.09986 9.67572 6.73641 11.8454 8.70239C13.8246 10.4952 10.8655 10.0032 10.5683 10.0032H0ZM45.5128 0H37.5801L33.1332 15.0065H38.0822L38.8851 12.9053H44.1063L44.8814 15.0065H49.7292L45.5128 0ZM39.9899 9.30275L41.6969 3.79909L43.3038 9.30275H39.9899ZM65.3941 10.0032C63.4863 10.0032 63.4863 9.30275 63.4863 9.30275C65.121 9.30275 66.5704 6.92941 66.5704 4.49951C66.5704 2.06961 64.1892 0 62.2806 0H51.6084V15.0065H57.0312V10.0036C57.0312 10.0036 59.3402 12.7052 60.5451 13.8058C61.7504 14.9065 61.8504 15.0065 63.4859 15.0065H71.9984V10.0036C71.9992 10.0032 67.3018 10.0032 65.3941 10.0032ZM60.4737 6.50109H57.032V3.79909H60.4737C62.0516 3.79909 62.3247 6.50109 60.4737 6.50109ZM0 16.9073H5.54786L6.95358 21.911L8.25889 16.9073H14.083L15.5891 21.911L17.0956 16.9073H21.9152L17.4969 31.9173H13.0789L11.143 24.8123L8.96175 31.9173H4.44337L0 16.9073ZM33.3011 16.9939H25.3684L20.9219 32H25.8705L26.6737 29.8992H31.8954L32.6704 32H37.5186L33.3011 16.9939ZM27.7786 26.2962L29.4856 20.7926L31.0921 26.2962H27.7786ZM65.4941 21.4107C64.5912 21.4107 63.6066 21.5159 64.6833 22.5161L66.5621 24.7344C67.7959 26.1186 67.7761 26.6957 67.7761 27.7429C67.7761 30.3445 65.1933 31.9173 63.4863 31.9173L51.6215 31.9968C49.9867 31.9968 49.8867 31.8972 48.6814 30.7965C47.4769 29.6959 45.1671 26.9939 45.1671 26.9939V31.9968H39.7451V16.9907H50.4173C52.3251 16.9907 54.7071 19.0607 54.7071 21.4902C54.7071 23.9205 53.2578 26.2935 51.6222 26.2935C51.6222 26.2935 52.3414 27.014 53.5463 27.014C54.7516 27.014 59.391 27.0188 59.391 27.0188C59.6879 27.0188 62.6465 27.5108 60.6677 25.718C58.498 23.752 58.2579 22.1163 58.1857 20.8155C58.1135 19.5147 59.2422 16.9076 61.852 16.9076H72V21.4111H65.4941V21.4107ZM48.6092 23.4914H45.1667V20.7894H48.6092C50.1876 20.7894 50.4602 23.4914 48.6092 23.4914Z" />
                    </svg>
                </motion.a>

                <motion.div  custom={4} variants={pictureAnimations} className="switcher">
                    <button className="switcher-theme-name">
                        Dark
                    </button>
                    <label className="switch">
                        <input type="checkbox" id="theme-switch" onChange={()=> {  props.switchTheme()   } }/>
                        <span className="slider round"></span>
                    </label>
                    <button className="switcher-theme-name">
                        Light
                    </button>
                </motion.div>

            </header>

            <div className="about-content">

                <motion.h2  custom={5} variants={pictureAnimations} className="about-proffesion">Владыка Ситх</motion.h2>
            
                <motion.h1  custom={6} variants={pictureAnimations} className="about-name">Дарт Вейдер <br/> Энакин Скайуокер</motion.h1>
            
                <ul className="about-position">
                    <li className="about-position">
                        <motion.p  custom={6} variants={pictureAnimations} className="about-positions-text">Инженер-конструктор</motion.p> 
                    </li> 
                    <li className="about-position">
                        <motion.p  custom={7} variants={pictureAnimations} className="about-positions-text">Командор армии</motion.p> 
                    </li> 
                    <li className="about-position">
                        <motion.p  custom={8} variants={pictureAnimations} className="about-positions-text">Верховный генерал</motion.p> 
                    </li> 
                </ul>
                    <motion.button  custom={9} variants={pictureAnimations}  className="about-button" id="call-form-btn" onClick={()=>{  props.setFlag() }}>
                    Принести клятву верности
                    </motion.button>
            
                </div>

            <div className="about-content-row">
                <motion.p  custom={10} variants={pictureAnimations} className="about-description">Принесение клятвы верности Лорду Ситху <br/> избавит тебя от обуз морали и этики
                </motion.p>
                <motion.p  custom={11} variants={pictureAnimations} className="about-description">Покой — это ложь. Есть только страсть.
                </motion.p>
            </div>

            <div className="about-social">
                <motion.a  custom={12} variants={pictureAnimations} href="https://www.youtube.com/user/starwars" className="social-link">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"/>
                    </svg>
                </motion.a>
                <motion.a  custom={13} variants={pictureAnimations} href="https://www.instagram.com/starwars/" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"/>
                    </svg>
                </motion.a>
                <motion.a  custom={14} variants={pictureAnimations}  href="https://twitter.com/starwarsuk" className="social-link">
                    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28004 5.09 4.11004 3.38 2.00004 0.79C1.63004 1.42 1.42004 2.16 1.42004 2.94C1.42004 4.43 2.17004 5.75 3.33004 6.5C2.62004 6.5 1.96004 6.3 1.38004 6V6.03C1.38004 8.11 2.86004 9.85 4.82004 10.24C4.19077 10.4122 3.53013 10.4362 2.89004 10.31C3.16165 11.1625 3.69358 11.9084 4.41106 12.4429C5.12854 12.9775 5.99549 13.2737 6.89004 13.29C5.37367 14.4904 3.49404 15.1393 1.56004 15.13C1.22004 15.13 0.880039 15.11 0.540039 15.07C2.44004 16.29 4.70004 17 7.12004 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z"/>
                    </svg>
                </motion.a>

            </div>
        </div>
    </motion.section>
    )
}

export default SectionOne;