import React, { Component } from 'react'

class User extends Component {
  state = {
    api: [],
  }
  
  componentDidMount = () => {
  fetch ('https://api.randomuser.me/')
  .then (response => response.json())
  .then (data => 
    {this.setState({ api: data.results})
  })
}

changeDataJson(dataJson) {
  this.setState({ api: dataJson });
}


// foto, nome, email e idade do usuário 
  render(){
    const {picture:{thumbnail}, name:{first}, email, dob:{age}} = this.state

    return(
      <div>
        <h1>
          Individuo alaeatorio
        </h1>
        <div key={first}>
          <h3>{first}</h3>
          <img src={thumbnail} alt={first}/>
          <h4>{email}</h4>
          <h4>{age}</h4>
        </div>
      </div>
    )
  }
}

export default User;