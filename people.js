import React from 'react';
  
// when making a fucntional component, props must be passed in as an argument
const People = (props) => {

    
        // this gives me the value of props
        // console.log(props);
        // us destructuring on props
        
        const { arrayOfPeople } = props;

        console.log(arrayOfPeople)

        const listOfPeoplehtml = arrayOfPeople.map(person => {
           
            return person.age > 25? (
                    <div className='person' key={person.id}>
                        <div>Name: {person.name}</div>
                        <div>Age: {person.age}</div>
                        <div>Favorite food: {person.favoriteFood}</div>
                    </div>
                ) :
                null
            
        }
    )

        return (

        <div className="people">
          { listOfPeoplehtml }
        </div>
        )
    }



export default People;