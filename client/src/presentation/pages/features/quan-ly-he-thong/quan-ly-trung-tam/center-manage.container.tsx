import { useGetCenters } from '@/presentation/hooks/center/useGetCenters'
import useQueryParams from '@/presentation/hooks/useSearchParams'
import CenterManageView from '@/presentation/pages/features/quan-ly-he-thong/quan-ly-trung-tam/center-manage.view'
import { useEffect, useState } from 'react'

const CenterManageContainer = () => {
  const [searchParams, { setParams, getParam }] = useQueryParams()

  const [filters, setFilters] = useState({
    centerName: getParam('centerName') || '',
    phone: getParam('phone') || '',
    page: Number(getParam('page')) || 1,
    limit: Number(getParam('limit')) || 1
  })

  const { query: queryCenters } = useGetCenters(filters)

  useEffect(() => {
    setParams({
      centerName: filters.centerName,
      phone: filters.phone,
      page: filters.page,
      limit: filters.limit
    })
  }, [filters])

  const handleFilter = (values: { centerName?: string; phone?: string }) => {
    setFilters({
      ...filters,
      centerName: values.centerName || '',
      phone: values.phone || '',
      page: 1
    })
  }

  const handleTableChange = (pagination: any) => {
    setFilters({
      ...filters,
      page: pagination.current,
      limit: pagination.pageSize
    })
  }

  return (
    <div>
      <CenterManageView
        data={queryCenters.data?.results}
        isLoading={queryCenters.isLoading}
        onFilter={handleFilter}
        onTableChange={handleTableChange}
        pagination={{
          current: filters.page,
          pageSize: filters.limit,
          total: queryCenters.data?.results?.meta.total || 0
        }}
      />
    </div>
  )
}

export default CenterManageContainer
