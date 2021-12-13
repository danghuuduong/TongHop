import React, { useEffect, useState } from "react";
import google from '../Images/google.png'

import { Form, Input, Button, Row, Col, Typography, Avatar } from "antd";
import {
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import firebase, { auth } from "../../Firebase/config";
const Google_provider = new firebase.auth.GoogleAuthProvider();

function Login( {getUsersLogin}) {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const onFinish = (values) => {};

  
  //-----------------------------------------------
  const [usersLogin, SetUsersLogin] = useState();

  const hanldeGoogle = () => {
    auth.signInWithPopup(Google_provider);
  };
  const hanldeGoogle_signOut = () => {
    auth.signOut(Google_provider);
  };
  useEffect(() => {
    forceUpdate({});
    auth.onAuthStateChanged((user) => {
      SetUsersLogin(user?._delegate);
      getUsersLogin(user?._delegate)
    });
  }, []);

  //-----------------------------------------------

  return (
    <Row justify="center" >
      <Col
        span={24}
        style={{ textAlign: "center", padding: 10 }}
      >
        <Typography.Title level={2}>ĐĂNG NHẬP</Typography.Title>
        <Form name="basic" onFinish={onFinish} form={form}>
          <Form.Item
            name="username"
            // rules={[{ required: true, message: "Please input your username!" }]}
            rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập" }]}
          >
            <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            // rules={[{ required: true, message: "Please input your password!" }]}
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password size="large"
              placeholder="Username"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 10 }} shouldUpdate>
            {() => {
              const forceUpdate = !form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length
              return (
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className={forceUpdate ? 'bt__forceUpdate_lg' : 'bt__forceUpdate_lg_ok'}
                  disabled={ forceUpdate }
                >
                Đăng Nhập
              </Button>
            )
            }}
          </Form.Item>
        </Form>
        <div
          style={{ marginBottom: 5,textAlign:'end' }}
        >
          <span style={{color:'blue'}}>Quên mật khẩu ?</span>
        </div>

        <div
          style={{marginBottom: 10 }}
        >
          <div style={{color:'#dbdbdb', display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{transform:'translateY(-6px)'}}>_____________________________</div> 
            <span style={{margin:'0 15px',color:'#aba8a8'}}> HOẶC  </span>
            <div style={{transform:'translateY(-6px)'}}>_____________________________</div> 
          </div>
        </div>
        
        <Form.Item  >
          <span style={{ display: "flex",justifyContent:'space-between' }}>
          <Button size="large" 
          style={{ width: "49%",backgroundColor:'#1877f2',color:'white'
          ,fontSize:18,borderRadius:3,
          display:'flex',alignItems:'center'
        }}
          >
            <i className="fab fa-facebook-square" style={{fontSize:30}}></i> 
            <span style={{marginLeft:10}}>Facebook</span>
          </Button>
          <Button size="large" 
          style={{ width: "49%" ,backgroundColor:'#4285f4',display:'flex',alignItems:'center',fontSize:18,borderRadius:3,}} 
          onClick={hanldeGoogle}>
            <img src={google} style={{width:34,backgroundColor:'white',transform:'translateX(-13px)'}}/>
            <span style={{marginLeft:10,color:'white'}}>Google</span>
            </Button>
          </span>
        </Form.Item>

        <Form.Item  >
            <span >Bạn mới biết đến Dương ?</span>
            <span style={{color:'red'}}> ĐĂNG KÝ !</span>
        </Form.Item>
         
      </Col>
    </Row>
  );
}

export default Login;
