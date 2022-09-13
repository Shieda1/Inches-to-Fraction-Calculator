// https://www.omnicalculator.com/conversion/inches-to-fraction

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inRadio = document.getElementById('inRadio');
const mmRadio = document.getElementById('mmRadio');

let inch;
let mm = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

inRadio.addEventListener('click', function() {
  variable1.textContent = 'mm';
  mm = v1;
  result.textContent = '';
});

mmRadio.addEventListener('click', function() {
  variable1.textContent = 'inch';
  inch = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(inRadio.checked)
    result.textContent = `inch = ${computeinch().toFixed(5)}`;

  else if(mmRadio.checked)
    result.textContent = `mm = ${computemm().toFixed(5)}`;
})

// calculation

function computeinch() {
  return Number(mm.value) * 25.4;
}

function computemm() {
  return Number(inch.value) / 25.4;
}