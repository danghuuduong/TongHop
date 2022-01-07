/* eslint-disable array-callback-return */
import React from 'react'
import { HomeOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from "react-router-dom";
import { Breadcrumb } from 'antd';
import { Container, Row, Col } from "reactstrap";

const data = [
  {
    id: 1,
    Object: 'cart',
    value: [
      {
        path: '/checkout/cart',
        name: 'Giỏ Hàng',
      },
      {
        path: '/payment',
        name: 'Thanh toán',
      },
      {
        path: '/payment2',
        name: 'dau buoi',
      }
    ]

  },
  {
    id: 2,
    Object: 'contact',
    value: [
      {
        path: '/contact',
        name: 'Hỗ Trợ khách hàng',
      }
    ]
  }
]

function BreadCrumb() {
    let { pathname } = useLocation();
    const [listBreadcrumb, setListBreadcrumb] = React.useState([])
    React.useEffect(() => {
        const theloai = data.filter(x => x.value.some(child => child.path === pathname))
        setListBreadcrumb(
            theloai.map(x => {
            const findIndex = x.value.findIndex( x => x.path === pathname)
            return x.value.filter((item,index) =>  index <= findIndex )
            }
        ))
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
                                        listBreadcrumb.map((item,i) =>  {
                                                   return  <React.Fragment key={i}>
                                                       {
                                                           item.map((x,index) =>
                                                           <Breadcrumb.Item key={index}>
                                                               <NavLink end to={x.path}> {x.name}</NavLink>
                                                           </Breadcrumb.Item>
                                                           )
                                                       }
                                                         </React.Fragment>
                                                        }
                                                    )
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
