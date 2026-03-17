import { Button } from "bootstrap";
import { useState, useEffect } from "react"

export default function AppMain({ url_api_men, url_api_women }) {

    const [actors, setActors] = useState([]);
    const [actresses, setActresses] = useState([]);
    const [menPage, setMenPage] = useState(true);

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
                <div className="text-center mt-5">
                    <h1>Actors</h1>
                    <p>List of actors fetched from an API</p>
                </div>

                <div className="text-end">
                    {menPage ?
                        <button id="women-btn" className="btn mt-5 mb-1" onClick={() => setMenPage(false)}>
                            Switch to female actresses
                        </button>
                        :
                        <button id="men-btn" className="btn mt-5 mb-1" onClick={() => setMenPage(true)}>
                            Switch to male actors
                        </button>
                    }
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {menPage ?
                        actors.map(actor => (
                            <div className="col" key={actor?.id}>
                                <div className="man-card card p-3 h-100 text-center">
                                    <div className=" card-title fs-2  fw-bold">{actor.name}</div>
                                    <img src={actor.image} alt={actor.name} className=" " />
                                    <div className=" card-subtitle fst-italic mt-1">{actor.birth_year} {actor.nationality}</div>
                                    <div className=" card-body">
                                        <p className="card-text">{actor.biography}</p>
                                        <div className=" card-text fst-italic"><span className="fw-bold ">Awards:</span><br />{actor.awards} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        actresses.map(actor => (
                            <div className="col" key={actor?.id}>
                                <div className="woman-card card p-3  h-100 text-center">
                                    <div className=" card-title fs-2  fw-bold">{actor.name}</div>
                                    <img src={actor.image} alt={actor.name} className=" " />
                                    <div className=" card-subtitle fst-italic mt-1">{actor.birth_year} {actor.nationality}</div>
                                    <div className=" card-body">
                                        <p className="card-text">{actor.biography}</p>
                                        <div className=" card-text fst-italic"><span className="fw-bold ">Awards:</span><br />{actor.awards} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </main>
    )
}