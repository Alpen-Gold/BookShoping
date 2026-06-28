import { NavLink, Outlet } from "react-router-dom";
import {
  HomeOutlined,
  SearchOutlined,
  BookOutlined,
  GiftOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Input, Select } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../stores/store";
const { Header, Content, Sider } = Layout;

function AllPagesNav() {
  const count = useSelector((state: RootState) => state.allFunctions.value);
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div style={{ padding: "24px", borderBottom: "1px solid #f0f0f0" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              <span style={{ color: "#000" }}>My</span>
              <span style={{ color: "#d4453a" }}> Book</span>
              <br />
              <span style={{ color: "#000" }}>Shelf</span>
            </div>
          </div>

          {/* Menu */}
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuItems}
            style={{ borderRight: "none" }}
          />

          {/* Footer Links */}
          <div className="footer">
            {footerItems.map((item) => (
              <div
                key={item.key}
                style={{ marginBottom: "8px", cursor: "pointer" }}
                onMouseEnter={(e: any) => (e.target.style.color = "#000")}
                onMouseLeave={(e: any) => (e.target.style.color = "#666")}
              >
                {item.label}
              </div>
            ))}
          </div>
        </Sider>

        {/* MAIN LAYOUT */}
        <Layout>
          {/* HEADER */}
          <Header
            style={{
              background: "#E9E9ED",
              padding: "0 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #f0f0f0",
              position: "sticky",
              top: 0,
              zIndex: 20,
            }}
          >
            {/* Left Side - Search */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flex: 1,
                alignItems: "center",
              }}
            >
              <button
                className="mobile-menu-button"
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuOutlined />
              </button>
              <Select
                defaultValue="All"
                style={{ width: "80px" }}
                options={[
                  { label: "All", value: "All" },
                  { label: "Fiction", value: "Fiction" },
                  { label: "Non-Fiction", value: "Non-Fiction" },
                ]}
              />

              <Input
                placeholder="Search"
                style={{ width: "200px" }}
                prefix={<SearchOutlined />}
              />
            </div>

            {/* Right Side - Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <Button type="text" icon={<SearchOutlined />} />

              <span style={{ fontSize: "12px" }}>Lang</span>
              <Select
                defaultValue="Eng"
                style={{ width: "60px" }}
                options={[
                  { label: "Eng", value: "Eng" },
                  { label: "Rus", value: "Rus" },
                ]}
              />

              <span style={{ fontSize: "12px" }}>09:00 AM</span>

              <span style={{ fontSize: "12px" }}>4-MAR-2023</span>

              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#000",
                  }}
                />
                <span style={{ fontSize: "12px" }}>Kenson</span>
              </div>
            </div>
          </Header>

          {/* MOBILE DRAWER */}
          <div
            className={`mobile-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
            <div className="mobile-drawer-logo">
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                <span style={{ color: "#000" }}>My</span>
                <span style={{ color: "#d4453a" }}> Book</span>
                <br />
                <span style={{ color: "#000" }}>Shelf</span>
              </div>
            </div>

            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={menuItems}
              style={{ borderRight: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <div className="mobile-drawer-footer">
              {footerItems.map((item) => (
                <div
                  key={item.key}
                  style={{ marginBottom: "8px", cursor: "pointer" }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <Content
            style={{
              padding: "24px",
              backgroundColor: "#E9E9ED",
              overflow: "auto",
              scrollbarWidth: "none",
            }}
          >
            <div
              style={{
                background: "#E9E9ED",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
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
  .leyout {
    min-height: calc(100vh - 56px) !important;
  }

  .antd-layout-sider-children {
    background-color: #fff;
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
    background: colorBgContainer;
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
    background: rgba(0, 0, 0, 0.35);
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
