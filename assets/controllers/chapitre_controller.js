import { Controller } from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://symfony.com/bundles/StimulusBundle/current/index.html#lazy-stimulus-controllers
*/

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['output', 'placeholder']
    initialize() {
        // Called once when the controller is first instantiated (per element)

        // Here you can initialize variables, create scoped callables for event
        // listeners, instantiate external libraries, etc.
        // this._fooBar = this.fooBar.bind(this)
    }

    connect() {
        const container = document.querySelector('#ressources-container');
        const addBtn = document.querySelector('.add-item');

        if (addBtn && container) {
            // console.log("nananana");
            addBtn.addEventListener('click', function () {
                const index = parseInt(container.dataset.index);
                const prototype = container.dataset.prototype;
                const newForm = prototype.replace(/__name__/g, index);

                const newItem = document.createElement('div');
                newItem.className = 'col-md-3 mb-4 collection-item';
                newItem.innerHTML = `
                <div class="card h-100 border shadow-sm position-relative">
                    <button type="button" class="btn btn-danger btn-xs position-absolute remove-item"
                            style="top: -10px; right: -10px; z-index: 10; border-radius: 50%;">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="card-body p-2 text-center">
                        ${newForm}
                    </div>
                </div>
            `;

                container.appendChild(newItem);
                container.dataset.index = index + 1;
            });

            container.addEventListener('click', function (e) {
                const deleteBtn = e.target.closest('.remove-item');
                if (deleteBtn) {
                    deleteBtn.closest('.collection-item').remove();
                }
            });
        }
    }

    // show(event) {
    //     const file = event.currentTarget.files[0];
    //
    //     if (file && file.type.startsWith('image/')) {
    //         const reader = new FileReader();
    //
    //         reader.onload = (e) => {
    //             // Mise à jour de l'image
    //             this.outputTarget.src = e.target.result;
    //             this.outputTarget.style.display = 'block';
    //
    //             // Masquer l'icône placeholder si elle existe
    //             if (this.hasPlaceholderTarget) {
    //                 this.placeholderTarget.style.display = 'none';
    //             }
    //         };
    //
    //         reader.readAsDataURL(file);
    //     }
    // }
    show(event) {
        // 'event.currentTarget' est l'input qui a déclenché l'upload
        const input = event.currentTarget;
        const file = input.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // 'this.outputTarget' trouve l'image associée à CE contrôleur précis
                if (this.hasOutputTarget) {
                    this.outputTarget.src = e.target.result;
                    this.outputTarget.style.display = 'block';
                }
            };

            reader.readAsDataURL(file);
        } else {
            if (this.hasOutputTarget) {
                this.outputTarget.style.display = 'none';
            }
        }
    }
    // Add custom controller actions here
    // fooBar() { this.fooTarget.classList.toggle(this.bazClass) }

    add(event) {
        const container = document.getElementById('ressources-container');
        const index = parseInt(container.dataset.index);
        const prototype = container.dataset.prototype;

        const newForm = prototype.replace(/__name__/g, index);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newForm;
        const newElement = tempDiv.firstElementChild;

        container.appendChild(newElement);
        container.dataset.index = index + 1;
    }

    remove(event) {
        event.currentTarget.closest('.ressource-item').remove();
    }
    disconnect() {
        // Called anytime its element is disconnected from the DOM
        // (on page change, when it's removed from or moved in the DOM, etc.)

        // Here you should remove all event listeners added in "connect()"
        // this.fooTarget.removeEventListener('click', this._fooBar)
    }
}
