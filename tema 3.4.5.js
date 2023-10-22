//1. Scrieți o funcție care returnează pătratul unui număr
function findSquare(num) {
    return num * num;
  }
  
  const numar = -12;
  const rezultat = findSquare(numar);
  console.log("Pătratul numărului " + numar + " este: " + rezultat); 

  //2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
  function getRandom(start, end) {
    const diferența = end - start;
    const numarAleator = Math.random() * diferența;
    const rezultat = Math.floor(numarAleator) + start;

    return rezultat;
  }
  
  const start = 8;  
  const end = 20;    
  
  const numarAleator = getRandom(start, end);
  console.log(" Un numar mai ≥ " + start + " și < " + end + " este: " +numarAleator);
  
//3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
  function letterCount(sir, litera) {
    let count = 0;
    for (let i = 0; i < sir.length; i++) {
      if (sir[i].toLowerCase() === litera.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  
  const sir = "Îmi place programarea ";
  const litera = "a";
  const numarAparitii = letterCount(sir, litera);
  console.log("Numărul de apariții ale literei '" + litera + "' în text este: " + numarAparitii);
  

//4. Scrieți o funcție pentru a adăuga numere nelimitate
 function addNumbers(...argumente) {
    const suma = argumente.reduce((total, numar) => total + numar, 0);
    return suma;
  }
  
  const rezultat2 = addNumbers(1, 2, 3, 4, 5);
  console.log("Suma numerelor este:", rezultat2); 
  