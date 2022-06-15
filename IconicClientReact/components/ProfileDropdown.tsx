import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuItem,
  MenuList, Skeleton,
  Text,
  Link as ChakraLink,
  useColorModeValue as mode,
  useMenuButton,
  UseMenuButtonProps,
} from '@chakra-ui/react'
import * as React from 'react'
import {useRouter} from "next/router";
//import { logout } from '../helpers/AuthHelper';


export const ProfileDropdown = () => {

  const router = useRouter()
  // const logoutUser = () => {
  //   //logout()
  //   router.push('/login')
  // }
  return (
      <Menu>
        <MenuList rounded="md" shadow="lg" py="1" color={mode('gray.600', 'inherit')} fontSize="sm">
          <HStack px="3" py="4">
            <Box lineHeight="1">
            </Box>
          </HStack>
          <MenuItem fontWeight="medium">Your Profile</MenuItem>
          <MenuItem fontWeight="medium">Feedback & Support</MenuItem>
          {/*<MenuItem fontWeight="medium">Account Settings</MenuItem>/<MenuItem onClick={logoutUser} fontWeight="medium" color={mode('red.500', 'red.300')}>*/}
          {/*  Выйти*/}
          {/*</MenuItem>*/}
        </MenuList>
      </Menu>
  )
}
