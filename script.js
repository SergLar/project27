'use strict';


let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expensesa1 = a2;
appData.expenses.a3 = a4;

//console.log(a1);
//console.log(a3);

/*var keys = Object.keys(appData.expenses);
for (var i = 0, l = keys.length; i < l; i++) {
	console.log(keys[i] + ' is ' + appData.expenses[keys[i]]);
}*/

//console.log(appData.expenses[a1]);

alert(appData.budget / 30);



