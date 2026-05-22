import {Controller} from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://symfony.com/bundles/StimulusBundle/current/index.html#lazy-stimulus-controllers
*/

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['output', 'input', 'label'];
    photoInput = null;
    preview = null;

    initialize() {
    }

    connect() {

        // ----------------------------

        // document.addEventListener('', function () {
        const realPriceInput = document.querySelector('.js-real-price');
        const promoPriceInput = document.querySelector('.js-promo-price');
        const discountBadge = document.getElementById('js-discount-badge');

        function updateDiscount() {
            // console.log("execute");
            const real = parseFloat(realPriceInput.value);
            const promo = parseFloat(promoPriceInput.value);

            // console.log("real", real);

            if (real > 0 && promo > 0 && promo < 80) {
                const discount = (real * promo) / 100;
                discountBadge.textContent = 'Prix promotionnel ' + discount + ' Fcfa';
                discountBadge.style.display = 'block';
            } else {
                discountBadge.style.display = 'none';
            }
        }

        // Écouter la saisie sur les deux prix
        realPriceInput.addEventListener('input', updateDiscount);
        promoPriceInput.addEventListener('input', updateDiscount);

        // Initialisation au chargement
        updateDiscount();
        // });
    }


    show2(event) {
        const file = event.currentTarget.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.outputTarget.src = e.target.result;
                this.outputTarget.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    }


    show(event) {
        // console.log("event preview", event);
        this.photoInput = document.querySelector('.js-photo-input');
        const preview = document.getElementById('image-preview');

        if (this.photoInput) {
            this.photoInput.addEventListener('change', function () {
                const file = this.files[0];

                if (file) {
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        // On injecte la source de l'image (base64)
                        preview.src = e.target.result;
                        preview.style.display = 'block';
                    }

                    reader.readAsDataURL(file);
                } else {
                    preview.src = "#";
                    preview.style.display = 'none';
                }
            });

        }

    }

    checkbox(event) {
        const promoCheckbox = document.querySelector('.js-promotion-checkbox');
        const promoContainer = document.getElementById('promo-price-container');
        const promoInput = document.querySelector('.js-promo-price');

        function togglePromoPrice() {
            if (promoCheckbox.checked) {
                promoContainer.style.display = 'block';
                promoInput.required = true;
            } else {
                promoContainer.style.display = 'none';
                promoInput.required = false;
                promoInput.value = ''; // Optionnel : vide le champ si on décoche
            }
        }

        // Écouter le changement
        promoCheckbox.addEventListener('change', togglePromoPrice);

        // Vérifier l'état au chargement (utile en mode édition)
        togglePromoPrice();
    }

    disconnect() {
        // Called anytime its element is disconnected from the DOM
        // (on page change, when it's removed from or moved in the DOM, etc.)

        // Here you should remove all event listeners added in "connect()"
        // this.fooTarget.removeEventListener('click', this._fooBar)
    }
}
