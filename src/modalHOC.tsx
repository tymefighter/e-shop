import React, { useState } from "react";

import "./styles/modalHOC.scss";

interface ModalPropsType {
    [key: string]: any;
    closeModal: () => void;
}

const modalHOC = function(InnerComponent: React.ComponentType<any>) {
    return function({closeModal, ...props}: ModalPropsType) {

        return (
            <div className="modal" onClick={() => closeModal()}>
                <InnerComponent 
                    className="modal__inner" {...props} closeModal={closeModal}
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => event.stopPropagation()}
                />
            </div>
        );
    };
};

export default modalHOC;