import { all } from "@redux-saga/core/effects";
import laptopItemsSaga from "./laptopItemsSaga";

export default function* rootSaga() {
  console.log("root saga");
  yield all([laptopItemsSaga()]);
}
