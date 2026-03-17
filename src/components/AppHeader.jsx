export default function AppHeader({ menPage }) {


    return (

        <header>
            {menPage ?
                <div id="men-header">
                    <div className="container">
                        <div className="text-center text-white p-3 fs-5">
                            Wonderful cast
                        </div>
                    </div>
                </div>
                :
                <div id="women-header">
                    <div className="container">
                        <div className="text-center text-white p-3 fs-5">
                            Wonderful cast
                        </div>
                    </div>
                </div>}
        </header>
    )
}