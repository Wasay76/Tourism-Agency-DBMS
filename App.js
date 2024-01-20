import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimpleCard from './Components/SimpleCard.tsx';
import SidebarWithHeader from './Components/SideBarWithHeader.tsx';
import DropTables from './Components/DropTables.tsx'; // Import the new component
import Queries from './Components/Queries.tsx'; // Import the new component
import Views from './Components/Views.tsx'; // Import the Views component

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SimpleCard />} />
          <Route path="/SimpleCard" element={<SimpleCard />} />
          <Route
            path='/SidebarWithHeader'
            element={<SidebarWithHeader username="wasay.adil@ryerson.ca" />}
          />
          <Route path="/DropTables" element={<DropTables />} />
          <Route path="/Queries" element={<Queries />} /> {/* Add the new route */}
          <Route path='/Views' element={<Views />} /> {/* Add the Views component route */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;