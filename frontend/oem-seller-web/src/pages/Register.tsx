import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, BankOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await register(values);
      message.success('Registration successful!');
      navigate('/dashboard');
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <Card title="Register" style={{ width: 500 }}>
        <Form
          name="register"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input 
              prefix={<MailOutlined />} 
              placeholder="Email" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="First Name" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Last Name" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
          >
            <Input 
              prefix={<PhoneOutlined />} 
              placeholder="Phone Number" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="company"
            label="Company"
          >
            <Input 
              prefix={<BankOutlined />} 
              placeholder="Company Name" 
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading} 
              size="large"
              style={{ width: '100%' }}
            >
              Register
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            Already have an account? <Link to="/login">Login now!</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;