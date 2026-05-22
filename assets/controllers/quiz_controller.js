import {Controller} from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://symfony.com/bundles/StimulusBundle/current/index.html#lazy-stimulus-controllers
*/

/* stimulusFetch: 'lazy' */
export default class extends Controller {

    initialize() {
        // Called once when the controller is first instantiated (per element)

        // Here you can initialize variables, create scoped callables for event
        // listeners, instantiate external libraries, etc.
        // this._fooBar = this.fooBar.bind(this)
    }

    connect() {
        this.updateStates();
    }

    validateForm(event) {
        const checkboxes = Array.from(this.element.querySelectorAll('input[type="checkbox"]'));
        const checkedCount = checkboxes.filter(c => c.checked).length;

        if (checkedCount < 1) {
            // Empêche l'envoi du formulaire au serveur
            event.preventDefault();

            // Notification utilisateur
            alert("Erreur : Vous devez cocher au moins une réponse comme étant correcte.");

            // Optionnel : ajouter un style visuel d'erreur
            this.element.querySelector('#reponses-wrapper').style.border = "1px solid red";
        }
    }

    // Add custom controller actions here
    // fooBar() { this.fooTarget.classList.toggle(this.bazClass) }
    // quiz-options_controller.js
    add(e) {
        const container = document.getElementById('reponses-wrapper'); // l'ID de votre div
        const index = container.dataset.index;

        // Récupère le prototype
        let proto = container.dataset.prototype;

        // REMPLACEMENT CRUCIAL :
        // On remplace le placeholder du prototype par l'index actuel
        proto = proto.replace(/__reponse_name__/g, index);

        // Insertion dans le DOM
        container.insertAdjacentHTML('beforeend', proto);

        // Incrémentation de l'index pour le prochain clic
        container.dataset.index = parseInt(index) + 1;
    }

    remove(event) {
        // Supprime la ligne de réponse parente
        event.target.closest('.option-row').remove();
    }

    toggleCheck(event) {
        const checkboxes = this.element.querySelectorAll('input[type="checkbox"]');
        const totalOptions = checkboxes.length;
        const checkedCount = Array.from(checkboxes).filter(c => c.checked).length;


        if (totalOptions <= 1 && event.target.checked) {
            event.target.checked = false;
            alert("Vous devez avoir au minimum deux options.");
            return;
        }

        if (checkedCount >= totalOptions && event.target.checked) {
            event.target.checked = false; // On annule le cochage
            alert("Attention : au moins une des options doit être fausse.");
            return;
        }


        this.updateStates();
    }

    updateStates() {

        this.element.querySelectorAll('.option-row').forEach(row => {
            const checkbox = row.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
                row.classList.add('is-correct-row');
            } else {
                row.classList.remove('is-correct-row');
            }
        });


        // const rows = this.element.querySelectorAll('.option-row');
        // rows.forEach(row => {
        //     const checkbox = row.querySelector('input[type="checkbox"]');
        //     if (checkbox.checked) {
        //         row.classList.add('bg-light-success'); // Ajoute un fond vert clair
        //         row.style.border = "1px solid #28a745";
        //     } else {
        //         row.classList.remove('bg-light-success');
        //         row.style.border = "1px solid #ced4da";
        //     }
        // });
    }

    disconnect() {
        // Called anytime its element is disconnected from the DOM
        // (on page change, when it's removed from or moved in the DOM, etc.)

        // Here you should remove all event listeners added in "connect()"
        // this.fooTarget.removeEventListener('click', this._fooBar)
    }
}
