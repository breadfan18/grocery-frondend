const BASE_URL = "http://localhost:4001/items";

function getAllItems() {
  return fetch(BASE_URL).then((res) => res.json());
}

module.exports = {
  getAllItems,
};
