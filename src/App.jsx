import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";


function App() {

  return (
    <>
      <AppHeader />
      <AppMain url_api_men="https://lanciweb.github.io/demo/api/actors/" url_api_women="https://lanciweb.github.io/demo/api/actresses/" />
    </>
  )
}

export default App
