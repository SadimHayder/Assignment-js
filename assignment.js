 //kilometerToMeter
 var kilometer = 0;
 var meter = kilometer*1000;
console.log(meter);

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


//megafriend

function megaFriend(friend){
    var maxWord =""
    for(var i = 0; i < friend.length; i++){
    var element = friend[i];
    if(element.length > maxWord.length){
       element = maxWord;

    }
}
return maxWord
}
var result = megaFriend(['Korim', 'Rony', 'Dina', 'Najmul']);
console.log(result);


         

