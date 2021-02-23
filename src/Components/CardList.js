import React from 'react'
import Card from './Card';

const CardList = ({Robot}) => {
    // console.log(Robot);
    const CardComponents = Robot.map((user,index) => {
        
        // console.log(index)
        // console.log("=====",user)
        return (
        <Card 
            key={index} 
            id = {Robot[index].id} 
            name ={Robot[index].name} 
            email={Robot[index].email}
        />

        )
        
    })

    
    return(
        <div>
           {CardComponents}
        </div>
    )
}
export default CardList;