// 1. fetch
// promise 사용

// const result = [];

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((Response) => Response.json())
//   .then((data) => data.map((item) => result.push(item.name)))
//   .catch((error) => console.log(error));

// console.log(result);

// async await 사용
// const dataFetch = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   return data;
// };

// const dataResult = dataFetch();

// 2. axios

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => console.log(response.data));

const dataFetch = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    .data;

  return response;
};

const dataResult = dataFetch();
console.log(dataResult);
