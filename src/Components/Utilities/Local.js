const getItems = () => {
  const storedBook = localStorage.getItem("book-application");

  if (storedBook) {
    return JSON.parse(storedBook);
  }

  return [];
};

const saveItems = (id) => {
  const storedBook = getItems();
  const exist = storedBook.find((bookId) => bookId === id);

  if (!exist) {
    storedBook.push(id);
    localStorage.setItem("book-application", JSON.stringify(storedBook));
    return true;
  }
  return false;
};

export { getItems, saveItems };
