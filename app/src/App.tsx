import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./appStyles/_app.scss"
import { Channels } from "./pages/channels/Channels"
import { Channel } from "./pages/_types/PageTypes"
import { PageLayout } from "./compenents/Layout/PageLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageLayout page={Channels.Home} />} />

        {Object.values(Channels).map((item: Channel, i: number) => (
          <Route
            key={`${item}${i}`}
            path={`${item.info.key}`}
            element={<PageLayout page={item} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
