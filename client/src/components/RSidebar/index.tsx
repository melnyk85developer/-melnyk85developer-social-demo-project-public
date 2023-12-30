import React from 'react';
import "./styles.scss"
import { Col } from 'antd';

type PropsType = {
    content: any
}

const RSidebar: React.FC<PropsType> = (props) => {
    return (
        <Col span={6}>
            <div className="RshadowSidebar">
                <aside className="R_wrapper_Sidebar">
                    {props.content}
                </aside>
            </div>
        </Col>
    )
}

export default RSidebar;