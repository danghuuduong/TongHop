import React, { useState } from 'react';
import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';

export default function Avatar_preview_ANTD() {
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    return (
        // <ImgCrop rotate>
        //     <Upload
        //         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        //         listType="picture-card"
        //         onChange={onChange}
        //     >
        //         {fileList.length < 5 && '+ Upload'}
        //     </Upload>
        // </ImgCrop>
        <>
        </>
    )
}
