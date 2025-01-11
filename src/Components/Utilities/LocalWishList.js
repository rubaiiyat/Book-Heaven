const getWishListItems = () => {
  const storedBook = localStorage.getItem("wishList-application");

  if (storedBook) {
    return JSON.parse(storedBook);
  }

  return [];
};

const saveWishListItems = (id) => {
  const storedBook = getWishListItems();
  const exist = storedBook.find((bookId) => bookId === id);

  if (!exist) {
    storedBook.push(id);
    localStorage.setItem("wishList-application", JSON.stringify(storedBook));
    return true;
  }
  return false;
};

export { getWishListItems, saveWishListItems };
