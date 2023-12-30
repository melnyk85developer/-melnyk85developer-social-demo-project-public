import React, { ReactElement } from "react";
import "./styles.scss";

type PropsType = {
    modalActive: any
    setModalActive: any
    children: ReactElement
    handleSubmit: any
}

const ModalWindow: React.FC<PropsType> = ({modalActive, setModalActive, children, ...props}) => {
    const click = () => {
        setModalActive(false)
        props.handleSubmit()
    }

    return (
        <div className={modalActive ? "modal active" : "modal"} onClick={click}>
            <div className={modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default ModalWindow;