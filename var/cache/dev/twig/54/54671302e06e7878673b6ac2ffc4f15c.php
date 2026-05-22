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

/* account/address-add.html.twig */
class __TwigTemplate_6620c7d0b9fb170a1b82521dd59e612b extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/address-add.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/address-add.html.twig"));

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

        /* --- Conteneur du Formulaire --- */
        .account-section.modal-main {
            background: #ffffff;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        /* --- Structure des lignes (Inputs côte à côte) --- */
        .account-inner-form {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }

        .review-form-name {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        /* --- Style des Inputs (Style Wildberries) --- */
        .custom-input,
        .account-inner-form input {
            width: 100%;
            background-color: #f6f6f9; /* Gris très clair au repos */
            border: 1.5px solid transparent;
            border-radius: 12px;
            padding: 14px 18px;
            font-size: 15px;
            color: #1a1a1a;
            transition: all 0.3s ease;
            outline: none;
        }

        /* --- Effet au clic (Focus) --- */
        .custom-input:focus,
        .account-inner-form input:focus {
            background-color: #ffffff;
            border-color: #082C6A; /* Bleu Sanfeni */
            box-shadow: 0 4px 12px rgba(8, 44, 106, 0.08);
        }

        /* --- Gestion des erreurs Symfony --- */
        .review-form-name ul {
            list-style: none;
            padding: 0;
            margin: 5px 0 0 0;
        }

        .review-form-name li {
            color: #d9534f;
            font-size: 12px;
            font-weight: 500;
        }

        /* --- Bouton d'action --- */
        .shop-btn {
            background-color: #082C6A;
            color: #ffffff;
            border: none;
            border-radius: 12px;
            padding: 16px 30px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .shop-btn:hover {
            background-color: #061e4a;
            transform: translateY(-1px);
        }

        .shop-btn:active {
            transform: translateY(1px);
        }

        /* --- Adaptabilité Mobile --- */
        @media (max-width: 768px) {
            .account-inner-form {
                flex-direction: column; /* On empile les champs sur mobile */
                gap: 15px;
            }

            .account-section.modal-main {
                padding: 20px;
            }
        }

    </style>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 101
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

        // line 102
        yield "
    <section class=\"user-profile footer-padding\">
        <div class=\"container\">
            <div class=\"d-flex justify-content-between align-items-center mb-4\">
                <h2 class=\"font-bold text-2xl\">Mes adresses</h2>
                <a href=\"";
        // line 107
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account");
        yield "\" class=\"view text-sm\" style=\"color: #082C6A;\">
                    <i class=\"fas fa-chevron-left\"></i> Retour au compte
                </a>
            </div>

            <div class=\"user-profile-section\">
                <div class=\"user-dashboard\">
                    <div class=\"tab-content nav-content\" id=\"v-pills-tabContent\" style=\"flex: 1 0%;\">
                        <div class=\"tab-pane fade show active\" id=\"v-pills-address\" role=\"tabpanel\">

                            <div class=\"login-section account-section modal-main border-0 shadow-sm\" style=\"border-radius: 20px;\">
                                <div class=\"review-form\">
                                    <div class=\"review-content\">
                                        <h5 class=\"comment-title\">Ajouter une adresse</h5>
";
        // line 125
        yield "                                    </div>

                                    ";
        // line 127
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 127, $this->source); })()), 'form_start');
        yield "
                                    ";
        // line 129
        yield "                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name\">
                                            ";
        // line 131
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 131, $this->source); })()), "firstName", [], "any", false, false, false, 131), 'widget', ["attr" => ["class" => "custom-input", "placeholder" => "Prénom"]]);
        yield "
                                            ";
        // line 132
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 132, $this->source); })()), "firstName", [], "any", false, false, false, 132), 'errors');
        yield "
                                        </div>
                                        <div class=\"review-form-name\">
                                            ";
        // line 135
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 135, $this->source); })()), "lastName", [], "any", false, false, false, 135), 'widget', ["attr" => ["class" => "custom-input", "placeholder" => "Nom"]]);
        yield "
                                            ";
        // line 136
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 136, $this->source); })()), "lastName", [], "any", false, false, false, 136), 'errors');
        yield "
                                        </div>
                                    </div>

                                    ";
        // line 141
        yield "                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name w-full\">
                                            ";
        // line 143
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 143, $this->source); })()), "phone", [], "any", false, false, false, 143), 'widget', ["attr" => ["class" => "custom-input", "placeholder" => "Téléphone (+223...)"]]);
        yield "
                                            ";
        // line 144
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 144, $this->source); })()), "phone", [], "any", false, false, false, 144), 'errors');
        yield "
                                        </div>
                                    </div>

                                    ";
        // line 149
        yield "                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name w-full\">
                                            ";
        // line 151
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 151, $this->source); })()), "company", [], "any", false, false, false, 151), 'widget', ["attr" => ["class" => "custom-input", "placeholder" => "Entreprise (Optionnel)"]]);
        yield "
                                        </div>
                                    </div>

                                    ";
        // line 156
        yield "                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name w-full\">
                                            ";
        // line 158
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 158, $this->source); })()), "address", [], "any", false, false, false, 158), 'widget', ["attr" => ["class" => "custom-input", "placeholder" => "Adresse complète (Rue, Porte, Quartier...)"]]);
        yield "
                                            ";
        // line 159
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 159, $this->source); })()), "address", [], "any", false, false, false, 159), 'errors');
        yield "
                                        </div>
                                    </div>

                                    ";
        // line 164
        yield "                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name\">
                                            ";
        // line 166
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 166, $this->source); })()), "city", [], "any", false, false, false, 166), 'widget', ["attr" => ["class" => "custom-input", "placeholder" => "Ville"]]);
        yield "
                                            ";
        // line 167
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 167, $this->source); })()), "city", [], "any", false, false, false, 167), 'errors');
        yield "
                                        </div>
                                        <div class=\"review-form-name\">
                                            ";
        // line 170
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 170, $this->source); })()), "country", [], "any", false, false, false, 170), 'widget', ["attr" => ["class" => "custom-input", "placeholder" => "Pays"]]);
        yield "
                                            ";
        // line 171
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 171, $this->source); })()), "country", [], "any", false, false, false, 171), 'errors');
        yield "
                                        </div>
                                    </div>

                                    <div class=\"login-btn text-center mt-6\">
                                        <button type=\"submit\" class=\"btn shop-btn w-full py-4 rounded-xl font-bold transition-all hover:opacity-90\"
                                                style=\"background-color: #082C6A; color: white;\">
                                            Ajouter l'adresse
                                        </button>
                                    </div>
                                    ";
        // line 181
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 181, $this->source); })()), 'form_end');
        yield "

                                </div>
                            </div>

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
        return "account/address-add.html.twig";
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
        return array (  347 => 181,  334 => 171,  330 => 170,  324 => 167,  320 => 166,  316 => 164,  309 => 159,  305 => 158,  301 => 156,  294 => 151,  290 => 149,  283 => 144,  279 => 143,  275 => 141,  268 => 136,  264 => 135,  258 => 132,  254 => 131,  250 => 129,  246 => 127,  242 => 125,  225 => 107,  218 => 102,  205 => 101,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello AccountController!{% endblock %}

{% block stylesheets %}
    <style>

        /* --- Conteneur du Formulaire --- */
        .account-section.modal-main {
            background: #ffffff;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        /* --- Structure des lignes (Inputs côte à côte) --- */
        .account-inner-form {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }

        .review-form-name {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        /* --- Style des Inputs (Style Wildberries) --- */
        .custom-input,
        .account-inner-form input {
            width: 100%;
            background-color: #f6f6f9; /* Gris très clair au repos */
            border: 1.5px solid transparent;
            border-radius: 12px;
            padding: 14px 18px;
            font-size: 15px;
            color: #1a1a1a;
            transition: all 0.3s ease;
            outline: none;
        }

        /* --- Effet au clic (Focus) --- */
        .custom-input:focus,
        .account-inner-form input:focus {
            background-color: #ffffff;
            border-color: #082C6A; /* Bleu Sanfeni */
            box-shadow: 0 4px 12px rgba(8, 44, 106, 0.08);
        }

        /* --- Gestion des erreurs Symfony --- */
        .review-form-name ul {
            list-style: none;
            padding: 0;
            margin: 5px 0 0 0;
        }

        .review-form-name li {
            color: #d9534f;
            font-size: 12px;
            font-weight: 500;
        }

        /* --- Bouton d'action --- */
        .shop-btn {
            background-color: #082C6A;
            color: #ffffff;
            border: none;
            border-radius: 12px;
            padding: 16px 30px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .shop-btn:hover {
            background-color: #061e4a;
            transform: translateY(-1px);
        }

        .shop-btn:active {
            transform: translateY(1px);
        }

        /* --- Adaptabilité Mobile --- */
        @media (max-width: 768px) {
            .account-inner-form {
                flex-direction: column; /* On empile les champs sur mobile */
                gap: 15px;
            }

            .account-section.modal-main {
                padding: 20px;
            }
        }

    </style>
{% endblock %}

{% block body %}

    <section class=\"user-profile footer-padding\">
        <div class=\"container\">
            <div class=\"d-flex justify-content-between align-items-center mb-4\">
                <h2 class=\"font-bold text-2xl\">Mes adresses</h2>
                <a href=\"{{ path('app_account') }}\" class=\"view text-sm\" style=\"color: #082C6A;\">
                    <i class=\"fas fa-chevron-left\"></i> Retour au compte
                </a>
            </div>

            <div class=\"user-profile-section\">
                <div class=\"user-dashboard\">
                    <div class=\"tab-content nav-content\" id=\"v-pills-tabContent\" style=\"flex: 1 0%;\">
                        <div class=\"tab-pane fade show active\" id=\"v-pills-address\" role=\"tabpanel\">

                            <div class=\"login-section account-section modal-main border-0 shadow-sm\" style=\"border-radius: 20px;\">
                                <div class=\"review-form\">
                                    <div class=\"review-content\">
                                        <h5 class=\"comment-title\">Ajouter une adresse</h5>
{#                                        <div class=\"close-btn\">#}
{#                                            <img src=\"{{ asset('assets/images/homepage-one/close-btn.png') }}\"#}
{#                                                 onclick=\"modalAction('.submit')\" alt=\"close-btn\" class=\"cursor-pointer\">#}
{#                                        </div>#}
                                    </div>

                                    {{ form_start(form) }}
                                    {# Prénom et Nom côte à côte #}
                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name\">
                                            {{ form_widget(form.firstName, {'attr': {'class': 'custom-input', 'placeholder': 'Prénom'}}) }}
                                            {{ form_errors(form.firstName) }}
                                        </div>
                                        <div class=\"review-form-name\">
                                            {{ form_widget(form.lastName, {'attr': {'class': 'custom-input', 'placeholder': 'Nom'}}) }}
                                            {{ form_errors(form.lastName) }}
                                        </div>
                                    </div>

                                    {# Téléphone #}
                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name w-full\">
                                            {{ form_widget(form.phone, {'attr': {'class': 'custom-input', 'placeholder': 'Téléphone (+223...)'}}) }}
                                            {{ form_errors(form.phone) }}
                                        </div>
                                    </div>

                                    {# Entreprise #}
                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name w-full\">
                                            {{ form_widget(form.company, {'attr': {'class': 'custom-input', 'placeholder': 'Entreprise (Optionnel)'}}) }}
                                        </div>
                                    </div>

                                    {# Adresse #}
                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name w-full\">
                                            {{ form_widget(form.address, {'attr': {'class': 'custom-input', 'placeholder': 'Adresse complète (Rue, Porte, Quartier...)'}}) }}
                                            {{ form_errors(form.address) }}
                                        </div>
                                    </div>

                                    {# Ville et Pays #}
                                    <div class=\"account-inner-form\">
                                        <div class=\"review-form-name\">
                                            {{ form_widget(form.city, {'attr': {'class': 'custom-input', 'placeholder': 'Ville'}}) }}
                                            {{ form_errors(form.city) }}
                                        </div>
                                        <div class=\"review-form-name\">
                                            {{ form_widget(form.country, {'attr': {'class': 'custom-input', 'placeholder': 'Pays'}}) }}
                                            {{ form_errors(form.country) }}
                                        </div>
                                    </div>

                                    <div class=\"login-btn text-center mt-6\">
                                        <button type=\"submit\" class=\"btn shop-btn w-full py-4 rounded-xl font-bold transition-all hover:opacity-90\"
                                                style=\"background-color: #082C6A; color: white;\">
                                            Ajouter l'adresse
                                        </button>
                                    </div>
                                    {{ form_end(form) }}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{% endblock %}
", "account/address-add.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/account/address-add.html.twig");
    }
}
