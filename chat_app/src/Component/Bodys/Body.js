import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Rate } from 'antd';
import { ThemeContext } from "../../ThemeProvides";

const dataQA = [
  {
    id:1,
    title:'Bộ quần áo phong cách trẻ trung , nam nữ mặc , size S - XXL',
    prirce:89000,
    star:3.5,
    imgURl:'https://vn-live-05.slatic.net/p/db2ba8558746acd759c07ee676409a5b.jpg_200x200q90.jpg_.webp'
  },
  {
    id:2,
    title:'Áo thun nữ form rộng tay lỡ in hình HOA CÚC SAU LƯNG vải dày mịn mát',
    prirce:175000,
    star:2,
    imgURl:'https://vn-live-05.slatic.net/p/102636e4f18229f07444af0ee192823f.jpg_200x200q90.jpg_.webp'
  },
  {
    id:3,
    title:'Áo sơ mi nam nữ Unisex Form rộng, áo sơ mi cổ vest, vải sơmi lụa cao cấp 12312 312 312 12 312 312 312 312 312 23',
    prirce:37000,
    star:2.5,
    imgURl:'https://lzd-img-global.slatic.net/g/p/32fec13e8c3a7f134a5434ef7a607916.jpg_200x200q90.jpg_.webp'
  },
  {
    id:4,
    title:'Bộ quần áo phong cách trẻ trung , nam nữ mặc , size S - XXL',
    prirce:2225000,
    star:3.5,
    imgURl:'https://vn-live-05.slatic.net/p/102636e4f18229f07444af0ee192823f.jpg_200x200q90.jpg_.webp'
  },
  {
    id:5,
    title:'Bộ quần áo phong cách trẻ trung , nam nữ mặc , size S - XXL',
    prirce:89000,
    star:3.5,
    imgURl:'https://vn-live-05.slatic.net/p/db2ba8558746acd759c07ee676409a5b.jpg_200x200q90.jpg_.webp'
  },
  {
    id:6,
    title:'Áo thun nữ form rộng tay lỡ in hình HOA CÚC SAU LƯNG vải dày mịn mát',
    prirce:17000,
    star:2,
    imgURl:'https://vn-live-05.slatic.net/p/102636e4f18229f07444af0ee192823f.jpg_200x200q90.jpg_.webp'
  },
  {
    id:7,
    title:'Áo sơ mi nam nữ Unisex Form rộng, áo sơ mi cổ vest, vải sơmi lụa cao cấp',
    prirce:37000,
    star:2.5,
    imgURl:'https://lzd-img-global.slatic.net/g/p/32fec13e8c3a7f134a5434ef7a607916.jpg_200x200q90.jpg_.webp'
  },
  {
    id:8,
    title:'Bộ quần áo phong cách trẻ trung , nam nữ mặc , size S - XXL',
    prirce:5000,
    star:3.5,
    imgURl:'https://vn-live-05.slatic.net/p/102636e4f18229f07444af0ee192823f.jpg_200x200q90.jpg_.webp'
  }
]
function Body() {
  const Context = React.useContext(ThemeContext);
  const [sl,setSL] = useState (0)

  const selectProduc =(x) =>{
    Context.get_products(x)
    if (x.id === x.id){
      setSL(sl+1)
    }
}
  return (
    <div className="bgr_gray">
      <Container style={{ background: "white", marginTop: 14 }}>
        <Row>
          <Col>
            <h6>Danh mục liên quan</h6>
            <p>Áo thun nam</p>
            <p>Quần tây nữ</p>
            <p>Áo sơ mi nam</p>
            <p>Quần jogger & Quần nỉ nam</p>
            <p> Bộ quần áo bé trai</p>
            <hr />
            <p>Quần jogger & Quần nỉ nam</p>
            <p>Áo thun nữ</p>
            <p> Bộ quần áo bé trai</p>
            <Rate allowHalf disabled  defaultValue={2.5} style={{fontSize:15}}/>
            
          </Col>
          <Col xs={10}>
            <Row style={{ marginBottom: 24 }}>
              {
                dataQA.map( (x,i)=> {
                  return (
                    <Col key={x.id} className="production">
                      <div className="production_img" style={{textAlign:'center',position:'relative',overflow:'hidden'}}>
                          <img src={x.imgURl} alt="...error"/>
                          <span className="production_link" >
                            <button onClick={()=> {selectProduc(x)}}><i className="fas fa-cart-plus" /></button>
                            <button><i className="fas fa-eye"/></button>
                          </span>
                      </div>
                      <div style={{overflow:'hidden',textOverflow:'ellipsis',width:210,height:50}}>{x.title}</div>
                      <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(x.prirce)}</span>
                      <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:12}}>
                        <span style={{transform:'translateY(1px)'}}>
                        <i className="far fa-heart" style={{ color:'red'}}/>
                        </span>
                        <Rate allowHalf disabled  defaultValue={x.star} style={{fontSize:15}}/>
                        <span>Đã bán 10,6k</span>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
