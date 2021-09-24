import React from 'react';
//import logo from './logo.svg';
// import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton/>
      </Layout>

    </ChakraProvider>
  );
}

export default App;
