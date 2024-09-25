function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const valueNumber = parseFloat(inputValue);
    return valueNumber;
}
function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText;
    const valueNumber = parseFloat(textValue);
    return valueNumber;
}
function showSectionById (id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}