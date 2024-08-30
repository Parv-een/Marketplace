import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignUpPage from "../pages/SignUpPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <>
    <Route path="sign-up" element={<SignUpPage />}></Route>
    <Route path="login-page" element={<LoginPage />}></Route>
    <Route path="/" element={<div>HomePage</div>}></Route>
    <Route path="landing-page" element={<LandingPage />}></Route>
    <Route path="*" element={<NotFoundPage />}></Route>
  </>
);
const router = createBrowserRouter(routes);
export default router;
