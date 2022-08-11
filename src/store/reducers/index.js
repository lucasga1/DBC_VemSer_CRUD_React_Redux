import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import pessoasReducer from "./PessoasReducer";
import enderecoReducer from "./EnderecoReducer";
import contatosReducer from "./ContatosReducer";

export default combineReducers({
    authReducer,
    pessoasReducer,
    enderecoReducer,
    contatosReducer
})