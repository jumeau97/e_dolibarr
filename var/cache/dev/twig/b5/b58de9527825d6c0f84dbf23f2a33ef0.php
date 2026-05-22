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

/* account/order_show.html.twig */
class __TwigTemplate_3d41d20fbc828dc9007c43f5ffda6d9d extends Template
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

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context): bool|string|Template|TemplateWrapper
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/order_show.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/order_show.html.twig"));

        $this->parent = $this->load("base.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        yield "Ma commande";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_stylesheets(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 6
        yield "    <style>


        /* Typographie & Caps */
        .small-caps {
            font-size: 1.2rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 700;
        }

        /* Badges Soft */
        .bg-soft-primary {
            background-color: #FFF;
            color: var(--wb-purple);
        }

        /* Bordures Desktop */
        @media (min-width: 768px) {
            .border-end-md {
                border-right: 1px solid #f0f0f0 !important;
            }
        }

        /* Table Style */
        .table thead {
            border-bottom: 1px solid #eee;
        }

        .table tbody tr {
            transition: background 0.2s ease;
        }

        /* Polices augmentées */
        .fs-2 {
            font-size: 2.2rem !important;
        }

        .fs-3 {
            font-size: 1.8rem !important;
        }

        .fs-5 {
            font-size: 1.2rem !important;
        }

        .fs-6 {
            font-size: 1.1rem !important;
        }

        /* Responsive Mobile */
        @media (max-width: 576px) {
            .fs-2 {
                font-size: 1.6rem !important;
            }

            .table-responsive {
                border: 1px solid #eee;
                border-radius: 12px;
            }
        }
    </style>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 70
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_body(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 71
        yield "
    <!---------------user-profile-section---------------->
    ";
        // line 74
        yield "    ";
        // line 75
        yield "    ";
        // line 76
        yield "    ";
        // line 77
        yield "    ";
        // line 78
        yield "    ";
        // line 79
        yield "    ";
        // line 80
        yield "    ";
        // line 81
        yield "    ";
        // line 82
        yield "    ";
        // line 83
        yield "
    ";
        // line 85
        yield "    ";
        // line 86
        yield "    ";
        // line 87
        yield "    ";
        // line 88
        yield "    ";
        // line 89
        yield "    ";
        // line 90
        yield "    ";
        // line 91
        yield "    ";
        // line 92
        yield "    ";
        // line 93
        yield "    ";
        // line 94
        yield "    ";
        // line 95
        yield "    ";
        // line 96
        yield "    ";
        // line 97
        yield "    ";
        // line 98
        yield "    ";
        // line 99
        yield "    ";
        // line 100
        yield "    ";
        // line 101
        yield "    ";
        // line 102
        yield "    ";
        // line 103
        yield "    ";
        // line 104
        yield "    ";
        // line 105
        yield "    ";
        // line 106
        yield "    ";
        // line 107
        yield "    ";
        // line 108
        yield "    ";
        // line 109
        yield "    ";
        // line 110
        yield "    ";
        // line 111
        yield "    ";
        // line 112
        yield "    ";
        // line 113
        yield "    ";
        // line 114
        yield "    ";
        // line 115
        yield "    ";
        // line 116
        yield "    ";
        // line 117
        yield "    ";
        // line 118
        yield "    ";
        // line 119
        yield "    ";
        // line 120
        yield "    ";
        // line 121
        yield "    ";
        // line 122
        yield "    ";
        // line 123
        yield "    ";
        // line 124
        yield "    ";
        // line 125
        yield "    ";
        // line 126
        yield "
    ";
        // line 128
        yield "
    ";
        // line 130
        yield "    ";
        // line 131
        yield "    ";
        // line 132
        yield "    ";
        // line 133
        yield "    ";
        // line 134
        yield "    ";
        // line 135
        yield "    ";
        // line 136
        yield "    ";
        // line 137
        yield "    ";
        // line 138
        yield "    ";
        // line 139
        yield "    ";
        // line 140
        yield "    ";
        // line 141
        yield "    ";
        // line 142
        yield "    ";
        // line 143
        yield "    ";
        // line 144
        yield "
    ";
        // line 146
        yield "
    ";
        // line 148
        yield "    ";
        // line 149
        yield "    ";
        // line 150
        yield "    ";
        // line 151
        yield "    ";
        // line 152
        yield "    ";
        // line 153
        yield "    ";
        // line 154
        yield "    ";
        // line 155
        yield "    ";
        // line 156
        yield "    ";
        // line 157
        yield "    ";
        // line 158
        yield "
    ";
        // line 160
        yield "    ";
        // line 161
        yield "    <!--------------- user-profile-section-end --------------->


    <section class=\"order-details py-5 bg-light\">
        <div class=\"container\">
            <div class=\"d-flex justify-content-between align-items-center mb-4\">
                <div>
                    <h2 class=\"fw-bold mb-1 fs-2\">Détails de la commande</h2>
                    <a href=\"";
        // line 169
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("account_order");
        yield "\" class=\"text-muted text-decoration-none fw-bold\">
                        <i class=\"bi bi-arrow-left me-1\"></i> Retour à mes commandes
                    </a>
                </div>
                <span class=\"badge bg-soft-primary text-primary px-4 py-2 rounded-pill fs-6 fw-bold\">
                ";
        // line 174
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 174, $this->source); })()), "reference", [], "any", false, false, false, 174), "html", null, true);
        yield "
            </span>
            </div>

            <div class=\"row g-4\">
                <div class=\"col-12\">
                    <div class=\"card border-0 shadow-sm rounded-4 p-4\">
                        <div class=\"row gy-3\">
                            <div class=\"col-md-4 border-end-md text-center text-md-start\">
                                <p class=\"text-muted small-caps mb-1\">Passée le</p>
                                <h5 class=\"fw-bold mb-0 fs-5\">";
        // line 184
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 184, $this->source); })()), "createdAt", [], "any", false, false, false, 184), "d/m/Y"), "html", null, true);
        yield "</h5>
                            </div>
                            <div class=\"col-md-4 border-end-md text-center text-md-start\">
                                <p class=\"text-muted small-caps mb-1\">Transporteur</p>
                                <h5 class=\"fw-bold mb-0 fs-5\">";
        // line 188
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 188, $this->source); })()), "carriername", [], "any", false, false, false, 188), "html", null, true);
        yield "</h5>
                            </div>
                            <div class=\"col-md-4 text-center text-md-start\">
                                <p class=\"text-muted small-caps mb-1\">Statut</p>
                                <h5 class=\"fw-bold mb-0 text-success fs-5\"><i class=\"bi bi-check-circle-fill me-1\"></i>
                                    ";
        // line 193
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 193, $this->source); })()), "state", [], "any", false, false, false, 193), "html", null, true);
        yield "
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=\"col-lg-8\">
                    <div class=\"card border-0 shadow-sm rounded-4 overflow-hidden\">
                        <div class=\"table-responsive\">
                            <table class=\"table table-hover align-middle mb-0\">
                                <thead class=\"bg-light\">
                                <tr>
                                    <th class=\"ps-4 py-3 text-muted small-caps border-0\">Produit</th>
                                    <th class=\"text-center py-3 text-muted small-caps border-0\">Quantité</th>
                                    <th class=\"text-end py-3 text-muted small-caps border-0\">Prix Unitaire</th>
                                    <th class=\"text-end pe-4 py-3 text-muted small-caps border-0\">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                ";
        // line 213
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 213, $this->source); })()), "orderDetails", [], "any", false, false, false, 213));
        foreach ($context['_seq'] as $context["_key"] => $context["product"]) {
            // line 214
            yield "                                    <tr>
                                        <td class=\"ps-4 py-3\">
                                            <h6 class=\"fw-bold mb-0 fs-6\">";
            // line 216
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["product"], "product", [], "any", false, false, false, 216), "html", null, true);
            yield "</h6>
                                        </td>
                                        <td class=\"text-center fw-bold fs-6\">x ";
            // line 218
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["product"], "quantity", [], "any", false, false, false, 218), "html", null, true);
            yield "</td>
                                        <td class=\"text-end fw-medium fs-6 text-muted\">";
            // line 219
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, $context["product"], "price", [], "any", false, false, false, 219), 0, ",", "."), "html", null, true);
            yield "
                                            F
                                        </td>
                                        <td class=\"text-end pe-4 fw-bold fs-6 text-dark\">";
            // line 222
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, $context["product"], "total", [], "any", false, false, false, 222), 0, ",", "."), "html", null, true);
            yield "
                                            F
                                        </td>
                                    </tr>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['product'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 227
        yield "                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class=\"col-lg-4\">
                    <div class=\"card border-0 shadow-sm rounded-4 p-4 sticky-top\" style=\"top: 20px;\">
                        <h5 class=\"fw-bold mb-4 fs-4\">Résumé financier</h5>

                        <div class=\"d-flex justify-content-between mb-3 fs-6\">
                            <span class=\"text-muted\">Sous-total</span>
                            <span class=\"fw-bold\">";
        // line 239
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 239, $this->source); })()), "getTotal", [], "any", false, false, false, 239), 0, ",", "."), "html", null, true);
        yield " F cfa</span>
                        </div>

                        <div class=\"d-flex justify-content-between mb-3 fs-6\">
                            <span class=\"text-muted\">Livraison</span>
                            <span class=\"fw-bold\">";
        // line 244
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 244, $this->source); })()), "carrierprice", [], "any", false, false, false, 244), 0, ",", "."), "html", null, true);
        yield " F cfa</span>
                        </div>

                        <hr class=\"my-4 border-light\">

                        <div class=\"d-flex justify-content-between align-items-center\">
                            <span class=\"fs-5 fw-bold\">TOTAL</span>
                            <span class=\"fs-3 fw-bold text-primary\">
                            ";
        // line 252
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber((CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 252, $this->source); })()), "carrierPrice", [], "any", false, false, false, 252) + CoreExtension::getAttribute($this->env, $this->source, (isset($context["order"]) || array_key_exists("order", $context) ? $context["order"] : (function () { throw new RuntimeError('Variable "order" does not exist.', 252, $this->source); })()), "getTotal", [], "any", false, false, false, 252)), 0, ",", "."), "html", null, true);
        yield " <small>F</small>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "account/order_show.html.twig";
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
        return array (  495 => 252,  484 => 244,  476 => 239,  462 => 227,  451 => 222,  445 => 219,  441 => 218,  436 => 216,  432 => 214,  428 => 213,  405 => 193,  397 => 188,  390 => 184,  377 => 174,  369 => 169,  359 => 161,  357 => 160,  354 => 158,  352 => 157,  350 => 156,  348 => 155,  346 => 154,  344 => 153,  342 => 152,  340 => 151,  338 => 150,  336 => 149,  334 => 148,  331 => 146,  328 => 144,  326 => 143,  324 => 142,  322 => 141,  320 => 140,  318 => 139,  316 => 138,  314 => 137,  312 => 136,  310 => 135,  308 => 134,  306 => 133,  304 => 132,  302 => 131,  300 => 130,  297 => 128,  294 => 126,  292 => 125,  290 => 124,  288 => 123,  286 => 122,  284 => 121,  282 => 120,  280 => 119,  278 => 118,  276 => 117,  274 => 116,  272 => 115,  270 => 114,  268 => 113,  266 => 112,  264 => 111,  262 => 110,  260 => 109,  258 => 108,  256 => 107,  254 => 106,  252 => 105,  250 => 104,  248 => 103,  246 => 102,  244 => 101,  242 => 100,  240 => 99,  238 => 98,  236 => 97,  234 => 96,  232 => 95,  230 => 94,  228 => 93,  226 => 92,  224 => 91,  222 => 90,  220 => 89,  218 => 88,  216 => 87,  214 => 86,  212 => 85,  209 => 83,  207 => 82,  205 => 81,  203 => 80,  201 => 79,  199 => 78,  197 => 77,  195 => 76,  193 => 75,  191 => 74,  187 => 71,  174 => 70,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Ma commande{% endblock %}

{% block stylesheets %}
    <style>


        /* Typographie & Caps */
        .small-caps {
            font-size: 1.2rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 700;
        }

        /* Badges Soft */
        .bg-soft-primary {
            background-color: #FFF;
            color: var(--wb-purple);
        }

        /* Bordures Desktop */
        @media (min-width: 768px) {
            .border-end-md {
                border-right: 1px solid #f0f0f0 !important;
            }
        }

        /* Table Style */
        .table thead {
            border-bottom: 1px solid #eee;
        }

        .table tbody tr {
            transition: background 0.2s ease;
        }

        /* Polices augmentées */
        .fs-2 {
            font-size: 2.2rem !important;
        }

        .fs-3 {
            font-size: 1.8rem !important;
        }

        .fs-5 {
            font-size: 1.2rem !important;
        }

        .fs-6 {
            font-size: 1.1rem !important;
        }

        /* Responsive Mobile */
        @media (max-width: 576px) {
            .fs-2 {
                font-size: 1.6rem !important;
            }

            .table-responsive {
                border: 1px solid #eee;
                border-radius: 12px;
            }
        }
    </style>
{% endblock %}

{% block body %}

    <!---------------user-profile-section---------------->
    {#    <section class=\"user-profile footer-padding\"> #}
    {#        <div class=\"container\"> #}
    {#            <h2>Ma commande - {{ order.reference }}</h2> #}
    {#            <a href=\"{{ path('app_account') }}\" class=\"view\">Retourner à mon compte</a> #}
    {#            <div class=\"user-profile-section\"> #}
    {#                <p> #}
    {#                    <strong>Commande passé le : </strong>{{ order.createdAt|date('d/m/Y') }}<br> #}
    {#                    <strong>Référence de ma commande: </strong>{{ order.reference }}<br> #}
    {#                    <strong>Transporteur choisi: </strong>{{ order.carriername }}<br> #}
    {#                </p> #}

    {#            </div> #}
    {#            <div class=\"cart-section\"> #}
    {#                <table> #}
    {#                    <tbody> #}
    {#                    <tr class=\"table-row table-top-row\"> #}
    {#                        <td class=\"table-wrapper wrapper-product\"> #}
    {#                            <h5 class=\"table-heading\">Produit</h5> #}
    {#                        </td> #}
    {#                        <td class=\"table-wrapper\"> #}
    {#                            <div class=\"table-wrapper-center\"> #}
    {#                                <h5 class=\"table-heading\">Quantité</h5> #}
    {#                            </div> #}
    {#                        </td> #}
    {#                        <td class=\"table-wrapper\"> #}
    {#                            <div class=\"table-wrapper-center\"> #}
    {#                                <h5 class=\"table-heading\">Prix Unitaire</h5> #}
    {#                            </div> #}
    {#                        </td> #}
    {#                        <td class=\"table-wrapper wrapper-total\"> #}
    {#                            <div class=\"table-wrapper-center\"> #}
    {#                                <h5 class=\"table-heading\">Total</h5> #}
    {#                            </div> #}
    {#                        </td> #}
    {#                        <td class=\"table-wrapper\"> #}
    {#                            <div class=\"table-wrapper-center\"> #}
    {#                                <h5 class=\"table-heading\">ACTION</h5> #}
    {#                            </div> #}
    {#                        </td> #}
    {#                    </tr> #}
    {#                    {% for product in order.orderDetails %} #}
    {#                        <tr class=\"table-row ticket-row\"> #}
    {#                            <td class=\"table-wrapper wrapper-product\"> #}
    {#                                <div class=\"wrapper\"> #}
    {#                                    <div class=\"wrapper-content\"> #}
    {#                                        <h5 class=\"heading\">{{ product.product }}</h5> #}
    {#                                    </div> #}
    {#                                </div> #}
    {#                            </td> #}
    {#                            <td class=\"table-wrapper\"> #}
    {#                                <div class=\"wrapper-content\"> #}
    {#                                    <h5 class=\"heading\">{{ product.quantity }}</h5> #}
    {#                                </div> #}

    {#                            </td> #}

    {#                            <td class=\"table-wrapper wrapper-total\"> #}
    {#                                <div class=\"table-wrapper-center\"> #}
    {#                                    <h5 class=\"heading\">{{ (product.price/100)|number_format(0,',','.') }} F cfa</h5> #}
    {#                                </div> #}
    {#                            </td> #}
    {#                            <td class=\"table-wrapper wrapper-total\"> #}
    {#                                <div class=\"table-wrapper-center\"> #}
    {#                                    <h5 class=\"heading\">{{ (product.total/100)|number_format(0,',','.') }} F cfa</h5> #}
    {#                                </div> #}
    {#                            </td> #}
    {#                            <td class=\"table-wrapper wrapper-total\"> #}
    {#                                <div class=\"table-wrapper-center\"> #}
    {#                                    <h5 class=\"heading\"><a href=\"{{ path('account_order_show',{'reference':order.reference}) }}\">Voir ma commande</a> </h5> #}
    {#                                </div> #}
    {#                            </td> #}

    {#                        </tr> #}

    {#                    {% endfor %} #}
    {#                    </tbody> #}
    {#                </table> #}
    {#                <div class=\"text-right\"> #}
    {#                   <p> #}
    {#                       <strong>Sous-total: {{ (order.getTotal/100)|number_format(0,',','.') }} F cfa</strong> <br> #}
    {#                       <strong>Livraison: {{ (order.carrierprice/100)|number_format(0,',','.') }} F cfa</strong><br> #}
    {#                       <strong>Total: {{ ((order.carrierPrice+order.getTotal)/100)|number_format(0,',','.') }} F cfa</strong><br> #}
    {#                   </p> #}
    {#                </div> #}
    {#            </div> #}

    {#        </div> #}
    {#    </section> #}
    <!--------------- user-profile-section-end --------------->


    <section class=\"order-details py-5 bg-light\">
        <div class=\"container\">
            <div class=\"d-flex justify-content-between align-items-center mb-4\">
                <div>
                    <h2 class=\"fw-bold mb-1 fs-2\">Détails de la commande</h2>
                    <a href=\"{{ path('account_order') }}\" class=\"text-muted text-decoration-none fw-bold\">
                        <i class=\"bi bi-arrow-left me-1\"></i> Retour à mes commandes
                    </a>
                </div>
                <span class=\"badge bg-soft-primary text-primary px-4 py-2 rounded-pill fs-6 fw-bold\">
                {{ order.reference }}
            </span>
            </div>

            <div class=\"row g-4\">
                <div class=\"col-12\">
                    <div class=\"card border-0 shadow-sm rounded-4 p-4\">
                        <div class=\"row gy-3\">
                            <div class=\"col-md-4 border-end-md text-center text-md-start\">
                                <p class=\"text-muted small-caps mb-1\">Passée le</p>
                                <h5 class=\"fw-bold mb-0 fs-5\">{{ order.createdAt|date('d/m/Y') }}</h5>
                            </div>
                            <div class=\"col-md-4 border-end-md text-center text-md-start\">
                                <p class=\"text-muted small-caps mb-1\">Transporteur</p>
                                <h5 class=\"fw-bold mb-0 fs-5\">{{ order.carriername }}</h5>
                            </div>
                            <div class=\"col-md-4 text-center text-md-start\">
                                <p class=\"text-muted small-caps mb-1\">Statut</p>
                                <h5 class=\"fw-bold mb-0 text-success fs-5\"><i class=\"bi bi-check-circle-fill me-1\"></i>
                                    {{order.state}}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=\"col-lg-8\">
                    <div class=\"card border-0 shadow-sm rounded-4 overflow-hidden\">
                        <div class=\"table-responsive\">
                            <table class=\"table table-hover align-middle mb-0\">
                                <thead class=\"bg-light\">
                                <tr>
                                    <th class=\"ps-4 py-3 text-muted small-caps border-0\">Produit</th>
                                    <th class=\"text-center py-3 text-muted small-caps border-0\">Quantité</th>
                                    <th class=\"text-end py-3 text-muted small-caps border-0\">Prix Unitaire</th>
                                    <th class=\"text-end pe-4 py-3 text-muted small-caps border-0\">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {% for product in order.orderDetails %}
                                    <tr>
                                        <td class=\"ps-4 py-3\">
                                            <h6 class=\"fw-bold mb-0 fs-6\">{{ product.product }}</h6>
                                        </td>
                                        <td class=\"text-center fw-bold fs-6\">x {{ product.quantity }}</td>
                                        <td class=\"text-end fw-medium fs-6 text-muted\">{{ (product.price)|number_format(0,',','.') }}
                                            F
                                        </td>
                                        <td class=\"text-end pe-4 fw-bold fs-6 text-dark\">{{ (product.total)|number_format(0,',','.') }}
                                            F
                                        </td>
                                    </tr>
                                {% endfor %}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class=\"col-lg-4\">
                    <div class=\"card border-0 shadow-sm rounded-4 p-4 sticky-top\" style=\"top: 20px;\">
                        <h5 class=\"fw-bold mb-4 fs-4\">Résumé financier</h5>

                        <div class=\"d-flex justify-content-between mb-3 fs-6\">
                            <span class=\"text-muted\">Sous-total</span>
                            <span class=\"fw-bold\">{{ (order.getTotal)|number_format(0,',','.') }} F cfa</span>
                        </div>

                        <div class=\"d-flex justify-content-between mb-3 fs-6\">
                            <span class=\"text-muted\">Livraison</span>
                            <span class=\"fw-bold\">{{ (order.carrierprice)|number_format(0,',','.') }} F cfa</span>
                        </div>

                        <hr class=\"my-4 border-light\">

                        <div class=\"d-flex justify-content-between align-items-center\">
                            <span class=\"fs-5 fw-bold\">TOTAL</span>
                            <span class=\"fs-3 fw-bold text-primary\">
                            {{ ((order.carrierPrice + order.getTotal))|number_format(0,',','.') }} <small>F</small>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{% endblock %}
", "account/order_show.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/account/order_show.html.twig");
    }
}
