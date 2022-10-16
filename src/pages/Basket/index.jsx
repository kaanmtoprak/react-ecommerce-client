import { Alert,Image,Button,Box,Text,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,
    FormControl,
FormLabel,Input, Textarea } from '@chakra-ui/react';
import {useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/BasketContext';
import { postOrder } from '../../api';

const Basket = () => {
    const {items,removeFromBasket,emptyBasket} = useBasket();
    const total = items.reduce((acc,obj)=>acc +obj.price ,0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null);
    const [address,setAddress] = useState();
    const handleSubmitForm = async () =>{
        const itemIds= items.map((item)=>item._id)

        const input = {
            address,
            items:JSON.stringify(itemIds)
        };
       await postOrder(input);

        emptyBasket();
        onClose();
    };

    console.log(items)
  return (
    <Box p="10">

    {items.length<1 && <Alert status='warning'>There is no item in your basket</Alert>}
    {items.length>0 && (
        <>

            <ul>
                {items.map((item)=>(
                    <li key={item._id} style={{marginBottom:15}}>
                        <Link to={`/product/${item._id}`}>
                            <Text fontSize="20">{item.title} - {item.price} ₺</Text>
                            <Image htmlWidth={200} src={item.photos[0]}alt ="basket item"loading='lazy' />
                        </Link>
                        <Button mt="2" size="sm" colorScheme="pink" onClick={()=>removeFromBasket(item._id)}>Remove From Basket</Button>
                    </li>
                ))}
            </ul>
        
        
            <Box mt="10">
                <Text fontSize="22">Total : {total} ₺</Text>
                
            </Box>
        <Button onClick={onOpen} mt='s' size="sm" colorScheme="green">Order</Button>
        <Modal
        initialFocusRef={initialRef}

        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Adress</FormLabel>
              <Textarea ref={initialRef} placeholder='Address' value={address} onChange={(e)=>{setAddress(e.target.value)}} />
            </FormControl>


          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmitForm} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )}

    

    </Box>
  );
}

export default Basket