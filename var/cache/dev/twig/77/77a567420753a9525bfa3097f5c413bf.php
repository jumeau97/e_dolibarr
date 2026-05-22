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

/* home/index.html.twig */
class __TwigTemplate_3324afd34fdeb7c8df204f9e4bf5181b extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/index.html.twig"));

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

        yield "Nos produits";
        
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
        yield "
  ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 11
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

        // line 12
        yield "
    <div class=\"content-wrapper\">
        <!-- En-tête de la page -->
        <div class=\"content-header\">
            <div class=\"container-fluid\">
                <div class=\"row mb-2\">
                    <div class=\"col-sm-6\">
                        <h1 class=\"m-0 font-weight-bold\">Bonjour, ";
        // line 19
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 19), "firstName", [], "any", true, true, false, 19)) ? (Twig\Extension\CoreExtension::default(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 19, $this->source); })()), "user", [], "any", false, false, false, 19), "firstName", [], "any", false, false, false, 19), "Alassane")) : ("Alassane")), "html", null, true);
        yield " 👋</h1>
                        <p class=\"text-muted本 mb-0\">Voici l'état de votre activité aujourd'hui.</p>
                    </div>
                    <div class=\"col-sm-6\">
                        <ol class=\"breadcrumb float-sm-right\">
                            <li class=\"breadcrumb-item\"><a href=\"?page=dashboard\">Logiciel</a></li>
                            <li class=\"breadcrumb-item active\">Accueil</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenu Principal -->
        <section class=\"content\">
            <div class=\"container-fluid\">

                <!-- SECTION 1 : LES CHIFFRES DU JOUR (Boîtes simples) -->
                <div class=\"row\">
                    <!-- VENTES DU JOUR -->
                    <div class=\"col-lg-3 col-6\">
                        <div class=\"small-box bg-info\">
                            <div class=\"inner\">
                                <h3>150 000 <sup style=\"font-size: 20px\">FCFA</sup></h3>
                                <p>Ventes aujourd'hui</p>
                            </div>
                            <div class=\"icon\">
                                <i class=\"fas fa-cash-register\"></i>
                            </div>
                            <a href=\"?page=sales_orders\" class=\"small-box-footer\">Voir les factures <i class=\"fas fa-arrow-circle-right\"></i></a>
                        </div>
                    </div>

                    <!-- ARGENT DISPONIBLE -->
                    <div class=\"col-lg-3 col-6\">
                        <div class=\"small-box bg-success\">
                            <div class=\"inner\">
                                <h3>2 450 000 <sup style=\"font-size: 20px\">FCFA</sup></h3>
                                <p>Argent en Caisse / Banque</p>
                            </div>
                            <div class=\"icon\">
                                <i class=\"fas fa-wallet\"></i>
                            </div>
                            <a href=\"?page=finance_accounts\" class=\"small-box-footer\">Voir les comptes <i class=\"fas fa-arrow-circle-right\"></i></a>
                        </div>
                    </div>

                    <!-- DÉPENSES DU MOIS -->
                    <div class=\"col-lg-3 col-6\">
                        <div class=\"small-box bg-danger\">
                            <div class=\"inner\">
                                <h3>85 000 <sup style=\"font-size: 20px\">FCFA</sup></h3>
                                <p>Dépenses ce mois-ci</p>
                            </div>
                            <div class=\"icon\">
                                <i class=\"fas fa-arrow-circle-down\"></i>
                            </div>
                            <a href=\"?page=finance_expenses\" class=\"small-box-footer\">Enregistrer une dépense <i class=\"fas fa-arrow-circle-right\"></i></a>
                        </div>
                    </div>

                    <!-- ALERTES STOCKS -->
                    <div class=\"col-lg-3 col-6\">
                        <div class=\"small-box bg-warning\">
                            <div class=\"inner\">
                                <h3 class=\"text-white\">4</h3>
                                <p class=\"text-white\">Articles bientôt en rupture</p>
                            </div>
                            <div class=\"icon\">
                                <i class=\"fas fa-boxes\"></i>
                            </div>
                            <a href=\"?page=pred_stocks\" class=\"small-box-footer\" style=\"color: rgba(255,255,255,0.8) !important;\">Voir les alertes <i class=\"fas fa-arrow-circle-right\"></i></a>
                        </div>
                    </div>
                </div>

                <!-- SECTION 2 : RACCOURCIS DE CAISSE & ANALYSE IA -->
                <div class=\"row mt-3\">

                    <!-- BLOC GAUCHE : LES ACTIONS RAPIDES -->
                    <div class=\"col-md-6\">
                        <div class=\"card card-outline card-primary\">
                            <div class=\"card-header\">
                                <h3 class=\"card-title font-weight-bold\">
                                    <i class=\"fas fa-star text-primary mr-2\"></i> Actions fréquentes
                                </h3>
                            </div>
                            <div class=\"card-body text-center py-4\">
                                <a href=\"?page=sales_pos\" class=\"btn btn-app bg-info btn-lg m-2 px-4 py-3\" style=\"height: auto; min-width: 150px;\">
                                    <i class=\"fas fa-cash-register fa-2x mb-2\"></i><br>
                                    <span class=\"h6 font-weight-bold\">Ouvrir la Caisse</span>
                                </a>
                                <a href=\"?page=finance_expenses\" class=\"btn btn-app bg-danger btn-lg m-2 px-4 py-3\" style=\"height: auto; min-width: 150px;\">
                                    <i class=\"fas fa-receipt fa-2x mb-2\"></i><br>
                                    <span class=\"h6 font-weight-bold\">Ajouter un reçu</span>
                                </a>
                                <a href=\"?page=products\" class=\"btn btn-app bg-secondary btn-lg m-2 px-4 py-3\" style=\"height: auto; min-width: 150px;\">
                                    <i class=\"fas fa-plus-circle fa-2x mb-2\"></i><br>
                                    <span class=\"h6 font-weight-bold\">Nouveau Produit</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- BLOC DROITE : LE COIN DE L'INTELLIGENCE ARTIFICIELLE (Idéal Mémoire) -->
                    <div class=\"col-md-6\">
                        <div class=\"card card-outline card-warning\">
                            <div class=\"card-header\">
                                <h3 class=\"card-title font-weight-bold text-dark\">
                                    <i class=\"fas fa-brain text-warning mr-2\"></i> Conseils de votre Assistant IA
                                </h3>
                            </div>
                            <div class=\"card-body\">
                                <!-- Conseil 1 -->
                                <div class=\"callout callout-warning mb-3\">
                                    <h5 class=\"font-weight-bold text-warning\"><i class=\"fas fa-chart-line mr-2\"></i> Prévision des ventes</h5>
                                    <p class=\"mb-0\">L'IA estime une hausse de la demande de <b>12%</b> sur les boissons froides pour le weekend prochain. Pensez à vérifier vos rayons.</p>
                                </div>
                                <!-- Conseil 2 -->
                                <div class=\"callout callout-danger mb-0\">
                                    <h5 class=\"font-weight-bold text-danger\"><i class=\"fas fa-exclamation-triangle mr-2\"></i> Risque de rupture</h5>
                                    <p class=\"mb-0\">Le produit <b>\"Huile de table 1L\"</b> sera épuisé d'ici 3 jours si le rythme actuel se maintient.</p>
                                </div>
                            </div>
                            <div class=\"card-footer bg-white text-right\">
                                <a href=\"?page=pred_sales\" class=\"btn btn-sm btn-warning font-weight-bold text-dark\">
                                    Consulter toutes les analyses <i class=\"fas fa-arrow-right ml-1\"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </div>


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
        return "home/index.html.twig";
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
        return array (  135 => 19,  126 => 12,  113 => 11,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Nos produits{% endblock %}

  {% block stylesheets %}

  {% endblock %}



{% block body %}

    <div class=\"content-wrapper\">
        <!-- En-tête de la page -->
        <div class=\"content-header\">
            <div class=\"container-fluid\">
                <div class=\"row mb-2\">
                    <div class=\"col-sm-6\">
                        <h1 class=\"m-0 font-weight-bold\">Bonjour, {{ app.user.firstName|default('Alassane') }} 👋</h1>
                        <p class=\"text-muted本 mb-0\">Voici l'état de votre activité aujourd'hui.</p>
                    </div>
                    <div class=\"col-sm-6\">
                        <ol class=\"breadcrumb float-sm-right\">
                            <li class=\"breadcrumb-item\"><a href=\"?page=dashboard\">Logiciel</a></li>
                            <li class=\"breadcrumb-item active\">Accueil</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenu Principal -->
        <section class=\"content\">
            <div class=\"container-fluid\">

                <!-- SECTION 1 : LES CHIFFRES DU JOUR (Boîtes simples) -->
                <div class=\"row\">
                    <!-- VENTES DU JOUR -->
                    <div class=\"col-lg-3 col-6\">
                        <div class=\"small-box bg-info\">
                            <div class=\"inner\">
                                <h3>150 000 <sup style=\"font-size: 20px\">FCFA</sup></h3>
                                <p>Ventes aujourd'hui</p>
                            </div>
                            <div class=\"icon\">
                                <i class=\"fas fa-cash-register\"></i>
                            </div>
                            <a href=\"?page=sales_orders\" class=\"small-box-footer\">Voir les factures <i class=\"fas fa-arrow-circle-right\"></i></a>
                        </div>
                    </div>

                    <!-- ARGENT DISPONIBLE -->
                    <div class=\"col-lg-3 col-6\">
                        <div class=\"small-box bg-success\">
                            <div class=\"inner\">
                                <h3>2 450 000 <sup style=\"font-size: 20px\">FCFA</sup></h3>
                                <p>Argent en Caisse / Banque</p>
                            </div>
                            <div class=\"icon\">
                                <i class=\"fas fa-wallet\"></i>
                            </div>
                            <a href=\"?page=finance_accounts\" class=\"small-box-footer\">Voir les comptes <i class=\"fas fa-arrow-circle-right\"></i></a>
                        </div>
                    </div>

                    <!-- DÉPENSES DU MOIS -->
                    <div class=\"col-lg-3 col-6\">
                        <div class=\"small-box bg-danger\">
                            <div class=\"inner\">
                                <h3>85 000 <sup style=\"font-size: 20px\">FCFA</sup></h3>
                                <p>Dépenses ce mois-ci</p>
                            </div>
                            <div class=\"icon\">
                                <i class=\"fas fa-arrow-circle-down\"></i>
                            </div>
                            <a href=\"?page=finance_expenses\" class=\"small-box-footer\">Enregistrer une dépense <i class=\"fas fa-arrow-circle-right\"></i></a>
                        </div>
                    </div>

                    <!-- ALERTES STOCKS -->
                    <div class=\"col-lg-3 col-6\">
                        <div class=\"small-box bg-warning\">
                            <div class=\"inner\">
                                <h3 class=\"text-white\">4</h3>
                                <p class=\"text-white\">Articles bientôt en rupture</p>
                            </div>
                            <div class=\"icon\">
                                <i class=\"fas fa-boxes\"></i>
                            </div>
                            <a href=\"?page=pred_stocks\" class=\"small-box-footer\" style=\"color: rgba(255,255,255,0.8) !important;\">Voir les alertes <i class=\"fas fa-arrow-circle-right\"></i></a>
                        </div>
                    </div>
                </div>

                <!-- SECTION 2 : RACCOURCIS DE CAISSE & ANALYSE IA -->
                <div class=\"row mt-3\">

                    <!-- BLOC GAUCHE : LES ACTIONS RAPIDES -->
                    <div class=\"col-md-6\">
                        <div class=\"card card-outline card-primary\">
                            <div class=\"card-header\">
                                <h3 class=\"card-title font-weight-bold\">
                                    <i class=\"fas fa-star text-primary mr-2\"></i> Actions fréquentes
                                </h3>
                            </div>
                            <div class=\"card-body text-center py-4\">
                                <a href=\"?page=sales_pos\" class=\"btn btn-app bg-info btn-lg m-2 px-4 py-3\" style=\"height: auto; min-width: 150px;\">
                                    <i class=\"fas fa-cash-register fa-2x mb-2\"></i><br>
                                    <span class=\"h6 font-weight-bold\">Ouvrir la Caisse</span>
                                </a>
                                <a href=\"?page=finance_expenses\" class=\"btn btn-app bg-danger btn-lg m-2 px-4 py-3\" style=\"height: auto; min-width: 150px;\">
                                    <i class=\"fas fa-receipt fa-2x mb-2\"></i><br>
                                    <span class=\"h6 font-weight-bold\">Ajouter un reçu</span>
                                </a>
                                <a href=\"?page=products\" class=\"btn btn-app bg-secondary btn-lg m-2 px-4 py-3\" style=\"height: auto; min-width: 150px;\">
                                    <i class=\"fas fa-plus-circle fa-2x mb-2\"></i><br>
                                    <span class=\"h6 font-weight-bold\">Nouveau Produit</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- BLOC DROITE : LE COIN DE L'INTELLIGENCE ARTIFICIELLE (Idéal Mémoire) -->
                    <div class=\"col-md-6\">
                        <div class=\"card card-outline card-warning\">
                            <div class=\"card-header\">
                                <h3 class=\"card-title font-weight-bold text-dark\">
                                    <i class=\"fas fa-brain text-warning mr-2\"></i> Conseils de votre Assistant IA
                                </h3>
                            </div>
                            <div class=\"card-body\">
                                <!-- Conseil 1 -->
                                <div class=\"callout callout-warning mb-3\">
                                    <h5 class=\"font-weight-bold text-warning\"><i class=\"fas fa-chart-line mr-2\"></i> Prévision des ventes</h5>
                                    <p class=\"mb-0\">L'IA estime une hausse de la demande de <b>12%</b> sur les boissons froides pour le weekend prochain. Pensez à vérifier vos rayons.</p>
                                </div>
                                <!-- Conseil 2 -->
                                <div class=\"callout callout-danger mb-0\">
                                    <h5 class=\"font-weight-bold text-danger\"><i class=\"fas fa-exclamation-triangle mr-2\"></i> Risque de rupture</h5>
                                    <p class=\"mb-0\">Le produit <b>\"Huile de table 1L\"</b> sera épuisé d'ici 3 jours si le rythme actuel se maintient.</p>
                                </div>
                            </div>
                            <div class=\"card-footer bg-white text-right\">
                                <a href=\"?page=pred_sales\" class=\"btn btn-sm btn-warning font-weight-bold text-dark\">
                                    Consulter toutes les analyses <i class=\"fas fa-arrow-right ml-1\"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </div>


{% endblock %}
", "home/index.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/home/index.html.twig");
    }
}
