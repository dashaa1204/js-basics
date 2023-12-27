const products = [
  {
    id: 2,
    name: "mac",
    price: 123,
  },
  {
    id: 1,
    name: "iphone",
    price: 123,
  },
  {
    id: 3,
    name: "tv",
    price: 123,
  },
  {
    id: 4,
    name: "hosoo",
    price: 123,
  },
];

function removProd(num) {
  let newArr = products.filter((a) => {
    return a.id !== num;
  });
  console.log(newArr);
}

removProd(2);
