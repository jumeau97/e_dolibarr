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
        yield "<div class=\"content-wrapper\">
    <!-- En-tête de la page -->
    <div class=\"content-header\">
        <div class=\"container-fluid\">
            <div class=\"row mb-2\">
                <div class=\"col-sm-6\">
                    <h1 class=\"m-0 font-weight-bold\"><i class=\"fas fa-plus-circle text-success mr-2\"></i> Nouveau
                        Produit / Article</h1>
                    <p class=\"text-muted mb-0\">Remplissez les informations ci-dessous pour ajouter une marchandise au
                        stock.</p>
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

    <!-- Contenu Principal -->
    <section class=\"content\">
        <div class=\"container-fluid\">

            ";
        // line 38
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 38, $this->source); })()), 'form_start');
        yield "
            <div class=\"content-wrapper\">
                <div class=\"content-header\">
                    <div class=\"container-fluid\">
                        <div class=\"row mb-2\">
                            <div class=\"col-sm-6\">
                                <h1 class=\"m-0 font-weight-bold\"><i class=\"fas fa-plus-circle text-success mr-2\"></i>
                                    Ajouter une marchandise</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section class=\"content\">
                    <div class=\"container-fluid\">
                        <div class=\"row\">

                            <!-- BLOC GAUCHE : IDENTIFICATION & FINANCES -->
                            <div class=\"col-md-8\">
                                <div class=\"card card-outline card-success shadow-sm\">
                                    <div class=\"card-header bg-white\">
                                        <h3 class=\"card-title font-weight-bold\"><i
                                                    class=\"fas fa-info-circle text-success mr-2\"></i> Fiche Produit</h3>
                                    </div>
                                    <div class=\"card-body\">
                                        <div class=\"form-group\">
                                            ";
        // line 64
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 64, $this->source); })()), "libelle", [], "any", false, false, false, 64), 'label');
        yield "
                                            ";
        // line 65
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 65, $this->source); })()), "libelle", [], "any", false, false, false, 65), 'widget');
        yield "
                                        </div>

                                        <div class=\"form-group\">
                                            ";
        // line 69
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 69, $this->source); })()), "reference", [], "any", false, false, false, 69), 'label');
        yield "
                                            ";
        // line 70
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 70, $this->source); })()), "reference", [], "any", false, false, false, 70), 'widget');
        yield "
                                        </div>

                                        <!-- SOUS-SECTION DES PRIX -->
                                        <div class=\"row bg-light p-3 rounded border my-3 mx-0\">
                                            <div class=\"col-md-6\">
                                                <div class=\"form-group mb-0\">
                                                    ";
        // line 77
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 77, $this->source); })()), "prixAchat", [], "any", false, false, false, 77), 'label');
        yield "
                                                    ";
        // line 78
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 78, $this->source); })()), "prixAchat", [], "any", false, false, false, 78), 'widget');
        yield "
                                                </div>
                                            </div>
                                            <div class=\"col-md-6\">
                                                <div class=\"form-group mb-0\">
                                                    ";
        // line 83
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 83, $this->source); })()), "prixVente", [], "any", false, false, false, 83), 'label');
        yield "
                                                    ";
        // line 84
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 84, $this->source); })()), "prixVente", [], "any", false, false, false, 84), 'widget');
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
                                <div class=\"card card-default shadow-sm\">
                                    <div class=\"card-header bg-white\">
                                        <h3 class=\"card-title font-weight-bold text-secondary\"><i
                                                    class=\"fas fa-sliders-h mr-2\"></i> Seuils de Stock</h3>
                                    </div>
                                    <div class=\"card-body\">
                                        <div class=\"form-group\">
                                            ";
        // line 102
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 102, $this->source); })()), "limitStock", [], "any", false, false, false, 102), 'label');
        yield "
                                            ";
        // line 103
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 103, $this->source); })()), "limitStock", [], "any", false, false, false, 103), 'widget');
        yield "
                                        </div>
                                        <div class=\"form-group mb-0\">
                                            ";
        // line 106
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 106, $this->source); })()), "stockOptimal", [], "any", false, false, false, 106), 'label');
        yield "
                                            ";
        // line 107
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 107, $this->source); })()), "stockOptimal", [], "any", false, false, false, 107), 'widget');
        yield "
                                        </div>
                                    </div>
                                </div>

                                <!-- Emplacement Logistique -->
                                <div class=\"card card-outline card-warning shadow-sm\">
                                    <div class=\"card-header bg-white\">
                                        <h3 class=\"card-title font-weight-bold text-dark\"><i
                                                    class=\"fas fa-warehouse text-warning mr-2\"></i> Emplacement</h3>
                                    </div>
                                    <div class=\"card-body\">
                                        ";
        // line 119
        if ((($tmp = (isset($context["estResponsable"]) || array_key_exists("estResponsable", $context) ? $context["estResponsable"] : (function () { throw new RuntimeError('Variable "estResponsable" does not exist.', 119, $this->source); })())) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 120
            yield "                                        <div class=\"alert alert-info border-0 shadow-sm p-2 mb-3\">
                                            <i class=\"fas fa-user-shield mr-1\"></i> <b>Logistique simplifiée :</b> En
                                            tant que responsable, cet article est rattaché directement à votre zone de
                                            dépôt.
                                        </div>
                                        ";
        }
        // line 126
        yield "
                                        <div class=\"form-group mb-0\">
                                            ";
        // line 128
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 128, $this->source); })()), "entrepots", [], "any", false, false, false, 128), 'label');
        yield "
                                            ";
        // line 129
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 129, $this->source); })()), "entrepots", [], "any", false, false, false, 129), 'widget');
        yield "
                                            ";
        // line 130
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 130, $this->source); })()), "entrepots", [], "any", false, false, false, 130), 'help');
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
                                <button type=\"submit\" class=\"btn btn-success btn-lg px-5 font-weight-bold shadow\">
                                    <i class=\"fas fa-check-circle mr-2\"></i> Confirmer et Créer l'article
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            ";
        // line 150
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 150, $this->source); })()), 'form_end');
        yield "

        </div>
    </section>
</div>

    <!-- PETIT SCRIPT UX POUR INTERAGIR AVEC LES RADIOS (Totalement autonome) -->
    <script>
        document.addEventListener(\"DOMContentLoaded\", function () {
            var radioIa = document.getElementById('alert_ia');
            var radioManual = document.getElementById('alert_manual');
            var manualContainer = document.getElementById('manual_threshold_container');

            if (radioIa && radioManual && manualContainer) {
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
        return array (  319 => 150,  296 => 130,  292 => 129,  288 => 128,  284 => 126,  276 => 120,  274 => 119,  259 => 107,  255 => 106,  249 => 103,  245 => 102,  224 => 84,  220 => 83,  212 => 78,  208 => 77,  198 => 70,  194 => 69,  187 => 65,  183 => 64,  154 => 38,  126 => 12,  113 => 11,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
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
                    <h1 class=\"m-0 font-weight-bold\"><i class=\"fas fa-plus-circle text-success mr-2\"></i> Nouveau
                        Produit / Article</h1>
                    <p class=\"text-muted mb-0\">Remplissez les informations ci-dessous pour ajouter une marchandise au
                        stock.</p>
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

    <!-- Contenu Principal -->
    <section class=\"content\">
        <div class=\"container-fluid\">

            {{ form_start(form) }}
            <div class=\"content-wrapper\">
                <div class=\"content-header\">
                    <div class=\"container-fluid\">
                        <div class=\"row mb-2\">
                            <div class=\"col-sm-6\">
                                <h1 class=\"m-0 font-weight-bold\"><i class=\"fas fa-plus-circle text-success mr-2\"></i>
                                    Ajouter une marchandise</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section class=\"content\">
                    <div class=\"container-fluid\">
                        <div class=\"row\">

                            <!-- BLOC GAUCHE : IDENTIFICATION & FINANCES -->
                            <div class=\"col-md-8\">
                                <div class=\"card card-outline card-success shadow-sm\">
                                    <div class=\"card-header bg-white\">
                                        <h3 class=\"card-title font-weight-bold\"><i
                                                    class=\"fas fa-info-circle text-success mr-2\"></i> Fiche Produit</h3>
                                    </div>
                                    <div class=\"card-body\">
                                        <div class=\"form-group\">
                                            {{ form_label(form.libelle) }}
                                            {{ form_widget(form.libelle) }}
                                        </div>

                                        <div class=\"form-group\">
                                            {{ form_label(form.reference) }}
                                            {{ form_widget(form.reference) }}
                                        </div>

                                        <!-- SOUS-SECTION DES PRIX -->
                                        <div class=\"row bg-light p-3 rounded border my-3 mx-0\">
                                            <div class=\"col-md-6\">
                                                <div class=\"form-group mb-0\">
                                                    {{ form_label(form.prixAchat) }}
                                                    {{ form_widget(form.prixAchat) }}
                                                </div>
                                            </div>
                                            <div class=\"col-md-6\">
                                                <div class=\"form-group mb-0\">
                                                    {{ form_label(form.prixVente) }}
                                                    {{ form_widget(form.prixVente) }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- BLOC DROITE : PARAMÈTRES DE STOCK & LOGISTIQUE -->
                            <div class=\"col-md-4\">
                                <!-- Seuils d'alertes -->
                                <div class=\"card card-default shadow-sm\">
                                    <div class=\"card-header bg-white\">
                                        <h3 class=\"card-title font-weight-bold text-secondary\"><i
                                                    class=\"fas fa-sliders-h mr-2\"></i> Seuils de Stock</h3>
                                    </div>
                                    <div class=\"card-body\">
                                        <div class=\"form-group\">
                                            {{ form_label(form.limitStock) }}
                                            {{ form_widget(form.limitStock) }}
                                        </div>
                                        <div class=\"form-group mb-0\">
                                            {{ form_label(form.stockOptimal) }}
                                            {{ form_widget(form.stockOptimal) }}
                                        </div>
                                    </div>
                                </div>

                                <!-- Emplacement Logistique -->
                                <div class=\"card card-outline card-warning shadow-sm\">
                                    <div class=\"card-header bg-white\">
                                        <h3 class=\"card-title font-weight-bold text-dark\"><i
                                                    class=\"fas fa-warehouse text-warning mr-2\"></i> Emplacement</h3>
                                    </div>
                                    <div class=\"card-body\">
                                        {% if estResponsable %}
                                        <div class=\"alert alert-info border-0 shadow-sm p-2 mb-3\">
                                            <i class=\"fas fa-user-shield mr-1\"></i> <b>Logistique simplifiée :</b> En
                                            tant que responsable, cet article est rattaché directement à votre zone de
                                            dépôt.
                                        </div>
                                        {% endif %}

                                        <div class=\"form-group mb-0\">
                                            {{ form_label(form.entrepots) }}
                                            {{ form_widget(form.entrepots) }}
                                            {{ form_help(form.entrepots) }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <!-- Boutons de validation -->
                        <div class=\"row mb-5\">
                            <div class=\"col-12 text-right\">
                                <hr class=\"bg-white\">
                                <button type=\"submit\" class=\"btn btn-success btn-lg px-5 font-weight-bold shadow\">
                                    <i class=\"fas fa-check-circle mr-2\"></i> Confirmer et Créer l'article
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {{ form_end(form) }}

        </div>
    </section>
</div>

    <!-- PETIT SCRIPT UX POUR INTERAGIR AVEC LES RADIOS (Totalement autonome) -->
    <script>
        document.addEventListener(\"DOMContentLoaded\", function () {
            var radioIa = document.getElementById('alert_ia');
            var radioManual = document.getElementById('alert_manual');
            var manualContainer = document.getElementById('manual_threshold_container');

            if (radioIa && radioManual && manualContainer) {
                radioIa.addEventListener('change', function () {
                    if (this.checked) manualContainer.classList.add('d-none');
                });
                radioManual.addEventListener('change', function () {
                    if (this.checked) manualContainer.classList.remove('d-none');
                });
            }
        });
    </script>

{% endblock %}

", "produit_article/add-product.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/produit_article/add-product.html.twig");
    }
}
