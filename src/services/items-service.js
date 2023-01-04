const BASE_URL = "http://localhost:3000/items";

function getAllItems() {
  return fetch(BASE_URL).then((res) => res.json());
}

module.exports = {
  getAllItems,
};
