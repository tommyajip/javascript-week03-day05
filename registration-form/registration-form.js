// Web app untuk menampung isi message dari contact form
// Referensi: https://github.com/jamiewilson/form-to-google-sheets
// Link Google Sheet yang digunakan untuk menampung Registration Form: https://docs.google.com/spreadsheets/d/13ASEBZutDsZrHB5NXLERjsHde70QvMQK4zKjeLL9ogA/edit?usp=sharing

const scriptURL = 'https://script.google.com/macros/s/AKfycbyS6C0qeVKR5BcNXvXr8VVABpWoiX4IxXNEKrDmLoLB167waaQUUZ_iVi75pHrtaubg/exec'
const form = document.forms['registration-form'];
const btnSubmit = document.querySelector('#btn-submit');
const btnLoading = document.querySelector('#btn-loading');
const myAlert = document.querySelector('#alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol submit
    btnLoading.classList.toggle('d-none');
    btnSubmit.classList.toggle('d-none');
    // The Fetch API interface allows web browser to make HTTP requests to web servers
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // tampilkan tombol submit, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnSubmit.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset message-contact-form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})