import { useContext, useReducer } from "react";
import { createContext } from "react";
import {reducer,initialState} from './ReducerFile'

const LoginContext=createContext()
const LoginProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer, initialState)
    
    return(
        
        <LoginContext.Provider value={{state,dispatch}}>
            {children}

        </LoginContext.Provider>
    )
}

export const useLogin=()=>useContext(LoginContext)

export default LoginProvider;