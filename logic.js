const calcInput = document.getElementById("calctext")
const ibtn = document.getElementsByClassName("ibtn")
const his = document.getElementById("his")
const calcForm = document.getElementById("calcForm")
const err = document.getElementById("err")

let hisValue = "0"

for (const btn of ibtn) {
  btn.onclick = () => {
    __addValue(btn.getAttribute("ct"))
  }
  if (btn.getAttribute("ct") === '_del') {
    btn.addEventListener('dblclick', () => {
      calcInput.value = ""
    })
  }
}

const __addValue = (v) => {
  if (v === '_sum') {
    if (
      calcInput.value === 'clear' ||
      calcInput.value === 'dark' ||
      calcInput.value === 'light' ||
      calcInput.value === 'purple' ||
      calcInput.value === 'material' ||
      calcInput.value === '1+'||
      calcInput.value === '3333360'
    ) {

      calcInput.value === 'clear' ? clear() : null
      calcInput.value === 'dark' ? __dark() : null
      calcInput.value === 'light' ? __light() : null
      calcInput.value === 'purple' ? __purple() : null
      calcInput.value === 'material' ? __material() : null
      calcInput.value === '1+' ? __oneplus() : null
      calcInput.value === '3333360' ? window.location.href = "https://www.google.com/search?q=pacman" : null

      hisValue = calcInput.value
      calcInput.value = ''
      his.innerHTML = hisValue
    } else
    try {
      let ans = eval(calcInput.value)
      if (ans) {
        hisValue = calcInput.value
        calcInput.value = ans
      } else {
        hisValue = "0"
        calcInput.value = "0"
      }
      his.innerHTML = hisValue
      __showError(null)
    } catch (e) {
      __showError(e + "")
    }
  } else if (v === '_del') {
    calcInput.value = calcInput.value.substring(0, calcInput.value.length - 1)
  } else {
    calcInput.value += v
    __accurateValue()
  }
}

calcInput.onkeyup = () => {
  __accurateValue()
}

calcForm.onsubmit = (e) => {
  e.preventDefault()
  __addValue('_sum')
}

const __accurateValue = () => {
  let nV = calcInput.value.substring(calcInput.value.length - 1)
  if (nV === '(') {
    let lexer = calcInput.value.substring(calcInput.value.length - 2).substring(0, 1)
    if (!isNaN(lexer)) {
      calcInput.value = calcInput.value.substring(0, calcInput.value.length - 1) + "*(";
    }
  } else if (nV === ')' || nV === '.') {
    null
  } else if (nV === '/' || nV === '*' || nV === '-' || nV === '+' || nV === '%') {
    if (calcInput.value.length === 1) {
      calcInput.value = "0" + nV
    } else {
      let nV2 = calcInput.value.substring(calcInput.value.length - 2).substring(0, 1)
      if (nV2 === '/' || nV2 === '*' || nV2 === '-' || nV2 === '+' || nV2 === '%') {
        calcInput.value = calcInput.value.substring(0, calcInput.value.length - 2) + nV;
      }
    }
  } else if (!isNaN(nV)) {
    let lexer = calcInput.value.substring(calcInput.value.length - 2).substring(0, 1)
    if (lexer === ')') {
      calcInput.value = calcInput.value.substring(0, calcInput.value.length - 1) + "*" + nV;
    }
  }
}

his.onclick = () => {
  calcInput.value = hisValue
}

const __showError = (e) => {
  if (e === null) {
    err.innerHTML = "&nbsp;"
  } else {
    if (new RegExp("SyntaxError:").test(e)) {
      err.innerHTML = e.substring(13, e.length)
    } else if (new RegExp("ReferenceError:").test(e)) {
      err.innerHTML = e.substring(16, e.length)
    }
  }
}

let cond1 = 0;
const __oneplus = () => {
  if (cond1 === 0) {
    err.innerHTML = "This Is Not 1+ Device"
  } else if (cond1 === 1) {
    err.innerHTML = "Beta Bola Na 1+ Nahi He."
  } else if (cond1 === 2) {
    err.innerHTML = "Bola Na 1+ Nahi He... 😡️ 😡️ 😡️"
  } else if (cond1 >= 3) {
    err.innerHTML = "Error x45071"
  }

  cond1++;
}

const __dark = () => {
  document.body.classList.remove("neon")
  document.body.classList.remove("light")
}

const __light = () => {
  document.body.classList.remove("neon")
  document.body.classList.add("light")
}

const __purple = () => {
  document.body.classList.remove("light")
  document.body.classList.add("neon")
}

const __material = () => {
  document.body.classList.toggle("mat-theme")
}

const pi = Math.IP
const inf = Infinity
const log2e = Math.LOG2E
const log10e = Math.LOG10E

const clear = () => {
  window.location.href = window.location.href
}

const sum = (...v) => {
  let val = 0;
  for (const vA of v) {
    val += vA
  }
  return val
}

const mul = (...v) => {
  let val = 1;
  for (const vA of v) {
    val = val * vA
  }
  return val
}

const power = (v, p) => Math.pow(v, p)
const log = x =>  x > -1 ? Math.log(x) : 0
const log10 = x =>  x > -1 ? Math.log10(x) : 0
const log1p = x =>  x > -1 ? Math.log1p(x) : 0
const log2 = x =>  x > -1 ? Math.log2(x) : 0
const exp = x =>  Math.exp(x)
const abs = x =>  Math.abs(x)
const floor = x => Math.floor(x)
const round = x => Math.round(x)
const random = x => Math.random(x)
const sign = x => Math.sign(x)
const sine = x => Math.sin(x)
const sinh = x => Math.sinh(x)
const sqrt = x => Math.sqrt(x)
const tan = x => Math.tan(x)
const tanh = x => Math.tanh(x)
