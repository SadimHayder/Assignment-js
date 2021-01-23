 //kilometerToMeter
function kilometerToMeter (km){
    var meter = km*1000 ;
    return meter ;
}
var totalmeter = kilometerToMeter (10);
console.log(totalmeter);

//budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    var result = watch + mobile + laptop
    return result;
}
var sum = budgetCalculator(50, 100, 500);
console.log(sum);

// hotelCost
var days = 15;
var staydays = 0;
if(days<=10){
    staydays = days * 100;
}
else if(days<=15){
    var firstDays = 10 * 100;
    var remaining = days - 10;
    var secondDays = remaining * 80;
    staydays = firstDays + secondDays; 

}
else{
    var firstDays = 10*100;
    var secondDays = 5*80;
    var remaining = days -10;
    staydays = firstDays + secondDays;

}
console.log(staydays);

//megafriend
var friend = ['Korim', 'Asraful Alom', 'Rony', 'Dina', 'Najmul'];
var maxWord = friend [0];
function megaFriend (friend){

    for ( var i = 0; i<friend.length; i++){
    var element = friend[i];
    if( element.length < maxWord.length){
       maxWord = element;
    }
}
       return maxWord;
}

var result =megaFriend(friend);
console.log(result);



