import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Typography, Row, Col, Image, Tag, Spin, message, InputNumber } from 'antd';
import { ShoppingCartOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { productService } from '../services/productService';
import { OEMProductDto } from '../types';

const { Title, Paragraph } = Typography;

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<OEMProductDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      loadProduct(parseInt(id));
    }
  }, [id]);

  const loadProduct = async (productId: number) => {
    setLoading(true);
    try {
      const response = await productService.getById(productId);
      setProduct(response.data);
    } catch (error) {
      message.error('Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = () => {
    message.success(`Added ${quantity} ${product?.name}(s) to cart`);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Title level={3}>Product not found</Title>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Card>
            {product.images.length > 0 ? (
              <Image
                width="100%"
                src={product.images[0]}
                alt={product.name}
              />
            ) : (
              <div style={{ 
                height: 400, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: '#f5f5f5'
              }}>
                No Image Available
              </div>
            )}
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Title level={2}>{product.name}</Title>

          <div style={{ marginBottom: '16px' }}>
            <Tag color="blue">{product.category}</Tag>
            <Tag color="green" icon={<SafetyCertificateOutlined />}>
              {product.isoStandard}
            </Tag>
          </div>

          <Title level={3} style={{ color: '#1890ff', marginBottom: '16px' }}>
            ${product.price.toFixed(2)}
          </Title>

          <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
            <strong>SKU:</strong> {product.sku}
          </Paragraph>

          <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
            <strong>Manufacturer:</strong> {product.manufacturer}
          </Paragraph>

          <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
            <strong>Stock:</strong> {product.stockQuantity} units available
          </Paragraph>

          <div style={{ marginBottom: '24px' }}>
            <Paragraph style={{ marginBottom: '8px' }}>
              <strong>Quantity:</strong>
            </Paragraph>
            <InputNumber
              min={1}
              max={product.stockQuantity}
              value={quantity}
              onChange={(value) => setQuantity(value || 1)}
              style={{ marginRight: '16px' }}
            />
            <Button
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              onClick={addToCart}
              disabled={product.stockQuantity === 0}
            >
              Add to Cart
            </Button>
          </div>

          <Card title="Description" style={{ marginBottom: '16px' }}>
            <Paragraph>{product.description}</Paragraph>
          </Card>

          {product.specifications.length > 0 && (
            <Card title="Specifications">
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;