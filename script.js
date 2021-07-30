function compute()
{
    var principal = document.getElementById("principal").value;
    
    var rate = document.getElementById("rate").value;
    
    var years = document.getElementById("years").value;
    
 result = document.getElementById("result");
  result.innerHTML =( principal * years * rate /100);
   
}
        
