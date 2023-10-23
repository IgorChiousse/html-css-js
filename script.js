// document.getElementById("monh1").innerHTML="Hello World";
// alert("Hello World");
// var message="Hello World";
// console.log(message);

// var a;
// var n1=10;
// var msg="Hello World";
// var h1=document.getElementById('monh1');
// console.log(typeof a);
// console.log(typeof n1);
// console.log(typeof msg);
// console.log(typeof h1);

// let a=1, b=1;
// console.log(a);
// if (a==1) {
//     let b=0;
//     console.log(a);
//     console.log(b);
// }
// console.log(b);

// var nom ="Chiousse";
// var prenom ="Igor";
// window.alert("Bonjour, je m'appelle "+nom+" "+prenom);

// const a = prompt('Entrer votre Nom')
// const b = prompt('Entrer votre Prénom')
// const result = "Je m'appelle" + a +" "+ b 
// window.alert(result);

// var a = parseInt(prompt('Entrez un premier nombre'))
// var b = parseInt(prompt('Entrez un second nombre'))
// add = a + b
// mult = a * b
// sou = a - b
// div = a / b
// alert (a+"+"+b+"="+add+"\n"+a+"x"+b+"="+mult+"\n"+a+"-"+b+"="+sou+"\n"+a+"/"+b+"="+div);

// var a = parseInt(prompt('Entrez un premier nombre'))
// alert(Math.sqrt(a));

// var a = parseFloat(prompt('Entrez un prix HT'))
// result = a * 19.6;
// result2 = result / 100;
// result3 = a + result2;
// alert ("le prix est de"+"=" +result3 +"TTC");

// var a = parseFloat(prompt('Entrez une valeur a en nombre'))
// var b = parseFloat(prompt('Entrez une valeur b en nombre'))
// var c = a
// var a = b
// var b = c 
// alert("a= "+a +" et "+ "b= "+b);

// let a = parseFloat(prompt('Entrez votre note de mathématique'));
// let b = parseFloat(prompt('Entrez votre note de informatique'));
// let c = parseFloat(prompt('Entrez votre note de français'));

// a = a * 3;
// b = b * 5;
// c = c * 2;

// result = a+b+c;
// alert("Vous avez une moyenne de "+result/10)


// EXERCICES DU 18/10/2023

// let num = 23;
// let txt = parseInt("33");
// let tmp = 0;
// tmp=txt;
// //la meme chose que num=num+tmp
// num+=tmp;
// alert(num);

// var reponse = prompt("Dans quel domaine travaillez-vous?", "<Entrez votre réponse>");
// if (reponse==null) {
//     alert("Vous avez cliquez sur annuler");
// } else {
//     alert("Ok " + reponse + ", c'est un jolie métier")
// }


let button=document.getElementById("send");
button.addEventListener("click", validate)

function validate() {
    let inputname=document.getElementById("monNom").value;
    let inputprenom=document.getElementById("prenom").value;
    let inputage=document.getElementById("age").value;
    let textbox=document.getElementById("text");

    textbox.innerText="Votre nom est : " + inputname + "\n" + "Votre prénom est : " + inputprenom + "\n" + "Et vous êtes âgé de :" + inputage;
}

let button2=document.getElementById("envoie");
button2.addEventListener("click", valide)

function valide() {
    let points=document.getElementById("point").value;
    let textbox=document.getElementById("text2");

    if (points <= 59) {
        textbox.innerText="Vos points sont insuffisant";
    } else if (points <= 69) {
        textbox.innerText="Vos points sont suffisant";
    } else if (points <= 79) {
        textbox.innerText="Vos points sont noté bien";
    } else if (points <= 89) {
        textbox.innerText="Vos points sont noté très bien";
    } else  {
        textbox.innerText="Vos points sont excellents";
    }

}


// var texte = "je suis en distanciel aujourd'hui";
// var mots = texte.split(" ");
// alert(mots[3].toUpperCase());

let button3=document.getElementById("push");
button3.addEventListener("click", valable)

function valable() {
    let mappage=document.getElementById("map").value;
    let textbox=document.getElementById("text3");
    let mot = mappage.match(/distanciel/g);
    mot = mot.toString().toUpperCase();
    
    textbox.innerText=mot;
}


let button4=document.getElementById("push2");
button4.addEventListener("click", push2)

function push2() {
    let num = 0;
    let val = 0;
    while (num<=9) {
        let textbox=document.getElementById("text4");
        val = num
        num++;
        console.log(val,num);
        textbox.innerHTML+="x stocke la valeur "+val+" lors du passage n°"+num+ " dans la boucle<br>";
    }
}

let button5=document.getElementById("push3");
button5.addEventListener("click", puch3);

function puch3() {
    
    let num=document.getElementById("map01").value;
    let num2=document.getElementById("map02").value;
    let textbox=document.getElementById("text5");
        
    if (num == num2) {
        textbox.innerText=(num+" et "+num2+" sont égaux")
    } else {
        textbox.innerText=(num+" et "+num2+" ne sont pas égaux")
    }
}

let button6=document.getElementById("push4");
button6.addEventListener("click", puch4);

function puch4() {
    for (let i = 0; i < 11; i++) {
        for(let j = 0; j <= i; j++){
            text6.innerHTML+=1;
        }
        text6.innerHTML+="<br>";
    }
      
}

let button7=document.getElementById("push5");
button7.addEventListener("click", push5);

function push5() {
    let ages = document.getElementById("map02").value;

    if (ages <= 0) {
        text7.innerHTML="Vous n'êtes pas né !!";
    } else if (ages <= 17) {
        text7.innerHTML="Vous n'êtes pas majeur";
    } else if (ages <= 49) {
        text7.innerHTML="Vous êtes majeur mais pas encore senior";
    } else if (ages <= 59) {
        text7.innerHTML="Vous êtes senior mais pas encore retraité";
    } else if (ages <= 120) {
        text7.innerHTML="Vous êtes senior mais pas encore retraité";
    } else {
        text7.innerHTML="Vous êtes mort !";
    }
}

let button8=document.getElementById("push6");
button8.addEventListener("click", puch6);

function puch6() {
    let place = document.getElementById("map03").value;
    let ligne = document.getElementById("map04").value;
    
    if (place.length > 1) {
        tex.innerHTML="Tapez un seul nombre ou un seul caractere";
    } else if (ligne > 50) {
        tex1.innerHTML="Tapez moins de 50 lignes ";
    } else {
        for (let i = 0; i < ligne; i++) {
        for(let j = 0; j <= i; j++){
            text8.innerHTML+=place;
        }
        text8.innerHTML+="<br>";
        }
    }
}

let button9=document.getElementById("somme");
button9.addEventListener("click", somme);

function somme() {
    let a9 = parseInt(document.getElementById("map09").value);
    let b9 = parseInt(document.getElementById("map10").value);
    
    text9.innerHTML = a9 + b9;
}

// function somme(i, e) {
//     str=i+e;
//     return str;
// };
// alert(somme(4, 6));



let button10=document.getElementById("push10");
button10.addEventListener("click", push10);
let textbox10=document.getElementById("text10");

function push10() {
    
    let carre = parseInt(document.getElementById("map11").value);
    
    
    textbox10.innerHTML = carre * carre;
    
} 

// function carre(i) {
//     str = i * i;
//     return str;
// };
// alert(carre(5));


// var a = [
//     "we're up all 'til the sun",
//     "we're up all to the some",
//     "we're up all for good fun",
//     "we're up all to get lucky",
// ];

// var a2 = a.map(function (s) { return s.length});

// var a3 = a.map(s => s.length);

// function exo01() {
//     var startMessage = "Votre catégorie : ", endMessage;
//     var adult = confirm("Etes-vous majeur ?");
//     if (adult) {
//         endMessage = "18+";
//     } else {
//         endMessage = "-18";
//     }
//     alert(startMessage + endMessage);
// } exo01();

// function exo02() {
//     x=1;
//     while (x<=10) {
//         if (x == 7){
//             console.log("Division par 0 <br>");
//             x++;
//             continue;
//         }
//         a=1/(x-7);
//         console.log("Division par "+(x-7)+" = "+ a.toFixed(2)+"<br>");
//         x++;
//     }
// }exo02();

let button11=document.getElementById("div");
button11.addEventListener("click", div);
let textbox11=document.getElementById("text11");

function div() {
    let x = document.getElementById("map12").value;
    let y = document.getElementById("map13").value;
    let reponse = x / y;
    textbox11.innerHTML = reponse.toFixed(1) +"<br>"+ reponse.toFixed(Math.ceil)+"<br>"+ Math.floor(reponse)+"<br>"+ reponse.toFixed(2);
}
// let x = prompt("entrez un chiffre");
// let y = prompt("entrez un 2eme chiffre");

// function division() {
//     reponse = x / y;
//     alert(reponse.toFixed(1));
// } division();
// console.log(reponse.toFixed (Math.ceil));
// console.log(Math.floor(reponse));
// console.log((reponse.toFixed(2)));

let button12=document.getElementById("push11");
button12.addEventListener("click", push11);
let textbox12=document.getElementById("text12");

function push11() {
    let r =  document.getElementById("map14").value;
    let rep = r * Math.PI * 2;
    
    textbox12.innerHTML = rep;
}