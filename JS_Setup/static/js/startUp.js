

function sName() {
  var theCont = document.getElementsByClassName('theBox');
  var saluteTheUser = createElement('div');

  var theAns = document.getElementById('humanINput').value;
  theCont.appendChild(saluteTheUser);

  saluteTheUser.setAttribute('class', 'theSalute animated fadeInRight 2s slower');
  saluteTheUser.innerHTML = 'Hello' + ' ' + theAns;
  var aBG = 'linear-gradient(to right top, #0093e1, #00dcd0, #3dff98, #7dffec)';
  saluteTheUser.style.background = aBG;
  saluteTheUser.style.padding = '5px';
  saluteTheUser.style.color = 'white';
  saluteTheUser.style.textAlign = 'center';
  saluteTheUser.style.fontFamily = 'Staatliches';
}
