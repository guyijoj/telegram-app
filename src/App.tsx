import "./App.css";
import { Profile } from "./components/ProfileSections/Profile";
import { Navigation } from "./components/NavigationBar/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NotFoundPage } from "./components/NotFoundPage";
import { Employment } from "./components/EmploymentSection/Employment";
import { FindTeam } from "./components/FindTeamSection/FindTeam";
import { Response } from "./components/ResponseSection.tsx/Response";
import { Rentals } from "./components/RentalsSection/Rentals";
import { CreatingWorkSheet } from "./components/EmploymentSection/CreatingWorkSheet";

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
  {
    path: "/lobby",
    element: (
      <div>
        <FindTeam />
        <Navigation />
      </div>
    ),
  },
  {
    path: "/responses",
    element: (
      <div>
        <Response />
        <Navigation />
      </div>
    ),
  },
  {
    path: "/rentals",
    element: (
      <div>
        <Rentals />
        <Navigation />
      </div>
    ),
  },
  {
    path: "/createWorkSheet",
    element: (
      <div>
        <CreatingWorkSheet />,
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="bg-mainBackGround relativ w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
