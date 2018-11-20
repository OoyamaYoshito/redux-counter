import * as types from "./types";

const reducters={
    [types.COUNT_UP](old_state,action){
        return old_state+1
    },
};

const reducter = (old_state,action)=>
    reducters.hasOwnProperty(action.type)
        ? reducters[action.type](old_state,action)
        : old_state

export default reducter