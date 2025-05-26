const fromInput = document.getElementById('fromInput');
const toInput = document.getElementById('toInput');
const fromList = document.getElementById('fromList');
const toList = document.getElementById('toList');

async function getCurrencyData() {
  const response = await fetch(
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json'
  );
  return await response.json();
}

async function displayList(input) {
  const currencyData = await getCurrencyData();
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

  for (const currency in currencyData.eur) {
    const curOption = `<li><a class="dropdown-item" href="#" onclick="placeInput('${input}','${currency}')">${currency}</a></li>`;
    curArray.push(curOption);
  }

  if (input === 'from') {
    fromList.innerHTML = curArray.join('');
  } else {
    toList.innerHTML = curArray.join('');
  }
}

function placeInput(input, currency) {
  if (input === 'from') {
    fromInput.value = `${currency}`;
  } else {
    toInput.value = `${currency}`;
  }
}

function convert() {
  
}