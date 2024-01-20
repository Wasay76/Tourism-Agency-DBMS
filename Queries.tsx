import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';

// Function to generate random queries
const generateRandomQueries = () => {
  const queries = [
    'SELECT * FROM Tourist_Locations WHERE Region = \'North America\'',
    'SELECT * FROM Accommodations WHERE Type = \'Hotel\'',
    'SELECT * FROM Reviews WHERE Ratings > 4',
    'SELECT * FROM Users WHERE user_id < 5',
    'SELECT * FROM Customer WHERE user_id < 3',
    'SELECT * FROM Employees WHERE user_id >= 3',
    'SELECT * FROM Bookings WHERE Status = \'Confirmed\'',
    'SELECT * FROM Room_res WHERE Res_date > \'2023-10-01\'',
    'SELECT * FROM Transportation WHERE Status = \'Scheduled\'',
    'SELECT * FROM Billing WHERE Cost > 100',
    // Add more queries as needed
  ];

  return queries[Math.floor(Math.random() * queries.length)];
};

const fetchQueryData = (query) => {
  // Simulate fetching data from the database based on the query
  // Replace this with actual data fetching logic
  if (query.includes('Tourist_Locations')) {
    return [
      { DST_Id: 1, Name: 'CN Tower', Country: 'Canada', Region: 'North America', Currency: 'CAD', Languages: 'English' },
      { DST_Id: 2, Name: 'New York City', Country: 'USA', Region: 'North America', Currency: 'USD', Languages: 'English' },
      // Add more data as needed
    ];
  } else if (query.includes('Accommodations')) {
    return [
      { Account_Number: 101, DST_Id: 1, Price: 150, Type: 'Hotel' },
      { Account_Number: 102, DST_Id: 2, Price: 200, Type: 'Apartment' },
      // Add more data as needed
    ];
  } else if (query.includes('Reviews')) {
    return [
      { DST_Id: 1, Review: 'Great visit!', Dates: '2023-09-29', Ratings: 5 },
      { DST_Id: 2, Review: 'Amazing location!', Dates: '2023-09-30', Ratings: 4 },
      // Add more data as needed
    ];
  } else if (query.includes('Users')) {
    return [
      { user_id: 1, Name: 'Wasay Adil', Email: 'wAdil@gmail.com' },
      { user_id: 2, Name: 'Gojo Satoru', Email: 'Domainex23@gmail.com' },
      // Add more data as needed
    ];
  } else if (query.includes('Customer')) {
    return [
      { user_id: 1, Passport: 'ABC123', Preferences: 'Sightseeing', Booking_History: 'Paris, New York' },
      { user_id: 2, Passport: 'XYZ456', Preferences: 'Shopping', Booking_History: 'New York, London' },
      // Add more data as needed
    ];
  } else if (query.includes('Employees')) {
    return [
      { user_id: 3, Address: '123 Main St', Street: 'Suite 101', City: 'New York City', States: 'NY' },
      { user_id: 4, Address: '456 Elm St', Street: 'Apt 202', City: 'Los Angeles', States: 'CA' },
      // Add more data as needed
    ];
  } else if (query.includes('Bookings')) {
    return [
      { Booking_ID: 1, user_id: 1, Travelers: 'John, Mary', Status: 'Confirmed' },
      { Booking_ID: 2, user_id: 2, Travelers: 'Jane, Peter', Status: 'Pending' },
      // Add more data as needed
    ];
  } else if (query.includes('Room_res')) {
    return [
      { Booking_ID: 1, Res_date: '2023-10-01', Check_Out: '2023-10-05' },
      { Booking_ID: 2, Res_date: '2023-10-10', Check_Out: '2023-10-15' },
      // Add more data as needed
    ];
  } else if (query.includes('Transportation')) {
    return [
      { Transport_ID: 1, User_ID: 1, Trans_Type: 'Flight', Status: 'Scheduled', Dep_Arrival: 'New York to Paris', Seat_Num: 15, Tik_Type: 'Economy' },
      { Transport_ID: 2, User_ID: 2, Trans_Type: 'Ship', Status: 'Confirmed', Dep_Arrival: 'Los Angeles to Tokyo', Seat_Num: 8, Tik_Type: 'Business' },
      // Add more data as needed
    ];
  } else if (query.includes('Billing')) {
    return [
      { Invoice_ID: 1, Cost: 120, User_ID: 1 },
      { Invoice_ID: 2, Cost: 180, User_ID: 2 },
      // Add more data as needed
    ];
  }

  return [];
};

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');

  // Move useColorModeValue calls outside of the callbacks
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const buttonColor = 'teal';

  const handleGenerateQuery = () => {
    const newQuery = generateRandomQueries();
    setCurrentQuery(newQuery);

    // Fetch and store data for the current query
    const queryData = fetchQueryData(newQuery);
    setQueries([...queries, { query: newQuery, data: queryData }]);
  };

  useEffect(() => {
    handleGenerateQuery(); // Generate a query when the component mounts
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <VStack spacing={4} align="start" p={4}>
      <Text fontSize="xl" fontWeight="bold" color={textColor}>
        Random Queries
      </Text>
      <HStack>
        <Text fontSize="lg" color={textColor}>
          {currentQuery}
        </Text>
        <Badge colorScheme={buttonColor}>{queries.length} Queries</Badge>
      </HStack>
      <Button onClick={handleGenerateQuery} colorScheme={buttonColor}>
        Generate New Query
      </Button>
      <Accordion w="100%" allowToggle>
        {queries.map((queryData, index) => (
          <AccordionItem key={index} borderColor={borderColor}>
            <AccordionButton _focus={{ outline: 'none' }}>
              <Box flex="1" textAlign="left">
                Query {index + 1}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack align="start" spacing={2}>
                <Text fontSize="md" color={textColor}>
                  {queryData.query}
                </Text>
                <Box>
                  {queryData.data.map((row, rowIndex) => (
                    <Box key={rowIndex} mb={2} borderRadius="lg" p={2} bg={bgColor}>
                      {Object.entries(row).map(([key, value]) => (
                        <Text key={key} fontSize="sm" color={textColor}>
                          {key}: {value}
                        </Text>
                      ))}
                    </Box>
                  ))}
                </Box>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
};

export default Queries;