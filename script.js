var num1= +prompt('введите первое число');

var num2 = +prompt( 'введите второе число');

var num3 = +prompt( 'введите третье число');
alert('Перейдите в console, чтобы узнать среднее число (´｡• ᵕ •｡)')

// if (num1 > num2 > num3 || num1 < num2 < num3 ) {
// console.log(num2);}
//     else if(num2 > num1 > num3 || num2 < num1 < num3 )
//     { console.log(num1); }
//     else if(num1 > num3 > num2 || num1 < num3 < num2 )
//   {  console.log(num3);}
if(num1 > num2 && num2 > num3){
    console.log(num2);
}else if (num1 < num2 && num2 < num3){
    console.log(num2);
}else if(num3 > num2 && num2 > num1){
    console.log(num2);
}else if (num3 < num2 && num2 < num1){
    console.log(num2);



}else if (num2 < num1 && num1 <num3){
    console.log(num1);
}else if(num2 > num1 && num1 > num3){
        console.log(num1);
}else if (num3 < num1 && num1 <num2){
    console.log(num1);
}else if(num3 > num1 && num1 > num2){
        console.log(num1);


}else if (num2 < num3 && num3 <num1){
    console.log(num3);
}else if(num2 > num3 && num3 > num1){
        console.log(num3);
}else if (num1 < num3 && num3 <num2){
    console.log(num3);
}else if(num1> num3 && num3 > num2){
        console.log(num3);}

else if(num1 == num3 && num3 == num2){
            console.log(num3);}



else if(num1 == num3 && num3 > num2){
            console.log('(;⌣̀_⌣́)');}
else if(num1 == num3 && num3 < num2){
            console.log('ヽ(ˇヘˇ)ノ');}


else if(num2 == num3 && num3 > num1){
            console.log('(￢_￢;)');}
else if(num2 == num3 && num3 < num1){
            console.log('ヾ( ￣O￣)ツ');}


else if(num1 == num2 && num2 < num3){
            console.log('(」°ロ°)」');}
else if(num1 == num2 && num2 > num3){
            console.log('(；￣Д￣)');}





 
  

