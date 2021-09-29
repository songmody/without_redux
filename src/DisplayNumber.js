import React, {Component} from "react";

class DisplayNumber extends Component {
    render() {
        return (
            <div>
                <h3>DisplayNumber</h3>
                <input type="text" value={this.props.number} readOnly/> {/*전달받은 number값을 화면에 띄워줌.*/}
            </div>
        );
    }
}

export default DisplayNumber;
