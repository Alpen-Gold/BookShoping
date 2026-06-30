import {
  ClockCircleOutlined,
  CalendarOutlined,
  TranslationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Layout, Select, Space,Avatar } from "antd";
import type { SearchProps } from "antd/es/input";
const { Header } = Layout;

export const Navbar = () => {
  const options = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "title",
      label: "Title",
    },

    {
      value: "author",
      label: "Author",
    },

    {
      value: "text",
      label: "Text",
    },

    {
      value: "subject",
      label: "Subject",
    },

    {
      value: "title",
      label: "Title",
    },
  ];

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getCurrentDate = () => {
    return new Date()
      .toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();
  };

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Header>
      <Space.Compact>
        <Select defaultValue={options[0].label} options={options} />
        <Input.Search placeholder="Search..." allowClear onSearch={onSearch} />
      </Space.Compact>

      <Space size={40}>
        {/* Time */}
        <div className="icon-dates">
          <ClockCircleOutlined className="icon" />
          <span>{getCurrentTime()}</span>
        </div>

        {/* Date */}
        <div className="icon-dates">
          <CalendarOutlined className="icon" />
          <span>{getCurrentDate()}</span>
        </div>
      </Space>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Select
          suffixIcon={<TranslationOutlined style={{ fontSize: "20px" }} />}
          placeholder="ENG"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "ENG", label: "ENG" },
            { value: "RU", label: "RU" },
            { value: "UZB", label: "UZB" },
          ]}
        />
        <Avatar size={35} shape="square" icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default Navbar;
