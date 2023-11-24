function interest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 3.5, 5)); 
 
 document.getElementById("Submit").onclick = function () {
        var theAmount = document.getElementById("amount").value;
        var theRate = document.getElementById("rate").value;
        var theYears = document.getElementById("years").value;
         var theResult = interest(theAmount, theRate, theYears);
         document.getElementById("result").innerHTML = theResult;
        
      };