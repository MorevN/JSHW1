
/*Задание 1*/
var a = prompt("введите число?", "");
var n = prompt("введите степень?","");

  for (var i = 1; i < n; i++)
  {
  a*= n;
  }


  prompt ("ваш результат" , a);




/*Задание 2*/

var arr = [];//создание массива для заполнения
// через строку масив заполняеться значениями и arr.push, вносит их в массив
// фунцкция For начиная с 0 по експоненте 5 раз выдает, диалоговое окно, для заполнения данных.
for (i = 0; i < 5; i++) {
 var name = prompt('Зарегистрируйте имя');
 arr.push(name);
}

// Создаем две переменных VAR для имени пользователя, и для result.
var user = prompt('Введите имя пользователя');
var result;

// For  проходит по массиву начиная с первого значения (i = 0; i < arr.length; i++) If при проходе по массиву находит соотвествие с User if (user == arr[i])
//  и записывает его в переменную User
for (i = 0; i < arr.length; i++) {
 if (user == arr[i]) {
  result = user;
 }
}

//  Когда !Result не равен индексу из массива, alert выдает  успешный вход, если равен, то выдает alrt успешный вход.

if (!result) {
 alert('Пользователь с именем ' + user + ' не найден');
} else {
 alert(user + ',' + ' вы успешно вошли');
}
