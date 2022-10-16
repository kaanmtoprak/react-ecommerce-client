import {Link} from 'react-router-dom'
import { useMemo } from 'react'
import { useQuery,useMutation,useQueryClient } from 'react-query'
import { fetchProductList,deleteProduct } from '../../../api'
import {Table,Popconfirm} from 'antd'
import { Button, Flex, Text } from '@chakra-ui/react'
const AdminProducts = () => {
  const queryClient = useQueryClient();
  const {isLoading,isError,data,error} = useQuery('admin:products',fetchProductList);

  const deleteMutation = useMutation(deleteProduct,{
    onSuccess: ()=>queryClient.invalidateQueries('admin:products')
  })
  const columns = useMemo(()=>{
return  [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render:(text,record)=>(
        <>
        <Link to={`/admin/products/${record._id}`}>Edit</Link>
        <Popconfirm title="Are you sure?" onConfirm={()=>{deleteMutation.mutate(record._id)}} 
        onCancel={()=>{}} okText="Delete" cancelText="Don't Delete" placement='left' ><a href='/#' style={{marginLeft:10}}>Delete</a></Popconfirm>
        
        </>
      )
    },
  ];

  },[])
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error {error.message}</div>
  }
  console.log(data)
  return (
    <div>
<Flex mb="4" justifyContent="space-between" alignItems="center">      <Text fontSize="2xl">Products</Text>
<Link to="/admin/products/new">   <Button  colorScheme="green">
        New Product +
      </Button></Link>
   </Flex>
      <Table dataSource={data} columns={columns} rowKey="_id" />;
    </div>
  )
}

export default AdminProducts