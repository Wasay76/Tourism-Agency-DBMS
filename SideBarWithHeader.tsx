import React, { useState } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { FiHome, FiPlus, FiBook,FiBookmark, FiChevronDown, FiMenu, FiBell} from 'react-icons/fi'; // Import your icons
import HeroSection from './HeroSection.tsx';
import CreateTables from './CreateTables.tsx';
import DropTables from './DropTables.tsx';
import Queries from './Queries.tsx';
import Views from './Views.tsx';




const LinkItems = [
  { name: 'Home', icon: <FiHome />, content: <HeroSection />, color: 'gray.700' },
  { name: 'Create Tables', icon: <FiPlus />, content: <CreateTables />, color: 'gray.700' },
  { name: 'Drop Tables', icon: <FiPlus />, content: <DropTables/>, color: 'gray.700' }, // Add the new route
  { name: 'Views', icon: <FiBook />, content: <Views />, color: 'gray.700' }, // Add the Views link
  { name: 'Queries', icon: <FiBook />, content: <Queries />, color: 'gray.700' }, // Add the new route
  // Add other links
];


const SideBarWithHeader = () => {
  const { isOpen,  onClose } = useDisclosure();
  const [selectedLink, setSelectedLink] = useState(null);

  const handleChangeContent = (content) => {
    onClose();
    setSelectedLink(content);
  };

  return (
    <Box minH="100vh" bg={'#fffbf7'}>
      <Box
        transition="3s ease"
        bg={'#fff7ef'}
        borderRight="1px"
        borderRightColor={'gray.200'}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Tourism Agency
          </Text>
          <CloseButton  display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <Box
            key={link.name}
            as="button"
            onClick={() => handleChangeContent(link.content)}
            _focus={{ boxShadow: 'none' }}
          >
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'cyan.400',
                color: 'white',
              }}
            >
              {link.icon && (
                <Box
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: 'white',
                  }}
                >
                  {link.icon}
                </Box>
              )}
              {link.name}
            </Flex>
          </Box>
        ))}
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Box
            transition="3s ease"
            bg={'white'}
            borderRight="1px"
            borderRightColor={'gray.200'}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
          >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
              <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Tourism Agency
              </Text>
              <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
              <Box
                key={link.name}
                as="button"
                onClick={() => handleChangeContent(link.content)}
                _focus={{ boxShadow: 'none' }}
              >
                <Flex
                  align="center"
                  p="4"
                  mx="4"
                  borderRadius="lg"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                  }}
                >
                  {link.icon && (
                    <Box
                      mr="4"
                      fontSize="16"
                      _groupHover={{
                        color: 'white',
                      }}
                    >
                      {link.icon}
                    </Box>
                  )}
                  {link.name}
                </Flex>
              </Box>
            ))}
          </Box>
        </DrawerContent>
      </Drawer>

      {/* Mobilenav component */}
      {/* ... Your MobileNav component code */}
     

      <Box ml={{ base: 0, md: 60 }} p="4">
        {selectedLink === null ? <HeroSection /> : selectedLink}
      </Box>
      
    </Box>
    
  );
};


export default SideBarWithHeader;