/*
1. feladat: Egy gombra kattintva kérd be a felhasználó nevét egy
 felugró ablakban, majd írd ki egy p tag-be, 
 üdvözöllek + neve.*/

    function myFunction()
        {
    let neve=prompt("Kérlek add meg a neved:");
    document.getElementById("first").innerHTML=("Üdvözöllek "+neve);
        }

/*2. feladat: Illessz be egy tetszőleges képet, és hozz létre 
egy eseményt.*/

function kep(){
    
}
        

/*3. feldat: Az oldal betöltését ellenőrizd, és üzenj a konzolon,
 ha betöltött.*/

 function myFunction2()
{
    console.log("Betöltött az oldal");
}

/*4. feladat: Illessz be egy Lorem div-et és változtass meg 3 
tulajdonságot JS-ből.*/

let lorem = document.querySelector("#lorem");

lorem.style.backgroundColor = "#66ff33";
lorem.style.padding = "20px";
lorem.style.textDecoration = "underline";






