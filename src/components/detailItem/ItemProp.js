import React, { useState, useEffect, useRef } from "react";
import * as styles from "./itemProp.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  itemInCart,
  addingNewProductToCart,
  recoverItemsInCartEveryRefresh,
} from "../../redux/features/cart/cartSlice";
import { ToastInfoMessageInCenter } from "../sharedComponents/ToastMessage";
import { FaAngleLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import { discardNavBar, goUp } from "../../redux/features/post/screenSlice";
import YesNoModal from "../sharedComponents/YesNoModal";
const ItemProp = ({ data }) => {
  //state
  const displayImageRef = useRef(null);
  const imgs = data?.imgs;
  let totalItemInCartTakingFromRedux = useSelector(itemInCart);
  const oldCart = JSON.parse(localStorage.getItem("cartItems"));
  const [displayImg, setdisplayImg] = useState();
  const [showNoti, setShowNoti] = useState(false);
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const history = useHistory();
  const [totalQuantityInCart, setTotalQuantityInCart] = useState(0);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [userNotLoggined, setUserNotLoggined] = useState(false);
  //function

  /////////handling click outside event
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        displayImageRef.current &&
        !displayImageRef.current.contains(event.target)
      ) {
        setIsZoomedIn(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayImageRef]);
  /////////handling click outside event

  useEffect(() => {
    if (imgs) {
      setdisplayImg(imgs[0]);
    }
  }, [imgs]);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setTotalQuantityInCart(parseInt(localStorage.getItem("quantity")));
    if (oldCart !== null) {
      dispatch(recoverItemsInCartEveryRefresh(oldCart));
    }
  }, []);
  useEffect(() => {
    if (totalItemInCartTakingFromRedux !== null) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify(totalItemInCartTakingFromRedux)
      );
    }
  }, [totalItemInCartTakingFromRedux]);
  /// adding to cart
  const _addingThisItemToCart = () => {
    if (!token) {
      setUserNotLoggined(true);
    } else {
      if (!showNoti) {
        dispatch(
          addingNewProductToCart({
            id: data._id,
            productName: data.title,
            quantity: 1,
            price: data.price,
            imgUrl: data.imgs[0],
          })
        );
        dispatch(goUp(false));
        setShowNoti(true);
        setTimeout(() => {
          setShowNoti(false);
        }, 2000);
        setTotalQuantityInCart((prev) => prev + 1);
        localStorage.setItem("quantity", totalQuantityInCart + 1);
      }
    }
  };
  //////////handling zoom image in event
  const _handlingZoomInOutDisplayingImg = () => {
    setIsZoomedIn(!isZoomedIn);
    dispatch(goUp(true));
  };
  useEffect(() => {
    if (isZoomedIn === true) {
      dispatch(discardNavBar(true));
    } else {
      dispatch(discardNavBar(false));
    }
  }, [isZoomedIn]);
  //////////handling zoom image in event

  /////////////handling user not loggin in but comment
  const _confirmLoggingIn = () => {
    history.push("/signIn");
    setUserNotLoggined(false);
  };
  const _rejectLoggingIn = () => {
    setUserNotLoggined(false);
  };
  return (
    <div className={styles.itemPropContainer}>
      <div className={styles.imgArea}>
        <div className={styles.imgWrapper}>
          <div className={styles.displayImg}>
            {imgs ? (
              <>
                <img
                  src={displayImg}
                  alt=""
                  key={displayImg}
                  onClick={_handlingZoomInOutDisplayingImg}
                  className={`${
                    isZoomedIn ? styles.zoomInImg : styles.zoomOutImg
                  }`}
                />
                {isZoomedIn ? (
                  <div className={styles.blurDisplayImgBackground}></div>
                ) : null}
              </>
            ) : null}
          </div>
          <div className={styles.ImgGallery}>
            {imgs?.map((image) => {
              if (image !== displayImg) {
                return (
                  <img
                    key={image}
                    src={image}
                    alt="dog"
                    onClick={() => {
                      setdisplayImg(image);
                      if (window.scrollY > 160) {
                        dispatch(goUp(false));
                      }
                    }}
                  />
                );
              } else {
                return (
                  <img
                    className={styles.selectedImgInGallery}
                    src={image}
                    key={image}
                    alt="dog"
                    onClick={() => {
                      setdisplayImg(image);
                    }}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className={styles.itemConfiguration}>
        <div className={styles.mainProp}>
          <div className={styles.itemName}>{data.title}</div>
          <div className={styles.itemPrice}>
            <div> Giá:</div>
            <div className={styles.price}>
              {data?.price?.split("₫").join("")}₫
            </div>
          </div>
        </div>
        <div className={styles.itemParams}>
          <div className={styles.breakLine}></div>
          <div className={styles.config}>Cấu hình</div>
          <div className={styles.configurationInDetail}>
            <span> {data?.processor?.split(":")[0]}</span> :
            {data?.processor?.split(":")[1]}
          </div>
          <div className={styles.configurationInDetail}>
            <span> {data?.screen?.split(":")[0]}</span> :
            {data?.screen?.split(":")[1]}
          </div>
          <div className={styles.configurationInDetail}>
            <span> {data?.ram?.split(":")[0]}</span> :{data?.ram?.split(":")[1]}
          </div>
          <div className={styles.configurationInDetail}>
            <span> {data?.graphicCard?.split(":")[0]}</span> :
            {data?.graphicCard?.split(":")[1]}
          </div>
          <div className={styles.configurationInDetail}>
            <span> {data?.pin?.split(":")[0]}</span> :{data?.pin?.split(":")[1]}
          </div>
          <div className={styles.configurationInDetail}>
            <span> {data?.weight?.split(":")[0]}</span> :
            {data?.weight?.split(":")[1]}
          </div>
          <div className={styles.configurationInDetail}>
            <span> {data?.operatingSystem?.split(":")[0]}</span> :
            {data?.operatingSystem?.split(":")[1]}
          </div>
          <div className={styles.breakLine}></div>
          <div className={styles.salePromotion}>
            <div className={styles.discountTitle}>
              <div className={styles.discountCotent}>
                Khuyến mãi trị giá 450.000₫
              </div>
              <div>Chương trình khuyến mãi kéo dài hết ngày 30/7/2021</div>
            </div>
            <ul className={styles.discountItem}>
              <li>Chuột không dây</li>
              <li>Balo laptop</li>
            </ul>
            <div className={styles.discountItemImg}>
              <img
                src="https://cdn.tgdd.vn/Products/Images/86/195376/chuot-khong-day-logitech-m170-den-1-200x200.jpg"
                alt=""
              />
              <img
                src="https://cdn.tgdd.vn/Products/Images/2102/86101/balo-laptop-hp-km-khuyen-mai-200x200.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.addingToCart} onClick={_addingThisItemToCart}>
            <img src="/images/cart.svg" alt="" />
            Thêm vào giỏ hàng
          </div>
          <div
            className={styles.continueShopping}
            onClick={() => {
              history.push("/laptop");
            }}
          >
            <FaAngleLeft />
            TIẾP TỤC MUA SẮM
          </div>
        </div>
      </div>
      {showNoti ? (
        <ToastInfoMessageInCenter
          msg={"Đã thêm item này vào giỏ hàng của bạn"}
        />
      ) : null}
      {userNotLoggined ? (
        <YesNoModal
          msg={"Bạn phải đăng nhập để sử dụng chức năng thêm vào giỏ hàng."}
          confirm={_confirmLoggingIn}
          reject={_rejectLoggingIn}
        />
      ) : null}
    </div>
  );
};

export default ItemProp;
