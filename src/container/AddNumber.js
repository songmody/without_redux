import AddNumber from "../component/AddNumber";
import React, {Component} from "react";
import store from "../store";

/* 기존 AddNumber컴포넌트에서 화면 + store모두 가지고 있어서 다른 어플리케이션에서 사용 불가
* 이를 해결하기 위해 container AddNumber컴포넌트 즉 store관리만 집중하는 컴포넌트를 생성함.
*  */

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
}