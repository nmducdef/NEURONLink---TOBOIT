import type { CentersResponse } from '@/domain/model/Center'
import AddCenterPage from '@/presentation/pages/features/quan-ly-he-thong/quan-ly-trung-tam/add-center/add-center.page'
import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  ReloadOutlined,
  SearchOutlined,
  SettingFilled
} from '@ant-design/icons'
import { Button, Col, Dropdown, Form, Input, Row, Table, Typography, type MenuProps, type TableProps } from 'antd'
import dayjs from 'dayjs'
import { useEffect } from 'react'

const { Title } = Typography

interface Props {
  data?: CentersResponse
  isLoading?: boolean
  onFilter?: (values: { centerName?: string; phone?: string }) => void
  onTableChange?: (pagination: any) => void
  pagination?: {
    current: number
    pageSize: number
    total: number
  }
}

const CenterManageView = ({ data, isLoading, onFilter, onTableChange, pagination }: Props) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (pagination) {
      const urlParams = new URLSearchParams(window.location.search)
      form.setFieldsValue({
        centerName: urlParams.get('centerName') || '',
        phone: urlParams.get('phone') || ''
      })
    }
  }, [])

  const handleFilter = (values: any) => {
    onFilter?.(values)
  }

  const handleReset = () => {
    form.resetFields()
    onFilter?.({ centerName: '', phone: '' })
  }

  const getMenuItems = (_record: any): MenuProps['items'] => [
    {
      key: 'edit',
      label: 'Sửa',
      icon: <EditOutlined />
    },
    {
      key: 'delete',
      label: 'Xóa',
      icon: <DeleteOutlined />,
      danger: true
    }
  ]

  const columns: TableProps<any>['columns'] = [
    { key: 'CenterID', title: 'Mã trung tâm', dataIndex: 'CenterID', width: 120 },
    { key: 'CenterName', title: 'Tên trung tâm', dataIndex: 'CenterName', width: 300 },
    { key: 'Address', title: 'Địa chỉ', dataIndex: 'Address', width: 700 },
    { key: 'Phone', title: 'Số điện thoại', dataIndex: 'Phone', width: 120 },
    { key: 'Email', title: 'Email', dataIndex: 'Email', width: 180 },
    {
      key: 'Status',
      title: 'Trạng thái',
      dataIndex: 'Status',
      width: 160,
      render: (text) => (text === 'ACTIVE' ? 'Hoạt động' : 'Không hoạt động')
    },
    {
      key: 'CreatedAt',
      title: 'Ngày tạo',
      dataIndex: 'CreatedAt',
      width: 200,
      render: (text) => dayjs(text).format('DD/MM/YYYY HH:mm')
    },
    {
      key: 'action',
      title: <SettingFilled />,
      width: 50,
      fixed: 'right',
      align: 'center',
      render: (_, record) => (
        <Dropdown menu={{ items: getMenuItems(record) }} trigger={['click']}>
          <Button type='text' icon={<MoreOutlined />} />
        </Dropdown>
      )
    }
  ]

  return (
    <div className='px-4 py-4'>
      <div className='flex items-center justify-between mb-2'>
        <Title className='!font-bold !text-[#008080] !m-0' level={3}>
          Quản lý trung tâm
        </Title>

        <div>
          <AddCenterPage />
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-sm mb-4'>
        <Form form={form} layout='vertical' onFinish={handleFilter}>
          <Row gutter={[16, 0]}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item label='Tên trung tâm' name='centerName'>
                <Input placeholder='Nhập tên trung tâm' allowClear />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item label='Số điện thoại' name='phone'>
                <Input placeholder='Nhập số điện thoại' allowClear />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={8} className='!mt-0'>
              <Form.Item label=' '>
                <div className='flex gap-2'>
                  <Button
                    type='primary'
                    icon={<SearchOutlined />}
                    htmlType='submit'
                    loading={isLoading}
                    className='bg-[#008080] hover:!bg-[#006666]'
                  >
                    Tìm kiếm
                  </Button>
                  <Button icon={<ReloadOutlined />} onClick={handleReset}>
                    Đặt lại
                  </Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      <div>
        <Table
          className='[&_.ant-table-thead>tr>th]:!bg-[#008080] [&_.ant-table-thead>tr>th]:!text-white'
          size='small'
          columns={columns}
          dataSource={data?.data}
          loading={isLoading}
          scroll={{ x: 'max-content' }}
          pagination={{
            current: pagination?.current || 1,
            pageSize: pagination?.pageSize || 10,
            total: pagination?.total || 0,
            showSizeChanger: true,
            showTotal: (total) => `Tổng số ${total} trung tâm`,
            pageSizeOptions: ['10', '20', '50', '100']
          }}
          onChange={onTableChange}
        />
      </div>
    </div>
  )
}

export default CenterManageView
