import React from 'react';

const SearchBox = (props) => {
    return(
        <div className = "pa3">
             <input 
                className="ba bg-light-blue b--green pa3 " 
                type ="search" 
                placeholder = "search robots"
                onChange={props.searchChange} />
        </div>
    )
}
export default SearchBox;