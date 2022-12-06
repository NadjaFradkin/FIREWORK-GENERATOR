let inputVal;

function submit() {
  // Get input value
  inputVal = document.getElementById('inputBox').value;
  console.log('submit : ' + inputVal);

  // Update <h1 id="inputVal"> text content
  document.getElementById('inputVal').textContent = '\"' + inputVal + '\"';

  // Switch wrappers
  document.getElementById('discovery').style.display = 'block';
  document.getElementById('home').style.display = 'none';
  document.location.href = '#discovery';
}

function retry () {
  // Update <h1 id="inputVal"> text content
  document.getElementById('inputVal').textContent = ""; // ?

  // Switch wrappers
  document.getElementById('discovery').style.display = 'none';
  document.getElementById('home').style.display = 'block';
  document.location.href = '#home';
}
