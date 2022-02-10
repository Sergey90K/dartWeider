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

function SectionThreth(){
    return(
        <motion.section initial = "hidden"  whileInView = "visible" viewport={{amount:0.2}} className="codex">
        <div className="container"> 
            
            <motion.div custom={1} variants={pictureAnimations} className="codex-left-side">
                <p className="codex-motto">“You don't know the <br/> power of the dark <br/> side!”</p>
            </motion.div>

            <motion.div custom={2} variants={pictureAnimations} className="codex-right-side">
                <p className="codex-title">Кодекс ситхов:</p>
                    <p className="codex-text">Спокойствие — ложь, есть только страсть.</p>
                    <p className="codex-text">Со Страстью я приобретаю Силу.</p>
                    <p className="codex-text">С Силой я приобретаю Власть.</p>
                    <p className="codex-text">С Властью я приобретаю Победу.</p>
                    <p className="codex-text">С Победой я разорву свои цепи,</p>
                    <p className="codex-text codex-text--last">И Великая Сила освободит меня.</p>
        <p className="codex-text">* Принося клятву верности ты обязуешься следовать кодексу <br/> ситхов, расти над собой увеличивая мощь Империи
        </p>
            </motion.div>
        </div>
    </motion.section>
    )
}

export default SectionThreth;