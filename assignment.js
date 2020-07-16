function feetToMile(feet){

    if(feet < 0){
        return "enter a positive num"
        
    }
    else{
         var mile =feet/5280;
         return mile;
    }

}

var feet =1;
var mile = feetToMile(feet);
console.log(mile);
 feet = -200;
 mile = feetToMile(feet);
console.log(mile);


function woodCalculator(chairNum,tableNum,bedNum){

    var chairWood = chairNum * 1;
    var tableWood = tableNum * 3;
    var bedWood = bedNum * 5;
    var totalWood = chairWood+tableWood+bedWood;
    return totalWood;
}

var chair = 8;
var table = 10;
var bed = 15;
 var totalWoodNum = woodCalculator(chair,table, bed);
 console.log(totalWoodNum);


function brickCalculator (floorNum){
    if( floorNum > 0){
      if(floorNum>20){
         var firstTenBrick=10*15*1000;
         
          var secondTenBrick=10*12*1000;
         var RemFloorNum=floorNum-20;

         var leftFloorBrick=RemFloorNum*10*1000;

         var total =firstTenBrick+secondTenBrick+leftFloorBrick;

      return total;

      }
      else if(floorNum > 10 && floorNum <= 20 ){
          var firstTenBrick=10*15*1000;
          var RemFloorNum = floorNum-10;
          var leftFloorBrick
          =10*12*1000;
          var total=firstTenBrick + leftFloorBrick;
          return total;
      }
      else{
          var totalBrick = floorNum*15*1000;
          return totalBrick;
      }
    }
    else{
        var warn = "Please Enter a Positive Number greater than Zero"
        return warn;
    }

}
 var FloorNum=0;
var TotalBrick =brickCalculator(FloorNum);
console.log(TotalBrick);
 FloorNum=8;
 TotalBrick =brickCalculator(FloorNum);
console.log(TotalBrick);
FloorNum=15;
TotalBrick =brickCalculator(FloorNum);
console.log(TotalBrick);
FloorNum=30;
TotalBrick =brickCalculator(FloorNum);
console.log(TotalBrick);


function tinyFriend (friendName) {
    if(friendName.length == 0){
        return "array is empty";
    }
     var tinychar = friendName[0];
     var tinyLength=tinychar.length;

    for(var i=0;i<friendName.length; i++){
        if(friendName[i] == ""){
            return "Index is Empty";
        }
        elementLength=friendName[i].length;
        if(elementLength <tinyLength){
            tinyLength = elementLength;
            tinychar = friendName[i];
        }
    }
    return tinychar;

}

var friends = ["paul","pola","pakhi","","pollobi","purnima","pin"];
var tinyName = tinyFriend(friends);
console.log(tinyName);

