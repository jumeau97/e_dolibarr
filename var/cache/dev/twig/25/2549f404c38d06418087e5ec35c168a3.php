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

/* account/address.html.twig */
class __TwigTemplate_310716dbfb7f5ed5f231c918fd528088 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/address.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/address.html.twig"));

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
        :root {
            --wb-bg-light: #f0e7ff;
        }

        /* Cartes d'adresse */
        .address-card {
            border-radius: 20px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .address-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
        }

        /* Badges personnalisés */
        .bg-purple-light {
            background-color: var(--wb-bg-light);
        }

        .text-purple {
            color: var(--wb-purple);
            font-weight: 600;
        }

        /* Bouton Ajouter personnalisé */
        .btn-wb-outline {
            border: 2px solid var(--wb-purple);
            color: var(--wb-purple);
            border-radius: 12px;
            padding: 10px 20px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-wb-outline:hover {
            background-color: var(--wb-purple);
            color: white;
        }

        /* Détails d'adresse */
        .address-details span {
            font-size: 1.2rem;
        }

        /* Suppression des points de liste dropdown */
        .dropdown-item {
            font-size: 1.2rem;
            padding: 8px 16px;
        }

        .dropdown-item i {
            font-size: 1rem;
        }
    </style>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 64
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

        // line 65
        yield "
    <!---------------user-profile-section---------------->
    <section class=\"user-profile py-5\">
        <div class=\"container\">
            <div class=\"d-flex justify-content-between align-items-center mb-4\">
                <div>
                    <h2 class=\"fw-bold mb-1\">Mes adresses</h2>
                    <a href=\"";
        // line 72
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account");
        yield "\" class=\"text-muted text-decoration-none\">
                        <i class=\"bi bi-arrow-left me-1\"></i> Retourner à mon compte
                    </a>
                </div>
                <a href=\"";
        // line 76
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("account_add_address");
        yield "\" class=\"btn btn-wb-outline\">
                    <i class=\"bi bi-plus-lg me-1\"></i> Ajouter une adresse
                </a>
            </div>

            <div class=\"row g-4\">
                ";
        // line 82
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["addresses"]) || array_key_exists("addresses", $context) ? $context["addresses"] : (function () { throw new RuntimeError('Variable "addresses" does not exist.', 82, $this->source); })()));
        $context['_iterated'] = false;
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["address"]) {
            // line 83
            yield "                    <div class=\"col-md-6 col-lg-4\">
                        <div class=\"card address-card h-100 border-0 shadow-sm\">
                            <div class=\"card-body p-4\">
                                <div class=\"d-flex justify-content-between align-items-start mb-3\">
                                <span class=\"badge bg-purple-light text-purple px-3 py-2\">
                                    <i class=\"bi bi-geo-alt-fill me-1\"></i> Adresse ";
            // line 88
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 88), "html", null, true);
            yield "
                                </span>
                                    <div class=\"dropdown\">
                                        <button class=\"btn btn-link text-muted p-0\" data-bs-toggle=\"dropdown\">
                                            <i class=\"bi bi-three-dots-vertical fs-5\"></i>
                                        </button>
                                        <ul class=\"dropdown-menu dropdown-menu-end border-0 shadow-sm\">
                                            <li><a class=\"dropdown-item\" href=\"#\"><i class=\"bi bi-pencil me-2\"></i>Modifier</a></li>
                                            <li><a class=\"dropdown-item text-danger\" href=\"#\"><i class=\"bi bi-trash me-2\"></i>Supprimer</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <h5 class=\"fw-bold mb-3\">";
            // line 101
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(((CoreExtension::getAttribute($this->env, $this->source, $context["address"], "name", [], "any", true, true, false, 101)) ? (Twig\Extension\CoreExtension::default(CoreExtension::getAttribute($this->env, $this->source, $context["address"], "name", [], "any", false, false, false, 101), "Maison")) : ("Maison")), "html", null, true);
            yield "</h5>

                                <div class=\"address-details\">
                                    <div class=\"d-flex mb-2\">
                                        <span class=\"text-muted small w-25\">Rue :</span>
                                        <span class=\"small fw-medium w-75\">";
            // line 106
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["address"], "address", [], "any", false, false, false, 106), "html", null, true);
            yield "</span>
                                    </div>
                                    <div class=\"d-flex mb-2\">
                                        <span class=\"text-muted small w-25\">Ville :</span>
                                        <span class=\"small fw-medium w-75\">";
            // line 110
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["address"], "city", [], "any", false, false, false, 110), "html", null, true);
            yield " (";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["address"], "country", [], "any", false, false, false, 110), "html", null, true);
            yield ")</span>
                                    </div>
                                    <div class=\"d-flex mb-0\">
                                        <span class=\"text-muted small w-25\">Tel :</span>
                                        <span class=\"small fw-medium w-75\">";
            // line 114
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["address"], "phone", [], "any", false, false, false, 114), "html", null, true);
            yield "</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ";
            $context['_iterated'] = true;
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['revindex0'], $context['loop']['revindex'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        // line 120
        if (!$context['_iterated']) {
            // line 121
            yield "                    <div class=\"col-12 text-center py-5\">
                        <i class=\"bi bi-map text-muted display-1\"></i>
                        <p class=\"mt-3 text-muted\">Vous n'avez pas encore enregistré d'adresse.</p>
                    </div>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['address'], $context['_parent'], $context['_iterated'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 126
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
        return "account/address.html.twig";
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
        return array (  302 => 126,  292 => 121,  290 => 120,  271 => 114,  262 => 110,  255 => 106,  247 => 101,  231 => 88,  224 => 83,  206 => 82,  197 => 76,  190 => 72,  181 => 65,  168 => 64,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello AccountController!{% endblock %}

{% block stylesheets %}
    <style>
        :root {
            --wb-bg-light: #f0e7ff;
        }

        /* Cartes d'adresse */
        .address-card {
            border-radius: 20px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .address-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
        }

        /* Badges personnalisés */
        .bg-purple-light {
            background-color: var(--wb-bg-light);
        }

        .text-purple {
            color: var(--wb-purple);
            font-weight: 600;
        }

        /* Bouton Ajouter personnalisé */
        .btn-wb-outline {
            border: 2px solid var(--wb-purple);
            color: var(--wb-purple);
            border-radius: 12px;
            padding: 10px 20px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-wb-outline:hover {
            background-color: var(--wb-purple);
            color: white;
        }

        /* Détails d'adresse */
        .address-details span {
            font-size: 1.2rem;
        }

        /* Suppression des points de liste dropdown */
        .dropdown-item {
            font-size: 1.2rem;
            padding: 8px 16px;
        }

        .dropdown-item i {
            font-size: 1rem;
        }
    </style>
{% endblock %}

{% block body %}

    <!---------------user-profile-section---------------->
    <section class=\"user-profile py-5\">
        <div class=\"container\">
            <div class=\"d-flex justify-content-between align-items-center mb-4\">
                <div>
                    <h2 class=\"fw-bold mb-1\">Mes adresses</h2>
                    <a href=\"{{ path('app_account') }}\" class=\"text-muted text-decoration-none\">
                        <i class=\"bi bi-arrow-left me-1\"></i> Retourner à mon compte
                    </a>
                </div>
                <a href=\"{{ path('account_add_address') }}\" class=\"btn btn-wb-outline\">
                    <i class=\"bi bi-plus-lg me-1\"></i> Ajouter une adresse
                </a>
            </div>

            <div class=\"row g-4\">
                {% for address in addresses %}
                    <div class=\"col-md-6 col-lg-4\">
                        <div class=\"card address-card h-100 border-0 shadow-sm\">
                            <div class=\"card-body p-4\">
                                <div class=\"d-flex justify-content-between align-items-start mb-3\">
                                <span class=\"badge bg-purple-light text-purple px-3 py-2\">
                                    <i class=\"bi bi-geo-alt-fill me-1\"></i> Adresse {{ loop.index }}
                                </span>
                                    <div class=\"dropdown\">
                                        <button class=\"btn btn-link text-muted p-0\" data-bs-toggle=\"dropdown\">
                                            <i class=\"bi bi-three-dots-vertical fs-5\"></i>
                                        </button>
                                        <ul class=\"dropdown-menu dropdown-menu-end border-0 shadow-sm\">
                                            <li><a class=\"dropdown-item\" href=\"#\"><i class=\"bi bi-pencil me-2\"></i>Modifier</a></li>
                                            <li><a class=\"dropdown-item text-danger\" href=\"#\"><i class=\"bi bi-trash me-2\"></i>Supprimer</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <h5 class=\"fw-bold mb-3\">{{ address.name|default('Maison') }}</h5>

                                <div class=\"address-details\">
                                    <div class=\"d-flex mb-2\">
                                        <span class=\"text-muted small w-25\">Rue :</span>
                                        <span class=\"small fw-medium w-75\">{{ address.address }}</span>
                                    </div>
                                    <div class=\"d-flex mb-2\">
                                        <span class=\"text-muted small w-25\">Ville :</span>
                                        <span class=\"small fw-medium w-75\">{{ address.city }} ({{ address.country }})</span>
                                    </div>
                                    <div class=\"d-flex mb-0\">
                                        <span class=\"text-muted small w-25\">Tel :</span>
                                        <span class=\"small fw-medium w-75\">{{ address.phone }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {% else %}
                    <div class=\"col-12 text-center py-5\">
                        <i class=\"bi bi-map text-muted display-1\"></i>
                        <p class=\"mt-3 text-muted\">Vous n'avez pas encore enregistré d'adresse.</p>
                    </div>
                {% endfor %}
            </div>
        </div>
    </section>
    <!--------------- user-profile-section-end --------------->
{% endblock %}
", "account/address.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/account/address.html.twig");
    }
}
