let userInputs = []


function productsList() {
    const inputList = document.getElementById("input").value
    userInputs.push(inputList)
    document.getElementById("valuePushed").innerHTML = userInputs + '<br>'

}