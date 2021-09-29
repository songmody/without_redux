import React, {Component} from "react";

class AddNumber extends Component {
    state = {
        size: 0,
    }

    render() {
        return (
            <div>
                <h3>AddNumber</h3>
                <input type="button" value="+" onClick={function () {
                    this.props.onClick(this.state.size);    //4. 더하기 버튼 클릭 시 변경된 size값을 상위컴포너트의 onClick메소드에 전달.
                }.bind(this)}/>

                <input type="text" value={this.state.size} onChange={function (e) { //1. 더할 값 입력 | 3. 2에서 저장한 값을 value에 적용
                    this.setState({
                        size: Number(e.target.value)    //2. 이벤트 객체에서 값을 주워와서 size변수에 저장.
                    })
                }.bind(this)}/>
            </div>
        );
    }
}

export default AddNumber;
