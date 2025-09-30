import React from 'react'

export default function Card(props) {
    const {title, url, name,  description, img_src} = props
  return (
    <div className='shadow-2xl h-fit rounded-4xl max-md: max-w-64'>
        <h2>{title}</h2>
        <a href={url}>{name}</a>
        <img className='rounded-2xl' src={img_src} alt="" />
        <p>{description}</p>
    </div>
  )
}
