import React, { useEffect, useState } from "react";
import { useStore } from "@/app/store";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const FavBtn = ({ blog }) => {
  const { favorite, setFavorite } = useStore();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundItem = favorite.find((item) => item.item.id === blog.id);
    setIsFavorite(foundItem ? foundItem.favorite : false);
  }, [favorite, blog.id]);

  const handleFavorite = () => {
    let updatedFavorite = [...favorite];
    const foundIndex = updatedFavorite.findIndex(
      (item) => item.item.id === blog.id
    );

    if (foundIndex !== -1) {
      // If the blog is already in the favorites, toggle its status
      updatedFavorite[foundIndex].favorite =
        !updatedFavorite[foundIndex].favorite;
    } else {
      // If the blog is not in the favorites, add it
      updatedFavorite.push({ item: blog, favorite: true });
    }

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

export default FavBtn;
