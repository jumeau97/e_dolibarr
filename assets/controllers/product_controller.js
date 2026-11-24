import {Controller} from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://symfony.com/bundles/StimulusBundle/current/index.html#lazy-stimulus-controllers
*/

/* stimulusFetch: 'lazy' */
export default class extends Controller {

    static targets = ['productIdInput', 'productNameDisplay']

    connect() {
        // Called every time the controller is connected to the DOM
    }

    /**
     * Ouvre la modal de transfert et pré-remplit le produit
     */
    open(event) {
        event.preventDefault();
        const id = event.params.id;
        const name = event.params.name;

        const display = document.getElementById('transfert-produit-nom');
        console.log("display", display);
        const input = document.getElementById('transfere_stock_form_product');
        console.log("input element:", input);

        if (display) {
            display.textContent = name;
        }
        if (input) {
            input.value = id;
            console.log(`Input value set to: ${input.value}`);
        }

        // Ouvrir la modal via Bootstrap 5 data API ou JS direct
        const modalEl = document.getElementById('modal-transfert');
        if (modalEl) {
            // Bootstrap 5
            if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            } else if (typeof $ !== 'undefined' && $.fn.modal) {
                // Bootstrap 4 avec jQuery
                $(modalEl).modal('show');
            } else {
                // Fallback natif
                modalEl.style.display = 'block';
                modalEl.classList.add('show');
                modalEl.setAttribute('aria-modal', 'true');
                modalEl.removeAttribute('aria-hidden');
                const backdrop = document.createElement('div');
                backdrop.className = 'modal-backdrop fade show';
                document.body.appendChild(backdrop);
                document.body.style.overflow = 'hidden';
                modalEl._backdrop = backdrop;
            }
        }
    }

    /**
     * Ouvre la modal de correction et pré-remplit le produit
     */
    openning(event) {
        event.preventDefault();
        const id = event.params.id;
        const name = event.params.name;

        const display = document.getElementById('correct-produit-nom');
        const input = document.getElementById('correction_stock_product');

        if (display) display.textContent = name;
        if (input) input.value = id;

        const modalEl = document.getElementById('modal-correction');
        if (modalEl) {
            if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            } else if (typeof $ !== 'undefined' && $.fn.modal) {
                $(modalEl).modal('show');
            } else {
                modalEl.style.display = 'block';
                modalEl.classList.add('show');
                modalEl.setAttribute('aria-modal', 'true');
                modalEl.removeAttribute('aria-hidden');
                const backdrop = document.createElement('div');
                backdrop.className = 'modal-backdrop fade show';
                document.body.appendChild(backdrop);
                document.body.style.overflow = 'hidden';
                modalEl._backdrop = backdrop;
            }
        }
    }

    disconnect() {
        // Nettoyage
    }
}
