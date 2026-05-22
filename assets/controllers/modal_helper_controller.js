import {Controller} from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://symfony.com/bundles/StimulusBundle/current/index.html#lazy-stimulus-controllers
*/

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['chapitreIdInput']

    initialize() {
        // Called once when the controller is first instantiated (per element)

        // Here you can initialize variables, create scoped callables for event
        // listeners, instantiate external libraries, etc.
        // this._fooBar = this.fooBar.bind(this)
    }

    connect() {
        // Called every time the controller is connected to the DOM
        // (on page load, when it's added to the DOM, moved in the DOM, etc.)

        // Here you can add event listeners on the element or target elements,
        // add or remove classes, attributes, dispatch custom events, etc.
        // this.fooTarget.addEventListener('click', this._fooBar)
    }


    open(event) {

        // 1. Récupérer l'ID passé par le bouton (ex: data-modal-helper-id-param)
        const id = event.params.id;

        // 2. Cibler l'élément par son ID pur
        const input = document.getElementById('modal_chapitre_id');

        if (input) {
            input.value = id;
            // console.log("input", id);
            console.log("ID injecté avec succès dans l'élément #modal_chapitre_id :", id);
        } else {
            console.error("Erreur : L'élément avec l'ID 'modal_chapitre_id' est introuvable dans la page.");
        }

        // 3. Ouvrir la modal (Syntaxe jQuery pour AdminLTE/Bootstrap 4)
        $('#modal-questionnaire').modal('show');
    }

    // Add custom controller actions here
    // fooBar() { this.fooTarget.classList.toggle(this.bazClass) }

    disconnect() {
        // Called anytime its element is disconnected from the DOM
        // (on page change, when it's removed from or moved in the DOM, etc.)

        // Here you should remove all event listeners added in "connect()"
        // this.fooTarget.removeEventListener('click', this._fooBar)
    }
}
