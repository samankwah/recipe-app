import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Welcome from "./pages/Welcome";
import Categories from "./pages/Categories";
import "./App.css";
import BottomNav from "./components/BottomNav";
import Favorites from "./pages/Favorites";
import NewRecipe from "./pages/NewRecipe";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/categories", element: <Categories /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/recipes/new", element: <NewRecipe /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <div className="mb-20"></div>

      <div style={{ display: location.pathname === "/" && "none" }}>
        <BottomNav />
      </div>
    </>
  );
}

export default App;
