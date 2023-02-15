import React from "react";

export default class Comp extends React.Component {
    render() {
        return (
            <div>
                <h1>Components</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}