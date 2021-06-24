import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  // const token = useSelector(tokenFromRdx);
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token !== null ? (
          <Component {...props} key={token} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
