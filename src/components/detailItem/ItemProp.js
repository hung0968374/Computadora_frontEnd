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
const ItemProp = ({ data, genre }) => {
  //state
  const displayImageRef = useRef(null);
  const imgs = data?.imgs;
  let totalItemInCartTakingFromRedux = useSelector(itemInCart);
  const oldCart = JSON.parse(localStorage.getItem("cartItems"));
  const [displayImg, setdisplayImg] = useState();
  const [showNoti, setShowNoti] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [totalQuantityInCart, setTotalQuantityInCart] = useState(0);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [requireLogginMsg, setRequireLogginMsg] = useState("");
  const token = localStorage.getItem("token");

  /////////////// handling data property
  const itemTitle =
    genre === "pc" ? data.title?.split("(")[0].split("-")[0] : data?.title;
  const itemPrice =
    genre === "pc"
      ? data?.price?.split("đ").join("")
      : data?.price?.split("₫").join("");
  // console.log(itemTitle);
  console.log("title unsplit", data?.title);
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
      setRequireLogginMsg(
        "Bạn phải đăng nhập để sử dụng chức năng thêm vào giỏ hàng."
      );
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
          <div className={styles.itemName}>{itemTitle}</div>
          <div className={styles.itemPrice}>
            <div> Giá:</div>
            <div className={styles.price}>{itemPrice}₫</div>
          </div>
        </div>
        <div className={styles.itemParams}>
          <div className={styles.breakLine}></div>
          <div className={styles.config}>Cấu hình</div>

          {genre === "pc" ? (
            <div className={styles.configurationContainer}>
              <div className={styles.configurationInDetail}>
                <span> Vi xử lý:</span> {data?.processor}
              </div>
              <div className={styles.configurationInDetail}>
                <span> Card đồ họa:</span> {data?.graphicCard}
              </div>
              <div className={styles.configurationInDetail}>
                <span>RAM:</span> {data?.ram}
              </div>
              <div className={styles.configurationInDetail}>
                <span> Ổ SSD:</span> {data?.ssd}
              </div>
              <div className={styles.configurationInDetail}>
                <span>Hệ điều hành: </span>
                {data?.operatingSystem}
              </div>
            </div>
          ) : (
            <div className={styles.configurationContainer}>
              <div className={styles.configurationInDetail}>
                {data?.processor && (
                  <>
                    <span> {data?.processor?.split(":")[0]}:</span>
                    {data?.processor?.split(":")[1]}
                  </>
                )}
              </div>
              <div className={styles.configurationInDetail}>
                {data?.screen && (
                  <>
                    <span> {data?.screen?.split(":")[0]}:</span>
                    {data?.screen?.split(":")[1]}
                  </>
                )}
              </div>
              <div className={styles.configurationInDetail}>
                {data?.ram && (
                  <>
                    <span> {data?.ram?.split(":")[0]}:</span>
                    {data?.ram?.split(":")[1]}
                  </>
                )}
              </div>
              <div className={styles.configurationInDetail}>
                {data?.graphicCard && (
                  <>
                    <span> {data?.graphicCard?.split(":")[0]}:</span>
                    {data?.graphicCard?.split(":")[1]}
                  </>
                )}
              </div>
              <div className={styles.configurationInDetail}>
                {data?.pin && (
                  <>
                    <span> {data?.pin?.split(":")[0]}:</span>
                    {data?.pin?.split(":")[1]}
                  </>
                )}
              </div>
              <div className={styles.configurationInDetail}>
                {data?.weight && (
                  <>
                    <span> {data?.weight?.split(":")[0]}:</span>
                    {data?.weight?.split(":")[1]}
                  </>
                )}
              </div>
              <div className={styles.configurationInDetail}>
                {data?.operatingSystem && (
                  <>
                    <span> {data?.operatingSystem?.split(":")[0]}:</span>
                    {data?.operatingSystem?.split(":")[1]}
                  </>
                )}
              </div>
            </div>
          )}

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
                src="https://salt.tikicdn.com/ts/product/14/e2/b2/ebfddbebf6c3a874bbeda8790a1bbbe1.PNG"
                alt=""
              />
              <img
                src="https://product.hstatic.net/1000079076/product/ba_lo_legion_7_924ae62f238a4aa98580a8dfd4300bce_large.jpg"
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
              if (genre === "pc") history.push("/pc");
              else history.push("/laptop");
            }}
          >
            <FaAngleLeft size={50} />
            TIẾP TỤC MUA SẮM
          </div>
        </div>
      </div>
      {showNoti ? (
        <ToastInfoMessageInCenter
          msg={"Đã thêm item này vào giỏ hàng của bạn"}
        />
      ) : null}
      {requireLogginMsg.length > 0 && (
        <YesNoModal
          msg={requireLogginMsg}
          confirm={() => {
            history.push("/signIn");
            setRequireLogginMsg("");
          }}
          reject={() => setRequireLogginMsg("")}
        />
      )}
    </div>
  );
};

export default ItemProp;
