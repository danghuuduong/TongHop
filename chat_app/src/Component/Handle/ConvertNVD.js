import React from 'react'

function ConvertNVD({ money }) {
    return (
        <React.Fragment>
            {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", }).format(money)}
        </React.Fragment>
    )
}

export default ConvertNVD
