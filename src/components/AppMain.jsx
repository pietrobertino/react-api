import { useEffect } from "react"

export default function AppMain({ url_api }) {

    useEffect(() => {
        fetch(url_api)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }, [])

    return (
        <main>
            <div className="container">
                <div className="text-center">
                    <h1>Actresses</h1>
                    <p>List of actresses fetched from an API</p>
                </div>


            </div>
        </main>
    )
}