import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Input, Select, Pagination, Spin, Button, message } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { productService } from '../services/productService';
import { OEMProductDto, PagedResponse } from '../types';

const { Search } = Input;
const { Option } = Select;

const Products: React.FC = () => {
  const [products, setProducts] = useState<PagedResponse<OEMProductDto> | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('');
  const [isoStandard, setIsoStandard] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);
  const [isoStandards, setIsoStandards] = useState<string[]>([]);

  useEffect(() => {
    loadProducts();
    loadCategories();
    loadIsoStandards();
  }, [currentPage, searchTerm, category, isoStandard]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await productService.getAll({
        pageNumber: currentPage,
        pageSize: 12,
        category: category || undefined,
        isoStandard: isoStandard || undefined,
        searchTerm: searchTerm || undefined,
      });
      setProducts(response.data);
    } catch (error) {
      message.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await productService.getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Failed to load categories');
    }
  };

  const loadIsoStandards = async () => {
    try {
      const response = await productService.getIsoStandards();
      setIsoStandards(response.data);
    } catch (error) {
      console.error('Failed to load ISO standards');
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleIsoStandardChange = (value: string) => {
    setIsoStandard(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const addToCart = (product: OEMProductDto) => {
    // Add to cart logic here
    message.success(`${product.name} added to cart`);
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>OEM Products</h1>

      <div className="search-filters">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Search
              placeholder="Search products..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
            />
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Select
              placeholder="Select Category"
              style={{ width: '100%' }}
              size="large"
              allowClear
              onChange={handleCategoryChange}
            >
              {categories.map(cat => (
                <Option key={cat} value={cat}>{cat}</Option>
              ))}
            </Select>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Select
              placeholder="Select ISO Standard"
              style={{ width: '100%' }}
              size="large"
              allowClear
              onChange={handleIsoStandardChange}
            >
              {isoStandards.map(std => (
                <Option key={std} value={std}>{std}</Option>
              ))}
            </Select>
          </Col>
        </Row>
      </div>

      <Spin spinning={loading}>
        {products && (
          <>
            <Row gutter={[16, 16]}>
              {products.data.map((product) => (
                <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                  <Card
                    hoverable
                    className="product-card"
                    cover={
                      <div style={{ height: 200, background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {product.images.length > 0 ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="product-image"
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} 
                          />
                        ) : (
                          <div>No Image</div>
                        )}
                      </div>
                    }
                    actions={[
                      <Link to={`/products/${product.id}`}>
                        <Button type="link">View Details</Button>
                      </Link>,
                      <Button 
                        type="primary" 
                        icon={<ShoppingCartOutlined />}
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    ]}
                  >
                    <Card.Meta
                      title={product.name}
                      description={
                        <div>
                          <div style={{ marginBottom: '8px' }}>
                            <strong>${product.price.toFixed(2)}</strong>
                          </div>
                          <div style={{ fontSize: '12px', color: '#666' }}>
                            Category: {product.category}
                          </div>
                          <div style={{ fontSize: '12px', color: '#666' }}>
                            ISO: {product.isoStandard}
                          </div>
                          <div style={{ fontSize: '12px', color: '#666' }}>
                            Stock: {product.stockQuantity}
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <Pagination
                current={currentPage}
                total={products.totalRecords}
                pageSize={12}
                onChange={handlePageChange}
                showSizeChanger={false}
                showQuickJumper
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} products`}
              />
            </div>
          </>
        )}
      </Spin>
    </div>
  );
};

export default Products;