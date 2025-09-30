import React from 'react'

export default function SiteCard(props) {
    const { title, url, description, previewUrl } = props
    return (
        <div className='shadow-2xl border rounded-2xl grid gap-1 place-items-center md:w-64 md:min-h-80 relative'>
            <h3>
                {title}
            </h3>
            <a href={url} target='_blank'>
                <div className="grid gap-0.5">
                    {
                        previewUrl &&
                        <div className="border rounded-2xl m-3">
                            <img src={previewUrl} className='rounded-2xl size-[100%]' />
                        </div>
                    }
                    <button className='border border-amber-100 hover:opacity-50 transition-opacity rounded-2xl py-1 px-2 bg-blue-950 place-self-center'>
                        check it out
                    </button>
                </div>
            </a>
        </div>
    )
}
