import Card from './Card'
import Head from './Head'
import Sites from './Sites'
import Stats from './Stats'



export default function MainPage() {
    return (
        <section className='min-h-screen'>
            <Head />
                <Sites />
                <Stats />
        </section>
    )
}
