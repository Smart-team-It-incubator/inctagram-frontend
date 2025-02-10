'use client'

import {useState} from "react";
import {Button} from "@/components/Button/index";
import {Modal} from "@/components/Modal/Modal";
import s from "@/components/Modal/Modal.module.scss";

type Props = {

}
export const DelPost = ({}: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)

    const delPost = () => {
        alert('You post was dell')
        setShowModal(false)
    }
    return (
        <>
        <Button onClick={() => setShowModal(true)}>Del Post</Button>
        <Modal
            modalTitle={"Delete Post"}
            onClose={() => {
                setShowModal(false)
            }}
            open={showModal}
        >
        <div className={s.question}>
            Are you sure you want to delete this post?
        </div>
        <div className={s.buttons}>
            <Button className={s.buttonStyle} onClick={delPost} variant={'outline'}>
                Yes
            </Button>
            <Button
                className={s.buttonStyle}
                onClick={() => setShowModal(false)}
                variant={'primary'}
            >
                No
            </Button>
        </div>
        </Modal>
</>
)
}
