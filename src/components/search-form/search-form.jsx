import React, { Component } from "react";
import "./search-form.css";

export default class SearchForm extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
        };
    }

    searchNotes = (e) => {
        const search = e.target.value;
        console.log(search);
        this.setState({ search });
        this.props.searchNotes(search);
    };

    render() {
        return (
            <form className="app-header">
                <input
                    className="search-form"
                    placeholder="Type to search"
                    value={this.state.search}
                    onChange={this.searchNotes}
                ></input>
            </form>
        );
    }
}
