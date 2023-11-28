import React from "react";
import { useStore } from "@/app/store";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const FavBtn = ({ blog }) => {
  const { favorite, setFavorite } = useStore();

  let favObj = favorite.find((el) => el.id === blog.id);

  const handleFavorite = () => {
    let newArr = [];
    if (favObj) newArr = favorite.filter((el) => el.id !== blog.id);
    else newArr = [...favorite, blog];

    setFavorite(newArr);
    localStorage.setItem("blog-fav", JSON.stringify(newArr));
  };

  const heartIcon = favObj ? (
    <FaHeart style={{ color: "red" }} />
  ) : (
    <FaRegHeart />
  );

  return (
    <div>
      <button onClick={handleFavorite}>{heartIcon}</button>
    </div>
  );
};

export default FavBtn;
