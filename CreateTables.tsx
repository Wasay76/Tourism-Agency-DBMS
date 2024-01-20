// CreateTables.js
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Container, TableContainer, Tfoot, TableCaption } from '@chakra-ui/react';
import {
  TouristLocationsTable,
  AccommodationsTable,
  RentalTable,
  ServicesTable,
  UsersTable,
  CustomerTable,
  EmployeesTable,
  BookingsTable,
  RoomResTable,
  TransportationTable,
  ShipTable,
  PlaneTable,
  BillingTable,
  PaymentsTable,
  ReviewsTable,
} from './CreateConstant'; // Adjust the path as needed

const CreateTables = () => {
  const tables = [
    { title: 'Tourist Locations', data: [
      { DST_Id: 1, Name: 'CN Tower', Country: 'Canada', Region: 'North America', Currency: 'CAD', Languages: 'English' },
      { DST_Id: 2, Name: 'New York City', Country: 'USA', Region: 'North America', Currency: 'USD', Languages: 'English' },
      { DST_Id: 8, Name: 'Taj Mahal', Country: 'India', Region: 'Asia', Currency: 'INR', Languages: 'Hindi, English' },
      // Add more rows as needed
    ], tableSchema: TouristLocationsTable },
    { title: 'Accommodations', data: [
      { Account_Number: 101, DST_Id: 1, Price: 150, Type: 'Hotel' },
      { Account_Number: 102, DST_Id: 2, Price: 200, Type: 'Apartment' },
      { Account_Number: 108, DST_Id: 8, Price: 175, Type: 'Hotel' },
      // Add more rows as needed
    ], tableSchema: AccommodationsTable },
    { title: 'Rental', data: [
      { Account_Number: 101, Rental_ID: 1, Condition: 'Good' },
      { Account_Number: 102, Rental_ID: 2, Condition: 'Excellent' },
      { Account_Number: 108, Rental_ID: 8, Condition: 'Excellent' },
      // Add more rows as needed
    ], tableSchema: RentalTable },
    { title: 'Services', data: [
      { Account_Number: 101, Capacity: 50, Requirements: 'Wi-Fi' },
      { Account_Number: 102, Capacity: 4, Requirements: 'Swimming pool' },
      { Account_Number: 108, Capacity: 100, Requirements: 'Gym' },
      // Add more rows as needed
    ], tableSchema: ServicesTable },
    { title: 'Users', data: [
      { user_id: 1, Name: 'Wasay Adil', Email: 'wAdil@gmail.com' },
      { user_id: 2, Name: 'Gojo Satoru', Email: 'Domainex23@gmail.com' },
      // Add more rows as needed
    ], tableSchema: UsersTable },
    { title: 'Customer', data: [
      { user_id: 1, Passport: 'ABC123', Preferences: 'Sightseeing', Booking_History: 'Paris, New York' },
      { user_id: 2, Passport: 'XYZ456', Preferences: 'Shopping', Booking_History: 'New York, London' },
      // Add more rows as needed
    ], tableSchema: CustomerTable },
    { title: 'Employees', data: [
      { user_id: 3, Address: '123 Main St', Street: 'Suite 101', City: 'New York City', States: 'NY' },
      { user_id: 4, Address: '456 Elm St', Street: 'Apt 202', City: 'Los Angeles', States: 'CA' },
      // Add more rows as needed
    ], tableSchema: EmployeesTable },
    { title: 'Bookings', data: [
      { Booking_ID: 1, user_id: 1, Travelers: 'John, Mary', Status: 'Confirmed' },
      { Booking_ID: 2, user_id: 2, Travelers: 'Jane, Peter', Status: 'Pending' },
      // Add more rows as needed
    ], tableSchema: BookingsTable },
    { title: 'Room Reservations', data: [
      { Booking_ID: 1, Res_Date: '2023-10-01', Check_Out: '2023-10-05' },
      { Booking_ID: 2, Res_Date: '2023-10-10', Check_Out: '2023-10-15' },
      // Add more rows as needed
    ], tableSchema: RoomResTable },
    { title: 'Transportation', data: [
      // Add data for Transportation table
    ], tableSchema: TransportationTable },
    { title: 'Ship', data: [
      // Add data for Ship table
    ], tableSchema: ShipTable },
    { title: 'Plane', data: [
      // Add data for Plane table
    ], tableSchema: PlaneTable },
    { title: 'Billing', data: [
      // Add data for Billing table
    ], tableSchema: BillingTable },
    { title: 'Payments', data: [
      // Add data for Payments table
    ], tableSchema: PaymentsTable },
    { title: 'Reviews', data: [
      { DST_Id: 1, Review: 'Great visit!', Dates: '2023-09-29', Ratings: 5 },
      { DST_Id: 2, Review: 'Amazing location!', Dates: '2023-09-30', Ratings: 4 },
      { DST_Id: 8, Review: 'Incredible architecture!', Dates: '2023-10-06', Ratings: 5 },
      // Add more rows as needed
    ], tableSchema: ReviewsTable },
  ];

  return (
    <Container maxW='80%' mt='20'>
      {tables.map((table, index) => (
        <TableContainer key={index} mt='20'>
          <Table variant='simple' size='lg'>
            <TableCaption textColor="gray.700">{table.title}</TableCaption>
            <Thead>
              <Tr>
                {Object.keys(table.tableSchema).map(header => (
                  <Th key={header} textColor="gray.700">{header}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {table.data.map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  {Object.keys(table.tableSchema).map(column => (
                    <Td key={column} textColor="gray.700">{row[column]}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                {Object.keys(table.tableSchema).map(header => (
                  <Th key={header} textColor="gray.700">{header}</Th>
                ))}
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      ))}
    </Container>
  );
};

export default CreateTables;