import React from 'react'
import food from '../assets/food.jpg'

const Introduction = () => {
  return (
    <div className="flex">
      <div className="w-6/12 ">
        <h1 className="text-5xl font-black leading-[70px]">
          Get a taste of tradition, and a feast for the senses.
        </h1>
        <p>
          Each meal is a celebration of authenticity, a tribute to the rich
          culinary heritage that defines our locale. Our kitchen is a bustling
          hub of creativity, where traditional recipes are infused with a
          contemporary twist, presenting you with a dining adventure that is
          both familiar and exhilarating
        </p>
        <button className="border-2 border-amber-600 bg-amber-600 py-1 px-4 rounded-3xl font-semibold mt-4 hover:bg-white">
          Get Started
        </button>
      </div>
      <img src={food} className="w-6/12 " alt=''/>
    </div>
  )
}

export default Introduction
