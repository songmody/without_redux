import React, {Component} from "react";
import AddNumber from "./AddNumber";

class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <h3>AddNumberRoot</h3>
                <AddNumber onClick = {function (size){
                    this.props.onClick(size)    //5. AddNumber컴포넌트에서 전달된 size값을 최상위 컴포넌트인 App에 전달.
                }.bind(this)}/>
            </div>
        );
    }
}

export default AddNumberRoot;