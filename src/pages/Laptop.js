import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isFetchingLaptopDatasByPage } from "../redux/features/LaptopSlice";

export default function Laptop() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(isFetchingLaptopDatasByPage(currentPage));
  }, [currentPage]);
  return <div>laptop</div>;
}
