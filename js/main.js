const switchs = [
  {
    id: 'switch1',
    name: 'Switch1'
  },
  {
    id: 'switch2',
    name: 'Switch2'
  },
  {
    id: 'switch3',
    name: 'Switch3'
  },
  {
    id: 'switch4',
    name: 'Switch4'
  },
  {
    id: 'switch5',
    name: 'Switch5'
  },
  {
    id: 'switch6',
    name: 'Switch6'
  }
]

// DOM Elements 
let container = document.querySelector('.container');


// template 
let switchTemplate = document.querySelector('.switch-template').content;

// create switch button 
const showSwitchs = ({id, name}) => {
  let cloneEl = switchTemplate.cloneNode(true);
  let elLabel = cloneEl.querySelector('label');
  let elInput = cloneEl.querySelector('input');

  elLabel.textContent = name;
  elLabel.htmlFor = id;
  elInput.id = id;

  container.appendChild(cloneEl);
}

// show switch button 
switchs.forEach(item => {
  showSwitchs(item);
})

// control on and off button 
let elInputs = document.querySelectorAll('input');
elInputs.forEach((item, index) => {
  item.addEventListener('input', () => {
    elInputs.forEach(item1 => {
      let randomNumber = Math.floor(Math.random() * 2);
      console.log(randomNumber);
      if(item1 != item)
      {
        switch(randomNumber){
          case 1: item1.checked = true; break;
          case 0: item1.checked = false; break;
        }
      }
    })

    elInputs = document.querySelectorAll('input');
  })
})
