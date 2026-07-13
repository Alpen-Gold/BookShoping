import { Table, Space, Tag } from "antd";
import styled from "styled-components";
import type { TableProps } from "antd";
import { useEffect } from "react";
import { getCategoriesAdmin, getProductsAdmin } from "../api";
import { useDispatch, useSelector } from "react-redux";

interface Book {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryId?: string;
  images: string[];
  numberSold: number;
  isActive: boolean;
  owner: string;
  rating: number | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function ProductsAdmin() {
  const dispatch = useDispatch();
  const { error, loading, products, categories } = useSelector(
    (store: any) => store.datasSlice
  );

  useEffect(() => {
    getProductsAdmin(dispatch);
    getCategoriesAdmin(dispatch);
  }, []);

  const columns: TableProps<Book>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <img
            src={record.images?.[0]}
            alt="cover"
            style={{
              width: 55,
              height: 75,
              objectFit: "cover",
              borderRadius: 6,
            }}
          />
          <div>
            <div style={{ fontWeight: 600 }}>{record.name}</div>
            <div
              style={{
                fontSize: 12,
                color: "#888",
                maxWidth: 300,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {record.description}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `${price.toLocaleString()} so'm`, // adjust currency label as needed
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <div>{rating} ⭐</div>, // adjust currency label as needed
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => {
        const foundCategory = categories?.find(
          (item: any) => item._id === category
        );
        return (
          <div>
            {foundCategory ? foundCategory.name : "Category Topilmadi!"}
          </div>
        );
      },
    },
    {
      title: "Sold",
      dataIndex: "numberSold",
      key: "numberSold",
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Tag color={record.isActive ? "green" : "red"}>
          {record.isActive ? "Active" : "Inactive"}
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

  if (loading)
    return (
      <div className="flex w-full items-center justify-center">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="mt-4 flex justify-center text-red-600">
        You have a problem, or your connection is not working!
      </div>
    );

  return (
    <StyleDiv>
      <Table
        columns={columns}
        dataSource={products}
        rowKey={"_id"}
        pagination={false}
        rowClassName="custom-row"
      />
    </StyleDiv>
  );
}

export default ProductsAdmin;

const StyleDiv = styled.div``;
