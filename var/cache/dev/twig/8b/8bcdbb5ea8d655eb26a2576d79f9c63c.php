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

/* account/order.html.twig */
class __TwigTemplate_b01d322ca049b295dc4f3e936f73436d extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/order.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/order.html.twig"));

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

        yield "Hello AccountController!";
        
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
        /* Style des cartes de commandes */
        .order-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: 1px solid transparent;
        }

        .order-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
            border-color: rgba(138, 63, 252, 0.2);
        }

        /* Typographie augmentée */
        .small-caps {
            font-size: 1.2rem;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-weight: 700;
        }

        .fs-5 { font-size: 1.3rem !important; }
        .fs-4 { font-size: 1.4rem !important; }

        /* Badges de statut doux */
        .bg-soft-success {
            background-color: #e8f5e9;
            color: #2e7d32;
        }

        /* Bordures verticales sur desktop */
        @media (min-width: 768px) {
            .border-start-md {
                border-left: 1px solid #eee !important;
            }
        }

        /* Bouton personnalisé */
        .btn-outline-primary {
            border-color: var(--wb-purple);
            color: var(--wb-purple);
        }

        .btn-outline-primary:hover {
            background-color: var(--wb-purple);
            border-color: var(--wb-purple);
            color: white;
        }

        /* Ajustement Mobile */
        @media (max-width: 576px) {
            .order-card {
                padding: 20px !important;
            }
            .order-card .btn {
                width: 100%;
                margin-top: 10px;
            }
        }
    </style>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 68
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

        // line 69
        yield "
    <!---------------user-profile-section---------------->
    ";
        // line 72
        yield "    ";
        // line 73
        yield "    ";
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
        yield "
    ";
        // line 81
        yield "    ";
        // line 82
        yield "    ";
        // line 83
        yield "    ";
        // line 84
        yield "    ";
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
        yield "
    ";
        // line 123
        yield "
    ";
        // line 125
        yield "    ";
        // line 126
        yield "    ";
        // line 127
        yield "    ";
        // line 128
        yield "    ";
        // line 129
        yield "    ";
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
        yield "
    ";
        // line 141
        yield "
    ";
        // line 143
        yield "    ";
        // line 144
        yield "    ";
        // line 145
        yield "    ";
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
        yield "

    <section class=\"user-profile py-5 bg-light\">
        <div class=\"container\">
            <div class=\"d-flex justify-content-between align-items-center mb-4\">
                <div>
                    <h2 class=\"fw-bold mb-1\">Mes commandes</h2>
                    <a href=\"";
        // line 158
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account");
        yield "\" class=\"text-muted text-decoration-none\">
                        <i class=\"bi bi-arrow-left me-1\"></i> Retourner à mon compte
                    </a>
                </div>
            </div>

            <div class=\"user-profile-section\">
                ";
        // line 165
        if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), (isset($context["orders"]) || array_key_exists("orders", $context) ? $context["orders"] : (function () { throw new RuntimeError('Variable "orders" does not exist.', 165, $this->source); })())) == 0)) {
            // line 166
            yield "                    <div class=\"text-center py-5 bg-white rounded-4 shadow-sm\">
                        <i class=\"bi bi-bag-x display-1 text-muted\"></i>
                        <p class=\"fs-4 mt-3 text-muted\">Vous n'avez pas encore passé de commande.</p>
                        <a href=\"";
            // line 169
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
            yield "\" class=\"btn btn-outline-secondary rounded-4 rounded px-4 py-2 mt-2\">Commencer mes achats</a>
                    </div>
                ";
        } else {
            // line 172
            yield "                    <div class=\"order-list\">
                        ";
            // line 173
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["orders"]) || array_key_exists("orders", $context) ? $context["orders"] : (function () { throw new RuntimeError('Variable "orders" does not exist.', 173, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["order"]) {
                // line 174
                yield "                            <div class=\"order-card bg-white shadow-sm rounded-4 p-4 mb-3 border-0\">
                                <div class=\"row align-items-center gy-3\">
                                    <div class=\"col-md-3\">
                                        <span class=\"text-muted small-caps d-block mb-1\">Commande du</span>
                                        <h5 class=\"fw-bold mb-0 fs-5\">";
                // line 178
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["order"], "createdAt", [], "any", false, false, false, 178), "d/m/Y"), "html", null, true);
                yield "</h5>
                                        <span
                                            class=\"text-primary small fw-bold mt-1 d-block\">Réf: ";
                // line 180
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["order"], "reference", [], "any", false, false, false, 180), "html", null, true);
                yield "</span>
                                    </div>

                                    <div class=\"col-6 col-md-2 text-md-center border-start-md\">
                                        <span class=\"text-muted small-caps d-block mb-1\">Articles</span>
                                        <h5 class=\"fw-bold mb-0 fs-5\">";
                // line 185
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["order"], "orderDetails", [], "any", false, false, false, 185)), "html", null, true);
                yield "</h5>
                                    </div>

                                    <div class=\"col-6 col-md-3 text-md-center border-start-md\">
                                        <span class=\"text-muted small-caps d-block mb-1\">Montant Total</span>
                                        <h5 class=\"fw-bold mb-0 fs-4 text-dark\">
                                            ";
                // line 191
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber((CoreExtension::getAttribute($this->env, $this->source, $context["order"], "carrierPrice", [], "any", false, false, false, 191) + CoreExtension::getAttribute($this->env, $this->source, $context["order"], "getTotal", [], "any", false, false, false, 191)), 0, ",", "."), "html", null, true);
                yield "
                                            <small>F CFA</small>
                                        </h5>
                                    </div>

                                    <div class=\"col-6 col-md-2 text-md-center\">
                                    <span class=\"badge bg-soft-success text-success px-3 py-2 rounded-pill fw-bold\">
                                       ";
                // line 198
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["order"], "state", [], "any", false, false, false, 198), "html", null, true);
                yield "
                                    </span>
                                    </div>

                                    <div class=\"col-6 col-md-2 text-end\">
                                        <a href=\"";
                // line 203
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("account_order_show", ["reference" => CoreExtension::getAttribute($this->env, $this->source, $context["order"], "reference", [], "any", false, false, false, 203)]), "html", null, true);
                yield "\"
                                           class=\"btn btn-outline-primary rounded-pill fw-bold px-4\">
                                            Détails
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['order'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 211
            yield "                    </div>
                ";
        }
        // line 213
        yield "            </div>
        </div>
    </section>
    <!--------------- user-profile-section-end --------------->
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
        return "account/order.html.twig";
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
        return array (  444 => 213,  440 => 211,  426 => 203,  418 => 198,  408 => 191,  399 => 185,  391 => 180,  386 => 178,  380 => 174,  376 => 173,  373 => 172,  367 => 169,  362 => 166,  360 => 165,  350 => 158,  341 => 151,  339 => 150,  337 => 149,  335 => 148,  332 => 146,  330 => 145,  328 => 144,  326 => 143,  323 => 141,  320 => 139,  318 => 138,  316 => 137,  314 => 136,  312 => 135,  310 => 134,  308 => 133,  306 => 132,  304 => 131,  302 => 130,  300 => 129,  298 => 128,  296 => 127,  294 => 126,  292 => 125,  289 => 123,  286 => 121,  284 => 120,  282 => 119,  280 => 118,  278 => 117,  276 => 116,  274 => 115,  272 => 114,  270 => 113,  268 => 112,  266 => 111,  264 => 110,  262 => 109,  260 => 108,  258 => 107,  256 => 106,  254 => 105,  252 => 104,  250 => 103,  248 => 102,  246 => 101,  244 => 100,  242 => 99,  240 => 98,  238 => 97,  236 => 96,  234 => 95,  232 => 94,  230 => 93,  228 => 92,  226 => 91,  224 => 90,  222 => 89,  220 => 88,  218 => 87,  216 => 86,  214 => 85,  212 => 84,  210 => 83,  208 => 82,  206 => 81,  203 => 79,  201 => 78,  199 => 77,  197 => 76,  195 => 75,  193 => 74,  191 => 73,  189 => 72,  185 => 69,  172 => 68,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello AccountController!{% endblock %}

{% block stylesheets %}
    <style>
        /* Style des cartes de commandes */
        .order-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: 1px solid transparent;
        }

        .order-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
            border-color: rgba(138, 63, 252, 0.2);
        }

        /* Typographie augmentée */
        .small-caps {
            font-size: 1.2rem;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-weight: 700;
        }

        .fs-5 { font-size: 1.3rem !important; }
        .fs-4 { font-size: 1.4rem !important; }

        /* Badges de statut doux */
        .bg-soft-success {
            background-color: #e8f5e9;
            color: #2e7d32;
        }

        /* Bordures verticales sur desktop */
        @media (min-width: 768px) {
            .border-start-md {
                border-left: 1px solid #eee !important;
            }
        }

        /* Bouton personnalisé */
        .btn-outline-primary {
            border-color: var(--wb-purple);
            color: var(--wb-purple);
        }

        .btn-outline-primary:hover {
            background-color: var(--wb-purple);
            border-color: var(--wb-purple);
            color: white;
        }

        /* Ajustement Mobile */
        @media (max-width: 576px) {
            .order-card {
                padding: 20px !important;
            }
            .order-card .btn {
                width: 100%;
                margin-top: 10px;
            }
        }
    </style>
{% endblock %}

{% block body %}

    <!---------------user-profile-section---------------->
    {#    <section class=\"user-profile footer-padding\"> #}
    {#        <div class=\"container\"> #}
    {#            <h2>Mes commandes</h2> #}
    {#            <a href=\"{{ path('app_account') }}\" class=\"view\">Retourner à mon compte</a> #}
    {#            <div class=\"user-profile-section\"> #}
    {#                {% if orders|length==0 %} #}
    {#                    <p>Vous n'avez pas encore passé de commande.</p> #}
    {#                {% else %} #}

    {#                    <div class=\"cart-section\"> #}
    {#                        <table> #}
    {#                            <tbody> #}
    {#                            <tr class=\"table-row table-top-row\"> #}
    {#                                <td class=\"table-wrapper wrapper-product\"> #}
    {#                                    <h5 class=\"table-heading\">Passé le</h5> #}
    {#                                </td> #}
    {#                                <td class=\"table-wrapper\"> #}
    {#                                    <div class=\"table-wrapper-center\"> #}
    {#                                        <h5 class=\"table-heading\">Référence</h5> #}
    {#                                    </div> #}
    {#                                </td> #}
    {#                                <td class=\"table-wrapper\"> #}
    {#                                    <div class=\"table-wrapper-center\"> #}
    {#                                        <h5 class=\"table-heading\">Produit</h5> #}
    {#                                    </div> #}
    {#                                </td> #}
    {#                                <td class=\"table-wrapper wrapper-total\"> #}
    {#                                    <div class=\"table-wrapper-center\"> #}
    {#                                        <h5 class=\"table-heading\">TOTAL</h5> #}
    {#                                    </div> #}
    {#                                </td> #}
    {#                                <td class=\"table-wrapper\"> #}
    {#                                    <div class=\"table-wrapper-center\"> #}
    {#                                        <h5 class=\"table-heading\">ACTION</h5> #}
    {#                                    </div> #}
    {#                                </td> #}
    {#                            </tr> #}
    {#                            {% for order in orders %} #}
    {#                                <tr class=\"table-row ticket-row\"> #}
    {#                                    <td class=\"table-wrapper wrapper-product\"> #}
    {#                                        <div class=\"wrapper\"> #}
    {#                                            <div class=\"wrapper-content\"> #}
    {#                                                <h5 class=\"heading\">{{ order.createdAt|date('d/m/Y') }}</h5> #}
    {#                                            </div> #}
    {#                                        </div> #}
    {#                                    </td> #}
    {#                                    <td class=\"table-wrapper\"> #}
    {#                                        <div class=\"wrapper-content\"> #}
    {#                                            <h5 class=\"heading\">{{ order.reference }}</h5> #}
    {#                                        </div> #}

    {#                                    </td> #}

    {#                                    <td class=\"table-wrapper wrapper-total\"> #}
    {#                                        <div class=\"table-wrapper-center\"> #}
    {#                                            <h5 class=\"heading\">{{ order.orderDetails|length }}</h5> #}
    {#                                        </div> #}
    {#                                    </td> #}
    {#                                    <td class=\"table-wrapper wrapper-total\"> #}
    {#                                        <div class=\"table-wrapper-center\"> #}
    {#                                            <h5 class=\"heading\">{{ ((order.carrierPrice+order.getTotal)/100)|number_format(0,',','.') }} F cfa</h5> #}
    {#                                        </div> #}
    {#                                    </td> #}
    {#                                    <td class=\"table-wrapper wrapper-total\"> #}
    {#                                        <div class=\"table-wrapper-center\"> #}
    {#                                            <h5 class=\"heading\"><a href=\"{{ path('account_order_show',{'reference':order.reference}) }}\">Voir ma commande</a> </h5> #}
    {#                                        </div> #}
    {#                                    </td> #}

    {#                                </tr> #}

    {#                            {% endfor %} #}
    {#                            </tbody> #}
    {#                        </table> #}
    {#                    </div> #}

    {#                {% endif %} #}
    {#            </div> #}
    {#        </div> #}
    {#    </section> #}


    <section class=\"user-profile py-5 bg-light\">
        <div class=\"container\">
            <div class=\"d-flex justify-content-between align-items-center mb-4\">
                <div>
                    <h2 class=\"fw-bold mb-1\">Mes commandes</h2>
                    <a href=\"{{ path('app_account') }}\" class=\"text-muted text-decoration-none\">
                        <i class=\"bi bi-arrow-left me-1\"></i> Retourner à mon compte
                    </a>
                </div>
            </div>

            <div class=\"user-profile-section\">
                {% if orders|length == 0 %}
                    <div class=\"text-center py-5 bg-white rounded-4 shadow-sm\">
                        <i class=\"bi bi-bag-x display-1 text-muted\"></i>
                        <p class=\"fs-4 mt-3 text-muted\">Vous n'avez pas encore passé de commande.</p>
                        <a href=\"{{ path('app_home') }}\" class=\"btn btn-outline-secondary rounded-4 rounded px-4 py-2 mt-2\">Commencer mes achats</a>
                    </div>
                {% else %}
                    <div class=\"order-list\">
                        {% for order in orders %}
                            <div class=\"order-card bg-white shadow-sm rounded-4 p-4 mb-3 border-0\">
                                <div class=\"row align-items-center gy-3\">
                                    <div class=\"col-md-3\">
                                        <span class=\"text-muted small-caps d-block mb-1\">Commande du</span>
                                        <h5 class=\"fw-bold mb-0 fs-5\">{{ order.createdAt|date('d/m/Y') }}</h5>
                                        <span
                                            class=\"text-primary small fw-bold mt-1 d-block\">Réf: {{ order.reference }}</span>
                                    </div>

                                    <div class=\"col-6 col-md-2 text-md-center border-start-md\">
                                        <span class=\"text-muted small-caps d-block mb-1\">Articles</span>
                                        <h5 class=\"fw-bold mb-0 fs-5\">{{ order.orderDetails|length }}</h5>
                                    </div>

                                    <div class=\"col-6 col-md-3 text-md-center border-start-md\">
                                        <span class=\"text-muted small-caps d-block mb-1\">Montant Total</span>
                                        <h5 class=\"fw-bold mb-0 fs-4 text-dark\">
                                            {{ ((order.carrierPrice + order.getTotal) )|number_format(0,',','.') }}
                                            <small>F CFA</small>
                                        </h5>
                                    </div>

                                    <div class=\"col-6 col-md-2 text-md-center\">
                                    <span class=\"badge bg-soft-success text-success px-3 py-2 rounded-pill fw-bold\">
                                       {{ order.state }}
                                    </span>
                                    </div>

                                    <div class=\"col-6 col-md-2 text-end\">
                                        <a href=\"{{ path('account_order_show',{'reference':order.reference}) }}\"
                                           class=\"btn btn-outline-primary rounded-pill fw-bold px-4\">
                                            Détails
                                        </a>
                                    </div>
                                </div>
                            </div>
                        {% endfor %}
                    </div>
                {% endif %}
            </div>
        </div>
    </section>
    <!--------------- user-profile-section-end --------------->
{% endblock %}
", "account/order.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/account/order.html.twig");
    }
}
