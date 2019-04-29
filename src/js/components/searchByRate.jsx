import React from 'react';
const ByRate=(props)=>{
    const {filmRate,handleTheRate}=props
    let array=[]
    for(let i=0;i<5;i++){
        if (i<filmRate){
        array.push(<div><i class="fas fa-star" onClick={()=>handleTheRate(i+1)}  ></i></div>)}
        else{
        array.push(<div><i class="far fa-star" onClick={()=>handleTheRate(i+1)}></i></div>)}} 
        return <div className="rate-search">{array}</div>}

export default ByRate;