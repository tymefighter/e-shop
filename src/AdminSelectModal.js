import modalHOC from "./modalHOC";
import Card from "./Card";

import "./styles/AdminSelectModal.scss";

const CardWithDelete = function({
    closeModal, deleteProduct, onClick, className, id, ...props
}) {
    return (
        <div onClick={onClick} className={className}>
            <Card {...props} />
            <button 
                className="card-delete-button"
                onClick={() => {
                    deleteProduct(id);
                    closeModal();
                }}
            >
                Delete
            </button>
        </div>
    );
};

const AdminSelectModal = modalHOC(CardWithDelete);

export default AdminSelectModal;