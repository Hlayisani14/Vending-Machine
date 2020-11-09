let money = 0;
let instances = [3, 5, 3, 6, 8, 9];
let inst = ["Water", "Milk", "Lays", "Juice","Doritos", "BarOne"];


function fnWater() {
    if (money < 7) {
        alert("You dont have enough money for this product\nInsert more coins");
    }
    else {
        if (instances[0] > 0) {
            money -= 7;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
            instances[0]--;
            document.getElementById("water-q").innerHTML  = instances[0].toString();
            addElement(inst[0]);
        }
        else {
            alert("Product is not available, Your change is R"+money)
            money = 0;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
        }

    }
}

function fnMilk() {
    if (money < 8) {
        alert("You dont have enough money for this product\nInsert more coins");
    }
    else {
        if (instances[1] > 0) {
            money -= 8;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
            instances[1]--;
            document.getElementById("milk-q").innerHTML  = instances[1].toString();
            addElement(inst[1]);
        }
        else {
            alert("Product is not available, Your change is R"+money)
            money = 0;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
        }

    }
}

function fnLays() {
    if (money < 18) {
        alert("You dont have enough money for this product\nInsert more coins");
    }
    else {
        if (instances[2] > 0) {
            money -= 18;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
            instances[2]--;
            document.getElementById("lays-q").innerHTML  = instances[2].toString();
            addElement(inst[2]);
        }
        else {
            alert("Product is not available, Your change is R"+money)
            money = 0;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
        }

    }
}

function fnJuice() {
    if (money < 10) {
        alert("You dont have enough money for this product\nInsert more coins");
    }
    else {
        if (instances[3] > 0) {
            money -= 10;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
            instances[3]--;
            document.getElementById("juice-q").innerHTML  = instances[3].toString();
            addElement(inst[3]);
        }
        else {
            alert("Product is not available, Your change is R"+money)
            money = 0;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
        }

    }
}

function fnDoritos() {
    if (money < 16) {
        alert("You dont have enough money for this product\nInsert more coins");
    }
    else {
        if (instances[4] > 0) {
            money -= 16;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
            instances[4]--;
            document.getElementById("doritos-q").innerHTML  = instances[4].toString();
            addElement(inst[4]);
        }
        else {
            alert("Product is not available, Your change is R"+money)
            money = 0;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
        }

    }
}

function fnBarone() {
    if (money < 8) {
        alert("You dont have enough money for this product\nInsert more coins");
    }
    else {
        if (instances[5] > 0) {
            money -= 8;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
            instances[5]--;
            document.getElementById("barone-q").innerHTML  = instances[5].toString();
            addElement(inst[5]);
        }
        else {
            alert("Product is not available, Your change is R"+money)
            money = 0;
            document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>";
        }

    }
}

function one() {
    money += 1;
    document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>"
}

function two() {
    money += 2;
    document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>"
}

function five() {
    money += 5;
    document.getElementById("amount").innerHTML  = "<h3>Amount: R"+money+".00</h3>"
}

function fnStart() {
    document.getElementById("water-q").innerHTML  = instances[0].toString();
    document.getElementById("milk-q").innerHTML  = instances[1].toString();
    document.getElementById("lays-q").innerHTML  = instances[2].toString();
    document.getElementById("juice-q").innerHTML  = instances[3].toString();
    document.getElementById("doritos-q").innerHTML  = instances[4].toString();
    document.getElementById("barone-q").innerHTML  = instances[5].toString();
}

function addElement(prod) {
    var completelist= document.getElementById("thelist");

    completelist.innerHTML += "<li>" + prod + "</li>";
    counter++;
}