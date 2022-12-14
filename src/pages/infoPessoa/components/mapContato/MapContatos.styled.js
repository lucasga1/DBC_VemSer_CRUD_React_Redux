import styled from "styled-components";

export const Container = styled.div`
    width: 380px;
    margin: 10px auto;
    padding: 20px 15px 4px 15px; 
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    box-shadow: 5px 5px 5px 0px #d6d6d675,
                5px 5px 5px 0px #cccccc;
    
    & h1{
        text-align: center;
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    & nav ul {
        display: grid;
        
        &>div {
            padding: 0 8px;
            margin-bottom: 10px;
            border: 1px solid #DFE0EB;
            border-radius: 8px;
            box-shadow: 5px 5px 5px 0px #d6d6d675,
                5px 5px 5px 0px #cccccc;
        }

        &>div>div{
            padding: 8px 8px 0 8px;
        }
        
        &>div>div:last-child{
            display: grid;
            grid-template-columns: auto auto;
        }
    }

    & li {
        list-style: none;
        padding: 3px;
    }

    & span{
        margin-right: 5px;
        font-weight: 600;
    }

    & button {
        background-color: #3751FF;
        color: #ffffff;
        font-size: 16px;
        margin: 0 5px 8px 5px;
        padding: 7px 10px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
`;