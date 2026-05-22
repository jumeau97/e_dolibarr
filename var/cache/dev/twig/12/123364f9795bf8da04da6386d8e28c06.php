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

/* user/index.html.twig */
class __TwigTemplate_da31bf48b6df0e9208902affddcb0ded extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/index.html.twig"));

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

        yield "Hello UserController!";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
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

        // line 6
        yield "    <!-- Content Wrapper. Contains page content -->
    <div class=\"content-wrapper\">
        <!-- Content Header (Page header) -->
        <section class=\"content-header\">
            <div class=\"container-fluid\">
                <div class=\"row mb-2\">
                    <div class=\"col-sm-6\">
                        <h1>Membre</h1>
                    </div>
                    <div class=\"col-sm-6\">
                        <ol class=\"breadcrumb float-sm-right\">
                            <li class=\"breadcrumb-item\"><a href=\"#\">Accueil</a></li>
                            <li class=\"breadcrumb-item active\">Membre</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <section class=\"content\">
            <div class=\"container-fluid\">
                ";
        // line 26
        yield $this->env->getRuntime('Symfony\UX\TwigComponent\Twig\ComponentRuntime')->render("UserComponent");
        yield "
            </div>
            <!-- /.container-fluid -->
        </section>

";
        // line 32
        yield "<div class=\"modal fade\" id=\"modal-add-user\">
            <div class=\"modal-dialog modal-lg\">
                <div class=\"modal-content\">
                    <div class=\"modal-header bg-primary text-white\">
                        <h5 class=\"modal-title font-weight-bold\">
                            <i class=\"fas fa-user-shield mr-2\"></i> Créer un nouvel utilisateur
                        </h5>
                        <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">
                            <span aria-hidden=\"true\">&times;</span>
                        </button>
                    </div>

                    ";
        // line 45
        yield "                    ";
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 45, $this->source); })()), 'form_start');
        yield "
                    <div class=\"modal-body\">


                        <h6 class=\"text-primary font-weight-bold mb-3 border-bottom pb-2\">
                            <i class=\"fas fa-user mr-2\"></i> Informations Personnelles
                        </h6>
                        <div class=\"row\">
                            <div class=\"col-md-5 form-group\">
                                <label>Prénom</label>
                                ";
        // line 55
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 55, $this->source); })()), "firstName", [], "any", false, false, false, 55), 'widget', ["attr" => ["class" => "form-control form-control-sm"]]);
        yield "
                            </div>
                            <div class=\"col-md-5 form-group\">
                                <label>Nom</label>
                                ";
        // line 59
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 59, $this->source); })()), "lastName", [], "any", false, false, false, 59), 'widget', ["attr" => ["class" => "form-control form-control-sm"]]);
        yield "
                            </div>
                            <div class=\"col-md-2 form-group\">
                                <label>Sexe</label>
                                ";
        // line 63
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 63, $this->source); })()), "sexe", [], "any", false, false, false, 63), 'widget', ["attr" => ["class" => "form-control form-control-sm"]]);
        yield "
                            </div>
                        </div>


                        <h6 class=\"text-primary font-weight-bold mt-3 mb-3 border-bottom pb-2\">
                            <i class=\"fas fa-lock mr-2\"></i> Compte & Sécurité
                        </h6>
                        <div class=\"row\">
                            <div class=\"col-md-6 form-group\">
                                <label>E-mail (Identifiant)</label>
                                <div class=\"input-group input-group-sm\">
                                    <div class=\"input-group-prepend\">
                                        <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>
                                    </div>
                                    ";
        // line 78
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 78, $this->source); })()), "email", [], "any", false, false, false, 78), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
                                </div>
                            </div>
                            <div class=\"col-md-6 form-group\">
                                <label>Téléphone</label>
                                <div class=\"input-group input-group-sm\">
                                    <div class=\"input-group-prepend\">
                                        <span class=\"input-group-text\"><i class=\"fas fa-phone\"></i></span>
                                    </div>
                                    ";
        // line 87
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 87, $this->source); })()), "phoneNumber", [], "any", false, false, false, 87), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
                                </div>
                            </div>
                        </div>
                        <div class=\"row\">
";
        // line 96
        yield "                            <div class=\"col-md-6 form-group\">
                                <label>Rôle</label>
                                ";
        // line 98
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 98, $this->source); })()), "roles", [], "any", false, false, false, 98), 'widget', ["attr" => ["class" => "form-control form-control-sm select2"]]);
        yield "
                            </div>
                        </div>

                        ";
        // line 103
        yield "                        <h6 class=\"text-primary font-weight-bold mt-3 mb-3 border-bottom pb-2\">
                            <i class=\"fas fa-briefcase mr-2\"></i> Informations Professionnelles
                        </h6>
                        <div class=\"row\">
                            <div class=\"col-md-4 form-group\">
                                <label>Profession</label>
                                ";
        // line 109
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 109, $this->source); })()), "profession", [], "any", false, false, false, 109), 'widget', ["attr" => ["class" => "form-control form-control-sm"]]);
        yield "
                            </div>
                            <div class=\"col-md-4 form-group\">
                                <label>Domaine</label>
                                ";
        // line 113
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 113, $this->source); })()), "domaine", [], "any", false, false, false, 113), 'widget', ["attr" => ["class" => "form-control form-control-sm"]]);
        yield "
                            </div>
                            <div class=\"col-md-4 form-group\">
                                <label>Niveau</label>
                                ";
        // line 117
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 117, $this->source); })()), "niveau", [], "any", false, false, false, 117), 'widget', ["attr" => ["class" => "form-control form-control-sm"]]);
        yield "
                            </div>
                        </div>
";
        // line 124
        yield "
                    </div>

                    <div class=\"modal-footer justify-content-between bg-light\">
                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" data-dismiss=\"modal\">Annuler</button>
                        <button type=\"submit\" class=\"btn btn-sm btn-primary px-4 shadow-sm\">
                            <i class=\"fas fa-save mr-1\"></i> Créer l'utilisateur
                        </button>
                    </div>
                    ";
        // line 133
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 133, $this->source); })()), 'form_end');
        yield "
                </div>
            </div>
        </div>
    </div>
    <!-- /.content-wrapper -->
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
        return "user/index.html.twig";
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
        return array (  260 => 133,  249 => 124,  243 => 117,  236 => 113,  229 => 109,  221 => 103,  214 => 98,  210 => 96,  202 => 87,  190 => 78,  172 => 63,  165 => 59,  158 => 55,  144 => 45,  130 => 32,  122 => 26,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello UserController!{% endblock %}

{% block body %}
    <!-- Content Wrapper. Contains page content -->
    <div class=\"content-wrapper\">
        <!-- Content Header (Page header) -->
        <section class=\"content-header\">
            <div class=\"container-fluid\">
                <div class=\"row mb-2\">
                    <div class=\"col-sm-6\">
                        <h1>Membre</h1>
                    </div>
                    <div class=\"col-sm-6\">
                        <ol class=\"breadcrumb float-sm-right\">
                            <li class=\"breadcrumb-item\"><a href=\"#\">Accueil</a></li>
                            <li class=\"breadcrumb-item active\">Membre</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <section class=\"content\">
            <div class=\"container-fluid\">
                {{ component('UserComponent') }}
            </div>
            <!-- /.container-fluid -->
        </section>

{#        ------------------- form -------------------#}
        <div class=\"modal fade\" id=\"modal-add-user\">
            <div class=\"modal-dialog modal-lg\">
                <div class=\"modal-content\">
                    <div class=\"modal-header bg-primary text-white\">
                        <h5 class=\"modal-title font-weight-bold\">
                            <i class=\"fas fa-user-shield mr-2\"></i> Créer un nouvel utilisateur
                        </h5>
                        <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">
                            <span aria-hidden=\"true\">&times;</span>
                        </button>
                    </div>

                    {# On commence le formulaire #}
                    {{ form_start(userForm) }}
                    <div class=\"modal-body\">


                        <h6 class=\"text-primary font-weight-bold mb-3 border-bottom pb-2\">
                            <i class=\"fas fa-user mr-2\"></i> Informations Personnelles
                        </h6>
                        <div class=\"row\">
                            <div class=\"col-md-5 form-group\">
                                <label>Prénom</label>
                                {{ form_widget(userForm.firstName, {'attr': {'class': 'form-control form-control-sm'}}) }}
                            </div>
                            <div class=\"col-md-5 form-group\">
                                <label>Nom</label>
                                {{ form_widget(userForm.lastName, {'attr': {'class': 'form-control form-control-sm'}}) }}
                            </div>
                            <div class=\"col-md-2 form-group\">
                                <label>Sexe</label>
                                {{ form_widget(userForm.sexe, {'attr': {'class': 'form-control form-control-sm'}}) }}
                            </div>
                        </div>


                        <h6 class=\"text-primary font-weight-bold mt-3 mb-3 border-bottom pb-2\">
                            <i class=\"fas fa-lock mr-2\"></i> Compte & Sécurité
                        </h6>
                        <div class=\"row\">
                            <div class=\"col-md-6 form-group\">
                                <label>E-mail (Identifiant)</label>
                                <div class=\"input-group input-group-sm\">
                                    <div class=\"input-group-prepend\">
                                        <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>
                                    </div>
                                    {{ form_widget(userForm.email, {'attr': {'class': 'form-control'}}) }}
                                </div>
                            </div>
                            <div class=\"col-md-6 form-group\">
                                <label>Téléphone</label>
                                <div class=\"input-group input-group-sm\">
                                    <div class=\"input-group-prepend\">
                                        <span class=\"input-group-text\"><i class=\"fas fa-phone\"></i></span>
                                    </div>
                                    {{ form_widget(userForm.phoneNumber, {'attr': {'class': 'form-control'}}) }}
                                </div>
                            </div>
                        </div>
                        <div class=\"row\">
{#                            <div class=\"col-md-6 form-group\">#}
{#                                <label>Mot de passe</label>#}
{#                                {{ form_widget(userForm.plainPassword, {'attr': {'class': 'form-control form-control-sm'}}) }}#}
{#                            </div>#}
                            <div class=\"col-md-6 form-group\">
                                <label>Rôle</label>
                                {{ form_widget(userForm.roles, {'attr': {'class': 'form-control form-control-sm select2'}}) }}
                            </div>
                        </div>

                        {# --- SECTION 3 : PROFIL PRO --- #}
                        <h6 class=\"text-primary font-weight-bold mt-3 mb-3 border-bottom pb-2\">
                            <i class=\"fas fa-briefcase mr-2\"></i> Informations Professionnelles
                        </h6>
                        <div class=\"row\">
                            <div class=\"col-md-4 form-group\">
                                <label>Profession</label>
                                {{ form_widget(userForm.profession, {'attr': {'class': 'form-control form-control-sm'}}) }}
                            </div>
                            <div class=\"col-md-4 form-group\">
                                <label>Domaine</label>
                                {{ form_widget(userForm.domaine, {'attr': {'class': 'form-control form-control-sm'}}) }}
                            </div>
                            <div class=\"col-md-4 form-group\">
                                <label>Niveau</label>
                                {{ form_widget(userForm.niveau, {'attr': {'class': 'form-control form-control-sm'}}) }}
                            </div>
                        </div>
{#                        <div class=\"form-group\">#}
{#                            <label>Bio / Profil (Optionnel)</label>#}
{#                            {{ form_widget(userForm.profil, {'attr': {'class': 'form-control form-control-sm', 'rows': '2'}}) }}#}
{#                        </div>#}

                    </div>

                    <div class=\"modal-footer justify-content-between bg-light\">
                        <button type=\"button\" class=\"btn btn-sm btn-secondary\" data-dismiss=\"modal\">Annuler</button>
                        <button type=\"submit\" class=\"btn btn-sm btn-primary px-4 shadow-sm\">
                            <i class=\"fas fa-save mr-1\"></i> Créer l'utilisateur
                        </button>
                    </div>
                    {{ form_end(userForm) }}
                </div>
            </div>
        </div>
    </div>
    <!-- /.content-wrapper -->
{% endblock %}
", "user/index.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/user/index.html.twig");
    }
}
