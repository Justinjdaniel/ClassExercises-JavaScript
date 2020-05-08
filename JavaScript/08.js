var x = 0;
var array = Array();

function add(){
 array[x] = document.getElementById("object").value;
 document.getElementById("add").innerHTML = "Object: " + array[x] + " added at index " + x;
 x++;
 document.getElementById("object").value = "";
}

function display(){
   var display = "<hr>";
    
   for (var y=0; y<array.length; y++)
   {
    display += "Object " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("display").innerHTML = display;
}

function object_sort(){
    array.sort();
    // console.log(array);
    document.getElementById("solution08").innerHTML = "<hr>" + array;
}