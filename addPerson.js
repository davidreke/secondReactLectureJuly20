import  React, {Component} from 'react';

class AddPerson extends Component{
    state = {
        name: null,
        age: null,
        favoriteFood: null
    }

    handleChange = (e) => {
        // console.log(e.target.id)
        // 1. this .setState takes an object as its argument
        // 2. We use setState() rather than this.state.name= because we want to return a new state. This is called non-mutation
        // 3. I only need to pass in the property/value pairs of state that I want updated
        this.setState({
            [e.target.id]: e.target.value
        })
        // console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addMeBrah(this.state)
    }


    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange}/>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" onChange={this.handleChange}/>
            <label htmlFor="favoriteFood">Favorite Food</label>
            <input type="text" id="favoriteFood" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
        )
    }
}

export default AddPerson