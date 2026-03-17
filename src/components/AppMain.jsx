import { useState, useEffect } from "react"

export default function AppMain({ url_api_men, url_api_women }) {

    const [actors, setActors] = useState([]);
    const [actresses, setActresses] = useState([]);

    useEffect(() => {
        fetch(url_api_men)
            .then(response => response.json())
            .then(data => {
                setActors(data)
            })
        fetch(url_api_women)
            .then(response => response.json())
            .then(data => {
                setActresses(data)
            })
    }, [])

    return (
        <main>
            <div className="container">
                <div className="text-center">
                    <h1>Actors</h1>
                    <p>List of actors fetched from an API</p>
                </div>

                <div>
                    {actors.map(actor => (
                        <div key={actor?.id} className=" card p-3">
                            <div className=" card-title">{actor.name}</div>
                            <img src={actor.image} alt={actor.name} className=" card-img" />
                            <div className=" card-subtitle">{actor.birth_year} {actor.nationality}</div>
                            <div className=" card-body">
                                <p className="card-text">{actor.biography}</p>
                                <div className=" card-text">Awards: <br /> {actor.awards} </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}