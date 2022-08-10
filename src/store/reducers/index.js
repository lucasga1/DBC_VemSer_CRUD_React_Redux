import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import pessoasReducer from "./PessoasReducer";
import infoPessoaReducer from "./InfoPessoaReducer";

export default combineReducers({
    authReducer,
    pessoasReducer,
    infoPessoaReducer
})