function prime(){
    var n=document.getElementById("prime").value;
    var i;
    var flag = true;
 
    n = parseInt(n) 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        }
    if (flag == true) 
    document.getElementById("solution01").innerHTML = n + " is a PRIME NUMBER.";
    else
    document.getElementById("solution01").innerHTML = n + " is not a PRIME NUMBER."; 
}