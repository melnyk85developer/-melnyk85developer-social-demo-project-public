import React from "react";
import './styles.scss';
import { Col, Row } from "antd";

const Footer: React.FC = () => {
    return (
        <footer className="wrapper_footer">
            <Row className="footer">
                <Col span={24} className="image_footer">
                    <Col className="wrapper_sections_footer">
                        <Col className="footer_sections">
                            <p>Блок 1</p>
                        </Col>
                        <Col className="footer_sections">
                            <p>Блок 2</p>
                        </Col>
                        <Col className="footer_sections">
                            <p>Блок 3</p>
                        </Col>
                        <Col className="footer_sections">
                            <p>Блок 4</p>
                        </Col>
                    </Col>
                </Col>
            </Row>
            <Col className="niz_footera">	
                <p>Сайт работает на: <a href="/">NK_CMS</a> Все права защищены!</p>
            </Col>
        </footer>
    )
}
export default Footer;