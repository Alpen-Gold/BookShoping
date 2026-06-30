import { NavLink, Outlet } from "react-router-dom";
import {
  HomeOutlined,
  SearchOutlined,
  BookOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import styled from "styled-components";
import Navbar from "../components/Navbar";
const { Content, Sider } = Layout;

function AllPagesNav() {
  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <NavLink to={"/"}>Home</NavLink>,
    },
    {
      key: "2",
      icon: <SearchOutlined />,
      label: <NavLink to={"search"}>Search</NavLink>,
    },
    {
      key: "3",
      icon: <BookOutlined />,
      label: <NavLink to={"my-shelf"}>My Shelf</NavLink>,
    },
    {
      key: "4",
      icon: <GiftOutlined />,
      label: <NavLink to={"contribute"}>Contribute</NavLink>,
    },
  ];

  const footerItems = [
    {
      key: "about",
      label: "About",
    },
    {
      key: "support",
      label: "Support",
    },
    {
      key: "terms",
      label: "Terms & Condition",
    },
  ];

  return (
    <StyleDiv>
      <Layout className="leyout">
        {/* SIDEBAR */}
        <Sider breakpoint="lg" collapsedWidth="0" width={200}>
          {/* Logo */}
          <div className="sideLogo">
            <div className="sideLogoTitle">
              <span className="sideLogoBlack">My</span>
              <span className="sideLogoAccent"> Book</span>
              <br />
              <span className="sideLogoBlack">Shelf</span>
            </div>
          </div>

          {/* Menu */}
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuItems}
            className="sideMenu"
          />

          {/* Footer Links */}
          <div className="footer">
            {footerItems.map((item) => (
              <div key={item.key} className="footerLink">
                {item.label}
              </div>
            ))}
          </div>
        </Sider>

        {/* MAIN LAYOUT */}
        <Layout>
          {/* HEADER */}
          <Navbar />

          <Content className="pageContent">
            <div className="pageCard">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </StyleDiv>
  );
}

export default AllPagesNav;

const StyleDiv = styled.div`
  .icon-dates {
    display: flex;
    align-items: center;
    gap: 7px;
    color: grey;
    font-weight: 600;
  }

  .antd-layout-header {
    background-color: rgb(233, 233, 237);
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .leyout {
    min-height: calc(100vh - 56px) !important;
  }

  .antd-layout-sider-children {
    background-color: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .antd-layout-sider-children {
      background-color: #0f172a;
    }
    .pageContent {
      background-color: #0b1220;
    }
    .pageCard {
      background: #0b1220;
      border-radius: 8px;
    }
    .footer {
      border-top-color: #1f2937;
      color: #9ca3af;
    }
    .headerRight span,
    .headerRight .headerLabel,
    .headerRight .headerMeta {
      color: #9ca3af;
    }
    .profileAvatar {
      background: #e5e7eb;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 16px;
    border-top: 1px solid #f0f0f0;
    font-size: 12px;
    color: #666;
  }

  .footer-content {
    text-align: center;
    background: white;
    border-top: 1px solid #f0f0f0;
    font-size: 12px;
    color: #666;
  }

  .mobile-menu-button {
    display: none;
    border: none;
    background: transparent;
    padding: 0;
    font-size: 18px;
    cursor: pointer;
    color: #111827;
  }

  /* Drawer: mobile only */
  .mobile-drawer-overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 60;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .mobile-drawer-overlay.open {
    display: block;
    opacity: 1;
  }

  .mobile-drawer {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 260px;
    background: #fff;
    z-index: 70;
    transform: translateX(-100%);
    transition: transform 0.25s ease;
    padding-bottom: 20px;
    overflow: auto;
  }

  .mobile-drawer.open {
    display: block;
    transform: translateX(0);
  }

  .mobile-drawer-logo {
    padding: 24px;
    border-bottom: 1px solid #f0f0f0;
  }

  .mobile-drawer-footer {
    padding: 16px 24px;
    border-top: 1px solid #f0f0f0;
    font-size: 12px;
    color: #666;
  }

  .headerRight {
    display: flex;
    align-items: center;
    gap: 24px;
    min-width: 0;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .headerLabel {
    font-size: 12px;
    color: #6b7280;
  }

  .headerSelect {
    width: 60px;
  }

  .headerMeta {
    font-size: 12px;
    color: #6b7280;
    white-space: nowrap;
  }

  .profileWrap {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  .profileAvatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #000;
    flex: 0 0 auto;
  }

  .profileName {
    font-size: 12px;
    color: #111827;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 110px;
    display: inline-block;
  }

  @media (max-width: 350px) {
    .headerRight {
      gap: 12px;
    }

    .headerMeta {
      display: none;
    }

    .headerLabel {
      display: none;
    }

    .profileName {
      max-width: 70px;
    }
  }

  .pageContent {
    padding: 24px;
    background-color: #e9e9ed;
    overflow: auto;
    scrollbar-width: none;
  }

  .pageCard {
    background: #e9e9ed;
    border-radius: 8px;
  }

  @media (max-width: 991px) {
    .mobile-menu-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* hide desktop content automatically handled by antd Sider */
    .mobile-drawer-overlay {
      display: none;
    }
  }
`;
