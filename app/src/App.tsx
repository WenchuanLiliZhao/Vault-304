import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./appStyles/_app.scss"
import Home from "./pages/channels/Main/Home"
import { Channels } from "./pages/_Pages"
import { Channel } from "./pages/_types/PageTypes"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={Home.content} />

        {Object.values(Channels).map((item: Channel, i: number) => (
          <Route
            key={`${item}${i}`}
            path={`${item.info.key}`}
            element={item.content}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
