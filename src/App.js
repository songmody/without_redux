import './App.css';
import React, {Component} from "react";
import AddNumberRoot from "./component/AddNumberRoot";
import DisplayNumberRoot from "./component/DisplayNumberRoot";

class App extends Component {
    state = {
        number: 0,
    }

    render() {
        return (
            <div className="App">
                <h3>Root</h3>
                {/*<AddNumberRoot onClick={*/}
                {/*    function (size) {*/}
                {/*        this.setState({*/}
                {/*            number: this.state.number + size,   //[react]6. 전달받은 size값을 초기화 되어있는 number값에 더함.*/}
                {/*        })*/}
                {/*    }.bind(this)}/>*/}

                {/*<DisplayNumberRoot number = {this.state.number}/>   [react]7. 더한 number값을 DisplayNumberRoot props값으로 전달. */}
                <AddNumberRoot/>
                <DisplayNumberRoot/>
            </div>
        );
    }
}

export default App;
