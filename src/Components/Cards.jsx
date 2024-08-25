import React, { useContext } from 'react'
import { Context } from './Context/Context'
import Card from './Card'

const Cards = () => {
    const {Pokemon,searchData,DisplayPoke} =useContext(Context)
    
  return (
    <>
    {/* {searchData.map((p,i)=> <Card key={i} Pokemon={p}/>) } */}
    {DisplayPoke.map((p,i)=> <Card key={i} Pokemon={p}/>) }
{/* <Card/> */}
{/* <Card/> */}
    </>
    
  )
}

export default Cards