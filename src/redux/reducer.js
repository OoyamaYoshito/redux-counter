import * as types from "./types";
import cloneDeep from "lodash.clonedeep";

const reducters={
    [types.COUNT_UP](old_state,action){
        const state = cloneDeep(old_state)
        state.count++;
        return state;
    },
};

const reducter = (old_state,action)=>
    reducters.hasOwnProperty(action.type)
        ? reducters[action.type](old_state,action)
        : old_state

export default reducter