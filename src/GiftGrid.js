import React from 'react'

const GiftGrid = ({category}) => {
   
   const getGifts = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=0Prt721UGu1gBT1CkSwKR1gZ93EO30wU';
        const resp = await fetch( url);
        const {data} = await resp.json();

        const gifs = data.map ( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })



        console.log( gifs );   // Desestructuro data dentro de Data

   }

   getGifts();

   
    return (
        <div>
           <h3> {category} </h3> 
        </div>
    )
}

export default GiftGrid
