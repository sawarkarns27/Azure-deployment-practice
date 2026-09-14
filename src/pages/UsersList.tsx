import { Button, Card, Popconfirm, Space, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Title } = Typography;

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersList = () => {
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
    },
    {
      id: 3,
      name: "Rahul Patil",
      email: "rahul@gmail.com",
    },
  ];

  const handleEdit = (user: User) => {
    console.log("Edit:", user);
  };

  const handleDelete = (id: number) => {
    console.log("Delete:", id);
  };

  const columns: ColumnsType<User> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete User"
            description="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card style={{ margin: "30px" }}>
      <Title level={3}>Users List</Title>

      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        bordered
        pagination={{
          pageSize: 10,
        }}
      />
    </Card>
  );
};

export default UsersList;