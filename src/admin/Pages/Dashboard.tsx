import { Row, Col, Card, Statistic } from "antd";
import {
  ShoppingOutlined,
  UserOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

function DashboardAdmin() {
  return (
    <StyleDiv>
      <div className="dashboardAdmin">
        <h1>DashboardAdmin</h1>

        {/* KPI Cards */}
        <Row gutter={[16, 16]} className="kpi-row">
          <Col xs={24} sm={12} lg={6}>
            <Card className="kpi-card">
              <Statistic
                title="Total Orders"
                value={1234}
                prefix={<ShoppingCartOutlined />}
                valueStyle={{ color: "#ff6b35" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="kpi-card">
              <Statistic
                title="Total Users"
                value={856}
                prefix={<UserOutlined />}
                valueStyle={{ color: "#1890ff" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="kpi-card">
              <Statistic
                title="Total Revenue"
                value={45230}
                prefix={<DollarOutlined />}
                suffix="UZS"
                valueStyle={{ color: "#52c41a" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="kpi-card">
              <Statistic
                title="Total Products"
                value={523}
                prefix={<ShoppingOutlined />}
                valueStyle={{ color: "#722ed1" }}
              />
            </Card>
          </Col>
        </Row>

        {/* Charts Section */}
        <Row gutter={[16, 16]} className="charts-row">
          <Col xs={24} lg={12}>
            <Card title="Sales by Date" className="chart-card">
              {/* Sales Chart */}
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="Revenue" className="chart-card">
              {/* Revenue Chart */}
            </Card>
          </Col>
        </Row>
      </div>
    </StyleDiv>
  );
}

export default DashboardAdmin;

const StyleDiv = styled.div`
  .dashboardAdmin {
    h1 {
      margin-bottom: 24px;
      color: #333;
    }

    .kpi-row {
      margin-bottom: 24px;

      .kpi-card {
        border-radius: 8px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        transition: all 0.3s ease;

        &:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }

        .ant-statistic-title {
          font-size: 12px;
          color: #999;
        }

        .ant-statistic-content {
          font-size: 24px;
          font-weight: 700;
        }
      }
    }

    .charts-row {
      .chart-card {
        border-radius: 8px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        height: 400px;
      }
    }
  }
`;
