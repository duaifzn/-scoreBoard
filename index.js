let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]



function addPlusMinus(data) {
  const plus = document.createElement('i')
  plus.className = "fas fa-plus-circle"
  data.appendChild(plus)

  const minus = document.createElement('i')
  minus.className = "fas fa-minus-circle"
  data.appendChild(minus)


}

const dataPanel = document.querySelector('#data-panel')
const title = ['name', 'pts', 'reb', 'ast', 'stl', 'blk']

for (let i = 0; i < players.length; i++) {
  const row = document.createElement('tr')

  for (let j = 0; j < title.length; j++) {
    const data = document.createElement('td')
    data.appendChild(document.createElement('span')).innerText = players[i][title[j]]
    //data.span.innerText = players[i][title[j]]
    if (j > 0) addPlusMinus(data)
    row.appendChild(data)
  }

  dataPanel.appendChild(row)
}

let board = document.querySelector('#data-panel')

board.addEventListener('click', function (event) {
  const TARGET = event.target.parentElement.firstChild
  //console.log(TARGET)
  if (event.target.className === "fas fa-plus-circle") {
    TARGET.innerText = Number(TARGET.innerText) + 1
  }

  else if (event.target.className === "fas fa-minus-circle") {
    TARGET.innerText = Number(TARGET.innerText) - 1
  }
})





  // write your code here
  //displayPlayerList(players)