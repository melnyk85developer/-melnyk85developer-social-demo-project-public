import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav';
import Preloader from 'components/Priloader';
import { DispatchPropsType, PropsType } from './AppContainerContent';
import GorizontalNaw from 'components/GorizontalNaw';
import MyRoutes from 'components/MyRoutes/MyRoutes';
import { Col, Row, Divider} from 'antd';
import './styles.scss';

const AppContent: React.FC<DispatchPropsType & PropsType> = (props) => {
    
    useEffect(() => {
        props.initializeAppContent()
    }, [])

    if(!props.initialized){
        return <Preloader />
    }
    return (
        <div className="AppContent">
            <Row>
                <Col>
                    <Header />
                </Col>
                <Col span={22} className='wrapper'>
                    <Col span={2}>
                        <LeftNav />
                    </Col>
                    <Col span={20} >
                        <GorizontalNaw content={<></>}/>
                        <MyRoutes/>
                    </Col>
                </Col>
                <Col span={24}>
                    <Footer/>
                </Col>
            </Row>
        </div>
    );
}
export default AppContent;

{/* <Row gutter={60}>
    <Col flex={6}><div style={{background: '#353535', color: '#e2e2e2', border: '1px solid red'}}>Header1</div></Col>
    <Col flex={1}><div style={{background: '#353535', color: '#e2e2e2', border: '1px solid red'}}>Header2</div></Col>
    <Col flex={2}><div style={{background: '#353535', color: '#e2e2e2', border: '1px solid red'}}>Header3</div></Col>
</Row> */}
