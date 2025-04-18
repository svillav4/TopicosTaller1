window.onload = function(){
    initializeCheckboxes();
    locateStep();
    loadProgress();
    showInfo();
    deleteConfirm();
    roadmapCompletedConfetti();
}

function initializeCheckboxes(){
    let numChkpts = 1; // Initialize counter
    const checkpoints = JSON.parse(document.getElementById('checkpoints-data').textContent);
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="remarkablePoint"]');
    checkboxes.forEach(checkbox => {
        checkbox.value = numChkpts;
        if(checkpoints[numChkpts]){
            checkbox.checked = true;    
        }else{
            checkbox.checked = false;
        }
        numChkpts++;
    });
}


function locateStep(){
    const url = window.location.pathname;
    const splittedUrl = url.split('/');
    const stepNumber = parseInt(splittedUrl[splittedUrl.length-1]);
    if(splittedUrl.length == 5 && stepNumber > 0){ //Must be equal to 5 to be an after mark page.
        openModal(stepNumber);
    }
}

function roadmapCompletedConfetti(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="remarkablePoint"]');
    let bool = true;
    if(checkboxes.length == 0){
        bool = false;
        return;
    }
    for(count = 0; count < checkboxes.length; count++){
        if(!checkboxes[count].checked){
            bool = false;
            break
        }
    }
    if(bool){
        var duration = 10 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 100 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);    
    }
}

function openModal(step){
    //Open the modal of the step element with the given id.
    const stepElement = document.getElementById('modal'+step);
    if(stepElement){
        stepElement.showModal();
    }
}

function submitForm(checkbox, step){
    let checkpoint = document.getElementById('checkpoint'+step);
    checkpoint.value = checkbox.value;
    //Rename the id and name to have a single POST value.
    checkpoint.id = 'checkpoint'; 
    checkpoint.name = 'checkpoint';

    checkbox.form.submit();
}

function loadProgress(){
    let count = 0
    const paso1 = document.querySelectorAll('.paso1');
    const paso2 = document.querySelectorAll('.paso2');
    const paso3 = document.querySelectorAll('.paso3');
    const paso4 = document.querySelectorAll('.paso4');
    const paso5 = document.querySelectorAll('.paso5');
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="remarkablePoint"]');
    for(count = 0; count < checkboxes.length; count++){
        if(!checkboxes[count].checked){
            break
        }
    }
    console.log(count);
    if(count >= 15){
        paso1.forEach(element => {
            element.classList.add('active');
        });
        paso2.forEach(element => {
            element.classList.add('active');
        });
        paso3.forEach(element => {
            element.classList.add('active');
        });
        paso4.forEach(element => {
            element.classList.add('active');
        });
        paso5.forEach(element => {
            element.classList.add('active');
        });
    }else if(count >= 12){
        paso1.forEach(element => {
            element.classList.add('active');
        });
        paso2.forEach(element => {
            element.classList.add('active');
        });
        paso3.forEach(element => {
            element.classList.add('active');
        });
        paso4.forEach(element => {
            element.classList.add('active');
        });
        paso5.forEach(element => {
            element.classList.remove('active');
        });
    }else if(count >= 9){
        paso1.forEach(element => {
            element.classList.add('active');
        });
        paso2.forEach(element => {
            element.classList.add('active');
        });
        paso3.forEach(element => {
            element.classList.add('active');
        });
        paso4.forEach(element => {
            element.classList.remove('active');
        });
        paso5.forEach(element => {
            element.classList.remove('active');
        });
    }else if(count >= 6){
        paso1.forEach(element => {
            element.classList.add('active');
        });
        paso2.forEach(element => {
            element.classList.add('active');
        });
        paso3.forEach(element => {
            element.classList.remove('active');
        });
        paso4.forEach(element => {
            element.classList.remove('active');
        });
        paso5.forEach(element => {
            element.classList.remove('active');
        });
    }else if(count >= 3){
        paso1.forEach(element => {
            element.classList.add('active');
        });
        paso2.forEach(element => {
            element.classList.remove('active');
        });
        paso3.forEach(element => {
            element.classList.remove('active');
        });
        paso4.forEach(element => {
            element.classList.remove('active');
        });
        paso5.forEach(element => {
            element.classList.remove('active');
        }); 
    }
}

function showInfo(){
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');

    const close1 = document.getElementsByClassName('btn-cerrar-modal1');
    const close2 = document.getElementsByClassName('btn-cerrar-modal2');
    const close3 = document.getElementsByClassName('btn-cerrar-modal3');
    const close4 = document.getElementsByClassName('btn-cerrar-modal4');
    const close5 = document.getElementsByClassName('btn-cerrar-modal5');

    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3');
    const modal4 = document.getElementById('modal4');
    const modal5 = document.getElementById('modal5');

    btn1.addEventListener('click',() => {
        modal1.showModal();
    })

    btn2.addEventListener('click',() => {
        modal2.showModal();
    })

    btn3.addEventListener('click',() => {
        modal3.showModal();
    })

    btn4.addEventListener('click',() => {
        modal4.showModal();
    })

    btn5.addEventListener('click',() => {
        modal5.showModal();
    })

    close1[0].addEventListener('click',() => {
        modal1.close();
    })
    close1[1].addEventListener('click',() => {
        modal1.close();
    })

    close2[0].addEventListener('click',() => {
        modal2.close();
    })
    close2[1].addEventListener('click',() => {
        modal2.close();
    })

    close3[0].addEventListener('click',() => {
        modal3.close();
    })
    close3[1].addEventListener('click',() => {
        modal3.close();
    })

    close4[0].addEventListener('click',() => {
        modal4.close();
    })
    close4[1].addEventListener('click',() => {
        modal4.close();
    })

    close5[0].addEventListener('click',() => {
        modal5.close();
    })
    close5[1].addEventListener('click',() => {
        modal5.close();
    })

}

function deleteConfirm(){

    const btnModalDelete = document.getElementById('btn-modalDelete');
    const btnModalDeleteClose = document.getElementById('btn-modalDeleteClose');
    var modalDelete = document.getElementById('modalDelete');

    if (btnModalDelete == null || btnModalDeleteClose == null || modalDelete == null) {
        return;
    }
    
    btnModalDelete.addEventListener("click",()=>{
        modalDelete.showModal();
    })

    btnModalDeleteClose.addEventListener("click",()=>{
        modalDelete.close();
    })

    window.onclick = function(event) {
        if (event.target == modalDelete) {
            modalDelete.close();
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");

    if (status) {
        const modalClone = document.getElementById("modalClone");
        const modalTitle = document.getElementById("modalTitle");
        const modalBody = document.getElementById("modalBody");

        if (status === "success") {
            modalTitle.textContent = "Success";
            modalBody.textContent = "Roadmap cloned successfully!";
        } else if (status === "exists") {
            modalTitle.textContent = "Warning";
            modalBody.textContent = "You already have a roadmap with the same content. Visit your profile to see it.";
        }

        modalClone.showModal();

        // Clear the status parameter from the URL
        history.replaceState(null, "", window.location.pathname);
    }

    document.getElementById("btn-modalClone").addEventListener("click", function () {
        modalClone.close();
    });

});