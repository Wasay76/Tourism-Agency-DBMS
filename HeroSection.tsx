import { Fragment } from 'react';
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Box,
  
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import React from 'react';
import { FiBook, FiDelete, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Create Tables',
    detail: 'Can create a table or multiple tables',
    icon: FiBook (
      <svg
        aria-hidden="true"
        role="img"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={``}
        ></path>
      </svg>
    )
  },
  {
    title: 'Drop Tables',
    detail: 'You can select to drop a Table or a set of Tables',
    icon: FiDelete (
      <svg
        aria-hidden="true"
        role="img"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={`M3 3a2 2 0 012-2h9.982a2 2 0 011.414.586l4.018 4.018A2 2 0 0121 7.018V21a2 2 0 01-2 2H4.75a.75.75 
          0 010-1.5H19a.5.5 0 00.5-.5V8.5h-4a2 2 0 01-2-2v-4H5a.5.5 0 00-.5.5v6.25a.75.75 0 01-1.5 0V3zm12-.5v4a.5.5 
          0 00.5.5h4a.5.5 0 00-.146-.336l-4.018-4.018A.5.5 0 0015 2.5z`}
        ></path>
        <path
          d={`M4.53 12.24a.75.75 0 01-.039 1.06l-2.639 2.45 2.64 2.45a.75.75 0 11-1.022 1.1l-3.23-3a.75.75 0 
        010-1.1l3.23-3a.75.75 0 011.06.04zm3.979 1.06a.75.75 0 111.02-1.1l3.231 3a.75.75 0 010 1.1l-3.23 3a.75.75 
        0 11-1.021-1.1l2.639-2.45-2.64-2.45z`}
        ></path>
      </svg>
    )
  },
  {
    title: 'Insert Tables',
    detail: 'Build type safe applications, all components and hooks export types',
    icon: FiPlus(
      <svg
        aria-hidden="true"
        role="img"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={`M10.157 1.154a11.07 11.07 0 013.686 0 .75.75 0 01-.25 1.479 9.568 9.568 0 00-3.186 0 .75.75 0 
          01-.25-1.48zM6.68 3.205a.75.75 0 01-.177 1.046A9.558 9.558 0 004.25 6.503a.75.75 0 01-1.223-.87 
          11.058 11.058 0 012.606-2.605.75.75 0 011.046.177zm10.64 0a.75.75 0 011.046-.177 11.058 11.058 0 
          012.605 2.606.75.75 0 11-1.222.869 9.558 9.558 0 00-2.252-2.252.75.75 0 01-.177-1.046zM2.018 
          9.543a.75.75 0 01.615.864 9.568 9.568 0 000 3.186.75.75 0 01-1.48.25 11.07 11.07 0 010-3.686.75.75 
          0 01.865-.614zm19.964 0a.75.75 0 01.864.614 11.066 11.066 0 010 3.686.75.75 0 01-1.479-.25 9.56 9.56 
          0 000-3.186.75.75 0 01.615-.864zM3.205 17.32a.75.75 0 011.046.177 9.558 9.558 0 002.252 2.252.75.75 
          0 11-.87 1.223 11.058 11.058 0 01-2.605-2.606.75.75 0 01.177-1.046zm17.59 0a.75.75 0 01.176 1.046 
          11.057 11.057 0 01-2.605 2.605.75.75 0 11-.869-1.222 9.558 9.558 0 002.252-2.252.75.75 0 011.046-.177zM9.543 
          21.982a.75.75 0 01.864-.615 9.56 9.56 0 003.186 0 .75.75 0 01.25 1.48 11.066 11.066 0 01-3.686 0 .75.75 0 01-.614-.865z`}
        ></path>
      </svg>
    )
  }
];
const HeroSection = () => {
  return (
    <Fragment >
      <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Stack direction="column" spacing={10} justifyContent="center">
            <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left" textColor={'gray.700'}>
              Home Page
              <chakra.span bgGradient="linear(to-br, #228be6, #15aabf)" bgClip="text">
                {' '}
                Welcome!{' '}
              </chakra.span>{' '}
              <br /> See What you can expect!
            </chakra.h1>
            <Text
              color={useColorModeValue('gray.600','gray.700')}
              fontSize="lg"
              textAlign="left"
              fontWeight="400"
              maxW="700px"
            >
              A description of what you can expect when accessing the database, Being able to Create, Drop and Insert Data. Note: We have
              sections to view tables and Queries as well.
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 5, md: 10 }}
              flexWrap="wrap"
            >
              {features.map((feature, index) => (
                <Stack key={index} direction={{ base: 'row', md: 'column' }} spacing={2}>
                  <Flex
                    p={3}
                    maxH="52px"
                    w="max-content"
                    color="white"
                    bgGradient="linear(to-br, #228be6, #15aabf)"
                    rounded="md"
                  >
                    {feature.icon}
                  </Flex>
                  <Stack direction="column" spacing={2}>
                    <Text fontSize="md" fontWeight="500">
                      {feature.title}
                    </Text>
                    <Text fontSize="sm" color="gray.400" maxW={{ base: '100%', md: '200px' }}>
                      {feature.detail}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 0, sm: 2 }}
              flexWrap="wrap"
            >
              <Link to="/SimpleCard">
  <chakra.button
    h={12}
    px={6}
    bgGradient="linear(to-br, #228be6, #15aabf)"
    color="white"
    _hover={{ bgGradient: 'linear(to-br, #228be6, #228be6)' }}
    rounded="md"
    fontWeight="bold"
    mb={{ base: 2, sm: 0 }}
  >
    <chakra.span> Logout! </chakra.span>
  </chakra.button>
</Link>
              
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Box  overflow="hidden">
        <svg
          fill={useColorModeValue('#EDFDFD', '#EDFDFD')}
          width="150%"
          height="56px"
          transform="scaleX(-1)"
          filter="drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 
            250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 
            3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`}
          ></path>
        </svg>
      </Box>
    </Fragment>
  );
};

export default HeroSection;