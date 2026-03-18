import { createBrowserRouter, Outlet } from "react-router";
import { Home } from "./pages/Home";
import { Bruiloften } from "./pages/Bruiloften";
import { Bedrijfsfeesten } from "./pages/Bedrijfsfeesten";
import { VolledigProgramma } from "./pages/VolledigProgramma";
import { ScrollToTop } from "./components/ScrollToTop";
import { FormitableWidget } from "./components/FormitableWidget";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <FormitableWidget />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/bruiloften",
        Component: Bruiloften,
      },
      {
        path: "/bedrijfsfeesten",
        Component: Bedrijfsfeesten,
      },
      {
        path: "/programma",
        Component: VolledigProgramma,
      },
    ],
  },
]);