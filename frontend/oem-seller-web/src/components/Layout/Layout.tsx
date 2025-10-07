import React from 'react';
import { Layout as AntLayout, Menu, Avatar, Dropdown, Button } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserOutlined, ShoppingCartOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext';

const { Header, Content, Footer } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="orders">
        <Link to="/orders">My Orders</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const menuItems = [
    {
      key: '/',
      label: <Link to="/">Home</Link>,
    },
    {
      key: '/products',
      label: <Link to="/products">Products</Link>,
    },
  ];

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="header-logo">
            OEM Seller Platform
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ flex: 1, minWidth: 0 }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/cart">
            <Button type="text" icon={<ShoppingCartOutlined />} style={{ color: 'white' }}>
              Cart
            </Button>
          </Link>
          {user ? (
            <Dropdown overlay={userMenu} placement="bottomRight">
              <Avatar style={{ cursor: 'pointer' }} icon={<UserOutlined />} />
            </Dropdown>
          ) : (
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/login">
                <Button type="text" style={{ color: 'white' }}>
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button type="primary">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Header>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 134px)' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        OEM Seller Platform ©2024 Created for ISO Standard OEM Products
      </Footer>
    </AntLayout>
  );
};

export default Layout;