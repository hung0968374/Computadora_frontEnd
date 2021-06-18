import {
  takeEvery,
  takeLatest,
  put,
  delay,
  call,
} from "@redux-saga/core/effects";
import { fetchingItems, fetchedItems } from "./laptopItemsSlice";
import * as Api from "../../../api/index";

export function* handleFetchLaptopItems(action) {
  console.log("action payload", action.payload);
  const laptopItems = yield call(Api.fetchPostByPage, action.payload);
  console.log("laptopItems datas", laptopItems.data);
  yield put(fetchedItems(laptopItems.data));
}

export default function* laptopItemsSaga() {
  console.log("laptopItem saga");
  yield takeLatest(fetchingItems.toString(), handleFetchLaptopItems);
}
