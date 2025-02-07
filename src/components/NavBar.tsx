import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/images/logo.jpg'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} blockSize={12}  padding={1} border={32} borderRadius={123}/>
        <Text>Nav Bar</Text>
    </HStack>
  )
}

export default NavBar