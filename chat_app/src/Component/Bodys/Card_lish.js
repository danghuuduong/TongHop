import React, { useState } from 'react'
import { ThemeContext } from "../../ThemeProvides";

function Card_lish() {
  const Context = React.useContext(ThemeContext);

    const remove_products = (value) =>{
            Context.setProducts(Context.products.filter(products => products.id !== value.id ))
    }
    return (
         <div style={{padding:'10px 15px'}}>
            <h5>Danh sách sản phẩm</h5>
            <hr/>
            {
              Context.products.length < 1 || Context.products === null 
              ? (
                 <div>
                    <h6> Chưa có sản phẩm nào!!!</h6>
                  <img src="https://nemo.todo.vn/assets/site/vc-market/desktop/images/img-no-prdt-cart.png" width={200}/>
                 </div> )
              : (
                <>
                {
                  Context.products.map( (value,index) => {
                    return(
                   <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} key={`${value.id} ${index}`}>
                      <div>
                          <span>1</span>
                        <img src={value.imgURl} width={50}/>
                      </div>
                      <div style={{marginLeft:5}}>
                        <div>
                          <span style={{marginRight:5}}>Giá : {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.prirce)}</span>
                          <span 
                          onClick={()=> remove_products(value)}
                          style={{color:'red',marginLeft:10}}
                          >
                              <i className="fas fa-trash-alt"></i>
                              </span>
                        </div>
                        <div style={{overflow:'hidden',textOverflow:'ellipsis',width:150,height:30}}>{value.title}</div>
                      </div>
                    </div>
                    )
                  })
                }
                </>
              )
              
            }
        </div>
    )
}

export default Card_lish
