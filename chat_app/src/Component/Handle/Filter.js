import React from 'react'
import style from "./Filter.module.css";
const data= [
    {
        id:1,
        title:'HÌNH THỨC',
        texts:[
            {  text:'Hoạt Hình',  quantily:55 },
            {  text:'Truyện cổ tích',  quantily:21  },
            {  text:'kỹ năng Sống',  quantily:72  }
        ],
    },
    {
        id:2,
        title:'MÀU SẮC',
        texts:[
            {  text:'Nhiều màu',  quantily:6 },
            {  text:'Vàng',  quantily:3  },
            {  text:'Trắng',  quantily:5  },
            {  text:'Xanh',  quantily:2  },
            {  text:'Xanh Dương',  quantily:5  },
            {  text:'Hồng',  quantily:2  },
        ],
    },
    
]
function Filter() {
    return (
        <React.Fragment>
            <div style={{backgroundColor:'#fff',marginRight:9,padding:'18px 10px'}}>
                <div className='text_pirive' style={{fontSize:22,paddingBottom:7}}>
                   MUA THEO
                </div>
                <hr />
                {
                     data.map ( x => 
                     <div style={{marginBottom:15}}>
                        <div className={style.title}>{x.title}</div>
                            {
                                x.texts.map(value =>  
                                    <div className={style.awap_checkboxText}>
                                        <input type='checkbox' />
                                        <span> {value.text }</span>
                                        <span> ({value.quantily })</span>
                                    </div>
                                    )
                            }
                     </div>
                    )   
                }
                
            </div>
        </React.Fragment>
    )
}

export default Filter
