// const makeOrder = (dist) => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const result = Math.random() > 0.5;

//     setTimeout(() => {
//       if (result) {
//         resolve(`ваша страва ${dist}`);
//       }
//       reject("нема вашої страви");
//     }, DELAY);
//   });
// };

// makeOrder("пиріг").then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log(error);
// }

// проміси очищують наші функції. наші функції не знають про код який їх викликає
// const makeOrder = (dish) => {
//   return Promise.resolve(`✅ Ось вашу замовлення: ${dish}`);
// };

// makeOrder("пирожок").then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log(error);
// }

/*
 * Покемоны с https://pokeapi.co/
 */
//srp single responsibility principle

// console.log('first')
// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);
// //результат промісів можна отримати тільки в середені функцій які передаються в then, catch
// //проміси завжди асинхронні
// function onFetchSuccess(pokemon) {
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log('Это в блоке catch');
//   console.log(error);
// }
// console.log('second')

