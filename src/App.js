import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import Fantasy from "./data/fantasy.json";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={Fantasy} />
      <MyFooter />
    </>
  );
}

export default App;
