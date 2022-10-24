//select input

const submitBtn= document.querySelector('.submit-btn');
const name= document.querySelector('#name');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const number= document.querySelector('#number');
const tac= document.querySelector('#term-and-cond');
const notification= document.querySelector('#notification');
const loader=document.querySelector('.loader')

submitBtn.addEventListener('click', () =>{
    if(name.value.length <3 ){
        showAlert('karakter nama harus lebih dari tiga')
    }
    else if(!email.value.length){
        showAlert('email tidak boleh kosong')
    }
    else if(!password.value.length){
        showAlert('pasword harus lebih dari 8 karakter')
    }
    else if(!number.value.length){
        showAlert('masukkan nomor telepon')
    }
    else if(!Number(number.value) || number.value.length <10 ){
        showAlert('nomor tidak valid')
    }
    else if(!tac.checked){
        showAlert('setujui ketentuan kami')
    }
    else{
        loader.style.display='block'
    }
})
//alert function

const showAlert=(msg)=>{
    let alertBox=document.querySelector('.alert-box');
    let alertMsg=document.querySelector('.alert-msg');

    alertMsg.innerHTML=msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
    
}
//send data

const sendData= (path, data)=>{
    fetch(path,{
        method: 'post',
        headers:new headers({'content-type':'application/json'}),
        body:JSON.stringify(data)
    })
}