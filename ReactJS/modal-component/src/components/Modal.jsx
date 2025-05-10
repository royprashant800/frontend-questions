import Button from "./Button";
import '../Modal.css';

const Modal = ({handleClick}) => {
    return (
        <>
        <div className="modal-body">
            <div className="modalHeader">
                Header
                <Button text={'Close'} handleClick={handleClick} />
            </div>
            Modal
        </div>
        </>
    )
}

export default Modal;