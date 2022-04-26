const $div = document.querySelector(".container");
const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $button = document.querySelector("button");

// 1. 이벤트 헨들러
// target.이벤트이름 = 콜백함수

// $div.onclick = () => console.log("Clicked");
// $div.onclick = () => alert("Clicked");

// function handleClick () {
//     console.log('Clicked');
// }

// 2. addEventListener

// $div.addEventListener('click', handleClick);
// $div.addEventListener('click', () => alert("Clicked"));

// function handleClick () {
//     console.log('Clicked');
// }

// 3. removeEventListener

// $div.removeEventListener('click', handleClick);

// 4. event 인자

// $div.addEventListener("click", handleClick);

// function handleClick(event) {
//   console.log(event.target.innerText);
// }

// $input.addEventListener("change", handleChange);

// function handleChange(event) {
//   console.log(event.target.value);
// }

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = $input.value;
  console.log(inputValue);
  $input.value = ""; // 제출시 초기화
}
