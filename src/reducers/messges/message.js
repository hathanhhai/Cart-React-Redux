import * as  types from '../../constants/actions_type';
import * as Message from '../../constants/message'

var initialState = Message.MSG_WELCOME;
  

const myReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case types.CHANGE_MESSAGE:

                state=action.message

            return state;
        
        default:
        return state;
    }
}

export default myReducer;