import { Button, Card, Form, Input, Typography } from "antd";

const { Title } = Typography;

interface User {
  name: string;
  email: string;
  password: string;
}

const CreateUser = () => {
  const [form] = Form.useForm<User>();

  const handleSubmit = (values: User) => {
    console.log("User:", values);

    // Later:
    // POST API call to FastAPI
  };

  return (
    <Card
      style={{
        maxWidth: 600,
        margin: "30px auto",
      }}
    >
      <Title level={3}>Create User</Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters",
            },
          ]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Create User
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateUser;