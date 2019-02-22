import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormContainer from "./FormContainer";


class App extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        const { seo_title } = this.state;
        return (
            <div className="container">
                <FormContainer />
            </div>
        );
    }
}

export default App;
