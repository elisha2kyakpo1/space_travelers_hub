import { act } from "react-dom/cjs/react-dom-test-utils.production.min"

const initialState=[]

const missionsReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_API':
            return action.payLoad;
    }
}