import { all } from "@redux-saga/core/effects";
import counterSaga from "./counter/counterSaga";
import laptopItemsSaga from "./laptopItems/laptopItemsSaga";
function* helloSaga() {
  console.log("hello saga");
}

export default function* rootSaga() {
  console.log("root saga");
  yield all([helloSaga(), counterSaga(), laptopItemsSaga()]);
}
