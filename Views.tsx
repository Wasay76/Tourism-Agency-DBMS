// Views.tsx
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Container, TableContainer, Tfoot, TableCaption, Text } from '@chakra-ui/react';

const Views = () => {
  // Dummy data for AccommodationDetails View
  const accommodationDetailsData = [
    { Account_Number: 101, DST_Id: 1, Price: 150, Type: 'Hotel', Rental_Condition: 'Good', Capacity: 50, Requirements: 'Wi-Fi' },
    { Account_Number: 102, DST_Id: 2, Price: 200, Type: 'Apartment', Rental_Condition: 'Excellent', Capacity: 4, Requirements: 'Swimming pool' },
    // Add more rows as needed
  ];

  // Dummy data for Users View
  const usersData = [
    { user_id: 1, Name: 'Wasay Adil', Email: 'wAdil@gmail.com' },
    { user_id: 2, Name: 'Gojo Satoru', Email: 'Domainex23@gmail.com' },
    // Add more rows as needed
  ];

  // Dummy data for Bookings View
  const bookingsData = [
    { Booking_ID: 1, user_id: 1, Travelers: 'John, Mary', Status: 'Confirmed' },
    { Booking_ID: 2, user_id: 2, Travelers: 'Jane, Peter', Status: 'Pending' },
    // Add more rows as needed
  ];

  // Dummy data for Reviews View
  const reviewsData = [
    { DST_Id: 1, Review: 'Great visit!', Dates: '2023-09-29', Ratings: 5 },
    { DST_Id: 2, Review: 'Amazing location!', Dates: '2023-09-30', Ratings: 4 },
    // Add more rows as needed
  ];

  return (
    <Container maxW='80%' mt='20'>
      {/* AccommodationDetails View */}
      <TableContainer mt='20'>
        <Table variant='simple' size='lg'>
          <TableCaption textColor="gray.700">AccommodationDetails View</TableCaption>
          <Thead>
            <Tr>
              <Th>Account Number</Th>
              <Th>DST Id</Th>
              <Th>Price</Th>
              <Th>Type</Th>
              <Th>Rental Condition</Th>
              <Th>Capacity</Th>
              <Th>Requirements</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accommodationDetailsData.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                <Td>{row.Account_Number}</Td>
                <Td>{row.DST_Id}</Td>
                <Td>{row.Price}</Td>
                <Td>{row.Type}</Td>
                <Td>{row.Rental_Condition}</Td>
                <Td>{row.Capacity}</Td>
                <Td>{row.Requirements}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Account Number</Th>
              <Th>DST Id</Th>
              <Th>Price</Th>
              <Th>Type</Th>
              <Th>Rental Condition</Th>
              <Th>Capacity</Th>
              <Th>Requirements</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      {/* Users View */}
      <TableContainer mt='20'>
        <Table variant='simple' size='lg'>
          <TableCaption textColor="gray.700">Users View</TableCaption>
          <Thead>
            <Tr>
              <Th>User ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usersData.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                <Td>{row.user_id}</Td>
                <Td>{row.Name}</Td>
                <Td>{row.Email}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>User ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      {/* Bookings View */}
      <TableContainer mt='20'>
        <Table variant='simple' size='lg'>
          <TableCaption textColor="gray.700">Bookings View</TableCaption>
          <Thead>
            <Tr>
              <Th>Booking ID</Th>
              <Th>User ID</Th>
              <Th>Travelers</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bookingsData.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                <Td>{row.Booking_ID}</Td>
                <Td>{row.user_id}</Td>
                <Td>{row.Travelers}</Td>
                <Td>{row.Status}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Booking ID</Th>
              <Th>User ID</Th>
              <Th>Travelers</Th>
              <Th>Status</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      {/* Reviews View */}
      <TableContainer mt='20'>
        <Table variant='simple' size='lg'>
          <TableCaption textColor="gray.700">Reviews View</TableCaption>
          <Thead>
            <Tr>
              <Th>DST Id</Th>
              <Th>Review</Th>
              <Th>Dates</Th>
              <Th>Ratings</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reviewsData.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                <Td>{row.DST_Id}</Td>
                <Td>{row.Review}</Td>
                <Td>{row.Dates}</Td>
                <Td>{row.Ratings}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>DST Id</Th>
              <Th>Review</Th>
              <Th>Dates</Th>
              <Th>Ratings</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Views;