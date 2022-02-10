import React from "react";
import { motion } from 'framer-motion';

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

function Modal(props){
    const fl = props.flag
    return(
        <motion.div initial = "hidden"  whileHover = "visible" viewport={{once: true}} className="modal-container" id="modal-form" style={{ visibility: fl }}>
        <form action="#" className="modal-form" netlify>
             
             <motion.button custom={1} variants={pictureAnimations} className="close-icon" id="modal-form-close" onClick={()=>{props.func('hidden') }}>
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                     <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                 </svg>
             </motion.button>
             
                 <motion.h4 custom={2} variants={pictureAnimations} className="modal-form-title">Принесение клятвы верности</motion.h4>
                 <motion.p custom={3} variants={pictureAnimations} className="modal-form-text"> избавит тебя от обуз морали и этики</motion.p>
                 
                 <motion.div custom={4} variants={pictureAnimations} className="modal-form-field">
                     <label htmlFor="modal-form-name" className="modal-form-field-label">Имя</label>
                     <input type="text" className="modal-form-name" id="modal-form-name" name="Имя" required/>
                 </motion.div>
 
                 <motion.div custom={5} variants={pictureAnimations} className="modal-form-field">
                     <label htmlFor="modal-form-email" className="modal-form-field-label">Email</label>
                     <input type="email" className="modal-form-email" id="modal-form-email" name="Email" required/>
                 </motion.div>
                
         <motion.button custom={6} variants={pictureAnimations} className="modal-form-submit" onClick={()=>{ sendData(props)  }}>Принести клятву</motion.button>
 
        </form>
    </motion.div>
    )
}

function sendData(props){
    let name = document.getElementById("modal-form-name").value;
    let email = document.getElementById("modal-form-email").value;
    if( !(name === "") && !(email === "")){
        alert("Здесь могла бы быть отправка в базу данных или другие функции)) ")
        props.func('hidden');
        props.funcSucccess('visible');
        document.getElementById("modal-form-name").value("");
        document.getElementById("modal-form-email").value("");
       
    }else {
        alert("Данны введены не верно!");
        document.getElementById("modal-form-name").value("");
        document.getElementById("modal-form-email").value("");
    }
}
export default Modal;