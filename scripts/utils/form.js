// Fonction pour ouvrir et fermer le formulaire de contact
export const openCloseFormContact = () => {
    const contactBtn = document.querySelector(".contact_button");
    const contactModal = document.querySelector(".modal_wrapper");
    const closeModal = document.querySelector(".btn_close");
    // Ajout d'un événement click sur le bouton de contact pour ouvrir le formulaire
    contactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
        closeModal.focus();
    });
    // Ajout d'un événement click sur le bouton de fermeture pour fermer le formulaire
    closeModal.addEventListener("click", () => contactModal.style.display = "none");
};

// Fonction pour valider le formulaire
export const validateForm = () => {
    const form = document.querySelector('.modal_form form');
    const firstName = document.querySelector("#firstname");
    const lastName = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    // Ajout d'un événement input sur le formulaire pour afficher les messages d'erreur personnalisés
    form.addEventListener('input', () => displayCustomMessage());

    // Ajout d'un événement submit sur le formulaire pour valider les données et les envoyer
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!form.checkValidity()) displayCustomMessage();
        else {
            const formDatas = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                message: message.value,
            };
            console.log(JSON.stringify(formDatas));
            document.querySelectorAll('.formField').forEach(input => input.classList.remove('valid'));
            form.reset();
        };
    });

    // Fonction pour vérifier la validité d'un champ d'entrée et afficher le message d'erreur correspondant
    const checkInputValidity = (input, isValid) => {
        const errorMessage = input.dataset.error;
        const messageProvider = input.nextElementSibling;

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

    // Fonction pour afficher les messages d'erreur personnalisés
    const displayCustomMessage = () => {
        const isFirstNameValid = firstName.value.trim().length >= 3 && firstName.value.trim().length <= 15;
        const isLastNameValid = lastName.value.trim().length >= 3 && lastName.value.trim().length <= 15;
        const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const regexMessage = /^[A-Za-z0-9|\s]{5,200}$/;

        checkInputValidity(firstName, isFirstNameValid);
        checkInputValidity(lastName, isLastNameValid);
        checkInputValidity(email, regexEmail.test(email.value));
        checkInputValidity(message, regexMessage.test(message.value));
    };
};
