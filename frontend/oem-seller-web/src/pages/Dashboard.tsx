import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { ShoppingOutlined, UserOutlined, CheckCircleOutlined, DollarOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';

const { Title } = Typography;

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Welcome back, {user?.firstName}!</Title>

      <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Orders"
              value={12}
              prefix={<ShoppingOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Pending Orders"
              value={3}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Completed Orders"
              value={9}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Spent"
              value={25840}
              prefix={<DollarOutlined />}
              precision={2}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Recent Orders" extra={<a href="/orders">View All</a>}>
            <p>Order #ORD-001 - Pending</p>
            <p>Order #ORD-002 - Shipped</p>
            <p>Order #ORD-003 - Delivered</p>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Account Information">
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Company:</strong> {user?.company || 'Not specified'}</p>
            <p><strong>Phone:</strong> {user?.phoneNumber || 'Not specified'}</p>
            <p><strong>Role:</strong> {user?.role}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;