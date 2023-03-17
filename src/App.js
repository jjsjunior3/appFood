import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import MenuItem from './components/MenuItem';

function App() {
  const name = useSelector(state => state.user.name);
  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <Link to="/"><MenuItem icon="/assets/store.png"/></Link>
          <Link to="/orders"><MenuItem icon="/assets/order.png"/></Link>
          <Link to="/profile"><MenuItem icon="/assets/profile.png"/></Link>
        </Menu>
        <PageBody>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/tela2/:nome" element={<Tela2Screen/>} />
          </Routes>
        </PageBody>
      </Container>


    </BrowserRouter>
  );
}

export default App;  





