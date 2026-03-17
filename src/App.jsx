import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import { useState } from "react";


function App() {

  const [menPage, setMenPage] = useState(true);


  return (
    <>
      <AppHeader menPage={menPage} />
      <AppMain
        url_api_men="https://lanciweb.github.io/demo/api/actors/"
        url_api_women="https://lanciweb.github.io/demo/api/actresses/"
        menPage={menPage}
        setMenPage={setMenPage} />

    </>
  )
}

export default App
