import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./pages/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.loggedInUser);
  console.log("user", user);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
