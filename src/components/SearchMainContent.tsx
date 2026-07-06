import React from "react";
import { Table, Tag, Space } from "antd";
import type { TableProps } from "antd";
import styled from "styled-components";

interface DataType {
  key: string;
  title: string;
  author: string;
  year: number;
  rating: string;
  category: string;
  subCategory: string;
  availability: {
    hardCopy: boolean;
    ebook: boolean;
    audio: boolean;
  };
  status: string;
  location: string;
  cover: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (_, record) => (
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <img
          src={record.cover}
          alt="cover"
          style={{
            width: 55,
            height: 75,
            objectFit: "cover",
            borderRadius: 6,
          }}
        />

        <div>
          <div style={{ fontWeight: 600 }}>{record.title}</div>
          <div style={{ fontSize: 12, color: "#888" }}>
            {record.author}, {record.year}
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Ratings",
    dataIndex: "rating",
    key: "rating",
  },

  {
    title: "Category",
    key: "category",
    render: (_, record) => (
      <div>
        <div>{record.category}</div>
        <div style={{ fontSize: 12, color: "#888" }}>{record.subCategory}</div>
      </div>
    ),
  },

  {
    title: "Availability",
    key: "availability",
    render: (_, record) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {record.availability.hardCopy && <span>✔ Hard Copy</span>}
        {record.availability.ebook && <span>✔ E-Book</span>}
        {record.availability.audio && <span>✔ Audio Book</span>}
      </div>
    ),
  },

  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <Tag color={record.status === "Borrowed" ? "red" : "green"}>
        {record.status}
      </Tag>
    ),
  },

  {
    title: "",
    key: "action",
    render: () => (
      <Space>
        <span style={{ cursor: "pointer", color: "red" }}>❤️</span>
        <button
          style={{
            border: "1px solid #ff4d4f",
            color: "#ff4d4f",
            padding: "4px 10px",
            borderRadius: 6,
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Preview
        </button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    title: "Don’t Make Me Think",
    author: "Steve Krug",
    year: 2000,
    rating: "4.5/5",
    category: "Computer Science",
    subCategory: "UX Design",
    availability: {
      hardCopy: true,
      ebook: true,
      audio: true,
    },
    status: "In-Shelf",
    location: "CS A-15",
    cover: "https://covers.openlibrary.org/b/id/10594763-L.jpg",
  },
  {
    key: "2",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    year: 1988,
    rating: "4.5/5",
    category: "Computer Science",
    subCategory: "UX Design",
    availability: {
      hardCopy: false,
      ebook: true,
      audio: false,
    },
    status: "Borrowed",
    location: "Sriram",
    cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
  },
  {
    key: "3",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    year: 1997,
    rating: "4.5/5",
    category: "Financial MGMT",
    subCategory: "",
    availability: {
      hardCopy: true,
      ebook: true,
      audio: true,
    },
    status: "In-Shelf",
    location: "CS A-15",
    cover: "https://covers.openlibrary.org/b/id/240726-L.jpg",
  },
];

const SearchTable: React.FC = () => {
  return (
    <Styles>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowClassName="custom-row"
      />
    </Styles>
  );
};

export default SearchTable;

const Styles = styled.div`
  .custom-row > td {
    border-bottom: 20px solid rgb(233, 233, 237) !important;
  }

  .custom-row:hover > td {
    background: #f9fafb;
  }

  tr {
    border-radius: 10px;
  }
`;
