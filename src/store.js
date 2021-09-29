import {createStore} from "redux";

export default createStore(function (state, action){    //reducer | export default결과를 바깥으로 뺄수 있게.
    if(state === undefined){
        return {
            number:0,
        }
    }
    if(action.type === 'INCREMENT'){
        return {
            ...state, //2. state를 복제한 뒤 뒤에 선언된 변수들,즉 number값만 변경하는 코드(JS의 Three dots)
            number: state.number + action.size, // 1. 변경할 변수들이 많아지면 비효율적이므로
        };
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())