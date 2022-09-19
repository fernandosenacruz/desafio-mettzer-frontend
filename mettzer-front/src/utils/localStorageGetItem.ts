const localStorageGetItem = (key: string) => {
  const items = localStorage.getItem(key);
    if (items) {
      return JSON.parse(items);
    } else {
      return [];
    }
}

export default localStorageGetItem;
