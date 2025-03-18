import "./App.css";
import { Profile } from "./components/ProfileSections/Profile";
import { Navigation } from "./components/NavigationBar/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NotFoundPage } from "./components/NotFoundPage";
import { Employment } from "./components/EmploymentSection/Employment";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HomePage />
        <Navigation />
      </div>
    ),
    errorElement: (
      <div>
        <NotFoundPage />
        <Navigation />
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <Profile />
        <Navigation />
      </div>
    ),
  },
  {
    path: "/employment",
    element: (
      <div>
        <Employment />
        <Navigation />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="bg-mainBackGround relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
