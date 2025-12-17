import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const AddCenterView = () => {
  return (
    <div>
      <Button
        type='primary'
        size='middle'
        icon={<PlusOutlined />}
        className='bg-[#008080] hover:!bg-[#006666] [&>span]:!p-0'
      >
        <span className='hidden sm:inline !p-0 !m-0'>Thêm trung tâm</span>
      </Button>
    </div>
  )
}

export default AddCenterView
