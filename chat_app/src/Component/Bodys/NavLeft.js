import React from 'react'

function NavLeft() {
    return (
        <React.Fragment>
            <div className='Col_NavLeft_child'>
                <h6 className="category">Danh mục sản phẩm</h6>
                <div style={{ padding: 15 }}>
                <p>Áo thun nam</p>
                <p>Quần tây nữ</p>
                <p>Áo sơ mi nam</p>
                <p>Quần jogger & Quần nỉ nam</p>
                <p> Bộ quần áo bé trai</p>
                <hr />
                <p>Quần jogger & Quần nỉ nam</p>
                <p>Áo thun nữ</p>
                <p> Bộ quần áo bé trai</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavLeft
