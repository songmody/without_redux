import React, {Component} from "react";
import store from "./store";

export default class DisplayNumber extends Component {
    state = {
        number: store.getState().number  //내부적인 값 선언 -> constructor이용하여 자동으로 렌더링 되도록 함.
    }

    constructor(props) {
        super(props);
        store.subscribe(function (){
            this.setState({
                number : store.getState().number,
            });
        }.bind(this));
    }

    render() {
        console.log("displaynumber rendering" + store.getState().number)
        return (
            <div>
                <h3>DisplayNumber</h3>
                {/*<input type="text" value={this.props.number} readOnly/> /!*[react]전달받은 number값을 화면에 띄워줌.*!/!*/}
                <input type="text"
                       value={this.state.number} //value를 store에서 가져온 값으로 바꿔도 DisplayNumber 렌더링이 일어나지 않기 때문에 subcribe필요
                       readOnly/>
            </div>
        );
    }
}
