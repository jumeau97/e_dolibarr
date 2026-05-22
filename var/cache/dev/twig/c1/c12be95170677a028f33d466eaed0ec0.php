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

/* register/register_email.html.twig */
class __TwigTemplate_fe45b79669e09116859627bd3bd6c8be extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "register/register_email.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "register/register_email.html.twig"));

        // line 1
        yield "<!DOCTYPE html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <style>
        /* Styles de secours pour les clients mail */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7ff;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            margin-top: 20px;
        }

        .header {
            background: linear-gradient(135deg, #0e2244, #082C6A);
            padding: 40px 20px;
            text-align: center;
            color: #ffffff;
        }

        .content {
            padding: 40px 30px;
            line-height: 1.6;
            color: #333333;
        }

        .footer {
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #999999;
        }

        .button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #082C6A;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 12px;
            font-weight: bold;
            margin-top: 20px;
            box-shadow: 0 4px 10px rgba(15, 57, 162, 0.2);
        }

        .info-box {
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            border: 1px solid #eeeeee;
        }

        .info-item {
            margin-bottom: 10px;
            font-size: 14px;
        }

        .info-label {
            color: #888888;
            font-weight: bold;
            margin-right: 5px;
        }
    </style>
</head>
<body>
<div class=\"container\">
    <div class=\"header\">
        <h1 style=\"margin: 0; font-size: 28px;\">Bienvenue, ";
        // line 79
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 79, $this->source); })()), "getLastName", [], "method", false, false, false, 79), "html", null, true);
        yield " ✨</h1>
        <p style=\"margin-top: 10px; opacity: 0.9;\">Votre aventure shopping commence ici.</p>
    </div>

    <div class=\"content\">
        <h2 style=\"color: #1a1a1a;\">Félicitations pour votre inscription !</h2>
        <p>Nous sommes ravis de vous accueillir sur <strong>Sanfeni</strong>. Votre compte est désormais
            actif et prêt à être utilisé.</p>

        <div class=\"info-box\">
            <div class=\"info-item\">
                <span class=\"info-label\">Identifiant :</span>
                <span style=\"color: #8a3ffc; font-weight: bold;\">";
        // line 91
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 91, $this->source); })()), "getEmail", [], "method", false, false, false, 91), "html", null, true);
        yield "</span>
            </div>
            <div class=\"info-item\">
                <span class=\"info-label\">Accès :</span>
                <span>Utilisez le mot de passe défini lors de l'inscription.</span>
            </div>
        </div>

        <p>Grâce à votre compte, vous pouvez :</p>
        <ul style=\"padding-left: 20px;\">
            <li>Suivre vos commandes en temps réel 🚚</li>
            <li>Enregistrer vos adresses favorites 🏠</li>
            <li>Recevoir des offres personnalisées 🎁</li>
        </ul>

        <div style=\"text-align: center;\">
            <a href=\"\" class=\"button\">Accéder à mon compte</a>
        </div>

        <p style=\"margin-top: 30px; font-size: 14px; color: #666;\">
            Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer cet e-mail.
        </p>
    </div>

    <div class=\"footer\">
        <p>&copy; ";
        // line 116
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate("now", "Y"), "html", null, true);
        yield " Sanfeni. Tous droits réservés.</p>
        <p>Besoin d'aide ? <a href=\"#\" style=\"color: #8a3ffc;\">Contactez notre support</a></p>
    </div>
</div>
</body>
</html>
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
        return "register/register_email.html.twig";
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
        return array (  171 => 116,  143 => 91,  128 => 79,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<!DOCTYPE html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <style>
        /* Styles de secours pour les clients mail */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7ff;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            margin-top: 20px;
        }

        .header {
            background: linear-gradient(135deg, #0e2244, #082C6A);
            padding: 40px 20px;
            text-align: center;
            color: #ffffff;
        }

        .content {
            padding: 40px 30px;
            line-height: 1.6;
            color: #333333;
        }

        .footer {
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #999999;
        }

        .button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #082C6A;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 12px;
            font-weight: bold;
            margin-top: 20px;
            box-shadow: 0 4px 10px rgba(15, 57, 162, 0.2);
        }

        .info-box {
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            border: 1px solid #eeeeee;
        }

        .info-item {
            margin-bottom: 10px;
            font-size: 14px;
        }

        .info-label {
            color: #888888;
            font-weight: bold;
            margin-right: 5px;
        }
    </style>
</head>
<body>
<div class=\"container\">
    <div class=\"header\">
        <h1 style=\"margin: 0; font-size: 28px;\">Bienvenue, {{ user.getLastName() }} ✨</h1>
        <p style=\"margin-top: 10px; opacity: 0.9;\">Votre aventure shopping commence ici.</p>
    </div>

    <div class=\"content\">
        <h2 style=\"color: #1a1a1a;\">Félicitations pour votre inscription !</h2>
        <p>Nous sommes ravis de vous accueillir sur <strong>Sanfeni</strong>. Votre compte est désormais
            actif et prêt à être utilisé.</p>

        <div class=\"info-box\">
            <div class=\"info-item\">
                <span class=\"info-label\">Identifiant :</span>
                <span style=\"color: #8a3ffc; font-weight: bold;\">{{ user.getEmail() }}</span>
            </div>
            <div class=\"info-item\">
                <span class=\"info-label\">Accès :</span>
                <span>Utilisez le mot de passe défini lors de l'inscription.</span>
            </div>
        </div>

        <p>Grâce à votre compte, vous pouvez :</p>
        <ul style=\"padding-left: 20px;\">
            <li>Suivre vos commandes en temps réel 🚚</li>
            <li>Enregistrer vos adresses favorites 🏠</li>
            <li>Recevoir des offres personnalisées 🎁</li>
        </ul>

        <div style=\"text-align: center;\">
            <a href=\"\" class=\"button\">Accéder à mon compte</a>
        </div>

        <p style=\"margin-top: 30px; font-size: 14px; color: #666;\">
            Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer cet e-mail.
        </p>
    </div>

    <div class=\"footer\">
        <p>&copy; {{ \"now\"|date(\"Y\") }} Sanfeni. Tous droits réservés.</p>
        <p>Besoin d'aide ? <a href=\"#\" style=\"color: #8a3ffc;\">Contactez notre support</a></p>
    </div>
</div>
</body>
</html>
", "register/register_email.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/register/register_email.html.twig");
    }
}
