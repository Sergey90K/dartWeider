import React from "react";

function ModalSucces(){
    return(
        <div className="modal-container" id="modal-success"> 
            
        <div className="modal-success">
            <button className="close-icon" id="modal-success-close">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                </svg>
            </button>

            <h4 className="modal-success-title">Клятва принесена</h4>
           
            <p className="modal-success-text">
                Ожидайте прибытия космического челнока для <br/> переброски в центр обучения и подготовки ситхов.
            </p> 
                <div className="modal-success-icon">
                    <svg width="60" height="53" viewBox="0 0 60 53" fill="#FFC700" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.07044 0H1.60095L0.366211 26.3L1.60095 52.6H4.07044L5.05823 30.992L14.8127 32.7207V19.8793L5.05823 21.608L4.07044 0Z" />
                        <path d="M58.3992 0H55.9298L54.942 21.608L45.1875 19.8793V32.7207L54.942 30.992L55.9298 52.6H58.3992L59.634 26.3L58.3992 0Z" />
                        <path d="M24.9376 11.6064L17.2822 17.0393V35.3135L24.9376 40.7464H35.186L42.8414 35.3135V17.1628L35.186 11.7299H24.9376V11.6064ZM37.6555 26.2999C37.6555 30.498 34.1982 33.9553 30.0001 33.9553C25.8019 33.9553 22.3447 30.498 22.3447 26.2999C22.3447 22.1018 25.8019 18.6445 30.0001 18.6445C34.1982 18.6445 37.6555 22.1018 37.6555 26.2999Z" />
                        <path d="M30.0001 31.486C32.8642 31.486 35.186 29.1642 35.186 26.3001C35.186 23.436 32.8642 21.1142 30.0001 21.1142C27.136 21.1142 24.8142 23.436 24.8142 26.3001C24.8142 29.1642 27.136 31.486 30.0001 31.486Z" />
                    </svg>
                </div>

        </div>

    </div>
    )
}

export default ModalSucces;