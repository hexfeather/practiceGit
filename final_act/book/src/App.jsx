import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { BookRoutes } from "./BookRoutes";

function App() {
  return (
    <div className="flex">
      <nav className="bg-navy w-64 min-h-screen p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className=" text-gold text-xl p-2 block hover:text-dark-gold border-b-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className=" text-gold text-xl p-2 block hover:text-dark-gold"
            >
              Books
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/*" element={<BookRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
