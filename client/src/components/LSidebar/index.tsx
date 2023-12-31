import React from 'react';
import "./styles.scss";
import { Col } from 'antd';

type PropsType = {
    content: any
}

const LSidebar: React.FC<PropsType> = (props) => {
    return (
        <>
            <Col span={6} className="LshadowSidebar">
                <aside className="L_wrapper_Sidebar">
                    {props.content}
                </aside>
            </Col>
        </>
    )
}

export default LSidebar;