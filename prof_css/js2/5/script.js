// let userJSON = '{"name":"Иван", "age":25, "isAdmin":true}';
// let user = JSON.parse(userJSON);
// user.dateCreated = "2022-05-06";
// user.address = {
//   city: "Чернушка",
//   postalCode: 617830,
// };
// // console.log(user);
// let user2 = JSON.stringify(user, null, 4);
// console.log(user2);

// let user3 = JSON.parse(user2, (key, value) => {
//   if (key == "dateCreated") {
//     value = new Date(value);
//   }
//   return value;
// });
// console.log(user3);
fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  .then(text => text.json())
  .then(data => {
    console.log(data)
  })