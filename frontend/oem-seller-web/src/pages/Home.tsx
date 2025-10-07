import React from 'react';
import { Button, Typography, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { ShopOutlined, SafetyCertificateOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const features = [
    {
      icon: <ShopOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Comprehensive Product Catalog',
      description: 'Browse thousands of OEM products from verified suppliers with detailed specifications and ISO compliance information.'
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: 'ISO Standards Compliance',
      description: 'All products are certified to meet various ISO standards, ensuring quality and reliability for your business needs.'
    },
    {
      icon: <GlobalOutlined style={{ fontSize: '48px', color: '#722ed1' }} />,
      title: 'Global Supplier Network',
      description: 'Connect with suppliers worldwide and access OEM products from multiple countries and regions.'
    }
  ];

  return (
    <div style={{ padding: '0 24px' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '80px 0' }}>
        <Title level={1} style={{ fontSize: '48px', marginBottom: '24px' }}>
          Welcome to OEM Seller Platform
        </Title>
        <Paragraph style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
          Your trusted marketplace for ISO-compliant Original Equipment Manufacturer products. 
          Connect with verified suppliers and find the perfect components for your business.
        </Paragraph>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/products">
            <Button type="primary" size="large">
              Browse Products
            </Button>
          </Link>
          <Link to="/register">
            <Button size="large">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '80px 0' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Why Choose Our Platform?
        </Title>

        <Row gutter={[32, 32]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                style={{ textAlign: 'center', height: '100%' }}
                bordered={false}
              >
                <div style={{ marginBottom: '24px' }}>
                  {feature.icon}
                </div>
                <Title level={4} style={{ marginBottom: '16px' }}>
                  {feature.title}
                </Title>
                <Paragraph>
                  {feature.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Stats Section */}
      <div style={{ background: '#f5f5f5', padding: '80px 24px', margin: '0 -24px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Platform Statistics
        </Title>

        <Row gutter={[32, 32]} justify="center">
          <Col xs={12} md={6} style={{ textAlign: 'center' }}>
            <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
              10,000+
            </Title>
            <Paragraph style={{ fontSize: '16px' }}>
              Products Available
            </Paragraph>
          </Col>
          <Col xs={12} md={6} style={{ textAlign: 'center' }}>
            <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
              500+
            </Title>
            <Paragraph style={{ fontSize: '16px' }}>
              Verified Suppliers
            </Paragraph>
          </Col>
          <Col xs={12} md={6} style={{ textAlign: 'center' }}>
            <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
              50+
            </Title>
            <Paragraph style={{ fontSize: '16px' }}>
              ISO Standards
            </Paragraph>
          </Col>
          <Col xs={12} md={6} style={{ textAlign: 'center' }}>
            <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
              100+
            </Title>
            <Paragraph style={{ fontSize: '16px' }}>
              Countries Served
            </Paragraph>
          </Col>
        </Row>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', padding: '80px 0' }}>
        <Title level={2} style={{ marginBottom: '24px' }}>
          Ready to Get Started?
        </Title>
        <Paragraph style={{ fontSize: '16px', marginBottom: '32px' }}>
          Join thousands of businesses who trust our platform for their OEM product needs.
        </Paragraph>
        <Link to="/products">
          <Button type="primary" size="large">
            Explore Products Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;