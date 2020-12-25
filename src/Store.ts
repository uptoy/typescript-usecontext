import React from 'react'

interface IState {
    episodes:[],
    favorites:[]
}

interface IAction {
    type:string,
    payload:any
}

const initialState:IState = {
    episodes:[],
    favorites:[]
}

export const Store = React.createContext<IState>(initialState)
function reducer(state:IState,action:IAction):IState{
    switch(action.type){
        case:'FETCH_DATE':
            return{...state.episodes:action.payload}
        default :
        retun state

}
