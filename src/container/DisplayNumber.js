import DisplayNumber from "../component/DisplayNumber";
import {connect} from "react-redux";


function mapReduxStateToReactProps(state) {
    return{
        number : state.number,
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);


/*
import DisplayNumber from "../component/DisplayNumber";
import React, {Component} from "react";
import store from "../store";

export default class extends Component {
    state = {
        number: store.getState().number  //내부적인 값 선언 -> constructor이용하여 자동으로 렌더링 되도록 함.
    }

    constructor(props) {
        super(props);
        store.subscribe(function () {
            this.setState({
                number: store.getState().number,
            });
        }.bind(this));
    }

    render() {
        return (
        <DisplayNumber number = {this.state.number}/>
    );
    }
}*/
