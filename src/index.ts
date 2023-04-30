import Login from "./pages/login";
import SignUp from "./pages/signup";
import ErrorPage from "./pages/error";
import ProfilePage from "./pages/profile";
import EditProfilePage from "./pages/editProfile";
import EditPasswordPage from "./pages/editPassword";
import HomePage from "./pages/home";

const error404 = ErrorPage({
  code: 404,
  message: "Не туда попали",
});
const error500 = ErrorPage({
  code: 500,
  message: "Мы уже фиксим",
});
const loginPage = Login();
const signUpPage = SignUp();
const profilePage = ProfilePage();
const editProfilePage = EditProfilePage();
const editPasswordPage = EditPasswordPage();
const homePage = HomePage();

const routes = [
  {
    path: "/",
    data: homePage,
  },
  {
    path: "/login",
    data: loginPage,
  },
  {
    path: "/signup",
    data: signUpPage,
  },
  {
    path: "/profile",
    data: profilePage,
  },
  {
    path: "/editpassword",
    data: editPasswordPage,
  },
  {
    path: "/editprofile",
    data: editProfilePage,
  },
  {
    path: "/404",
    data: error404,
  },
  {
    path: "/500",
    data: error500,
  },
];

const root = document.getElementById("root");


(window as any).router = (event: any) => {
  event.preventDefault();
  window.history.pushState({}, "newUrl", event.target.href);
  const route = routes.find(r => r.path === window.location.pathname);
  if (root != null && route?.data) {
    root.innerHTML = route.data;
  }
};

window.addEventListener("popstate", () => {
  const route = routes.find(r => r.path === window.location.pathname);
  if (root != null && route?.data) {
    root.innerHTML = route?.data;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const route = routes.find(r => r.path === window.location.pathname);

  if (root != null && route?.data) {
    root.innerHTML = route?.data;
  }
});
