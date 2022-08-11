import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import pessoasReducer from "./PessoasReducer";
import enderecoReducer from "./EnderecoReducer";

export default combineReducers({
    authReducer,
    pessoasReducer,
    enderecoReducer
})