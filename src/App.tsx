import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { routes } from "./config/routes";
import students from "./mock/students.json";
import { storage } from "./services/storages";

function App() {
  useEffect(() => {
    if (!storage.get("students")) {
      storage.set("students", students);
    }
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
