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

/* register/signup.html.twig */
class __TwigTemplate_c8a764ac1b3d26df540f4529d304eb56 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "register/signup.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "register/signup.html.twig"));

        $this->parent = $this->load("base.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
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

        // line 4
        yield "    <style>
        /* Carte principale */
        .auth-card {
            border-radius: 24px !important;
            border: none;
        }

        /* Inputs personnalisés */
        .custom-input {
            border: 2px solid #f0f0f0 !important;
            border-radius: 15px !important;
            height: 60px !important;
            font-size: 1.1rem !important;
            padding-left: 20px !important;
            transition: all 0.3s ease;
        }

        .custom-input:focus {
            border-color: var(--wb-purple) !important;
            box-shadow: 0 0 0 4px rgba(138, 63, 252, 0.1) !important;
        }

        /* Floating labels (le texte qui monte) */
        .form-floating > label {
            padding-left: 20px;
            color: #999;
        }

        /* Bouton d'inscription */
        .btn-wb-auth {
            background-color: var(--wb-purple);
            color: white;
            border: none;
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .btn-wb-auth:hover {
            background-color: var(--wb-purple-hover);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(138, 63, 252, 0.2);
        }

        /* Typographie */
        .fs-2 {
            font-size: 2rem !important;
        }

        .text-primary {
            color: var(--wb-purple) !important;
        }

        /* Style des champs de mot de passe */
        .custom-input {
            height: 65px !important; /* Plus haut pour plus de confort */
            font-size: 1.2rem !important; /* Texte plus grand */
            border: 2px solid #eee !important;
            border-radius: 15px !important;
        }

        /* Gestion de l'erreur Symfony si les mots de passe ne correspondent pas */
        .invalid-feedback, .form-error-message {
            color: #dc3545;
            font-size: 0.95rem;
            font-weight: 600;
            margin-top: 5px;
            padding-left: 10px;
        }

        /* Animation de focus violette */
        .custom-input:focus {
            border-color: #FFA500FF !important;
            box-shadow: 0 0 0 4px rgba(138, 63, 252, 0.15) !important;
        }

        /* Mobile */
        @media (max-width: 576px) {
            .auth-card {
                padding: 25px !important;
            }

            .fs-2 {
                font-size: 1.5rem !important;
            }
        }
    </style>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 92
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

        // line 93
        yield "    <!--------------- login-section--------------->

    ";
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
        yield "
    ";
        // line 125
        yield "    ";
        // line 126
        yield "    ";
        // line 127
        yield "    ";
        // line 128
        yield "
    ";
        // line 130
        yield "
    ";
        // line 132
        yield "    ";
        // line 133
        yield "    ";
        // line 134
        yield "    ";
        // line 135
        yield "    ";
        // line 136
        yield "
    ";
        // line 137
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 137, $this->source); })()), 'form_start');
        yield "
    <section class=\"login-registration py-5 bg-light min-vh-100 d-flex align-items-center\">
        <div class=\"container\">
            <div class=\"row justify-content-center\">
                <div class=\"col-md-8 col-lg-6\">
                    <div class=\"auth-card shadow-sm bg-white p-4 p-md-5 rounded-4\">
                        <div class=\"text-center mb-4\">
                            <h2 class=\"fw-bold fs-2 mb-2\">Créez votre compte</h2>
                            <p class=\"text-muted\">Rejoignez-nous pour une expérience shopping unique</p>
                        </div>

                        <div class=\"row g-3\">
                            ";
        // line 150
        yield "                            <div class=\"col-sm-6\">
                                <div class=\"form-floating mb-3\">
                                    ";
        // line 152
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 152, $this->source); })()), "firstName", [], "any", false, false, false, 152), 'widget', ["attr" => ["class" => "form-control custom-input", "placeholder" => "Prénom"]]);
        yield "
                                    <label for=\"";
        // line 153
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 153, $this->source); })()), "firstName", [], "any", false, false, false, 153), "vars", [], "any", false, false, false, 153), "id", [], "any", false, false, false, 153), "html", null, true);
        yield "\">Prénom</label>
                                </div>
                            </div>
                            <div class=\"col-sm-6\">
                                <div class=\"form-floating mb-3\">
                                    ";
        // line 158
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 158, $this->source); })()), "lastName", [], "any", false, false, false, 158), 'widget', ["attr" => ["class" => "form-control custom-input", "placeholder" => "Nom"]]);
        yield "
                                    <label for=\"";
        // line 159
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 159, $this->source); })()), "lastName", [], "any", false, false, false, 159), "vars", [], "any", false, false, false, 159), "id", [], "any", false, false, false, 159), "html", null, true);
        yield "\">Nom</label>
                                </div>
                            </div>

                            ";
        // line 164
        yield "                            <div class=\"col-12\">
                                <div class=\"form-floating mb-3\">
                                    ";
        // line 166
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 166, $this->source); })()), "email", [], "any", false, false, false, 166), 'widget', ["attr" => ["class" => "form-control custom-input", "placeholder" => "Email"]]);
        yield "
                                    <label for=\"";
        // line 167
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 167, $this->source); })()), "email", [], "any", false, false, false, 167), "vars", [], "any", false, false, false, 167), "id", [], "any", false, false, false, 167), "html", null, true);
        yield "\">Email</label>
                                </div>
                            </div>

                            ";
        // line 172
        yield "                            <div class=\"col-12\">
                                <div class=\"form-floating mb-3\">
                                    <input type=\"tel\" id=\"phone\" class=\"form-control custom-input\"
                                           placeholder=\"Numéro portable\">
                                    <label for=\"phone\">Numéro portable</label>
                                </div>
                            </div>

                            ";
        // line 181
        yield "                            ";
        // line 182
        yield "                            <div class=\"col-12\">
                                <div class=\"form-floating mb-3\">
                                    ";
        // line 184
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 184, $this->source); })()), "password", [], "any", false, false, false, 184), "first", [], "any", false, false, false, 184), 'widget', ["attr" => ["class" => "form-control custom-input", "placeholder" => "Mot de passe"]]);
        yield "
                                    <label for=\"";
        // line 185
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 185, $this->source); })()), "password", [], "any", false, false, false, 185), "first", [], "any", false, false, false, 185), "vars", [], "any", false, false, false, 185), "id", [], "any", false, false, false, 185), "html", null, true);
        yield "\">Mot de passe</label>
                                    ";
        // line 186
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 186, $this->source); })()), "password", [], "any", false, false, false, 186), "first", [], "any", false, false, false, 186), 'errors');
        yield "
                                </div>
                            </div>

                            ";
        // line 191
        yield "                            <div class=\"col-12\">
                                <div class=\"form-floating mb-4\">
                                    ";
        // line 193
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 193, $this->source); })()), "password", [], "any", false, false, false, 193), "second", [], "any", false, false, false, 193), 'widget', ["attr" => ["class" => "form-control custom-input", "placeholder" => "Confirmation"]]);
        yield "
                                    <label for=\"";
        // line 194
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 194, $this->source); })()), "password", [], "any", false, false, false, 194), "second", [], "any", false, false, false, 194), "vars", [], "any", false, false, false, 194), "id", [], "any", false, false, false, 194), "html", null, true);
        yield "\">Confirmez le mot de passe</label>
                                </div>
                            </div>

                            ";
        // line 199
        yield "                            <div class=\"col-12 text-center\">
                                ";
        // line 200
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 200, $this->source); })()), "save", [], "any", false, false, false, 200), 'widget', ["label" => "Créer mon compte", "attr" => ["class" => "btn btn-wb-auth w-100 py-3 mb-3 fs-5 fw-bold"]]);
        // line 203
        yield "

                                <p class=\"mb-0 text-muted\">
                                    Déjà un compte ?
                                    <a href=\"";
        // line 207
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
        yield "\" class=\"text-primary fw-bold text-decoration-none\">Se
                                        connecter</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    ";
        // line 217
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 217, $this->source); })()), 'form_end');
        yield "
    <!--------------- login-section-end --------------->
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
        return "register/signup.html.twig";
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
        return array (  399 => 217,  386 => 207,  380 => 203,  378 => 200,  375 => 199,  368 => 194,  364 => 193,  360 => 191,  353 => 186,  349 => 185,  345 => 184,  341 => 182,  339 => 181,  329 => 172,  322 => 167,  318 => 166,  314 => 164,  307 => 159,  303 => 158,  295 => 153,  291 => 152,  287 => 150,  272 => 137,  269 => 136,  267 => 135,  265 => 134,  263 => 133,  261 => 132,  258 => 130,  255 => 128,  253 => 127,  251 => 126,  249 => 125,  246 => 123,  244 => 122,  242 => 121,  240 => 120,  238 => 119,  236 => 118,  234 => 117,  232 => 116,  230 => 115,  228 => 114,  226 => 113,  224 => 112,  222 => 111,  220 => 110,  218 => 109,  216 => 108,  214 => 107,  212 => 106,  210 => 105,  208 => 104,  206 => 103,  204 => 102,  202 => 101,  200 => 100,  198 => 99,  196 => 98,  194 => 97,  192 => 96,  188 => 93,  175 => 92,  77 => 4,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block stylesheets %}
    <style>
        /* Carte principale */
        .auth-card {
            border-radius: 24px !important;
            border: none;
        }

        /* Inputs personnalisés */
        .custom-input {
            border: 2px solid #f0f0f0 !important;
            border-radius: 15px !important;
            height: 60px !important;
            font-size: 1.1rem !important;
            padding-left: 20px !important;
            transition: all 0.3s ease;
        }

        .custom-input:focus {
            border-color: var(--wb-purple) !important;
            box-shadow: 0 0 0 4px rgba(138, 63, 252, 0.1) !important;
        }

        /* Floating labels (le texte qui monte) */
        .form-floating > label {
            padding-left: 20px;
            color: #999;
        }

        /* Bouton d'inscription */
        .btn-wb-auth {
            background-color: var(--wb-purple);
            color: white;
            border: none;
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .btn-wb-auth:hover {
            background-color: var(--wb-purple-hover);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(138, 63, 252, 0.2);
        }

        /* Typographie */
        .fs-2 {
            font-size: 2rem !important;
        }

        .text-primary {
            color: var(--wb-purple) !important;
        }

        /* Style des champs de mot de passe */
        .custom-input {
            height: 65px !important; /* Plus haut pour plus de confort */
            font-size: 1.2rem !important; /* Texte plus grand */
            border: 2px solid #eee !important;
            border-radius: 15px !important;
        }

        /* Gestion de l'erreur Symfony si les mots de passe ne correspondent pas */
        .invalid-feedback, .form-error-message {
            color: #dc3545;
            font-size: 0.95rem;
            font-weight: 600;
            margin-top: 5px;
            padding-left: 10px;
        }

        /* Animation de focus violette */
        .custom-input:focus {
            border-color: #FFA500FF !important;
            box-shadow: 0 0 0 4px rgba(138, 63, 252, 0.15) !important;
        }

        /* Mobile */
        @media (max-width: 576px) {
            .auth-card {
                padding: 25px !important;
            }

            .fs-2 {
                font-size: 1.5rem !important;
            }
        }
    </style>
{% endblock %}
{% block body %}
    <!--------------- login-section--------------->

    {#    {{ form_start(form) }} #}
    {#    <section class=\"login account footer-padding\"> #}
    {#        <div class=\"container\"> #}
    {#            <div class=\"login-section account-section\"> #}
    {#                <div class=\"review-form\"> #}
    {#                    <h5 class=\"comment-title\">Créez votre compte</h5> #}
    {#                    <div class=\" account-inner-form\"> #}
    {#                        <div class=\"review-form-name\"> #}
    {#                            {{ form_widget(form.firstName) }} #}
    {#                        </div> #}
    {#                        <div class=\"review-form-name\"> #}
    {#                            #}{#                            <input type=\"text\" id=\"lname\" class=\"form-control\" placeholder=\"Nom\"> #}
    {#                            {{ form_widget(form.lastName) }} #}
    {#                        </div> #}
    {#                    </div> #}
    {#                    <div class=\" account-inner-form\"> #}
    {#                        <div class=\"review-form-name\"> #}
    {#                            {{ form_widget(form.email) }} #}
    {#                        </div> #}
    {#                        <div class=\"review-form-name\"> #}
    {#                            <input type=\"tel\" id=\"phone\" class=\"form-control\" placeholder=\"Numéro portable\"> #}
    {#                        </div> #}
    {#                    </div> #}
    {#                    <div class=\" account-inner-form\"> #}
    {#                        <div class=\"review-form-name\"> #}
    {#                            {{ form_widget(form.password) }} #}
    {#                        </div> #}
    {#                    </div> #}

    {#                    <div class=\"login-btn text-center\"> #}
    {#                        {{ form_widget(form.save, { 'label': 'Créer un compte' }) }} #}
    {#                        <span class=\"shop-account\">J'ai dejà un compte ?<a #}
    {#                                href=\"{{ path('app_login') }}\">Se connecter</a></span> #}

    {#                    </div> #}

    {#                </div> #}
    {#            </div> #}
    {#        </div> #}
    {#    </section> #}
    {#    {{ form_end(form) }} #}

    {{ form_start(form) }}
    <section class=\"login-registration py-5 bg-light min-vh-100 d-flex align-items-center\">
        <div class=\"container\">
            <div class=\"row justify-content-center\">
                <div class=\"col-md-8 col-lg-6\">
                    <div class=\"auth-card shadow-sm bg-white p-4 p-md-5 rounded-4\">
                        <div class=\"text-center mb-4\">
                            <h2 class=\"fw-bold fs-2 mb-2\">Créez votre compte</h2>
                            <p class=\"text-muted\">Rejoignez-nous pour une expérience shopping unique</p>
                        </div>

                        <div class=\"row g-3\">
                            {# Prénom et Nom #}
                            <div class=\"col-sm-6\">
                                <div class=\"form-floating mb-3\">
                                    {{ form_widget(form.firstName, {'attr': {'class': 'form-control custom-input', 'placeholder': 'Prénom'}}) }}
                                    <label for=\"{{ form.firstName.vars.id }}\">Prénom</label>
                                </div>
                            </div>
                            <div class=\"col-sm-6\">
                                <div class=\"form-floating mb-3\">
                                    {{ form_widget(form.lastName, {'attr': {'class': 'form-control custom-input', 'placeholder': 'Nom'}}) }}
                                    <label for=\"{{ form.lastName.vars.id }}\">Nom</label>
                                </div>
                            </div>

                            {# Email #}
                            <div class=\"col-12\">
                                <div class=\"form-floating mb-3\">
                                    {{ form_widget(form.email, {'attr': {'class': 'form-control custom-input', 'placeholder': 'Email'}}) }}
                                    <label for=\"{{ form.email.vars.id }}\">Email</label>
                                </div>
                            </div>

                            {# Téléphone (Champ libre) #}
                            <div class=\"col-12\">
                                <div class=\"form-floating mb-3\">
                                    <input type=\"tel\" id=\"phone\" class=\"form-control custom-input\"
                                           placeholder=\"Numéro portable\">
                                    <label for=\"phone\">Numéro portable</label>
                                </div>
                            </div>

                            {# Mot de passe #}
                            {# Mot de passe #}
                            <div class=\"col-12\">
                                <div class=\"form-floating mb-3\">
                                    {{ form_widget(form.password.first, {'attr': {'class': 'form-control custom-input', 'placeholder': 'Mot de passe'}}) }}
                                    <label for=\"{{ form.password.first.vars.id }}\">Mot de passe</label>
                                    {{ form_errors(form.password.first) }}
                                </div>
                            </div>

                            {# Confirmation du Mot de passe #}
                            <div class=\"col-12\">
                                <div class=\"form-floating mb-4\">
                                    {{ form_widget(form.password.second, {'attr': {'class': 'form-control custom-input', 'placeholder': 'Confirmation'}}) }}
                                    <label for=\"{{ form.password.second.vars.id }}\">Confirmez le mot de passe</label>
                                </div>
                            </div>

                            {# Bouton et Lien #}
                            <div class=\"col-12 text-center\">
                                {{ form_widget(form.save, {
                                    'label': 'Créer mon compte',
                                    'attr': {'class': 'btn btn-wb-auth w-100 py-3 mb-3 fs-5 fw-bold'}
                                }) }}

                                <p class=\"mb-0 text-muted\">
                                    Déjà un compte ?
                                    <a href=\"{{ path('app_login') }}\" class=\"text-primary fw-bold text-decoration-none\">Se
                                        connecter</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{ form_end(form) }}
    <!--------------- login-section-end --------------->
{% endblock %}
", "register/signup.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/register/signup.html.twig");
    }
}
