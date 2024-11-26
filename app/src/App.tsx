import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./appStyles/_app.scss";
import { Channels } from "./pages/channels/Channels";
import { Page } from "./pages/_types/PageShapes";
import { PageLayout } from "./compenents/Layout/PageLayout";
import { TestBook } from "./pages/collections/TestBook/_Index";
import { Books } from "./pages/collections/_Collections";
import React from "react";

function App() {
  for (let i = 0; i < TestBook.subpages.Chapter_3.postInfo?.toc.length; i++) {
    const element = TestBook.subpages.Chapter_3.postInfo?.toc[i];

    console.log(element.info.title);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageLayout page={Channels.Home} />} />

        {Object.values(Channels).map((item: Page, i: number) => (
          <Route
            key={`${item}${i}`}
            path={`/${item.info.key}`}
            element={<PageLayout page={item} />}
          />
        ))}

        {Object.values(Books).map((book, i: number) => (
          <React.Fragment key={`${book}${i}`}>
            <Route
              path={`/${book.cover.info.key}`}
              element={<PageLayout page={book.cover} />}
            />

            {Object.values(book.subpages).map((page: Page, k: number) => (
              <Route key={`${page}${k}`} element={<PageLayout page={page} />} />
            ))}
          </React.Fragment>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
