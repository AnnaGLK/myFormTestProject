
//---------- form---------------
var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
 
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
 
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  
  fixStepIndicator(n);
}

function nextPrev(n) {
  
  var x = document.getElementsByClassName("tab"); 
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("statusForm").submit();
    return false;
  }
  showTab(currentTab);
}

//-----------validation of the form fields
function validateForm() {
 
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
 
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

//---------------------years

    start = 1970;
    var end = 2010;
    var options = "";
    for(var year = start ; year <=end; year++){
      options += "<option>"+ year +"</option>";
    }
    document.getElementById("year").innerHTML = options;
    
    


//------------------ output


// function showInput() {
//   document.getElementById('display').innerHTML = 
//               document.getElementById("status").value
//               +document.getElementById("year").value
//               +document.getElementById("gender").value;
// }



