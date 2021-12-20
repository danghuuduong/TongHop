import React from 'react'
import { ThemeContext } from "../../ThemeProvides";
import { Col } from "reactstrap";
import { Rate } from "antd";

const dataQA = [
    {
      id: 1,
      title: "Disney Kids Readers Level 1 Pack Of 6 ",
      prirce: 89000,
      star: 3.5,
      imgURl:
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244718_1_5431.jpg",
    },
    {
      id: 2,
      title: "Disney Kids Readers Level 1 Pack Of 6",
  
      prirce: 175000,
      star: 2,
      imgURl:
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/d/a/da-ngoai-thanh-thoi---tap-3.jpg",
    },
    {
      id: 3,
      title: "Disney Kids Readers Level 1 Pack Of 6",
  
      prirce: 37000,
      star: 2.5,
      imgURl:
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/k/o/komi_-nu-than-so-giao-tiep---tap-2.jpg",
    },
    {
      id: 4,
      title:
        "Disney Kids Readers Level 1 Pack Of 6 Disney Kids Readers Level 1 Pack Of 6Disney Kids Readers Level 1 Pack Of 6Disney Kids Readers Level 1 Pack Of 6Disney Kids Readers Level 1 Pack Of 6",
  
      prirce: 2225000,
      star: 3.5,
      imgURl:
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244718_1_5430.jpg",
    },
    {
      id: 5,
      title: "Disney Kids Readers Level 1 Pack Of 6",
  
      prirce: 89000,
      star: 3.5,
      imgURl:
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244718_1_5429.jpg",
    },
    {
      id: 6,
      title: "Disney Kids Readers Level 1 Pack Of 6",
  
      prirce: 17000,
      star: 2,
      imgURl:
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_242791.jpg",
    },
    {
      id: 7,
      title: "Disney Kids Readers Level 1 Pack Of 6",
  
      prirce: 37000,
      star: 2.5,
      imgURl:
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/h/nha-co-5-nang-dau---tap-5.jpg",
    },
    {
      id: 8,
      title: "Disney Kids Readers Level 1 Pack Of 6",
      prirce: 5000,
      star: 3.5,
      imgURl:
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/8/9/8935244862676.jpg",
    },
  ];
function Contents() {
    const Context = React.useContext(ThemeContext);

  const selectProduc = (x) => {
    Context.get_products(x);
  };
    return (
        <React.Fragment>
             {dataQA.map((x, i) => {
                return (
                  <Col key={x.id} style={{margin:0,padding:0}} xs={3} >
                    <div className="production">
                        <div className="production_img">
                          <img
                            src={x.imgURl}
                            alt="...error"
                            style={{ maxWidth: "100%" }}
                          />
                          <span className="production_link">
                            <button>
                              {/* <i className="fas fa-eye" /> */}
                              Quick View
                            </button>
                          </span>
                        </div>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            height: 45,
                            fontSize: 14,
                          }}
                        >
                          {x.title}
                        </div>
                        <span className="text_pirive">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(x.prirce)}
                        </span>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: 12,
                          }}
                        >
                          <Rate
                            allowHalf
                            disabled
                            defaultValue={x.star}
                            style={{ fontSize: 13, transform: "translateY(-2px)" }}
                          />
                          <span className="sold">Đã bán 10,6k</span>
                        </div>
                        <button
                          className="btn_add_cart"
                          onClick={() => {
                            selectProduc(x);
                          }}
                        >
                          {" "}
                          <i class="fas fa-cart-plus"></i> Thêm Giỏ hàng
                        </button>
                    </div>
                  </Col>
                );
              })}
        </React.Fragment>
    )
}

export default Contents
