//             <------card-1------->

document.getElementById('donate-btn').addEventListener('click', function(){
    const amountInput = getInputFieldValueById('amount-input');
    const balance = getTextFieldValueById('main-balance');
    if (amountInput > balance){
        alert('Insufficient Balance!');
       return;
    }
    if (isNaN(amountInput) || amountInput === '' ){
        alert ('Invalid Input!');
    }
    else{
        const currentDonation = getTextFieldValueById('current-donation');
        const newDonation = amountInput + currentDonation;
        document.getElementById('current-donation').innerText = newDonation;
        const currentBalance = balance - amountInput;
        document.getElementById('main-balance').innerText = currentBalance;
        document.getElementById('my_modal_1').showModal();

        // <------added history------>

        const location = document.getElementById('donate-for-noakhali').innerText;
        const div = document.createElement('div');
        const currentDate = new Date();
        const formattedDate = currentDate.toString();
        div.classList.add('border-solid', 'border-2', 'border-gray-200','rounded-2xl','text-start','my-5');
        div.innerHTML = `
           <p class= "p-5 text-xl font-bold"> ${amountInput} Taka is Donated for ${location} </p>
           <p class="text-gray-500 pb-5 pl-5">Date: ${formattedDate}</p>
        `
        document.getElementById('history-info').appendChild(div);
    }
})

//                 <----card-2------->

document.getElementById('donate-btn-2').addEventListener('click', function(){
    const amountInput = getInputFieldValueById('amount-input-2');
    const balance = getTextFieldValueById('main-balance');
    if (amountInput > balance){
        alert('Insufficient Balance!');
       return;
    }
    if (isNaN(amountInput) || amountInput === '' ){
        alert ('Invalid Input!');
    }
    else{
        const currentDonation = getTextFieldValueById('current-donation-2');
        const newDonation = amountInput + currentDonation;
        document.getElementById('current-donation-2').innerText = newDonation;
        const currentBalance = balance - amountInput;
        document.getElementById('main-balance').innerText = currentBalance;
        document.getElementById('my_modal_1').showModal();

        // <-------Added History----->

        const location = document.getElementById('donate-for-feni').innerText;
        console.log(location);
        const div = document.createElement('div');
        const currentDate = new Date();
        const formattedDate = currentDate.toString();
        div.classList.add('border-solid', 'border-2', 'border-gray-200','rounded-2xl','text-start','my-5');
        div.innerHTML = `
           <p class= "p-5 text-xl font-bold"> ${amountInput} Taka is Donated for ${location} </p>
           <p class="text-gray-500 pb-5 pl-5">Date: ${formattedDate}</p>
        `
        document.getElementById('history-info').appendChild(div);
    }
})

//             <-------card-3--------->

document.getElementById('donate-btn-3').addEventListener('click', function(){
    const amountInput = getInputFieldValueById('amount-input-3');
    const balance = getTextFieldValueById('main-balance');
    if (amountInput > balance){
        alert('Insufficient Balance!');
       return;
    }
    if (isNaN(amountInput) || amountInput === '' ){
        alert ('Invalid Input!');
    }
    else{
        const currentDonation = getTextFieldValueById('current-donation-3');
        const newDonation = amountInput + currentDonation;
        document.getElementById('current-donation-3').innerText = newDonation;
        const currentBalance = balance - amountInput;
        document.getElementById('main-balance').innerText = currentBalance;
        document.getElementById('my_modal_1').showModal();

        // <-----history added---->

        const location = document.getElementById('donate-for-movement').innerText;
        console.log(location);
        const div = document.createElement('div');
        const currentDate = new Date();
        const formattedDate = currentDate.toString();
        div.classList.add('border-solid', 'border-2', 'border-gray-200','rounded-2xl','text-start','my-5');
        div.innerHTML = `
           <p class= "p-5 text-xl font-bold"> ${amountInput} Taka is Donated for ${location} </p>
           <p class="text-gray-500 pb-5 pl-5">Date: ${formattedDate}</p>
        `
        document.getElementById('history-info').appendChild(div);
    }
})

// ---------------------------------------->
// <--------------------------------------------------------->

const historyButton = document.getElementById('history-btn');
const donationButton = document.getElementById('donation-btn');
document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-section');
    historyButton.classList.add('bg-lime-300');
    donationButton.classList.remove('bg-lime-300');
})
document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-section');
    historyButton.classList.remove('bg-lime-300');
    donationButton.classList.add('bg-lime-300');
})

// <------------Toggle Home and Blog Button------------>

document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = './faq.html';
})

