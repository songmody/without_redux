import React, {Component} from "react";
import AddNumber from "../container/AddNumber";  //[wrapping] 기존 component말고 container에 동일 이름으로 추가한 AddNumber컴포넌트 임포트
// import AddNumber from "./AddNumber";


export default class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <h3>AddNumberRoot</h3>
                {/*<AddNumber onClick = {function (size){
                    this.props.onClick(size)    //[react]5. AddNumber컴포넌트에서 전달된 size값을 최상위 컴포넌트인 App에 전달.
                }.bind(this)}/>*/}
                <AddNumber/>
            </div>
        );
    }
}
