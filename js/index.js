"use strict";var infoMessageContact=document.querySelector(".modal__info-message"),contactForm=document.querySelector(".contact-form");function submitFormContact(t){t.preventDefault();var e=contactForm[0].value,o=contactForm[1].value,n=contactForm[2].value,r=validationEmpty({name:e,phone:o,description:n});if(0===r.length)return submitEmail("submitContactEmail",{name:e,phone:o,description:n}),submitSms("submitContactPhone"),clearContactForm(),showInfoMessageContact(),void closeInfoMessageContact();showContactErrors(r)}function showInfoMessageContact(){infoMessageContact.style.display="block"}function closeInfoMessageContact(){setTimeout(function(){infoMessageContact.style.display="none"},5e3)}function clearContactForm(){document.querySelector(".contact__error").innerHTML="",contactForm[0].value="",contactForm[1].value="",contactForm[2].value=""}function showContactErrors(t){var e=document.querySelector(".contact__error");e.innerHTML="";for(var o=0;o<t.length;o++){var n=document.createElement("p");n.textContent=t[o],e.appendChild(n)}}contactForm.addEventListener("submit",function(t){return submitFormContact(t)});var formSlider=document.querySelector(".slider-form__form");function submitFormSlider(t){t.preventDefault();var e=formSlider[0].value,o=formSlider[1].value,n=validationEmpty({name:e,phone:o});if(0===n.length)return submitEmail("submitEmail",{name:e,phone:o}),submitSms("submitPhone",{name:e,phone:o}),clearSliderForm(),closeForm(),showInfoMessageContact(),void closeInfoMessageContact();showSliderErrors(n)}function clearSliderForm(){document.querySelector(".slider-form__error").innerHTML="",formSlider[0].value="",formSlider[1].value=""}function showSliderErrors(t){var e=document.querySelector(".slider-form__error");e.innerHTML="";for(var o=0;o<t.length;o++){var n=document.createElement("p");n.textContent=t[o],e.appendChild(n)}}formSlider.addEventListener("submit",function(t){return submitFormSlider(t)});var aboutContent=document.querySelector(".about__content-hidden"),aboutButton=document.querySelector(".about-button");function aboutShowContent(){"block"===aboutContent.style.display?aboutContent.style.display="none":aboutContent.style.display="block"}aboutButton.addEventListener("click",aboutShowContent);