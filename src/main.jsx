import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import { ClerkProvider, useUser } from "@clerk/clerk-react";
import Profile from "./profile/index";
import AddListing from "./add-listing";
import SearchByCategory from "./search/[category]";
import SearchByOption from "./search";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/profile", element: <Profile /> },
  { path: "/add-listing", element: <AddListing /> },
  { path: "/search", element: <SearchByOption /> },
  { path: "/search/:category", element: <SearchByCategory /> },
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// const user = useUser();
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
