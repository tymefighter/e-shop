import React, { useState } from "react";

import "./styles/modalHOC.scss";

const modalHOC = function(InnerComponent) {
    return function({closeModal, ...props}) {

        return (
            <div className="modal" onClick={() => closeModal()}>
                <InnerComponent 
                    className="modal__inner" {...props} 
                    onClick={(event) => event.stopPropagation()}
                />
            </div>
        );
    };
};

export default modalHOC;