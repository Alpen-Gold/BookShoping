import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  DashboardOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
  UserOutlined,
  FileTextOutlined,
  TeamOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Dropdown, Avatar, Space, type MenuProps } from "antd";
import styled from "styled-components";

const { Content, Sider, Header } = Layout;

function AllPagesAdmin() {
  const [collapsed, _setCollapsed] = useState(false);

  const location = useLocation();

  const selectedKeys = () => {
    switch (true) {
      case location.pathname === "/admin":
        return ["1"];

      case location.pathname.startsWith("/admin/products/create"):
        return ["2-2"];

      case location.pathname.startsWith("/admin/products"):
        return ["2-1"];

      case location.pathname.startsWith("/admin/orders"):
        return ["3"];

      case location.pathname.startsWith("/admin/users"):
        return ["4"];

      case location.pathname.startsWith("/admin/categories"):
        return ["5-1"];

      case location.pathname.startsWith("/admin/authors"):
        return ["5-2"];

      case location.pathname.startsWith("/admin/publishers"):
        return ["5-3"];

      case location.pathname.startsWith("/admin/settings"):
        return ["6"];

      default:
        return [];
    }
  };

  // Menu Items
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: <NavLink to="/admin">Dashboard</NavLink>,
    },
    {
      key: "2",
      icon: <ShoppingOutlined />,
      label: "Products",
      children: [
        {
          key: "2-1",
          label: <NavLink to="/admin/products">All Products</NavLink>,
        },
        {
          key: "2-2",
          label: <NavLink to="/admin/products/create">Add Product</NavLink>,
        },
      ],
    },
    {
      key: "3",
      icon: <UnorderedListOutlined />,
      label: <NavLink to="/admin/orders">Orders</NavLink>,
    },
    {
      key: "4",
      icon: <TeamOutlined />,
      label: <NavLink to="/admin/users">Users</NavLink>,
    },
    {
      key: "5",
      icon: <FileTextOutlined />,
      label: "Content",
      children: [
        {
          key: "5-1",
          label: <NavLink to="/admin/categories">Categories</NavLink>,
        },
        {
          key: "5-2",
          label: <NavLink to="/admin/authors">Authors</NavLink>,
        },
        {
          key: "5-3",
          label: <NavLink to="/admin/publishers">Publishers</NavLink>,
        },
      ],
    },
    {
      key: "6",
      icon: <SettingOutlined />,
      label: <NavLink to="/admin/settings">Settings</NavLink>,
    },
  ];

  // Profile Menu
  const profileMenu: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
    },
    {
      key: "2",
      label: "Change Password",
    },
    {
      type: "divider",
    },
    {
      key: "3",
      danger: true,
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <StyleDiv>
      <Layout className="admin-layout">
        {/* SIDEBAR */}
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          width={250}
          className="admin-sider"
        >
          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo">
              <ShoppingOutlined className="logo-icon" />
              {!collapsed && <span className="logo-text">KD Admin</span>}
            </div>
          </div>

          {/* Menu */}
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys()}
            items={menuItems}
            defaultOpenKeys={["2", "5"]}
            className="admin-menu"
          />
        </Sider>

        {/* MAIN LAYOUT */}
        <Layout className="main-layout">
          {/* HEADER */}
          <Header className="admin-header">
            nothing
            <div className="header-right">
              {/* Notifications */}

              {/* Divider */}

              {/* Admin Profile */}
              <Dropdown menu={{ items: profileMenu }} placement="bottomRight">
                <Space className="profile-section">
                  <Avatar size={40} icon={<UserOutlined />} />
                  <div className="admin-info flex">
                    <p className="admin-name">Admin User</p>
                    {/* <p className="admin-role">Super Admin</p> */}
                  </div>
                </Space>
              </Dropdown>
            </div>
          </Header>

          {/* CONTENT */}
          <Content className="admin-content">
            <div className="content-wrapper">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </StyleDiv>
  );
}

export default AllPagesAdmin;

const StyleDiv = styled.div`
  .admin-layout {
    max-height: 100vh;
    background-color: #f5f5f5;
  }

  /* LOGO SECTION */
  .logo-section {
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 10px;

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;

      .logo-icon {
        font-size: 24px;
        color: #ff6b35;
      }

      .logo-text {
        font-size: 18px;
        font-weight: 700;
        color: white;
        white-space: nowrap;
      }

      &:hover {
        transform: translateX(5px);
      }
    }
  }

  /* MENU STYLES */
  .admin-menu {
    background: transparent;
    border-right: none;

    .ant-menu-item {
      margin: 8px 12px;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
      }

      a {
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #ff6b35;
        }
      }
    }

    .ant-menu-item-selected {
      background: rgba(255, 107, 53, 0.2) !important;
      border-radius: 8px;

      a {
        color: #ff6b35 !important;
        font-weight: 600;
      }
    }

    .ant-menu-submenu-title {
      color: rgba(255, 255, 255, 0.85);
      border-radius: 8px;
      margin: 8px 12px;
      transition: all 0.3s ease;

      &:hover {
        color: #ff6b35 !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
      }
    }
  }

  /* MAIN LAYOUT */
  .main-layout {
    transition: margin-left 0.3s ease;
  }

  /* HEADER STYLES */
  .admin-header {
    background: white;
    padding: 0 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    border-bottom: 1px solid #f0f0f0;

    .header-right {
      display: flex;
      align-items: center;
      gap: 16px;

      .notification-badge {
        cursor: pointer;

        .notification-btn {
          font-size: 18px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all 0.3s ease;

          .notification-icon {
            color: #666;
          }

          &:hover {
            background-color: #f5f5f5;

            .notification-icon {
              color: #ff6b35;
            }
          }
        }
      }

      .header-divider {
        width: 1px;
        height: 24px;
        background-color: #f0f0f0;
      }

      .profile-section {
        cursor: pointer;
        padding: 8px 12px;
        border-radius: 6px;
        transition: all 0.3s ease;

        &:hover {
          background-color: #f5f5f5;
        }

        .admin-info {
          display: flex;
          flex-direction: column;
          margin-left: 8px;

          .admin-name {
            margin: 0;
            font-weight: 600;
            color: #333;
            font-size: 14px;
          }

          .admin-role {
            margin: 0;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }

  /* CONTENT STYLES */
  .admin-content {
    overflow-y: auto;
    padding: 24px;
    background-color: #f5f5f5;
    min-height: calc(100vh - 64px);

    .content-wrapper {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
      min-height: calc(100vh - 180px);
    }
  }

  /* FOOTER STYLES */
  .admin-footer {
    background: white;
    padding: 16px 24px;
    text-align: center;
    border-top: 1px solid #f0f0f0;
    color: #999;
    font-size: 12px;

    p {
      margin: 0;
    }
  }

  /* RESPONSIVE */
  @media (max-width: 992px) {
    .admin-sider {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 999;
    }
  }

  @media (max-width: 768px) {
    .admin-sider {
      width: 100% !important;
      max-width: 250px;
    }

    .admin-header {
      padding: 0 16px;

      .admin-info {
        display: none;
      }
    }

    .admin-content {
      padding: 12px;

      .content-wrapper {
        padding: 12px;
      }
    }
  }
`;
