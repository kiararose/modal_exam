/* js code */

// Button from the table (Cancel) 
const btnCancel = document.getElementById("btnCancel");

// Buttons from the modal (Close, No, Yes - Cancel)
const btnClose = document.getElementById("btnClose");
const btnNo = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");

// Modal
const modal = document.getElementById("modalWindow");
const modalText = document.getElementById("modalText");

// Call function when each button is clicked
btnCancel.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
btnNo.addEventListener('click', closeModal);
btnYes.addEventListener('click', cancelSubscription);

// Function to open modal
function openModal() {
    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
}

// Function to update the text in the modal and button (from the table) when 'Yes - Cancel' button is clicked
// Automatically closes the modal after 2 seconds 
// Cancelled button is disabled 
function cancelSubscription() {
    let timeout;

    modalText.innerHTML = "Subscription successfully cancelled!";
    btnCancel.innerHTML = "cancelled";
    btnCancel.style.cursor = "auto";
    btnCancel.disabled = true;

    timeout = setTimeout(closeModal, 2000);
}