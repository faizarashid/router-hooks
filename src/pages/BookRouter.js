import { Routes,Route } from "react-router-dom";
import { BookList } from "./BookList";
import { NewBook } from "./NewBook";
import { Book } from "./Book";
import { BookLayout } from "./BookLayout";

export function BookRouter(){
return (
    <>
        <BookLayout/>
        <Routes>
            <Route path=":id" element={<Book />}/>
            <Route path="new" element={<NewBook />}/>
            <Route index element={<BookList />}/>
        </Routes>
    </>
    
)
}