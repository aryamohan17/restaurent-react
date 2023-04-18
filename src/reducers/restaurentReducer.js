import { SUCCESS,FAIL } from "../constants/restuarentConstants"

export const restReducer=(state={restuarentList:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                restuarentList:action.payload
            }
        case FAIL:
            return{
                restuarentList:action.payload
            }
        default:
            return state
    }
}