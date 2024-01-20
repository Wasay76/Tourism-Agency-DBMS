import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const DropTables = () => {
  const handleDropTables = () => {
    // Implement logic to drop tables
    // ...

    // Display a message after dropping tables
    alert('All tables have been dropped successfully!');
  };

  return (
    <Box>
      <Heading mb="4">Drop Tables</Heading>
      <Text mb="6">
        Click the button below to drop all tables. This action is irreversible, and it will delete all existing data.
      </Text>
      <Button colorScheme="red" onClick={handleDropTables}>
        Drop All Tables
      </Button>
    </Box>
  );
};

export default DropTables;