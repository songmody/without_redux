import React, {Component} from "react";
import store from "./store";

export default class AddNumber extends Component {
    state = {
        size: 0,
    }

    render() {
        return (
            <div>
                <h3>AddNumber</h3>
                <input type="button" value="+" onClick={function () {
                    // this.props.onClick(this.state.size);    //[react]4. 더하기 버튼 클릭 시 변경된 size값을 상위컴포너트의 onClick메소드에 전달.
                    store.dispatch({type: 'INCREMENT', size: this.state.size})
                }.bind(this)}/>

                <input type="text" value={this.state.size} onChange={function (e) { //[react]1. 더할 값 입력 | 3. 2에서 저장한 값을 value에 적용
                    this.setState({
                        size: Number(e.target.value)    //[react]2. 이벤트 객체에서 값을 주워와서 size변수에 저장.
                    })
                }.bind(this)}/>
            </div>
        );
    }
}
