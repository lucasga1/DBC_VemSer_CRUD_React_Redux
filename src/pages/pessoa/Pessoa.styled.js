import styled from "styled-components";

export const Container = styled.div`   
    background-color: #eeeeee;
    width: 100%;
    position: absolute;
`;

export const DivH1 = styled.div`
   height: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;

    & h1{
        font-size: 22px;
        text-align: center;
    }
    
    & button {
        background-color: #3751FF;
        color: #ffffff;
        font-size: 16px;
        padding: 6px 25px;
        border: none;
        border-radius: 8px;
        box-shadow: 5px 5px 5px 0px #d6d6d637,
        5px 5px 5px 0px #cccccc52;
        cursor: pointer;
    }
`; 

export const DivPessoas = styled.div`
    margin: 30px auto;
    max-width: 1200px;
    background-color: #ffffff8f;
    border: 1px solid #DFE0EB; 
    border-radius: 8px;
    padding: 20px 30px;
    box-shadow: 5px 5px 5px 0px #d6d6d637,
    5px 5px 5px 0px #cccccc52;
    
    
`;

export const Pessoas = styled.div`
    background-color: #ffffff;
    margin: 10px 0;
    padding: 10px 15px;
    border: 1px solid #DFE0EB; 
    border-radius: 8px;
    box-shadow: 5px 5px 5px 0px #d6d6d637,
            5px 5px 5px 0px #cccccc52;

    & div:first-child{        
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    & div > div:first-child:hover {
        cursor: pointer;
    }
    & div > div:first-child{
        display: flex;
        flex-direction: column;
    }
    & div > div:last-child{
        display: grid;
        grid-template-columns: repeat(4, auto);
        align-items: center;
        padding-bottom: 0;
    }
   
    & div > div:first-child>div:first-child{
        padding-bottom: 5px;
    }

    & div > div:first-child>div:last-child{
        display: flex;
        flex-direction: row;       
        
        border-top: 1px solid #DFE0EB;
        padding-top: 5px;

        & li {
            margin-right: 15px;
            padding-right: 15px;
            border-right: 1px solid #DFE0EB;
        }

        & li:last-child {
            border: none;
            margin: 0;
            padding: 0;
        }
    }

    & div:first-child>div>li{
        font-size: 16px;
        list-style: none;
        padding-right: 10px;
            & span {
                font-weight: 700;
        }
    }
     
    & button {
        background-color: #3751FF;
        color: #ffffff;
        font-size: 14px;
        margin: 0 5px;
        padding: 5px 10px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

`;

