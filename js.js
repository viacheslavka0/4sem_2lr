console.log("Задача 1");

function absValue(number) {
  if (number < 0) {
    number *= -1;
  }
  console.log(number);
}

let a;
while (a != 0) {
  a = prompt("Введите число (чтобы остановить, введите 0");
  absValue(a);
}

console.log("Задача 2");

function isPalindrome(palindrom) {
  let t = 0;
  let f = 0;

  for (let i = 0; i < palindrom.length / 2; i++) {
    if (palindrom[i] !== palindrom[palindrom.length - 1 - i]) {
      f++;
    } else {
      t++;
    }
  }
  if (f != 0) {
    console.log("False");
  } else {
    console.log("True");
  }
}

let word = prompt("Введите слово");
let arr = word.split("");
isPalindrome(arr);

console.log("Задача 3");

function matrixAddition(mat1, mat2) {
  let g = 0,
    sum = "";

  let row1 = mat1.length;
  let row2 = mat2.length;

  let col1 = mat1[0].length;
  let col2 = mat2[0].length;

  console.log(mat1);
  console.log(mat2);

  if (row1 == row2 && col1 == col2) {
    for (let i = 0; i < row1; i++) {
      for (let j = 0; j < row1; j++) {
        g = mat1[i][j] + mat2[i][j];
        sum += g + "\t";
      }
      sum += "\n";
    }

    console.log(sum);
  } else {
    console.log("Операция невыполнима");
  }
}

let arr1 = [
  [3, 1],
  [1, 7],
];
let arr2 = [
  [10, 13],
  [3, 4],
];
let arr3 = [[11, 4]];

matrixAddition(arr1, arr2);
matrixAddition(arr1, arr3);

/*
function matrixAddition(){

}
let mat1 = [];
let mat2 = [];
let l1 = prompt("Введите длину первой матрицы",2 );
let w1 = prompt("Введите ширину первой матрицы",2 );

let l2 = prompt("Введите длину второй матрицы",2 );
let w2 = prompt("Введите ширину второй матрицы",2 );

if(l1 !==l2 && w1 !== w2){
    console.log("Операция невыполнима");
} else{
    for (let i=0; i<l1*w1;i++){
        mat1[i]=prompt("Введите элемент первой матрицы");
    }
    for (let i=0; i<l2*w2;i++){
        mat2[i]=prompt("Введите элемент второй матрицы");
    }

    for (let i=0; )
    
}
*/
console.log("Задача 4");
let student = {
  group: 201,
  last_name: "Смирнов",
  first_name: "Петр",
};

console.log("Список свойcтв:" + Object.keys(student));
console.log(
  "Студент " +
    student.first_name +
    " " +
    student.last_name +
    " учится в " +
    student.group +
    " группе "
);

console.log("Задача 5");

const back = document.getElementById("back");
const forward = document.getElementById("forward");
let images = document.querySelectorAll(".imgs");

let n = 0;
let row;

back.addEventListener("click", () => {
  row = -1;
  slider();
});
forward.addEventListener("click", () => {
  row = 1;
  slider();
});

function slider() {
  images[n].style.display = "none";
  if (row == -1 && n == 0) {
    n = 4;
    images[n].style.display = "block";
  } else if (n == 4) {
    n = 0;
    images[n].style.display = "block";
  } else {
    images[n + row].style.display = "block";
    n += row;
  }
}
