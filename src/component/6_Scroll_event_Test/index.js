import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { BackTop } from 'antd';
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

export default function Scroll() {
    console.log('re-render3');
    return (
        <div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <div style={{ padding: 50 }}> àasfsafasfasf</div>
            <BackTop visibilityHeight={200} duration={800}>
                <div style={style}>UP</div>
            </BackTop>
        </div>
    )
}
