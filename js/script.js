function menuHead() {
    let menuHamburger = document.querySelector('#content');
    
    if (menuHamburger.style.display == 'block') {
        menuHamburger.style.display = 'none';
    }else{
        menuHamburger.style.display = 'block';
    }
}

class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault(); 
        this.formButton.disabled = true;
        this.formButton.innerText = "Enviando...";
    }

    async sendForm(event) {
        this.onSubmission(event);
        try {
            const response = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject()),
            });
            if (response.ok) {
                this.displaySuccess();
            } else {
                this.displayError();
            }
        } catch (error) {
            this.displayError();
            console.error(error);
        }
    }

    init() {
        if (this.form) {
            this.form.addEventListener("submit", this.sendForm);
        }
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada ❤️</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem...</h1>",
});

formSubmit.init();