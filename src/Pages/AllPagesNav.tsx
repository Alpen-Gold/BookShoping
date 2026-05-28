import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import {
  HomeOutlined,
  SearchOutlined,
  BookOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button, Input, Select, Dropdown } from "antd";
import styled from "styled-components";

const { Header, Content, Footer, Sider } = Layout;

function AllPagesNav() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const currentYear = new Date().getFullYear();

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
              background: colorBgContainer,
              padding: "0 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            {/* Left Side - Search */}
            <div style={{ display: "flex", gap: "12px", flex: 1 }}>
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

          {/* CONTENT */}
          <Content style={{ padding: "24px", background: "#f9f9f9" }}>
            <div
              style={{
                background: colorBgContainer,
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              <Outlet />
            </div>
          </Content>

          {/* FOOTER */}
          <Footer className="footer-content">
            My Book Shelf ©{currentYear} Created by You
          </Footer>
        </Layout>
      </Layout>
    </StyleDiv>
  );
}

export default AllPagesNav;

const StyleDiv = styled.div`
  .leyout {
    min-height: calc(100vh - 57px);
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
`;
