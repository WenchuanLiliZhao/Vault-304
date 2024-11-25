import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./appStyles/_app.scss"
import { Channels } from "./pages/channels/Channels"
import { Page } from "./pages/_types/PageShapes"
import { PageLayout } from "./compenents/Layout/PageLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageLayout page={Channels.Home} />} />

        {Object.values(Channels).map((item: Page, i: number) => (
          <Route
            key={`${item}${i}`}
            path={`${item.basicInfo.key}`}
            element={<PageLayout page={item} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
