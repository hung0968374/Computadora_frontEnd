import { takeEvery, takeLatest, put, delay } from "@redux-saga/core/effects";
import { goUp } from "../../features/post/screenSlice";
import { incrementSaga, sucessIncrementSaga } from "./counterSlice";

export function* handleIncrementCount(action) {
  console.log("hold a sec");
  yield delay(1000);
  console.log("stop waiting");
  console.log("action", action);
  yield put(sucessIncrementSaga(action.payload));
}

export default function* counterSaga() {
  console.log("counter saga");
  yield takeLatest(incrementSaga.toString(), handleIncrementCount);
}
