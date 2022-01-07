/* eslint-disable array-callback-return */
import React from 'react'
import { HomeOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from "react-router-dom";
import { Breadcrumb } from 'antd';
import { Container, Row, Col } from "reactstrap";


function BreadCrumb() {
    let { pathname } = useLocation();
    const [listBreadcrumb, setListBreadcrumb] = React.useState([])

    React.useEffect(() => {
        if (pathname === '/') return setListBreadcrumb([])
        const trung = listBreadcrumb.some(x => x === pathname)
        if (trung) {
            const findIndex = listBreadcrumb.findIndex((x) => x === pathname)
            setListBreadcrumb(listBreadcrumb.filter((x, i) => i <= findIndex))
        } else {
            setListBreadcrumb(pev => [...pev, pathname])
        }
    }, [pathname])
    return (
        <React.Fragment>
            {
                pathname !== '/' && <Container fluid style={{ marginTop: 10, }}>
                    <Container >
                        <Row style={{ backgroundColor: '#fff', marginRight: 0, borderRadius: 7, height: 35, }}>
                            <Col style={{ display: 'flex', alignItems: 'center' }}>
                                <Breadcrumb style={{ fontSize: 16, color: 'black' }} >
                                    <Breadcrumb.Item >
                                        <NavLink end to="/"> <HomeOutlined style={{ transform: 'translateY(-4px)', fontSize: 20 }} /> HOME</NavLink>
                                    </Breadcrumb.Item>
                                    {
                                        listBreadcrumb.map(item => {
                                            switch (item) {
                                                case '/checkout/cart':
                                                    return <Breadcrumb.Item ><NavLink end to={item}>Giỏ hàng</NavLink></Breadcrumb.Item>
                                                case '/payment':
                                                    return <Breadcrumb.Item ><NavLink end to={item}>Thanh toán</NavLink></Breadcrumb.Item>
                                                default:
                                                // code block
                                            }
                                        })
                                    }


                                </Breadcrumb>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            }

        </React.Fragment>
    )
}

export default BreadCrumb
