import React, {Component} from 'react'
import ReactDOM from 'react-dom';

import DisplayCounter from './components/display_counter';
import MultiButton from './components/multi_button';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
        this.State1Change = this.State1Change.bind(this);
    }

    State1Change(operation) {
        let myVar;

        if (operation === "+") {
            window.clearTimeout(myVar);

            if (this.state.counter !== 100)
                this.setState({counter: this.state.counter + 1});
            else
                alert("NO");
        }
        else if (operation === "-") {
            window.clearTimeout(myVar);
            if (this.state.counter !== 0)
                this.setState({counter: this.state.counter - 1});
            else
                alert("NO");
        }
        else if (operation === "<<") {
            window.clearTimeout(myVar);
            console.log("continous wala sub");
            myVar = setInterval(() => {
                if (this.state.counter === 0)
                    window.clearTimeout(myVar);
                else
                    this.setState({counter: this.state.counter - 1})
            }, 1000);
        }
        else if (operation === ">>") {
            console.log("continous wala add");
            window.clearTimeout(myVar);

            myVar = setInterval(() => {
                if (this.state.counter === 100)
                    window.clearTimeout(myVar);
                else
                    this.setState({counter: this.state.counter + 1})
            }, 1000);


        }


    }

    render() {
        return (
            <div>
                <div className={"DisplayStyle"}>
                    <DisplayCounter count={this.state.counter}/></div>

                <div className={"row"}>


                    <div className={"col-3"}>

                        <MultiButton onChangeOp={this.State1Change} symbol={"<<"}/></div>
                    <div className={"col-3"}>
                        <MultiButton onChangeOp={this.State1Change} symbol={"-"}/></div>
                    <div className={"col-3"}>
                        <MultiButton onChangeOp={this.State1Change} symbol={"+"}/></div>
                    <div className={"col-3"}>
                        <MultiButton onChangeOp={this.State1Change} symbol={">>"}/></div>
                </div>

            </div>);
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'));