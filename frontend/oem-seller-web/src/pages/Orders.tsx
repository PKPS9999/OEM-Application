import React from 'react';
import { Card, Empty, Button } from 'antd';
import { Link } from 'react-router-dom';

const Orders: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>My Orders</h1>
      <Card>
        <Empty
          description="No orders yet"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        >
          <Link to="/products">
            <Button type="primary">Start Shopping</Button>
          </Link>
        </Empty>
      </Card>
    </div>
  );
};

export default Orders;