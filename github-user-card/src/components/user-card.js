import React, { Component } from 'react'
import Search from './Search'
import axios from 'axios'

export default class UserCard extends Component {
    constructor(){
        super();
        this.state = {
            card: [],
            userCard: {},
        }
    }

    getUserCard = user => {
        axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
            this.setState({
                userCard: res.data,
            })
            this.setState({
                card:[...this.state.card, this.state.userCard]
            })
        })
        .catch(err => {
            debugger
        })
    }

    componentDidMount() {
        this.getUserCard('princeali415')
    }


    render() {
        return (
            <div>
                <Search getusercard={this.getUserCard}/>
                <div className='card-container'>
                    {this.state.card.map(e => {
                        return (
                            <div className='usercard'>
                                <h2>{e.login}</h2>
                                <img src={e.avatar_url} alt='profile' />
                                <div className='cardLinks'>
                                <span><a href={`https://github.com/${e.login}?tab=followers`}>{`Followers: ${e.followers} `}</a></span>
                                <span><a href={`https://github.com/${e.login}?tab=following`}>{`Following: ${e.following} `}</a></span>
                                <span><a href={`https://github.com/${e.login}?tab=repositories`}>{`Projects`}</a></span>
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
