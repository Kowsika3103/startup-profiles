const form=document.querySelector("form");
nextBtn.addEventListenenr("click",()=>{
    allInput.forEach(input =>{
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })

})