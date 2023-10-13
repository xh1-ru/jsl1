let number = 123; // Входное число
const stroka = 'pipipupuchek'; //Тестовая строка 
const stroka2 = 'pataponchik'; //Тестовая строка 2
console.log("Входное число: %s",number);
console.log("Входная строка: %s",stroka);
console.log("Входное строка 2: %s\n",stroka2);
if (number < 0) {                                        //----------
    console.log('1# Число %s - отрицательное',number);   //
}                                                        // Задание 1
else { console.log("1# Число %s - положительное",number);//
}                                                        //-----------
                                                            console.log("");
                                                                           //-----------
console.log('2# Длина строки: %s',stroka.length); //Получение длины строки // Задание 2
                                                                           //-----------
                                                                          console.log("");
                                                                                       //-----------
console.log("3# Последний символ строки: %s",stroka.at(-1)); //Последний символ строки // Задание 3
                                                                                       //-----------
                                                                                    console.log("");
if (number % 2 == 0){                                                                                            //-----------
    console.log("4# Четное");                                                                                    //                                                                                  //
} else {                                                                                                         // Задание 4
    console.log("4# Нечетное");                                                                                  // 
}                                                                                                                //-----------
                                                                                                              console.log("");
if (stroka[0] == stroka2[0]){              //-----------
    console.log("5# Символы одинаковые");  //                                                                                
} else {                                   // Задание 5
    console.log("5# Символы разные");      // 
}                                          //-----------
                                        console.log("");                                                         //-----------
console.log("6# Сумма первого и последнего символа: %s",+number.toString().at(0) + (+number.toString().at(-1))); // Задание 6
                                                                                                                 //-----------
                                                                                                               console.log(""); 
let buff = 0;                                       //-----------
for (let sym of number.toString()){                 //
    buff += parseInt(sym,10);                       // Задание 7
}                                                   //
console.log("7# Сумма чисел в %s = %s",number,buff);//-----------
