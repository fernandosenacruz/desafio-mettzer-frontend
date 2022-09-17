const localStorageGetItem = (key: string) => {
  const favorites = localStorage.getItem(key) || '';
    if (favorites) {
      return JSON.parse(favorites);
    } else {
      return [];
    }
}

export default localStorageGetItem;
