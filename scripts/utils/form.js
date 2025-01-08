// Fonction pour ouvrir et fermer le formulaire de contact
export const openCloseFormContact = () => {
    const contactBtn = document.querySelector(".contact_button");
    const contactModal = document.querySelector(".modal_wrapper");
    const closeModal = document.querySelector(".btn_close");
    
    contactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
        closeModal.focus();
    });

    closeModal.addEventListener("click", () => contactModal.style.display = "none");
};

// Fonction pour valider le formulaire
export const validateForm = () => {
    const form = document.querySelector('.modal_form form');
    const firstName = document.querySelector("#firstname");
    const lastName = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    // Ajout de l'événement blur sur chaque champ pour afficher les erreurs uniquement après que l'utilisateur quitte le champ
    [firstName, lastName, email, message].forEach(input => {
        input.addEventListener('blur', () => checkInputValidity(input));
    });

    // Ajout de l'événement submit pour la validation finale
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!form.checkValidity()) {
            displayCustomMessage();
        } else {
            const formDatas = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                message: message.value,
            };
            console.log(JSON.stringify(formDatas));
            document.querySelectorAll('.formField').forEach(input => input.classList.remove('valid'));
            form.reset();
        }
    });

    // Fonction pour vérifier la validité d'un champ et afficher le message d'erreur correspondant
    const checkInputValidity = (input) => {
        const errorMessage = input.dataset.error;
        const messageProvider = input.nextElementSibling;
        let isValid = false;

        switch (input.id) {
            case 'firstname':
            case 'lastname':
                isValid = input.value.trim().length >= 3 && input.value.trim().length <= 15;
                break;
            case 'email':
                isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value);
                break;
            case 'message':
                isValid = /^[A-Za-z0-9|\s]{5,200}$/.test(input.value);
                break;
        }

        if (isValid) {
            messageProvider.innerHTML = "";
            messageProvider.removeAttribute("role");
            input.removeAttribute("aria-invalid");
        } else {
            messageProvider.innerHTML = errorMessage;
            messageProvider.setAttribute("role", "alert");
            input.setAttribute("aria-invalid", "true");
        }

        input.classList.toggle('invalid', !isValid);
        input.classList.toggle('valid', isValid);
    };

    // Fonction pour afficher les messages d'erreur personnalisés sur tous les champs
    const displayCustomMessage = () => {
        checkInputValidity(firstName);
        checkInputValidity(lastName);
        checkInputValidity(email);
        checkInputValidity(message);
    };
};
