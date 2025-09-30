import React from 'react'
import Card from './Card'

const theme = 'dark'

export default function Stats() {
    return (
        <div className='w-3/4 m-auto place-content-center grid md:grid-cols-2 gap-4'>
            <Card img_src={`https://github-readme-stats.vercel.app/api/top-langs/?username=theacebutler&theme=${theme}&show_icons=true&hide_border=true`} />
            <Card img_src={`https://github-readme-stats.vercel.app/api?username=theacebutler&show_icons=true&theme=${theme}&&hide_border=true`} />
            <Card img_src={'https://api.daily.dev/devcards/v2/oDDHtSqDTUPiCnFDEPRJz.png?type=wide&r=nk9'} />
        </div>
    )
}
