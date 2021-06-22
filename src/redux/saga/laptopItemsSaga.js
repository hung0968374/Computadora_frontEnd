import { takeLatest, put, call } from "@redux-saga/core/effects";
import {
  isFetchingLaptopDatasByPage,
  fetchedLaptopDatasByPage,
} from "../features/LaptopSlice";
import * as Api from "../../api/index";

export function* handleFetchLaptopItems(action) {
  console.log("action payload", action.payload);
  const laptopItems = yield call(Api.fetchPostByPage, action.payload);
  console.log("laptopItems datas", laptopItems.data);
  yield put(fetchedLaptopDatasByPage(laptopItems.data));
}

export default function* laptopItemsSaga() {
  console.log("laptopItem saga");
  yield takeLatest(
    isFetchingLaptopDatasByPage.toString(),
    handleFetchLaptopItems
  );
}
