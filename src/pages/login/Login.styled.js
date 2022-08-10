import styled from "styled-components"

export const BgBody = styled.body`
background-color: #363740;
height: 100vh;
padding-top: 1.5%;
`;

export const Container = styled.div`
display: grid;
flex-direction: column; 
justify-items: center;
align-items: center;
width: 380px;
height: 580px;
margin: 0 auto;
border-radius: 8px;
background-color: #f3f3f3;
`;

export const Div = styled.div`
display: grid;
flex-direction: column;
justify-items: center;
align-items: center;
justify-content: center;

    & button {
        background-color: #3751FF;
        color: #ffffff;
        width: 316px;
        padding: 10px 8px;
        margin-top: 12px;
        border: none;
        border-radius: 8px;
    }
`;

export const Dashboard = styled.div`
display: grid;
justify-items: center;
text-align: center;
margin-top: 40px;
`;

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60px;
height: 60px;
background-color: #fff;
border: 1px solid #DFE0EB;
border-radius: 100%;
font-size: 60px;
`;

export const Title = styled.h1`
margin-top: 18px;
color: #000;
font-size: 20px;
font-weight: 700;
text-align: center;
`;

export const SubscribeDash = styled.h2`
color:#9FA2B4;
font-size: 19px;
font-weight: 700;
margin-top: 12px;
`;


export const Subscribe = styled.h2`
color:#9FA2B4;
font-size: 14px;
font-weight: 400;
margin-top: 12px;
`;

export const Errors = styled.div`
display: grid;
height: 17px;
padding: 3px 0 0 0;
`;

export const Inputs = styled.div`
display: grid;
& input{
    height: 42px;
    padding-left: 15px;
    background: #FCFDFE;
    border-radius: 8px;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
}
& input:focus {
    outline: none;
    background-color: #DFE0EB;
}
& input::placeholder {
    color: #9FA2B4;
    font-size: 12px;
    font-weight: 400;
}
& label { 
margin: 10px 0 5px 0;
text-transform: uppercase;
font-size: 12px;
font-weight: 700;
color: #9FA2B4;
}
& p {
    color: #FF4500;
    font-size: 12px;
}
`;

export const Link = styled.a`
color: #3751FF;
padding-left: 5px;
text-decoration: none;
`;

export const SpanSignup = styled.span`
font-size: 14px;
color: #9FA2B4;
text-align: center;
margin-top: 20px;
padding-bottom: 30px;
`;

export const SpanForgot = styled.span`
font-size: 10px;
font-weight: 400;
color: #9FA2B4;
padding-left: 158px;
`;