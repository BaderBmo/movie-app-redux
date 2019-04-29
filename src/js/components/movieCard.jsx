import React from 'react';
import ByRate from './searchByRate'


const MovieCard=(props)=>
<div className="card">

    <div className="image">
        <div className="rating">
            <ByRate filmRate={props.description.rating} handleTheRate={()=>{}} />
        </div>
        <img src={props.description.image} alt=""/>
    </div>

    <div className="title">
        {props.description.title}
    </div>
    
</div>

export default MovieCard;