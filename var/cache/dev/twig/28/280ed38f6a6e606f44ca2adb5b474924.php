<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* components/HeaderCartComponent.html.twig */
class __TwigTemplate_fa610a6508804515ddb444abbd00008d extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/HeaderCartComponent.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/HeaderCartComponent.html.twig"));

        // line 1
        yield "<div ";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["attributes"]) || array_key_exists("attributes", $context) ? $context["attributes"] : (function () { throw new RuntimeError('Variable "attributes" does not exist.', 1, $this->source); })()), "html", null, true);
        yield " >

    ";
        // line 4
        yield "    <div class=\"header-cart d-none d-lg-block\" id=\"header-cart\" ";
        yield $this->extensions['Symfony\UX\StimulusBundle\Twig\StimulusTwigExtension']->renderStimulusController("modal");
        yield " >
        <a href=\"";
        // line 5
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("cart");
        yield "\" class=\"cart-item\">
                                <span>
                                    <svg width=\"35\" height=\"28\" viewBox=\"0 0 35 28\" fill=\"none\"
                                         xmlns=\"http://www.w3.org/2000/svg\">
                                        <path
                                            d=\"M16.4444 21.897C14.8444 21.897 13.2441 21.8999 11.6441 21.8963C9.79233 21.892 8.65086 21.0273 8.12595 19.2489C7.04294 15.5794 5.95756 11.9107 4.87166 8.24203C4.6362 7.4468 4.37783 7.25412 3.55241 7.25175C2.7786 7.24964 2.00507 7.25754 1.23127 7.24911C0.512247 7.24148 0.0157813 6.79109 0.000242059 6.15064C-0.0160873 5.48281 0.475637 5.01689 1.23232 5.00873C2.11121 4.99952 2.99089 4.99214 3.86951 5.01268C5.36154 5.04769 6.52014 5.93215 6.96393 7.35415C7.14171 7.92378 7.34055 8.49026 7.46382 9.07201C7.54968 9.47713 7.77881 9.49661 8.10566 9.49582C11.8335 9.48897 15.5611 9.49134 19.2889 9.49134C21.0825 9.49134 22.8761 9.48108 24.6694 9.49503C26.0848 9.50608 27.0907 10.4906 27.0156 11.7778C27.0006 12.0363 26.925 12.2958 26.8473 12.5457C26.1317 14.8411 25.4124 17.1351 24.6879 19.4279C24.1851 21.0186 23.0223 21.8826 21.3504 21.8944C19.7151 21.906 18.0797 21.897 16.4444 21.897Z\"
                                            fill=\"#6E6D79\"/>
                                        <path
                                            d=\"M12.4012 27.5161C11.167 27.5227 10.1488 26.524 10.1345 25.2928C10.1201 24.0419 11.1528 22.9982 12.3967 23.0066C13.6209 23.0151 14.6422 24.0404 14.6436 25.2623C14.6451 26.4855 13.6261 27.5095 12.4012 27.5161Z\"
                                            fill=\"#6E6D79\"/>
                                        <path
                                            d=\"M22.509 25.2393C22.5193 26.4842 21.5393 27.4971 20.3064 27.5155C19.048 27.5342 18.0272 26.525 18.0277 25.2622C18.0279 24.0208 19.0214 23.0161 20.2572 23.0074C21.4877 22.9984 22.4988 24.0006 22.509 25.2393Z\"
                                            fill=\"#6E6D79\"/>
                                        <span
                                            class=\"position-absolute top-0 translate-middle badge rounded-pill bg-danger\">";
        // line 19
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["currentCart"]) || array_key_exists("currentCart", $context) ? $context["currentCart"] : (function () { throw new RuntimeError('Variable "currentCart" does not exist.', 19, $this->source); })()), "html", null, true);
        yield "</span>
                                    </svg>

                                </span>
            <span class=\"cart-text\">
                                    Panier
                                </span>
        </a>
        <div class=\"cart-submenu custom-elevated-cart\">
            <div class=\"cart-wrapper-item\">
                ";
        // line 29
        $context["total"] = 0;
        // line 30
        yield "
                ";
        // line 31
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["previewCart"]) || array_key_exists("previewCart", $context) ? $context["previewCart"] : (function () { throw new RuntimeError('Variable "previewCart" does not exist.', 31, $this->source); })()));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["c"]) {
            // line 32
            yield "                    <div class=\"wrapper\" style=\"min-height: 0;\">
                        <div class=\"wrapper-item\">
                            <div class=\"wrapper-img\">
                                <img src=\"";
            // line 35
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("images/products/" . CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 35), "illustration", [], "any", false, false, false, 35))), "html", null, true);
            yield "\" alt=\"img\">
                            </div>
                            <div class=\"wrapper-content\">
                                <h5 class=\"wrapper-title\">";
            // line 38
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 38), "name", [], "any", false, false, false, 38), "html", null, true);
            yield " <span
                                        class=\"text-primary\">x</span> ";
            // line 39
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["c"], "quantity", [], "any", false, false, false, 39), "html", null, true);
            yield "</h5>
                                <div class=\"price\">
                                    ";
            // line 41
            if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 41), "isPromotion", [], "any", false, false, false, 41)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                // line 42
                yield "                                        <span
                                            class=\"price-cut\">";
                // line 43
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extra\Intl\IntlExtension']->formatCurrency(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 43), "price", [], "any", false, false, false, 43), "XOF"), "html", null, true);
                yield "</span>
                                        <span
                                            class=\"new-price\">";
                // line 45
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extra\Intl\IntlExtension']->formatCurrency((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 45), "price", [], "any", false, false, false, 45) * (1 - (CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 45), "offPercent", [], "any", false, false, false, 45) / 100))), "XOF"), "html", null, true);
                yield "</span>
                                    ";
            } else {
                // line 47
                yield "                                        <span
                                            class=\"new-price\">";
                // line 48
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extra\Intl\IntlExtension']->formatCurrency(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 48), "price", [], "any", false, false, false, 48), "XOF"), "html", null, true);
                yield "</span>
                                    ";
            }
            // line 50
            yield "                                </div>
                            </div>
                        </div>
                        <span class=\"close-btn\">
                    <svg viewBox=\"0 0 10 10\" fill=\"none\" class=\"fill-current\" xmlns=\"http://www.w3.org/2000/svg\">
                        <path
                            d=\"M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z\"></path>
                    </svg>
                </span>
                    </div>

                    ";
            // line 62
            yield "                    ";
            $context["price"] = (((($tmp = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 62), "isPromotion", [], "any", false, false, false, 62)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 62), "price", [], "any", false, false, false, 62) * (1 - (CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 62), "offPercent", [], "any", false, false, false, 62) / 100)))) : (CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["c"], "product", [], "any", false, false, false, 62), "price", [], "any", false, false, false, 62)));
            // line 63
            yield "                    ";
            $context["total"] = ((isset($context["total"]) || array_key_exists("total", $context) ? $context["total"] : (function () { throw new RuntimeError('Variable "total" does not exist.', 63, $this->source); })()) + ((isset($context["price"]) || array_key_exists("price", $context) ? $context["price"] : (function () { throw new RuntimeError('Variable "price" does not exist.', 63, $this->source); })()) * CoreExtension::getAttribute($this->env, $this->source, $context["c"], "quantity", [], "any", false, false, false, 63)));
            // line 64
            yield "                ";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 65
            yield "                    ";
            // line 66
            yield "                    <div class=\"empty-cart-container\">
                        <div class=\"text-center\">
                            <div class=\"empty-icon-box mb-3\">
                                <i class=\"fas fa-shopping-basket\"></i>
                            </div>
                            <h6 class=\"fw-bold mb-1\">Votre panier est vide</h6>
                            <p class=\"text-muted small mb-3\">Ajoutez des articles pour commencer vos achats.</p>
                            <a href=\"";
            // line 73
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
            yield "\" class=\"btn btn-sm px-4 rounded-pill text-white\"
                               style=\"background: #082C6A;\">
                                Découvrir nos produits
                            </a>
                        </div>
                    </div>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['c'], $context['_parent'], $context['_iterated']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 80
        yield "            </div>

            ";
        // line 82
        if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), (isset($context["previewCart"]) || array_key_exists("previewCart", $context) ? $context["previewCart"] : (function () { throw new RuntimeError('Variable "previewCart" does not exist.', 82, $this->source); })())) > 0)) {
            // line 83
            yield "                <div class=\"cart-wrapper-section\">
                    <div class=\"wrapper-line\"></div>
                    <div class=\"wrapper-subtotal\">
                        <h5 class=\"wrapper-title\">Total</h5>
                        <h5 class=\"wrapper-title\">";
            // line 87
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extra\Intl\IntlExtension']->formatCurrency((isset($context["total"]) || array_key_exists("total", $context) ? $context["total"] : (function () { throw new RuntimeError('Variable "total" does not exist.', 87, $this->source); })()), "XOF"), "html", null, true);
            yield "</h5>
                    </div>
                    <div class=\"cart-btn\">
                        <a href=\"";
            // line 90
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("cart");
            yield "\" class=\"shop-btn checkout-btn\">Voir le panier</a>
                    </div>
                </div>
            ";
        }
        // line 94
        yield "        </div>
    </div>
    ";
        // line 97
        yield "    <div class=\"d-block d-lg-none\">
        <a href=\"";
        // line 98
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("cart");
        yield "\" class=\"header-cart-wb position-relative d-inline-block text-decoration-none\">
            ";
        // line 100
        yield "            <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
                <path
                    d=\"M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z\"
                    stroke=\"#242424\" stroke-width=\"1.5\"/>
                <path
                    d=\"M16.5 18C17.3284 18 18 18.6716 18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18Z\"
                    stroke=\"#242424\" stroke-width=\"1.5\"/>
                <path d=\"M2 3H4.5L6.5 15H19L21.5 6H7\" stroke=\"#242424\" stroke-width=\"1.5\" stroke-linecap=\"round\"
                      stroke-linejoin=\"round\"/>
            </svg>

            ";
        // line 112
        yield "            ";
        if (((isset($context["currentCart"]) || array_key_exists("currentCart", $context) ? $context["currentCart"] : (function () { throw new RuntimeError('Variable "currentCart" does not exist.', 112, $this->source); })()) > 0)) {
            // line 113
            yield "                <span class=\"wb-cart-badge\">
                ";
            // line 114
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["currentCart"]) || array_key_exists("currentCart", $context) ? $context["currentCart"] : (function () { throw new RuntimeError('Variable "currentCart" does not exist.', 114, $this->source); })()), "html", null, true);
            yield "
            </span>
            ";
        }
        // line 117
        yield "        </a>
    </div>
</div>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "components/HeaderCartComponent.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  251 => 117,  245 => 114,  242 => 113,  239 => 112,  226 => 100,  222 => 98,  219 => 97,  215 => 94,  208 => 90,  202 => 87,  196 => 83,  194 => 82,  190 => 80,  177 => 73,  168 => 66,  166 => 65,  161 => 64,  158 => 63,  155 => 62,  142 => 50,  137 => 48,  134 => 47,  129 => 45,  124 => 43,  121 => 42,  119 => 41,  114 => 39,  110 => 38,  104 => 35,  99 => 32,  94 => 31,  91 => 30,  89 => 29,  76 => 19,  59 => 5,  54 => 4,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<div {{ attributes }} >

    {#    S'affiche sur les grands ecrans #}
    <div class=\"header-cart d-none d-lg-block\" id=\"header-cart\" {{ stimulus_controller('modal') }} >
        <a href=\"{{ path('cart') }}\" class=\"cart-item\">
                                <span>
                                    <svg width=\"35\" height=\"28\" viewBox=\"0 0 35 28\" fill=\"none\"
                                         xmlns=\"http://www.w3.org/2000/svg\">
                                        <path
                                            d=\"M16.4444 21.897C14.8444 21.897 13.2441 21.8999 11.6441 21.8963C9.79233 21.892 8.65086 21.0273 8.12595 19.2489C7.04294 15.5794 5.95756 11.9107 4.87166 8.24203C4.6362 7.4468 4.37783 7.25412 3.55241 7.25175C2.7786 7.24964 2.00507 7.25754 1.23127 7.24911C0.512247 7.24148 0.0157813 6.79109 0.000242059 6.15064C-0.0160873 5.48281 0.475637 5.01689 1.23232 5.00873C2.11121 4.99952 2.99089 4.99214 3.86951 5.01268C5.36154 5.04769 6.52014 5.93215 6.96393 7.35415C7.14171 7.92378 7.34055 8.49026 7.46382 9.07201C7.54968 9.47713 7.77881 9.49661 8.10566 9.49582C11.8335 9.48897 15.5611 9.49134 19.2889 9.49134C21.0825 9.49134 22.8761 9.48108 24.6694 9.49503C26.0848 9.50608 27.0907 10.4906 27.0156 11.7778C27.0006 12.0363 26.925 12.2958 26.8473 12.5457C26.1317 14.8411 25.4124 17.1351 24.6879 19.4279C24.1851 21.0186 23.0223 21.8826 21.3504 21.8944C19.7151 21.906 18.0797 21.897 16.4444 21.897Z\"
                                            fill=\"#6E6D79\"/>
                                        <path
                                            d=\"M12.4012 27.5161C11.167 27.5227 10.1488 26.524 10.1345 25.2928C10.1201 24.0419 11.1528 22.9982 12.3967 23.0066C13.6209 23.0151 14.6422 24.0404 14.6436 25.2623C14.6451 26.4855 13.6261 27.5095 12.4012 27.5161Z\"
                                            fill=\"#6E6D79\"/>
                                        <path
                                            d=\"M22.509 25.2393C22.5193 26.4842 21.5393 27.4971 20.3064 27.5155C19.048 27.5342 18.0272 26.525 18.0277 25.2622C18.0279 24.0208 19.0214 23.0161 20.2572 23.0074C21.4877 22.9984 22.4988 24.0006 22.509 25.2393Z\"
                                            fill=\"#6E6D79\"/>
                                        <span
                                            class=\"position-absolute top-0 translate-middle badge rounded-pill bg-danger\">{{ currentCart }}</span>
                                    </svg>

                                </span>
            <span class=\"cart-text\">
                                    Panier
                                </span>
        </a>
        <div class=\"cart-submenu custom-elevated-cart\">
            <div class=\"cart-wrapper-item\">
                {% set total = 0 %}

                {% for c in previewCart %}
                    <div class=\"wrapper\" style=\"min-height: 0;\">
                        <div class=\"wrapper-item\">
                            <div class=\"wrapper-img\">
                                <img src=\"{{ asset('images/products/'~ c.product.illustration) }}\" alt=\"img\">
                            </div>
                            <div class=\"wrapper-content\">
                                <h5 class=\"wrapper-title\">{{ c.product.name }} <span
                                        class=\"text-primary\">x</span> {{ c.quantity }}</h5>
                                <div class=\"price\">
                                    {% if c.product.isPromotion %}
                                        <span
                                            class=\"price-cut\">{{ (c.product.price)|format_currency('XOF') }}</span>
                                        <span
                                            class=\"new-price\">{{ ((c.product.price) * (1 - (c.product.offPercent / 100))) | format_currency('XOF') }}</span>
                                    {% else %}
                                        <span
                                            class=\"new-price\">{{ (c.product.price)|format_currency('XOF') }}</span>
                                    {% endif %}
                                </div>
                            </div>
                        </div>
                        <span class=\"close-btn\">
                    <svg viewBox=\"0 0 10 10\" fill=\"none\" class=\"fill-current\" xmlns=\"http://www.w3.org/2000/svg\">
                        <path
                            d=\"M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z\"></path>
                    </svg>
                </span>
                    </div>

                    {# Calcul du prix unitaire pour le total #}
                    {% set price = c.product.isPromotion ? (c.product.price ) * (1 - (c.product.offPercent / 100)) : (c.product.price) %}
                    {% set total = total + (price * c.quantity) %}
                {% else %}
                    {# MESSAGE PANIER VIDE CENTRÉ #}
                    <div class=\"empty-cart-container\">
                        <div class=\"text-center\">
                            <div class=\"empty-icon-box mb-3\">
                                <i class=\"fas fa-shopping-basket\"></i>
                            </div>
                            <h6 class=\"fw-bold mb-1\">Votre panier est vide</h6>
                            <p class=\"text-muted small mb-3\">Ajoutez des articles pour commencer vos achats.</p>
                            <a href=\"{{ path('app_home') }}\" class=\"btn btn-sm px-4 rounded-pill text-white\"
                               style=\"background: #082C6A;\">
                                Découvrir nos produits
                            </a>
                        </div>
                    </div>
                {% endfor %}
            </div>

            {% if previewCart|length > 0 %}
                <div class=\"cart-wrapper-section\">
                    <div class=\"wrapper-line\"></div>
                    <div class=\"wrapper-subtotal\">
                        <h5 class=\"wrapper-title\">Total</h5>
                        <h5 class=\"wrapper-title\">{{ total | format_currency('XOF') }}</h5>
                    </div>
                    <div class=\"cart-btn\">
                        <a href=\"{{ path('cart') }}\" class=\"shop-btn checkout-btn\">Voir le panier</a>
                    </div>
                </div>
            {% endif %}
        </div>
    </div>
    {# s'affiche sur le petit ecran #}
    <div class=\"d-block d-lg-none\">
        <a href=\"{{ path('cart') }}\" class=\"header-cart-wb position-relative d-inline-block text-decoration-none\">
            {# Icône panier minimaliste style WB #}
            <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
                <path
                    d=\"M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z\"
                    stroke=\"#242424\" stroke-width=\"1.5\"/>
                <path
                    d=\"M16.5 18C17.3284 18 18 18.6716 18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18Z\"
                    stroke=\"#242424\" stroke-width=\"1.5\"/>
                <path d=\"M2 3H4.5L6.5 15H19L21.5 6H7\" stroke=\"#242424\" stroke-width=\"1.5\" stroke-linecap=\"round\"
                      stroke-linejoin=\"round\"/>
            </svg>

            {# Le badge n'apparaît que si le panier n'est pas vide #}
            {% if currentCart > 0 %}
                <span class=\"wb-cart-badge\">
                {{ currentCart }}
            </span>
            {% endif %}
        </a>
    </div>
</div>
", "components/HeaderCartComponent.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/components/HeaderCartComponent.html.twig");
    }
}
