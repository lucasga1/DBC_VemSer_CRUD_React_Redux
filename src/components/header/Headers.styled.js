import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    grid-template-columns: 5fr 1fr;
    justify-items: flex-end;
    align-content: center;
    background-color: #363636;
    width: 100vw;

    & div:first-child {
        display: grid;
        align-content: center;
        margin: 10px 85px;
        padding: 4px 25px;

        & a {
            text-decoration: none;
        }
        & nav ul li{
            list-style: none;
            color: #ffffff;
            font-size: 18px;
        }
 }
`;