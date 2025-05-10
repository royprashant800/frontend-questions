import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const Homepage = () => {
    const [displayModal, setDisplayModal] = useState(false);

    const handleOpenClick = () => {
        setDisplayModal(true);
    }
    const handleCloseClick = () => {
        setDisplayModal(false);
    }

    return (
        <div>
            Homepage
            <Button text={'Show Modal'} handleClick={handleOpenClick} />
            {displayModal && <Modal handleClick={handleCloseClick} />}
        </div>
    )
}

export default Homepage;