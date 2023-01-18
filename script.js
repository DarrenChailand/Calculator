let historynumber;
let firstnumber = "";
let lastnumber = "";
let expression = "";
let expression2 = "";
let order = true;
let reset = false;
let pop = true;
let curoperand = document.getElementById("id-current-operand");
let prevoperand = document.getElementById("id-previous-operand");

function dec(){
    reset = false;
    if (order) {
        firstnumber = firstnumber + ".";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + ".";
        lastnumbercur();
    }
}
function function1() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "1";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "1";
        lastnumbercur();
    }
}
function function2() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "2";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "2";
        lastnumbercur();
    }
}
function function3() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "3";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "3";
        lastnumbercur();
    }
}
function function4() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "4";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "4";
        lastnumbercur();
    }
}
function function5() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "5";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "5";
        lastnumbercur();
    }
}
function function6() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "6";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "6";
        lastnumbercur();
    }
}
function function7() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "7";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "7";
        lastnumbercur();
    }
}
function function8() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "8";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "8";
        lastnumbercur();
    }
}
function function9() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "9";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "9";
        lastnumbercur();
    }
}
function function0() {
    reset = false;
    if (order) {
        firstnumber = firstnumber + "0";
        firstnumbercur();
    } else {
        lastnumber = lastnumber + "0";
        lastnumbercur();
    }
}

function firstnumbercur() {
    curoperand.textContent = firstnumber;
    prevoperand.textContent = `${historynumber}`;
}
function lastnumbercur() {
    pop = false;
    curoperand.textContent = `${firstnumber} ${expression} ${lastnumber}`;
}


function functiondivide() {
    if(order) {
    expression = " ÷ ";
     } else {
         expression2 = " ÷ "
     }
      simplifyexpression(); 
}
function functiontimes() {
    if(order) {
        expression = " * ";
         } else {
             expression2 = " * "
         }
         simplifyexpression(); 
}
function functionadd() {
    if(order) {
        expression = " + ";
         } else {
             expression2 = " + "
         }
    expression = " + "; 
    simplifyexpression(); 
}
function functionminus() {
    if(order) {
         
        if(!reset){
         if(firstnumber !== "" && lastnumber == "" && expression == ""){
            expression = " - ";
            simplifyexpression(); 
        }
    
        if(firstnumber == ""){
            firstnumber = "-" + firstnumber;
            curoperand.textContent = `${firstnumber}`;

        }
    } else{
        expression = " - ";
        simplifyexpression(); 
    }
        
        
        
        
         } else {
            if(firstnumber !== "" && lastnumber == "" && expression !== ""){
                if(pop){
                lastnumber = "-" + lastnumber;
                curoperand.textContent = `${firstnumber} ${expression} ${lastnumber}`;
                console.log(lastnumber);}
            }

         }
            if(firstnumber !== "" && lastnumber !== "" && expression !== ""){
                if(!pop){
                expression2 = " - "
                simplifyexpression();
                   }
                }
            
        

         
}


function simplifyexpression() {
    if (order) {
        if (reset) {
            firstnumber = historynumber;
            prevoperand.textContent = `${historynumber}`;
            reset=false;
        }
        order = false;
        curoperand.textContent = `${firstnumber} ${expression} `;
        pop = true;

    } else {
        
        if(!pop){
        functionsumtotal();
        expression = expression2;
        simplifyexpression();
        }
        

    }
}

function functionsumtotal() {
    firstnumber = parseFloat(firstnumber);
    lastnumber = parseFloat(lastnumber);
    prevoperand.textContent = `${firstnumber} ${expression} ${lastnumber}`;

    if (expression == " ÷ ") {
        firstnumber = firstnumber / lastnumber
    }
    if (expression == " * ") {
        firstnumber = firstnumber * lastnumber
    }
    if (expression == " - ") {
        firstnumber = firstnumber - lastnumber
    }
    if (expression == " + ") {
        firstnumber = firstnumber + lastnumber
    }

    order = true; 
    curoperand.textContent = `${firstnumber}`;
    historynumber = firstnumber;
    lastnumber = "";
    expression = "";
    firstnumber = "";
    reset = true;
    pop = true;
}

function AC(){
historynumber = "";
firstnumber = "";
lastnumber = "";
expression = "";
order = true;
reset = false;
pop = true;
curoperand.textContent = ``;
prevoperand.textContent = ``;

}

