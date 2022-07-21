const formData = {
  name: '',
  email: '',
  message: '',
};
const FORM_KEY = 'form-data';
const fullname = document.getElementById('fullname');
const mail = document.getElementById('email');
const message = document.getElementById('message');

const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getData = (key) => localStorage.getItem(key);
let formStorageData = JSON.parse(getData(FORM_KEY));

if (!getData(FORM_KEY)) {
  setData(FORM_KEY, formData);
}

if (formStorageData) {
  fullname.value = formStorageData.name;
  mail.value = formStorageData.email;
  message.value = formStorageData.message;
}

// ADD EVENT LISTENTER TO INPUT AND TEXTAREA
fullname.addEventListener('keyup', () => {
  formStorageData = JSON.parse(getData(FORM_KEY));
  formStorageData.name = fullname.value;
  setData(FORM_KEY, formStorageData);
});

mail.addEventListener('keyup', () => {
  formStorageData = JSON.parse(getData(FORM_KEY));
  formStorageData.email = mail.value;
  setData(FORM_KEY, formStorageData);
});

message.addEventListener('keyup', () => {
  formStorageData = JSON.parse(getData(FORM_KEY));
  formStorageData.message = message.value;
  setData(FORM_KEY, formStorageData);
});