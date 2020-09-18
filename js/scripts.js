let elemSel = document.querySelectorAll('.form-control');

elemSel.forEach(ele => {
    ele.addEventListener('focusout', ele =>{
        validField(ele);
    })
})

function validField(elemS){
    let element = elemS.target;
    (element.value.length > 0) ? element.classList.add('valid') : element.classList.remove('valid');
}