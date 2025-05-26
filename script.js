const fromInput = document.getElementById('fromInput');
const toInput = document.getElementById('toInput');
const fromList = document.getElementById('fromList');
const toList = document.getElementById('toList');
const curFrom = document.getElementById('curFrom');
const curTo = document.getElementById('curTo');
const userInput = document.getElementById('userInput');

const dataArray = []

async function getCurrencyData() {
  const response = await fetch(
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json'
  );
  const json = await response.json()
  
  for (const data in json.eur){
    dataArray.push({
      code: data,
      value: json.eur[data]
    })
  }

  console.log("trigger")
}

async function displayList(input) {
  const curArray = [
    `
    <div class="mx-3 my-2">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  `,
  ];

  for (const currency of dataArray) {
    const curOption = `<li><a class="dropdown-item" href="#" onclick="placeInput('${input}','${currency.code}',${currency.value})">${currency.code}</a></li>`;
    curArray.push(curOption);
  }

  if (input === 'from') {
    fromList.innerHTML = curArray.join('');
  } else {
    toList.innerHTML = curArray.join('');
  }
}

function placeInput(input, currency, currencyRate) {
  if (input === 'from') {
    fromInput.value = `${currency}`;
    curFrom.value = `${currencyRate}`;
  } else {
    toInput.value = `${currency}`;
    curTo.value = `${currencyRate}`;
  }
}

async function convert() {
  console.log(
    userInput.value * (curTo.value / curFrom.value)
  );
}

getCurrencyData()