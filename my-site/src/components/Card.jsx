

export default function Card(porps) {
    const { name, url } = porps
    return (
        <div className="card">
            <h2>{name}</h2>
            <a href={url}>
                <button>
                    Check Out {name}
                </button>
            </a>
        </div>
    )
}