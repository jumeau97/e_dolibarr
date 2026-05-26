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

/* produit_article/add-product.html.twig */
class __TwigTemplate_7528b68602878c6477d711a9a646e5e9 extends Template
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
            'javascripts' => [$this, 'block_javascripts'],
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "produit_article/add-product.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "produit_article/add-product.html.twig"));

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
        yield "    ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 9
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

        // line 10
        yield "    <div class=\"content-wrapper\">
        <!-- En-tête unique de la page -->
        <div class=\"content-header\">
            <div class=\"container-fluid\">
                <div class=\"row mb-2\">
                    <div class=\"col-sm-6\">
                        <h1 class=\"m-0 font-weight-bold\">
                            <i class=\"fas fa-plus-circle text-success mr-2\"></i> Nouveau Produit / Article
                        </h1>
                        <p class=\"text-muted mb-0\">Remplissez les informations ci-dessous pour ajouter une marchandise au stock.</p>
                    </div>
                    <div class=\"col-sm-6\">
                        <ol class=\"breadcrumb float-sm-right\">
                            <li class=\"breadcrumb-item\"><a href=\"?page=dashboard\">Logiciel</a></li>
                            <li class=\"breadcrumb-item\"><a href=\"?page=products\">Produits</a></li>
                            <li class=\"breadcrumb-item active\">Ajouter</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <!-- Zone de Contenu Principal (Une seule section) -->
        <section class=\"content\">
            <div class=\"container-fluid\">

                ";
        // line 36
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 36, $this->source); })()), 'form_start');
        yield "

                <div class=\"row\">
                    <!-- BLOC GAUCHE : IDENTIFICATION & FINANCES -->
                    <div class=\"col-md-8\">
                        <div class=\"card card-outline card-success shadow-sm\">
                            <div class=\"card-header bg-white\">
                                <h3 class=\"card-title font-weight-bold\">
                                    <i class=\"fas fa-info-circle text-success mr-2\"></i> Fiche Produit
                                </h3>
                            </div>
                            <div class=\"card-body\">
                                <div class=\"form-group\">
                                    ";
        // line 49
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 49, $this->source); })()), "libelle", [], "any", false, false, false, 49), 'label');
        yield "
                                    ";
        // line 50
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 50, $this->source); })()), "libelle", [], "any", false, false, false, 50), 'widget');
        yield "
                                    ";
        // line 51
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 51, $this->source); })()), "libelle", [], "any", false, false, false, 51), 'errors');
        yield "
                                </div>

                                <div class=\"form-group\">
                                    ";
        // line 55
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 55, $this->source); })()), "reference", [], "any", false, false, false, 55), 'label');
        yield "
                                    ";
        // line 56
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 56, $this->source); })()), "reference", [], "any", false, false, false, 56), 'widget');
        yield "
                                    ";
        // line 57
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 57, $this->source); })()), "reference", [], "any", false, false, false, 57), 'errors');
        yield "
                                </div>

                                <!-- SOUS-SECTION DES PRIX -->
                                <div class=\"row bg-light p-3 rounded border my-3 mx-0\">
                                    <div class=\"col-md-6\">
                                        <div class=\"form-group mb-0\">
                                            ";
        // line 64
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 64, $this->source); })()), "prixAchat", [], "any", false, false, false, 64), 'label');
        yield "
                                            ";
        // line 65
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 65, $this->source); })()), "prixAchat", [], "any", false, false, false, 65), 'widget');
        yield "
                                            ";
        // line 66
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 66, $this->source); })()), "prixAchat", [], "any", false, false, false, 66), 'errors');
        yield "
                                        </div>
                                    </div>
                                    <div class=\"col-md-6\">
                                        <div class=\"form-group mb-0\">
                                            ";
        // line 71
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 71, $this->source); })()), "prixVente", [], "any", false, false, false, 71), 'label');
        yield "
                                            ";
        // line 72
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 72, $this->source); })()), "prixVente", [], "any", false, false, false, 72), 'widget');
        yield "
                                            ";
        // line 73
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 73, $this->source); })()), "prixVente", [], "any", false, false, false, 73), 'errors');
        yield "
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- BLOC DROITE : PARAMÈTRES DE STOCK & LOGISTIQUE -->
                    <div class=\"col-md-4\">
                        <!-- Seuils d'alertes -->
                        <div class=\"card card-default shadow-sm\" id=\"manual_threshold_container\">
                            <div class=\"card-header bg-white\">
                                <h3 class=\"card-title font-weight-bold text-secondary\">
                                    <i class=\"fas fa-sliders-h mr-2\"></i> Seuils de Stock
                                </h3>
                            </div>
                            <div class=\"card-body\">
                                <div class=\"form-group\">
                                    ";
        // line 92
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 92, $this->source); })()), "limitStock", [], "any", false, false, false, 92), 'label');
        yield "
                                    ";
        // line 93
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 93, $this->source); })()), "limitStock", [], "any", false, false, false, 93), 'widget');
        yield "
                                    ";
        // line 94
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 94, $this->source); })()), "limitStock", [], "any", false, false, false, 94), 'errors');
        yield "
                                </div>
                                <div class=\"form-group mb-0\">
                                    ";
        // line 97
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 97, $this->source); })()), "stockOptimal", [], "any", false, false, false, 97), 'label');
        yield "
                                    ";
        // line 98
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 98, $this->source); })()), "stockOptimal", [], "any", false, false, false, 98), 'widget');
        yield "
                                    ";
        // line 99
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 99, $this->source); })()), "stockOptimal", [], "any", false, false, false, 99), 'errors');
        yield "
                                </div>
                            </div>
                        </div>

                        <!-- Emplacement Logistique -->
                        <div class=\"card card-outline card-warning shadow-sm\">
                            <div class=\"card-header bg-white\">
                                <h3 class=\"card-title font-weight-bold text-dark\">
                                    <i class=\"fas fa-warehouse text-warning mr-2\"></i> Emplacement
                                </h3>
                            </div>
                            <div class=\"card-body\">
                                ";
        // line 112
        if ((($tmp = (isset($context["estResponsable"]) || array_key_exists("estResponsable", $context) ? $context["estResponsable"] : (function () { throw new RuntimeError('Variable "estResponsable" does not exist.', 112, $this->source); })())) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 113
            yield "                                    <div class=\"alert alert-info border-0 shadow-sm p-2 mb-3\">
                                        <i class=\"fas fa-user-shield mr-1\"></i> <b>Logistique simplifiée :</b> En tant que responsable, cet article est rattaché directement à votre zone de dépôt.
                                    </div>
                                ";
        }
        // line 117
        yield "
                                <div class=\"form-group mb-0\">
                                    ";
        // line 119
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 119, $this->source); })()), "entrepots", [], "any", false, false, false, 119), 'label');
        yield "
                                    ";
        // line 120
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 120, $this->source); })()), "entrepots", [], "any", false, false, false, 120), 'widget');
        yield "
                                    ";
        // line 121
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 121, $this->source); })()), "entrepots", [], "any", false, false, false, 121), 'help');
        yield "
                                    ";
        // line 122
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 122, $this->source); })()), "entrepots", [], "any", false, false, false, 122), 'errors');
        yield "
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Boutons de validation -->
                <div class=\"row mb-5\">
                    <div class=\"col-12 text-right\">
                        <hr class=\"bg-white\">
                        <button type=\"submit\" class=\"btn btn-success btn-lg font-weight-bold shadow\">
                            <i class=\"fas fa-check-circle mr-2\"></i> Confirmer et Créer l'article
                        </button>
                    </div>
                </div>

                ";
        // line 139
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 139, $this->source); })()), 'form_end');
        yield "

            </div>
        </section>
    </div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 146
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_javascripts(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 147
        yield "    <!-- SCRIPT UX POUR LES RADIOS ALERTE IA / MANUELLE -->
    <script>
        document.addEventListener(\"DOMContentLoaded\", function () {
            var radioIa = document.getElementById('alert_ia');
            var radioManual = document.getElementById('alert_manual');
            var manualContainer = document.getElementById('manual_threshold_container');

            if (radioIa && radioManual && manualContainer) {
                // Initialisation au chargement de la page
                if (radioIa.checked) manualContainer.classList.add('d-none');

                // Écouteurs de changement
                radioIa.addEventListener('change', function () {
                    if (this.checked) manualContainer.classList.add('d-none');
                });
                radioManual.addEventListener('change', function () {
                    if (this.checked) manualContainer.classList.remove('d-none');
                });
            }
        });
    </script>
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
        return "produit_article/add-product.html.twig";
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
        return array (  361 => 147,  348 => 146,  331 => 139,  311 => 122,  307 => 121,  303 => 120,  299 => 119,  295 => 117,  289 => 113,  287 => 112,  271 => 99,  267 => 98,  263 => 97,  257 => 94,  253 => 93,  249 => 92,  227 => 73,  223 => 72,  219 => 71,  211 => 66,  207 => 65,  203 => 64,  193 => 57,  189 => 56,  185 => 55,  178 => 51,  174 => 50,  170 => 49,  154 => 36,  126 => 10,  113 => 9,  102 => 6,  89 => 5,  66 => 3,  43 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Nos produits{% endblock %}

{% block stylesheets %}
    {# Ajoute ici tes CSS spécifiques si nécessaire (ex: select2) #}
{% endblock %}

{% block body %}
    <div class=\"content-wrapper\">
        <!-- En-tête unique de la page -->
        <div class=\"content-header\">
            <div class=\"container-fluid\">
                <div class=\"row mb-2\">
                    <div class=\"col-sm-6\">
                        <h1 class=\"m-0 font-weight-bold\">
                            <i class=\"fas fa-plus-circle text-success mr-2\"></i> Nouveau Produit / Article
                        </h1>
                        <p class=\"text-muted mb-0\">Remplissez les informations ci-dessous pour ajouter une marchandise au stock.</p>
                    </div>
                    <div class=\"col-sm-6\">
                        <ol class=\"breadcrumb float-sm-right\">
                            <li class=\"breadcrumb-item\"><a href=\"?page=dashboard\">Logiciel</a></li>
                            <li class=\"breadcrumb-item\"><a href=\"?page=products\">Produits</a></li>
                            <li class=\"breadcrumb-item active\">Ajouter</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <!-- Zone de Contenu Principal (Une seule section) -->
        <section class=\"content\">
            <div class=\"container-fluid\">

                {{ form_start(form) }}

                <div class=\"row\">
                    <!-- BLOC GAUCHE : IDENTIFICATION & FINANCES -->
                    <div class=\"col-md-8\">
                        <div class=\"card card-outline card-success shadow-sm\">
                            <div class=\"card-header bg-white\">
                                <h3 class=\"card-title font-weight-bold\">
                                    <i class=\"fas fa-info-circle text-success mr-2\"></i> Fiche Produit
                                </h3>
                            </div>
                            <div class=\"card-body\">
                                <div class=\"form-group\">
                                    {{ form_label(form.libelle) }}
                                    {{ form_widget(form.libelle) }}
                                    {{ form_errors(form.libelle) }}
                                </div>

                                <div class=\"form-group\">
                                    {{ form_label(form.reference) }}
                                    {{ form_widget(form.reference) }}
                                    {{ form_errors(form.reference) }}
                                </div>

                                <!-- SOUS-SECTION DES PRIX -->
                                <div class=\"row bg-light p-3 rounded border my-3 mx-0\">
                                    <div class=\"col-md-6\">
                                        <div class=\"form-group mb-0\">
                                            {{ form_label(form.prixAchat) }}
                                            {{ form_widget(form.prixAchat) }}
                                            {{ form_errors(form.prixAchat) }}
                                        </div>
                                    </div>
                                    <div class=\"col-md-6\">
                                        <div class=\"form-group mb-0\">
                                            {{ form_label(form.prixVente) }}
                                            {{ form_widget(form.prixVente) }}
                                            {{ form_errors(form.prixVente) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- BLOC DROITE : PARAMÈTRES DE STOCK & LOGISTIQUE -->
                    <div class=\"col-md-4\">
                        <!-- Seuils d'alertes -->
                        <div class=\"card card-default shadow-sm\" id=\"manual_threshold_container\">
                            <div class=\"card-header bg-white\">
                                <h3 class=\"card-title font-weight-bold text-secondary\">
                                    <i class=\"fas fa-sliders-h mr-2\"></i> Seuils de Stock
                                </h3>
                            </div>
                            <div class=\"card-body\">
                                <div class=\"form-group\">
                                    {{ form_label(form.limitStock) }}
                                    {{ form_widget(form.limitStock) }}
                                    {{ form_errors(form.limitStock) }}
                                </div>
                                <div class=\"form-group mb-0\">
                                    {{ form_label(form.stockOptimal) }}
                                    {{ form_widget(form.stockOptimal) }}
                                    {{ form_errors(form.stockOptimal) }}
                                </div>
                            </div>
                        </div>

                        <!-- Emplacement Logistique -->
                        <div class=\"card card-outline card-warning shadow-sm\">
                            <div class=\"card-header bg-white\">
                                <h3 class=\"card-title font-weight-bold text-dark\">
                                    <i class=\"fas fa-warehouse text-warning mr-2\"></i> Emplacement
                                </h3>
                            </div>
                            <div class=\"card-body\">
                                {% if estResponsable %}
                                    <div class=\"alert alert-info border-0 shadow-sm p-2 mb-3\">
                                        <i class=\"fas fa-user-shield mr-1\"></i> <b>Logistique simplifiée :</b> En tant que responsable, cet article est rattaché directement à votre zone de dépôt.
                                    </div>
                                {% endif %}

                                <div class=\"form-group mb-0\">
                                    {{ form_label(form.entrepots) }}
                                    {{ form_widget(form.entrepots) }}
                                    {{ form_help(form.entrepots) }}
                                    {{ form_errors(form.entrepots) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Boutons de validation -->
                <div class=\"row mb-5\">
                    <div class=\"col-12 text-right\">
                        <hr class=\"bg-white\">
                        <button type=\"submit\" class=\"btn btn-success btn-lg font-weight-bold shadow\">
                            <i class=\"fas fa-check-circle mr-2\"></i> Confirmer et Créer l'article
                        </button>
                    </div>
                </div>

                {{ form_end(form) }}

            </div>
        </section>
    </div>
{% endblock %}

{% block javascripts %}
    <!-- SCRIPT UX POUR LES RADIOS ALERTE IA / MANUELLE -->
    <script>
        document.addEventListener(\"DOMContentLoaded\", function () {
            var radioIa = document.getElementById('alert_ia');
            var radioManual = document.getElementById('alert_manual');
            var manualContainer = document.getElementById('manual_threshold_container');

            if (radioIa && radioManual && manualContainer) {
                // Initialisation au chargement de la page
                if (radioIa.checked) manualContainer.classList.add('d-none');

                // Écouteurs de changement
                radioIa.addEventListener('change', function () {
                    if (this.checked) manualContainer.classList.add('d-none');
                });
                radioManual.addEventListener('change', function () {
                    if (this.checked) manualContainer.classList.remove('d-none');
                });
            }
        });
    </script>
{% endblock %}", "produit_article/add-product.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/produit_article/add-product.html.twig");
    }
}
