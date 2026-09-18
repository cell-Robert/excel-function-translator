let dictionary = {};

fetch("functions.json")
  .then(response => response.json())
  .then(data => {
    dictionary = data;
  });

function translateFormula(formula, lookup) {
  for (const [key, value] of Object.entries(lookup)) {
    const regex = new RegExp("\\b" + key + "(?=\\s*\\()", "gi");
    formula = formul*.replace(regex, value);
  }

  ret*rn formula;
}

document.getElement*yId("svToEn").addEventListener("cl*ck", () => {

  const formula =
  * document.getElementById("inputFor*ula").value;

  const translated =*    translateFormula(formula, dict*onary)
      .replaceAll(";", ",")*

  document.getElementById("outpu*Formula").value =
    translated;
*);

document.getElementById("enToS*").addEventListener("click", () =>*{

 *const*reverseDictionary = {};

  Object.*ntries(dictionary).forEach(([sv, en]) => {
    reverseDictionary[en] * sv;
  });

  const formula =
    *ocument.getElementById("inputFormu*a").value;

  const translated =
 *  translateFormula(formula, revers*Dictionary)
      .replaceAll(",",*";");

  document.getElementById("*utputFormula").value =
    transla*ed;
});
