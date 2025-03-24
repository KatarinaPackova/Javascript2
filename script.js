/*Cviceni Registrace na ockovani  */
const jmeno = prompt('Zadej svoje jmeno a prijmeni');
const vek = Number(prompt('Zadej svuj vek'));
const heslo = prompt('Zadej svoje heslo:');
/* document.body.innerHTML += jmeno + ', ' + 'vek: ' + vek; */

const overeniVeku = vek >= 65;

if (vek >= 65) {
  document.body.innerHTML = '<p>Věk v pořádku!</p>';
  if (heslo.length <= 7) {
    document.body.innerHTML = '<p>Slabe heslo!</p>';
  }
} else {
  document.body.innerHTML = '<p>Nizky vek!</p>';
}

/* document.body.innerHTML = overeniVeku; */

/* const age = Number(prompt('Zadej svuj vek:'));

const pristupPovolen = age >= 18;

if (podminka) {

} else if (dalsipodminka) {

} else {

}
 */
/* document.body.innerHTML = pristupPovolen; */

/* document.body.innerHTML = 18 > 21;
document.body.innerHTML = 18 === 21; */

/* const pristupPovolen = false;

document.body.innerHTML = pristupPovolen; */

/* const content = 'Pan Prstenu'.length; */
/* const nazev = 'Pan Prstenu';

document.body.innerHTML = nazev;
document.body.innerHTML += .toUpperCase(nazev);
 */
/* Cviceni Vlastnosti a metody */
/* V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

Vypište do stránky počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vypište z názvu prvních pět znaků (mezera je také znak).
Vypište z názvu posledních pět znaků (mezera je také znak). */

/* document.body.innerHTML += 'Ahoj Svete!';

const content = `
  <header>
    <h1>Název stránky</h1>
  </header>
  <main>Obsah stránky</main>
  <footer>Patička</footer>
`;
document.body.innerHTML = content;
 */
/* V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

Vypište do stránky počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vypište z názvu prvních pět znaků (mezera je také znak).
Vypište z názvu posledních pět znaků (mezera je také znak). */
