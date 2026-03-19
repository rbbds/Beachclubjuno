import { createBrowserRouter, Outlet } from "react-router";
import { Home } from "./pages/Home";
import { Bruiloften } from "./pages/Bruiloften";
import { Bedrijfsfeesten } from "./pages/Bedrijfsfeesten";
import { ParticuliereEvents } from "./pages/ParticuliereEvents";
import { VolledigProgramma } from "./pages/VolledigProgramma";
import { VeelgesteldeVragen } from "./pages/VeelgesteldeVragen";
import { ContactPage } from "./pages/ContactPage";
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
        path: "/particuliere-events",
        Component: ParticuliereEvents,
      },
      {
        path: "/programma",
        Component: VolledigProgramma,
      },
      {
        path: "/faq",
        Component: VeelgesteldeVragen,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
    ],
  },
]);