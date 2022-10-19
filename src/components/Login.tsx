import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React, { memo } from "react";
import { json, NavLink, useNavigate } from "react-router-dom";
const Login = memo(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const login = () => {
    form.validateFields().then(res=>{
      axios.post('http://localhost:4000/login',{
        data:res
      }).then(res=>{
        const data = res.data

        if(data.code!== 200) {
         return message.error(data.msg)
        }
        localStorage.setItem('token',data.data.token)
        localStorage.setItem('userInfo',JSON.stringify(data.data.userInfo))
        message.success(data.msg)
        navigate('/play',{replace:true})
      })
    })

    
  };
  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        
        style={{
          width: 400,
        }}
      >
        <Form.Item
          label="用户名"
          name="user"
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
          ]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="psw"
          rules={[
            {
              required: true,
              message: "请输入用户名",
              min:6,
              max:12
            },
          ]}
        >
          <Input type="password" placeholder="请输入密码" />
        </Form.Item>
        <Form.Item>
          <Button onClick={login}>登录</Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default Login;
