import AddNumber from "../component/AddNumber";
import {connect} from "react-redux";

/*
* connect()함수호출, connect()(WrappedComponent)호출한 함수의 리턴값이 함수형태 이므로 ()두개임
* 두번째인자로 WrappedComponent를 보내면 그를 랩핑하는 껍데기 컴포넌트를 만들어서 리턴하는 함수.
* connect의 인자 2개, mapStateToProps, mapDispatchToProps, 없을 수도 있지만 한개만 있다면 mapStateToProps임.
* mapReduxStateToReactProps,,,, mapReduxDispatchToReactProps,,,,,,,,
* ------------mapReduxStateToReactProps 리덕스의 state를 리액트의 props로 맵핑해준다.-----------
* mapReduxStateToReactProps 리덕스의 state를 인자로 필요로한다.(subscribe, setState를 대신함.), 리덕스의 state값이 바뀔때마다 호출되도록 약속
*
* || mapReduxDispatchToReactProps 리덕스의 dispatch를 리액트의 props로 맵핑해준다.
* 전달되는 props가 상태전달이 없고 이벤트만 있다 하면 mapReduxDispatchToReactProps만 사용가능 -> connect(null, mapReduxDispatchToReactProps)(AddNumber);
* 이벤트 객체는 이름 그대로, 이벤트 함수 그대로 전달,
* mapReduxDispatchToReactProps만 인자는 dispatch라는 함수 인수로 설정. store따로 import할 필요가 없음.
* redux의 dispatch를 react의 컴포넌트에 props로 연결시켜주는 정보를 담고 있는 함수를 만들어서 공급해야함.
*
* */

function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick : function(size) {
                dispatch({type: 'INCREMENT', size: size});
            }.bind(this)
        }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

/*
import AddNumber from "../component/AddNumber";
import React, {Component} from "react";
import store from "../store";

/!* 기존 AddNumber컴포넌트에서 화면 + store모두 가지고 있어서 다른 어플리케이션에서 사용 불가
* 이를 해결하기 위해 container AddNumber컴포넌트 즉 store관리만 집중하는 컴포넌트를 생성함.
*  *!/

export default class extends Component{
    render() {
        return(
            <AddNumber onClick={
                function(size){
                    store.dispatch({type: 'INCREMENT', size: size});
                }.bind(this)
            }/>
        );
    }
}*/
