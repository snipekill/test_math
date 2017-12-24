import React, {Component} from 'react';

class MultiButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operation: props.symbol
        };

    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.props.onChangeOp(this.state.operation)}}>{this.state.operation}</button>
            </div>
        )
    }
}

export default MultiButton;