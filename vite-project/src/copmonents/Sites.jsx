import React from 'react'
import SiteCard from './SiteCard'

const API_KEY = import.meta.env.VITE_NASA_API_KEY
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

async function get_image_for_apod() {
    const respone = await fetch(url);
    const data = await respone.json()
    return data
}

const data = await get_image_for_apod()

export default function Sites(props) {
    return (
        <div className='grid md:grid-cols-2 h-2/5'>
            <SiteCard title={'NASA Image of the day'} url={'https://nasa-image-of-te-day.onrender.com'} description={'get a new image evry day'} previewUrl={data?.url} />
        </div>
    )
}
