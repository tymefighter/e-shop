import modalHOC from "./modalHOC";
import Card, { CardType } from "./Card";

import "./styles/AdminSelectModal.scss";

export interface CardWithDeleteType extends CardType {
    closeModal: () => {};
    deleteProduct: (productId: string) => void;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    id: string;
};

const CardWithDelete = function({
    closeModal, deleteProduct, onClick, className, id, ...props
}: CardWithDeleteType) {
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