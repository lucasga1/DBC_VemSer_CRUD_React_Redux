import styled from "styled-components"; 

export const Body = styled.body`
background: #346D84;
height: 100%;
`;

export const Div = styled.div`
display: grid;
justify-items: center;
margin: 0 auto;
& button{
    width: 500px;
    height: 100px;
    font-size: 30px;
    margin-bottom: 50px;
}
`;