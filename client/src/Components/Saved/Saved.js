import React, { Component } from "react";
import Container from "../Container/Conainer";

class Saved extends Component {
    state={
        topics: "",
        results = []
    };

    render() {
        return (
            <div>
                <h1>{this.state.topics}</h1>
            </div>
        )
    }
}