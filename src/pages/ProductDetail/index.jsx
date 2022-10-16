import {useParams} from 'react-router-dom'
import {useQuery } from 'react-query'
import { fetchProduct } from '../../api';
import {Box,Text,Button,Flex, Grid} from '@chakra-ui/react'
import moment from "moment"
import ImageGallery from 'react-image-gallery'
import { useBasket } from '../../contexts/BasketContext';

const ProductDetail = () => {

const {product_id} = useParams();
const {addToBasket,items} = useBasket();
const {isLoading,isError,data} = useQuery(['product',product_id],()=>fetchProduct(product_id));
if(isLoading){
    return <div>Loading</div>
};
if(isError){
    return <div>ERROR.</div>
}
const findBasketItem= items.find((item)=>item._id===product_id)
const images = data.photos.map((url)=>({original:url}))



  return (
    <div>
        <Grid templateColumns='repeat(2, 1fr)' gap={2}>
          <Box>
          <Box margin="10"><ImageGallery items={images} showThumbnails={false}/></Box>
          </Box>
          <Box>
          <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
          <Text as="h2" fontSize="2xl">{data.title}</Text>
          <p>{data.description}</p>
          <Button colorScheme={
            findBasketItem ? "pink":"green"
        } onClick={()=>addToBasket(data,findBasketItem)}>{
            findBasketItem ? 'Remove From Basket' : 'Add To Basket'

          }</Button>
          </Box>
        </Grid>

    

   
    

   
 
    



    </div>
  )
}

export default ProductDetail