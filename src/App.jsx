import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./pages/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { checkAuthAsync, selectUserChecked } from "./features/auth/authSlice";

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
};

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.loggedInUserToken);
  const userChecked = useSelector(selectUserChecked);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchLoggedInUserAsync());
      dispatch(fetchItemsByUserIdAsync());
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      {userChecked && (
        <Provider template={AlertTemplate} {...options}>
          <AppRouter />
        </Provider>
      )}
    </div>
  );
};

export default App;
