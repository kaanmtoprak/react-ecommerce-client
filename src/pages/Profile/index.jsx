import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {Button,Heading} from '@chakra-ui/react'

const Profile = () => {
    const navigate = useNavigate()
    const {user,logout} = useAuth();
    const handleLogOut = async () =>{
        logout(()=>{
            navigate("/")
        });
    }
  return (
    <div>
<Heading >Profile</Heading>
        <code>
            
            {
                JSON.stringify(user)
            }
        </code>
        <br /><br />
        <Button colorScheme="pink" variant="solid" 
        onClick={handleLogOut}
        >Log Out</Button>
    </div>
  )
}

export default Profile