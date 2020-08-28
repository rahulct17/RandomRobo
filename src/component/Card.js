import React from "react";
const Card = ({name , email , id}) => {

  return (

    <div className='tc bg-light-green dib br3 pd3 ma2 grow bw-2 shadow-5'>
    <img alt="Random Robo" src={`https://robohash.org/${id}?200x200`} />
    <div>
    <h2> {name}</h2>
    <p>{email} </p>
    </div>
    </div>
  );
}



export default Card;
