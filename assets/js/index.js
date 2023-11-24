 document.getElementById("Submit").onclick = function () {
        var theAmount = document.getElementById("amount").value;
        var theRate = document.getElementById("rate").value;
        var theYears = document.getElementById("years").value;

        document.getElementById("one").innerHTML = theAmount;
        document.getElementById("two").innerHTML = theRate;
        document.getElementById("three").innerHTML = theYears;
      };