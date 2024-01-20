// SimpleCard.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { login } from './AuthService'; // Adjust the path based on your file structure

export default function SimpleCard() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const isSuccess = login(username, password);

    if (isSuccess) {
      // Successful login, you can redirect or set some state indicating the user is logged in
      console.log('Login successful');
      navigate('./SideBarWithHeader'); // Replace '/dashboard' with the desired route
      setError('Correct');
    } else {
      // Failed login, display an error message
      setError('Invalid username or password');
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login into your Tourism Database</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              {error && <Text color="red.500">{error}</Text>}
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
