import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiServices";
import { toast } from "react-toastify";
const ModalDeleteUser = (props) => {
    const {
        show,
        setShow,
        dataDelete,
        fetchListUsersWithPaninate,
        setCurrentPage,
    } = props;
    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        let data = await deleteUser(dataDelete.id);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await fetchListUsersWithPaninate(1); //
            setCurrentPage(1);
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confrim Delete User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this user email ={" "}
                    <b>{(dataDelete && dataDelete.email) || ""}</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmitDeleteUser()}
                    >
                        Confrim
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;
