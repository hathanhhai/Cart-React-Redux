import * as  types from '../../constants/actions_type';

var initialState = [
    {
        id:1,
        name:'Iphone 6',
        image:'',
        description:'ha thanh hai',
        price:500,
        inventory:5,
        rating:3
    },
    {
        id:2,
        name:'Samsung s6',
        image:'',
        description:'ha quang hai',
        price:700,
        inventory:4,
        rating:1
    },
    {
        id:3,
        name:'HTC 8',
        image:'',
        description:'ha duy hai',
        price:400,
        inventory:8,
        rating:4
    }
];

const myReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case types.PRODUCT_ALL:
            return state;
        
        default:
        return state;
    }
}

export default myReducer;