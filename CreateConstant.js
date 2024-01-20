// constants.js

export const TouristLocationsTable = {
    DST_Id: 'NUMBER PRIMARY KEY',
    Name: 'VARCHAR(25)',
    Country: 'VARCHAR(25)',
    Region: 'VARCHAR(25)',
    Currency: 'VARCHAR(25)',
    Languages: 'VARCHAR(25)',
  };
  
  export const AccommodationsTable = {
    Account_Number: 'NUMBER PRIMARY KEY',
    DST_Id: 'NUMBER',
    Price: 'NUMBER',
    Type: 'VARCHAR(25)',
  };
  
  export const RentalTable = {
    Account_Number: 'NUMBER',
    Rental_ID: 'NUMBER',
    Condition: 'VARCHAR(25)',
  };
  
  export const ServicesTable = {
    Account_Number: 'NUMBER',
    Capacity: 'NUMBER',
    Requirements: 'VARCHAR(25)',
  };
  
  export const UsersTable = {
    user_id: 'NUMBER PRIMARY KEY',
    Name: 'VARCHAR(25)',
    Email: 'VARCHAR(25)',
  };
  
  export const CustomerTable = {
    user_id: 'NUMBER',
    Passport: 'VARCHAR(25)',
    Preferences: 'VARCHAR(25)',
    Booking_History: 'VARCHAR(25)',
  };
  
  export const EmployeesTable = {
    user_id: 'NUMBER',
    Address: 'VARCHAR(25)',
    Street: 'VARCHAR(25)',
    City: 'VARCHAR(25)',
    States: 'VARCHAR(25)',
  };
  
  export const BookingsTable = {
    Booking_ID: 'NUMBER PRIMARY KEY',
    user_id: 'NUMBER',
    Travelers: 'VARCHAR(25)',
    Status: 'VARCHAR(25)',
  };
  
  export const RoomResTable = {
    Booking_ID: 'NUMBER PRIMARY KEY',
    Res_Date: 'DATE',
    Check_Out: 'DATE',
  };
  
  export const TransportationTable = {
    Transport_ID: 'NUMBER PRIMARY KEY',
    User_ID: 'NUMBER',
    Trans_Type: 'VARCHAR(25)',
    Status: 'VARCHAR(25)',
    Dep_Arrival: 'VARCHAR(25)',
    Seat_Num: 'NUMBER',
    Tik_Type: 'VARCHAR(25)',
  };
  
  export const ShipTable = {
    Ship_Num: 'NUMBER',
    Transport_ID: 'NUMBER',
    Dock: 'VARCHAR(25)',
  };
  
  export const PlaneTable = {
    Flight_Num: 'NUMBER',
    Transport_ID: 'NUMBER',
    Airport_Loc: 'VARCHAR(25)',
  };
  
  export const BillingTable = {
    Invoice_ID: 'NUMBER PRIMARY KEY',
    Cost: 'INT',
    User_ID: 'NUMBER',
  };
  
  export const PaymentsTable = {
    Invoice_ID: 'NUMBER',
    Payment_Method: 'VARCHAR(16)',
    Trans_Date: 'DATE',
  };
  
  export const ReviewsTable = {
    DST_Id: 'NUMBER PRIMARY KEY',
    Review: 'VARCHAR(25)',
    Dates: 'DATE',
    Ratings: 'NUMBER',
  };