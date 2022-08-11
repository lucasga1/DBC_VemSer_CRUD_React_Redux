import styled from "styled-components";

export const Container = styled.div`
    background-color: #eeeeee;
    width: 100vw;
    position: absolute;

    & h1{
        text-align: center;
        font-size: 24px;
        margin-top: 30px;
    }

    & form {
        display: grid;        
        background-color: #ffffff;
        max-width: 900px;
        margin: 30px auto;
        padding: 20px;
        border: 1px solid #DFE0EB;
        border-radius: 8px;
        box-shadow: 5px 5px 5px 0px #d6d6d675,
        5px 5px 5px 0px #cccccc;

        & label {
            margin: 0 25px 3px 25px;
            color: #363740;
            font-size: 14px;
            font-weight: 600;
        }
        
        & input {
            margin: 0 25px 10px 25px;
            padding-left: 15px;
            height: 35px;
            border:  1.5px solid #DFE0EB;
            border-radius: 8px;
            box-shadow: 5px 5px 5px 0px #d6d6d637,
            5px 5px 5px 0px #cccccc52;
        }

        & input:focus {
            outline: none;
            background-color: #E5E5E5;
        }

        & select {
            margin: 0 25px 10px 25px;
            padding-left: 15px;
            height: 35px;
            border:  1.5px solid #DFE0EB;
            border-radius: 8px;
            box-shadow: 5px 5px 5px 0px #d6d6d637,
            5px 5px 5px 0px #cccccc52;
        }

        & select:focus {
            outline: none;
            background-color: #E5E5E5;
        }

        & button {
        background-color: #3751FF;
        color: #ffffff;
        font-size: 16px;
        margin: 15px 25px 0 25px;
        padding: 7px 10px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
    }
`;