const transactionsUl = document.querySelector('#transactions')
const incomeDisplay= document.querySelector('#money-plus')
const expenseDisplay= document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('#amount')

 /* Manter as adições e remoções na pagina ,mesmo que ela seja atualizada, devemos realizar a seguinte programação */
const localStorageTransactions = JSON.parse (localStorage
    .getItem ('transactions'))
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []


/*Função button Excluir objetos */
const removeTransaction = ID => {
    transactions = transactions.filter(transaction => 
    transaction.id !== ID)
    updateLocalStorage()
    init()
}

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')
    
    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name} 
        <span>${operator} R$ ${amountWithoutOperator}</span>
        <button class="delete-btn" onClick="removeTransaction(${transaction.id})">
            x
        </button>
    `
    transactionsUl.append(li)

}
   /* Valor Total do Saldo e Receitas  */
const updateBalanceValues = () => {
    const transactionsAmounts = transactions
        .map(transaction => transaction.amount)
    const total = transactionsAmounts
        .reduce((accumulator, transaction) =>accumulator + transaction, 0)
        .toFixed(2)
    const income = transactionsAmounts
        .filter(value => value>0)
        .reduce((accumulator,value) => accumulator + value, 0)
        .toFixed(2)
    /* Valor das Despesa */
    const expense = Math.abs (transactionsAmounts
        .filter(value => value <0)
        .reduce ((accumulator, value) => accumulator + value, 0))
        .toFixed(2)

    balanceDisplay.textContent= `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () => {

    transactionsUl.innerHTML = ''
    transactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()

/* Adicionar Informação no LocalStorage.*/
const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

const generateID = () => Math.round(Math.random()*1000)

const addToTransactionArray = (transactionName, transactionsAmount) => {
    transactions.push({
    id: generateID(), 
    name:transactionName,
    amount: Number(transactionsAmount)
})
}

const cleanInputs = () =>{
    /* Limpa os inputs*/
    inputTransactionName.value = ''
    inputTransactionAmount.value= ''
}


const handleFormSubmit = event => {
    event.preventDefault() /* Impedindo que a pagina seja reacarregada*/

    /*Criação de 2 constante com os valores recebido no input*/
    const transactionName = inputTransactionName.value.trim()
    const transactionsAmount = inputTransactionAmount.value.trim()
    const isSomeInputEmpty = transactionName === '' || transactionsAmount === ''

    /* Verificação de se algum dos input não foi preenchido e exibi um msg de alerta na tela*/
    if(isSomeInputEmpty) {
        alert('Por favor preencher o nome e o valor da transação')
        return
    }
    
    addToTransactionArray( transactionName,transactionsAmount)
    init()
    /* Atualiza o lacalstorie*/
    updateLocalStorage()
    cleanInputs()
    
}

form.addEventListener('submit',handleFormSubmit)