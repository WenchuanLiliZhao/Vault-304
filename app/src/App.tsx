import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./appStyles/_app.scss";
import { Channels } from "./pages/channels/Channels";
import { Page } from "./pages/_types/PageShapes";
import { PageLayout } from "./compenents/Layout/PageLayout";
import { Books } from "./pages/books/_Collections";
import React from "react";
import { People } from "./pages/People/_PeopleEnum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<PageLayout page={Channels.Home} type="channel" />}
        />

        {Object.values(Channels).map((item: Page, i: number) => (
          <Route
            key={`${item}${i}`}
            path={`/${item.info.path}`}
            element={<PageLayout page={item} type="channel" />}
          />
        ))}

        {Object.values(People).map((item, i: number) => (
          <Route
            key={i}
            path={`/${item.info.path}`}
            element={<PageLayout page={item} type="person" />}
          />
        ))}

        {Object.values(Books).map((book, i: number) => (
          <React.Fragment key={`${book}${i}`}>
            <Route
              path={`/${book.cover.info.path}`}
              element={<PageLayout page={book.cover} type="book cover" />}
            />

            {Object.values(book.subpages).map((page: Page, k: number) => (
              <Route
                key={`${page}${k}`}
                path={`/${page.info.path}`}
                element={<PageLayout page={page} type="post" />}
              />
            ))}
          </React.Fragment>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
