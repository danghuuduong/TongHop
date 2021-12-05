import React from 'react'
import { Form, Input, Button, Checkbox,Row, Col,Typography  } from 'antd';
import { TeamOutlined ,ShoppingOutlined} from '@ant-design/icons';
import firebase,{ auth } from '../../Firebase/config'
const Google_provider = new firebase.auth.GoogleAuthProvider();

function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    const hanldeGoogle = () =>{
        auth.signInWithPopup(Google_provider)
    }
    auth.onAuthStateChanged( (user) => {
    console.log("🙉🍀 --> user", {user})
        
    })
    return (
        <Row justify="center" style={{height:'100vh'}}>
            <Col span={8} style={{border:'1px solid ',textAlign:'center',padding:10}} > 

                <Typography.Title level={2} > 
                    Login Em
                </Typography.Title>
                <Form  name="basic"   onFinish={onFinish} 
                >
                    <Form.Item  name="username"  style={{    marginBottom:5}}
                    rules={[{  required: true,  message: 'Please input your username!', },]}
                    >
                    <Input placeholder="Username" prefix={<TeamOutlined />}/>
                    </Form.Item>
            
                    <Form.Item  name="password" style={{    marginBottom:5}}
                    rules={[ { required: true, message: 'Please input your password!',  },  ]}
                    >
                    <Input.Password placeholder="Username" prefix={<ShoppingOutlined />}/>
                    </Form.Item>
                    
                    <Form.Item style={{marginBottom:10}}>
                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                            Đăng Nhập
                        </Button>
                    </Form.Item>
                </Form>
                <span style={{display:'flex',justifyContent:'end',marginBottom:10}}>
                    <a style={{marginRight:10}}>Đăng ký nhanh</a>
                    <a>Quên mật khẩu ?</a>
                </span>

                <span style={{display:'flex'}}>
                    <Button style={{width:'50%'}} onClick={hanldeGoogle}>
                        Đăng Nhập bằng Google
                    </Button>
                    <Button style={{width:'50%'}} >
                        Đăng Nhập bằng FaceBook
                    </Button>
                </span>
                
            </Col>
      </Row>
        
    )
}

export default Login
