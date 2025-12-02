import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayout/MainLayOut";
import Home from "../Pages/Home";
import ServicesCard from "../Components/ServicesCard";
import Profile from "../Pages/Profile";
import Services from "../Pages/Services";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import Loading from "../Components/Loading";
import PrivateRoute from "../Provider/PrivateRoute";
import UpdateProfilePage from "../Pages/UpdateProfilePage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: (
      <p className="text-center mt-10 text-3xl font-bold text-red-600">
        Not Page Found!
      </p>
    ),
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/petCareData.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/services",
        Component: Services,
        loader: () => fetch("/petCareData.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/update/profile",
        Component: UpdateProfilePage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/service/details/:id",
        element: <ServiceDetailsPage></ServiceDetailsPage>,
        loader: () => fetch("/petCareData.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/forget/password",
        Component: ForgetPasswordPage,
      },
    ],
  },
]);
