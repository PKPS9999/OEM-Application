import React from 'react';
import { Card, Empty, Button } from 'antd';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Shopping Cart</h1>
      <Card>
        <Empty
          description="Your cart is empty"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        >
          <Link to="/products">
            <Button type="primary">Browse Products</Button>
          </Link>
        </Empty>
      </Card>
    </div>
  );
};

export default Cart;