import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Titulo } from './styled';

const Tela2Screen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let { nome } = useParams();

    const name = useSelector(state => state.user.name);

    const handleTextChange = (e) => {
        dispatch({
            type: 'SET_NAME',
            payload: {
                name:e.target.value
            }
        });
    }

    return(
        <Container>
            <Titulo>Tela 2 de {nome}</Titulo>
            <input type="text" value={name} onChange={handleTextChange} />

            <button onClick={()=>navigate(-1)}>Voltar</button>
        </Container>
    );
}
export default Tela2Screen;