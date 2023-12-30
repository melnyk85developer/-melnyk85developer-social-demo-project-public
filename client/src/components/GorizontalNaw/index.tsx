import { Col } from "antd";
import React from "react";
import './styles.scss'

type PropsType = {
    content: any
}

export const GorizontalNawContent: React.FC<PropsType> = (props) => {
    return (
        <>
            <GorizontalNaw content={props.content}/>
        </>
    )
} 

const GorizontalNaw: React.FC<PropsType> = (props) => {
    return (
        <>
            <Col className="wrapper_nav">
                <Col className="top_menu">
                    {props.content}
                </Col>
            </Col>
        </>
    )
}

export default GorizontalNaw;