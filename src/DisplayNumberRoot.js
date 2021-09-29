import React, {Component} from "react";
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends Component {
    render() {
        return (
            <div>
                <h3>DisplayNumberRoot</h3>
                {/*<DisplayNumber number = {this.props.number}/>  /!*[react]8. 전달받은 number값을 하위 컴포넌트인 DisplayNumber로 전달*!/*/}
                <DisplayNumber/>
            </div>
        );
    }
}

