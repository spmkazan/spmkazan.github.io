"use strict";for(var requestCall=document.querySelectorAll(".request-call"),modal=document.querySelector(".modal"),modalForm=document.querySelector(".modal__form"),modalRequestCall=document.querySelector(".modal__request-call"),infoMessage=document.querySelector(".modal__info-message"),i=0;i<requestCall.length;i++)requestCall[i].addEventListener("click",showModal);function clearModalForm(){document.querySelector(".modal__error-wrap").innerHTML="",modalForm[0].value="",modalForm[1].value=""}function showModal(){modalRequestCall.style.display="block"}function closeModal(){event.target.classList.contains("close")&&(clearModalForm(),modalRequestCall.style.display="none")}function closeForm(){clearModalForm(),modalRequestCall.style.display="none"}function showInfoMessage(){infoMessage.style.display="block"}function closeInfoMessage(){setTimeout(function(){infoMessage.style.display="none"},5e3)}function showErrors(e){var o=document.querySelector(".modal__error-wrap");o.innerHTML="";for(var l=0;l<e.length;l++){var n=document.createElement("p");n.textContent=e[l],o.appendChild(n)}}function submitForm(){event.preventDefault();var e=modalForm[0].value,o=modalForm[1].value,l=validationEmpty({name:e,phone:o});if(0===l.length)return submitEmail("submitEmail",{name:e,phone:o}),submitSms("submitPhone",{name:e,phone:o}),closeForm(),showInfoMessage(),void closeInfoMessage();showErrors(l)}function closeModalInfo(){infoMessage.style.display="none"}modalRequestCall.addEventListener("click",function(e){return closeModal(e)}),modalForm.addEventListener("submit",function(e){return submitForm(e)}),infoMessage.addEventListener("click",closeModalInfo);