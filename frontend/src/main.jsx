import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About/About.jsx";
import SearchPatient from "./pages/SearchPatient/SearchPatient.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import RegisterPatient from "./pages/RegisterPatient/RegisterPatient.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterDoctor from "./pages/RegisterDoctor/RegisterDoctor.jsx";
import SearchDoctor from "./pages/SearchDoctor/SearchDoctor.jsx";
import Error from "./components/Error/Error.jsx";
import Layout from "./Layout.jsx";
import AdminPanel from "./pages/AdminPanel/AdminPanel.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/searchpatient", element: <SearchPatient /> },
      { path: "/signin", element: <Signin /> },
      { path: "/registerpatient", element: <RegisterPatient /> },
      { path: "/registerdoctor", element: <RegisterDoctor /> },
      { path: "/searchdoctor", element: <SearchDoctor /> },
      { path: "/adminpanel", element: <AdminPanel /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
);
