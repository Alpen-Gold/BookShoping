import { Form, Input, InputNumber, Select, Switch, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function AddProduct() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    // dispatch AddProduct(values) or call your API here
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ isActive: true, numberSold: 0 }}
    >
      <Form.Item
        label="Book Name"
        name="name"
        rules={[{ required: true, message: "Please enter the book name" }]}
      >
        <Input placeholder="e.g. Rich Dad Poor Dad" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please enter a description" }]}
      >
        <TextArea rows={4} placeholder="Book description..." />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please enter a price" }]}
      >
        <InputNumber
          style={{ width: "100%" }}
          min={0}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
        />
      </Form.Item>

      <Form.Item
        label="Category"
        name="categoryId"
        rules={[{ required: true, message: "Please select a category" }]}
      >
        <Select
          placeholder="Select category"
          options={[
            // ideally fetched from your categories API
            { label: "Book", value: "6a42841c42f64d5cd5de95d8" },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Images"
        name="images"
        rules={[
          { required: true, message: "Please upload at least one image" },
        ]}
      >
        <Upload listType="picture-card" maxCount={5} beforeUpload={() => false}>
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item label="Active" name="isActive" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Product
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddProduct;
