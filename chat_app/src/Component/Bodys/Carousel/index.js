import React, { useRef } from 'react'
import { Carousel } from 'antd';
import style from './Chevron.module.css';

function Index() {
    const slider = useRef(null);
    return (
        <React.Fragment >
            <div style={{ position: 'relative' }} className={style.gwap_chevron}>
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', zIndex: 1, top: '45%', width: '100%' }}>
                    <span className={style.chevron} onClick={() => slider.current.prev()}><i className="fas fa-chevron-left"></i></span>
                    <span className={style.chevron} onClick={() => slider.current.next()}><i className="fas fa-chevron-right"></i></span>
                </div>
                <Carousel autoplay ref={slider} >
                    <div>
                        <img src="https://cdn0.fahasa.com/media/magentothem/banner7/bigsale_920x420.png" alt='' width={'100%'} />
                    </div>
                    <div>
                        <img src="https://cdn0.fahasa.com/media/magentothem/banner7/Moca_T1_920x420.png" width={'100%'} alt='' />
                    </div>
                    <div>
                        <img src="https://cdn0.fahasa.com/media/magentothem/banner7/1manga_920_x_420.png" alt='' width={'100%'} />
                    </div>
                    <div>
                        <img src="https://cdn0.fahasa.com/media/magentothem/banner7/cho_do_cu_920x420.png" alt='' width={'100%'} />
                    </div>
                </Carousel>
            </div>
        </React.Fragment>
    )
}

export default Index
