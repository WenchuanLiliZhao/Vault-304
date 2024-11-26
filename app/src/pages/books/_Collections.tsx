import { MergeSubpages } from "../../compenents/Functions/BookHandling";
import { TestBook } from "./TestBook/_Index";

// eslint-disable-next-line react-refresh/only-export-components
export const Books = {
  TestBook,
}


export const BookPages = MergeSubpages(Books);