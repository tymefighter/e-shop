import React, { useState } from "react";

import "./styles/modalHOC.scss";

interface ModalProps {
    [key: string]: any;
    closeModal: () => void;
}

const modalHOC = function(InnerComponent: React.ComponentType<any>) {
    return function({closeModal, ...props}: ModalProps) {

        return (
            <div className="modal" onClick={() => closeModal()}>
                <InnerComponent 
                    className="modal__inner"  closeModal={closeModal}
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => event.stopPropagation()}
                />
            </div>
        );
    };
};

export default modalHOC;