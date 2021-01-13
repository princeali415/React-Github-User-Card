import React, { Component } from 'react'

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
            user: '',
        }
    }

    handleChange = e => {
        this.setState({user: e.target.value})
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.getusercard(this.state.user)
        this.setState({
            user: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search:
                        <input 
                        name='user'
                        onChange={this.handleChange}
                        value={this.state.user}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
