import React from 'react'
import spices from '../assets/spices.jpg'

const Blog = () => {
  return (
    <div className="flex flex-col my-4">
      <h3 className="mx-auto font-bold text-2xl border-b-2 border-amber-600">Blog</h3>
      <img src={spices} />
      <div className="relative -mt-[45.5rem] mx-8 w-3/6">
        <h2 className="text-4xl font-black leading-[70px] w-2/3">
          A Culinary Journey with
          <span className="text-amber-600 ml-1">the Magic of Spices</span>
        </h2>
        <p>
          Spices aromatic wonders do not only add depth and complexity to our
          meals but also carry a rich history and cultural significance. Join us
          on a flavorful journey as we explore the art of using spices to
          elevate your culinary experiences
        </p>
        <p className="mt-2">
          <span className="text-4xl font-bold leading-[70px]">B</span>uilding a
          well-stocked spice pantry is a fantastic way to enhance your culinary
          creations. Here are some essential spices to consider adding to your
          pantry:
        </p>
        <ol className="list-disc mx-4">
          <li>Ginger</li>
          <li>Cumin</li>
          <li>Rosemary</li>
          <li>Cloves</li>
        </ol>
      </div>
      <button className="border-2 border-red-800 bg-red-800 py-1 px-4 rounded ml-8 font-semibold mt-4 hover:bg-white w-fit text-slate-200">
        Read more
      </button>
    </div>
  )
}

export default Blog
