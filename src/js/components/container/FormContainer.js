import React, { Component } from "react";
import Input from "../presentational/Input";

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            person_name: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { person_name } = this.state;
        return (
            <div>
                <div className="alert alert-success" role="alert">Input Value:{person_name}</div>
                <form id="article-form">
                    <Input
                        text="Name"
                        label="person_name"
                        type="text"
                        id="person_name"
                        value={person_name}
                        handleChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default FormContainer;
