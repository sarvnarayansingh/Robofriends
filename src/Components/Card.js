import React from 'react';

const Card =(props) => {
    const { name, email, id } = props;
    return(
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow'>
            <img alt="robrot" src={`https://robohash.org/${id}?200*200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
             </div>
        </div>
       
    )
} 
export default Card;
