import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./appStyles/_app.scss";
import { Channels } from "./pages/channels/Channels";
import { Page } from "./pages/_types/PageShapes";
import { PageLayout } from "./compenents/Layout/PageLayout";
import { Books } from "./pages/books/_Collections";
import React from "react";
import { People } from "./pages/People/_PeopleEnum";
import { SiteInfo } from "./SiteInfo";
import { DateFormatter, GetTodayDateArray } from "./compenents/Functions/Date";
import { TestPage } from "./pages/Test/_TestPage";

function App() {
  const welcome = `Welcome to ${SiteInfo.title}`;

  console.log(
    `
\n${"*".repeat(welcome.length + 4)}\n* ${welcome} *\n${"*".repeat(
      welcome.length + 4
    )}
${SiteInfo["about & location"]}
❤️ ${DateFormatter(GetTodayDateArray())[1]} ${DateFormatter(GetTodayDateArray())[2]} ${DateFormatter(GetTodayDateArray())[0]} @Shanghai ❤️

`
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<PageLayout page={Channels.Home}/>}
        />

        <Route
          path={`/${TestPage.info.path}`}
          element={<PageLayout page={TestPage} />}
        />

        {Object.values(Channels).map((item: Page, i: number) => (
          <Route
            key={`${item}${i}`}
            path={`/${item.info.path}`}
            element={<PageLayout page={item} />}
          />
        ))}

        {Object.values(People).map((item, i: number) => (
          <Route
            key={i}
            path={`/${item.info.path}`}
            element={<PageLayout page={item} />}
          />
        ))}

        {Object.values(Books).map((book, i: number) => (
          <React.Fragment key={`${book}${i}`}>
            <Route
              path={`/${book.cover.info.path}`}
              element={<PageLayout page={book.cover} />}
            />

            {Object.values(book.subpages).map((page: Page, k: number) => (
              <Route
                key={`${page}${k}`}
                path={`/${page.info.path}`}
                element={<PageLayout page={page} />}
              />
            ))}
          </React.Fragment>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
