const formData = {
    'name': '',
    'email': '',
    'message': ''
};
const FORM_KEY = 'form-data';
let fullname = document.getElementById('fullname');
let mail = document.getElementById('email');
let message = document.getElementById('message');

const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getData = (key) => localStorage.getItem(key);
let formStorageData = JSON.parse(getData(FORM_KEY));

if (!getData(FORM_KEY)) {
    setData(FORM_KEY, formData);
} else {
    if (formStorageData) {
        fullname.value = formStorageData.name;
        mail.value = formStorageData.email;
        message.value = formStorageData.message;
    }
}