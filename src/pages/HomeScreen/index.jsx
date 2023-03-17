import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Titulo } from './styled';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/tela2/testador');
  };

  return (
    <Container>
      <Titulo>Homepage</Titulo>
      <button onClick={handleButtonClick}>ir para a tela 2</button>
    </Container>
  );
};

export default HomeScreen;
