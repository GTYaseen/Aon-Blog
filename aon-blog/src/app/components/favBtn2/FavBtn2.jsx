import React, { useEffect, useState } from "react";
import { useStore } from "@/app/store";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const FavBtn2 = ({ blog }) => {
  const { favorite, setFavorite } = useStore();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundItem = favorite.find((item) => item.item.id === blog.id);
    setIsFavorite(foundItem ? foundItem.favorite : false);
  }, [favorite, blog.id]);

  const handleFavorite = () => {
    let updatedFavorite = [...favorite];


    // Remove items with favorite: false
    updatedFavorite = updatedFavorite.filter((item) => item.favorite);
    setFavorite(updatedFavorite);
  };
  localStorage.setItem('favorite', JSON.stringify(favorite));
  const heartIcon = isFavorite ? (
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

export default FavBtn2;
