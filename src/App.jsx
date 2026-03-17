import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";


function App() {

  const url_api = "https://lanciweb.github.io/demo/api/actresses/";

  return (
    <>
      <AppHeader />
      <AppMain url_api={url_api} />
    </>
  )
}

export default App
