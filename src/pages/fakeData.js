import { Redirect, Route } from "react-router-dom";

<ProtectedRoute path="/checking" component={componentA} isAuth={isAuth} />;

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) return <Component />;
        else {
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }}
    />
  );
}
