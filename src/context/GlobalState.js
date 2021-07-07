import React,{createContext,useReducer} from "react";

import AppReducer from "./AppReducer";

//Intial State

const intitalState = {
    tasks:[{
        id:1,
        name:"nachiket",
        date:"05-05-2021",
        time:"07:00AM"
    }]
};


// Create Context

export const GlobalContext = createContext(intitalState);


//Provider Component

export const GlobalProvider =({children})=>{
    const [state,dispatch] = useReducer(AppReducer,intitalState);

    //Actions
    function addTask(task){
        dispatch({
            type:"ADD_TASK",
            payload:task
        });
    }

    return(<GlobalContext.Provider value={{
        tasks:state.tasks,
        addTask
    }}>
        
        {children}
    </GlobalContext.Provider>)
}