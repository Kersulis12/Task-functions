//task 0 
//Sukurti div su id, įdėti elementą su vardu, pavarde. Sukurti div su id, idėti 5 p elementus su pvz. mėgstamiausiais atlikėjais.

let vardas = document.getElementById("vardas");
vardas.innerHTML = "<h1>Ieva Ieva</h1>";

let sing = document.getElementById("sing");
console.log(sing);
sing.innerHTML = "<p>Jurga</p><p>Jurga</p><p>Jurga</p><p>Jurga</p><p>Jurga</p>";
// sing.innerHTML = "<p>";"</p><p>";"</p><p>";"</p><p>";"</p><p>";"</p>";   //esmė tokia?
//Ar teisingai suprantu, kad be sios dalies (let sing ir apskritai sing div) galima apsieiti ir tas pats gausis?/

let artist = document.getElementById("artist");
let arr = ['Jurga', 'JurgaK', 'JurgaJ', 'JurgaF', 'JurgaB'];
let HTML = "";

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
   HTML += '<option value="' + i + '">' + arr[i] + '</option>';
   // HTML += "<option value=\"" + i + "\">" + arr[i] + '</option>';
}

artist.innerHTML = HTML;//gaunasi panašiai kaip console.log?

//task 1
//Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą
function firstTagtext(textSomething) { //Ar reikia čia rašyti funkciją?
   let task1text = document.getElementById("task1text");
   task1text.innerHTML = "<h1>" + textSomething + "</h1>";

}
console.log(task1text);
firstTagtext("My text");


// let task1text = document.getElementById("task1text");
// task1text.innerHTML = "<h1>Firstfirst</h1>";
// console.log(task1text);//ar taip gerai?


//task 2
//Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
function secondTagNumtext(textSomething, numb) {
   // return "<h" + numb + ">" + textSomething + "</h" + numb + ">";
   if (numb = Math.round(Math.random() * 5) + 1) {
      console.log(numb);
   }
  
   // let numb = document.getElementById("numb");
   // numb.innerHTML = Math.round(Math.random() * 5) + 1;
   // console.log(numb);
   

   // let numb = document.getElementById("numb");
   // numb.innerHTML = num;
   // if (num = Math.round(Math.random() * 5) + 1) {
   //    console.log(num);
   // }
}
secondTagNumtext("My text", numb);//  ??????????

// console.log(secondTagNumtext("sometext", 3));

// num.innerHTML = "<h1>Math.round(Math.random()*5)+1</h1>";

// let num = Math.round(Math.random()*6);//kaip padaryti, kad nebūtų nulio (+1?)?
// console.log(num);//kaip padaryti, kad matytusi ekrane?

// function secondTagNumtext() {
//    let numb = document.getElementById("numb");
//    numb.innerHTML = num;
//         if (num = Math.round(Math.random() * 6)) {
//         console.log(num);
//    }

// }
// secondTagNumtext(numb.innerHTML, firstTagtext);

// function secondTagNumtext() {
//    let numb = document.getElementById("numb");
//    numb.innerHTML = num;
//         if (num <6) {
//         console.log(num);
//    }

// }
// secondTagNumtext(numb.innerHTML, firstTagtext);



// function secondTagNumtext() {
//    let numb = document.getElementById("numb");
//         if (num = Math.round(Math.random() * 6)) {
//          numb.innerHTML = num;
//    }

// }
// secondTagNumtext(numb.innerHTML, firstTagtext);

// function secondTagNumtext() {//??????????
// let num = Math.round(Math.random()*5)+1;
// console.log(num);//kaip padaryti, kad matytusi ekrane?
// }
// secondTagNumtext(task1text.innerHTML); 

// secondTagNumtext(firstTagtext);

//task 3
//Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją.

// function thirdRandstr() {              //kaip išspręsti?
//    let str = randomString(100);
//    console.log(str);
//    let tmp = "";//kas yra tmp?
//    for (let i = 0; i < str.length; i++) {
//       if (!isNaN(str[i])) {
//          tmp += str[i];
//       } else {
//          if (tmp != "") {
//             console.log("[" + tmp + "]");
//             tmp = "";
//          }
//          console.log(str[i]);
//       }

//    }
//    return;
// }
// task1text.innerHTML = thirdRandstr();  //kas tai yra?

//task 4
//Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).
// function fourthWholenumb() {

// }


//task 5
//Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
// function countD(number) { //sourcinimas
//    let arr = []; //what is []
//    for (let i = 0; i < 100; i++) {
//       arr.push(Math.floor(Math.random() * (77-33) + 33));
//       countDivisible (arr[i]);

//    }
//    console.log(arr)
// }
// countD();

// function countD(number) { //sourcinimas
//    let arr = []; //what is []
//    for (let i = 0; i < arr.length; i++) {
//       for (let a = 0; a < arr.length; i++) {
//          if (arr[i] < arr[a]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr(i + 1) = temp;


//          }
//       }
//    }
//    console.log(arr);
// }

//----------------------------------------------//

//new task 1
//Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį)
function functionNt1(num) {
   let result = num * num;
   return console.log(result);
}
functionNt1(5);//ka padaryti, kad matytusi ekrane? (id?)

//new task 2
//Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu. t.y į funkciją paduodate du skaičius. pirmas, skaičius su kuriuo dirbsite, antras - kėlimo laipsnis. ši funkcija turi perpanaudoti prieš tai sukurtą funkciją savo viduje. t.y ją iškviesti. ši funkcija gražins rezultatą.
function functionNt2(num2, n) {
   let result2 = Math.pow(num2, n);
   return console.log(result2);
}
functionNt2(4, 3);

//new task 3
//Sukurkite funkciją kuri priims tris parametrus. skaičių, laipsnį ir HTML elemento id. ši funkcija naudos antrają funkciją ir jos rezultatą gražins į HTML elementą.
function functionNt3(num3, n2, t2) {
   let html = document.getElementById(t2);
   html.innerHTML = "<p>" + functionNt2(num3, n2) + "</p";
   return html.innerHTML;
}
let HTMLID = "t2";
functionNt3(7, 2, "t2");

//new task 4
//Sukurkite funkciją kuri priimtų vieną parametrą, HTML elemento id.ši funkcija paims prieš tai jau minėtą HTML elementą, iš jo paims skaičių, ir išspausdins visus variantus koks galėjo būti pirminis skaičius kurį kėlėme laipsniu. pvz jei į antrąją funkciją padavėme 2 ir kėlėme 4 laipsniu, ir gavome skaičių 16, tai ši funkcija turėtų išspausdinti, kad pradžioje greičiausiai turėjome skaičių 2 pakeltą 4 laipsniu, arba skaičių 4 pakeltą 2 laipsniu.

//bandymas
// document.getElementById("demo").innerHTML = Math.PI;
// console.log(demo);

// //lektoriaus pavizdys
// function funFun1(textToPrint) {
//    console.log(textToPrint);
// }
// funFun1("Labas rytas");

// function funFun2(textToPrint) {
//    console.log(textToPrint);
//    console.log(textToPrint);
//    console.log(textToPrint);
// }
// let greeting = "labas labas rytas";
// funFun2(greeting);

// function funFun3(textToPrint, secondInput) {
//    console.log(textToPrint + secondInput);
//    console.log(textToPrint);
//    console.log(textToPrint);
// }
// let greeting1 = "labas labas rytas";
// let toWhom = " visiems";
// funFun3(greeting1, toWhom);

// function funFun4(textToPrint, secondInput) {
//    console.log(textToPrint + secondInput);
//    console.log(textToPrint);
//    console.log(textToPrint);
// }
// let greeting2 = "labas labas rytas";
// let toWhom2 = " visiems";
// funFun4(greeting2, " Jonai");