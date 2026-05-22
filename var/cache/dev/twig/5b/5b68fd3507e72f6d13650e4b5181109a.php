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

/* register/register_shop_email.html.twig */
class __TwigTemplate_4da1ebe00db61e84d8972514a0d32414 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "register/register_shop_email.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "register/register_shop_email.html.twig"));

        // line 1
        yield "<!DOCTYPE html>
<html lang=\"fr\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Bienvenue sur SANFENI</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            background-color: #f4f7ff;
            font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
        }

        table {
            border-collapse: collapse;
        }

        .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .header {
            background: linear-gradient(135deg, #0a216c, #082C6A);
            padding: 45px 30px;
            text-align: center;
            color: #ffffff;
        }

        .content {
            padding: 40px 30px;
            color: #333333;
            line-height: 1.6;
        }

        .credentials-box {
            background-color: #f8f9fa;
            border: 2px dashed #082C6A;
            border-radius: 15px;
            padding: 25px;
            margin: 25px 0;
        }

        .label {
            color: #888888;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: block;
            margin-bottom: 5px;
        }

        .value {
            font-family: 'Courier New', Courier, monospace;
            font-size: 18px;
            color: #1a1a1a;
            font-weight: bold;
        }

        .btn {
            display: inline-block;
            padding: 16px 35px;
            background-color: #082C6A;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 12px;
            font-weight: bold;
            font-size: 16px;
            margin-top: 20px;
        }

        .footer-info {
            background-color: #fafafa;
            padding: 35px 30px;
            border-top: 1px solid #eeeeee;
        }

        .footer-title {
            color: #1a1a1a;
            font-size: 15px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 15px;
            display: block;
        }

        .contact-link {
            color: #082C6A;
            text-decoration: none;
            font-weight: 600;
        }

        @media only screen and (max-width: 480px) {
            .col {
                display: block !important;
                width: 100% !important;
                padding: 10px 0 !important;
            }
        }
    </style>
</head>
<body>
<div class=\"container\">
    <div class=\"header\">
        <h1 style=\"margin: 0; font-size: 24px;\">
            ";
        // line 113
        if (CoreExtension::inFilter("ROLE_ADMIN", CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 113, $this->source); })()), "roles", [], "any", false, false, false, 113))) {
            // line 114
            yield "                Accès Administrateur Sanfeni
            ";
        } elseif (CoreExtension::inFilter("ROLE_SHOP_PROPERTY", CoreExtension::getAttribute($this->env, $this->source,         // line 115
(isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 115, $this->source); })()), "roles", [], "any", false, false, false, 115))) {
            // line 116
            yield "                Bienvenue, Propriétaire !
            ";
        } else {
            // line 118
            yield "                Accès Gestionnaire Boutique
            ";
        }
        // line 120
        yield "        </h1>
        <p style=\"margin: 10px 0 0; opacity: 0.9;\">
            ";
        // line 122
        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 122, $this->source); })()), "getShop", [], "method", false, false, false, 122)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 123
            yield "                Boutique : <strong>";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 123, $this->source); })()), "getShop", [], "method", false, false, false, 123), "getName", [], "method", false, false, false, 123), "html", null, true);
            yield "</strong>
            ";
        } else {
            // line 125
            yield "                Plateforme Administrative <strong>SANFENI</strong>
            ";
        }
        // line 127
        yield "        </p>
    </div>

    <div class=\"content\">
        <p style=\"font-size: 16px;\">Bonjour <strong>";
        // line 131
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 131, $this->source); })()), "firstName", [], "any", false, false, false, 131), "html", null, true);
        yield "</strong>,</p>

        <p>
            ";
        // line 134
        if (CoreExtension::inFilter("ROLE_ADMIN", CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 134, $this->source); })()), "roles", [], "any", false, false, false, 134))) {
            // line 135
            yield "                Votre compte administrateur a été créé. Vous avez désormais un contrôle total sur la gestion de la marketplace, des utilisateurs et des boutiques.
            ";
        } elseif (CoreExtension::inFilter("ROLE_SHOP_PROPERTY", CoreExtension::getAttribute($this->env, $this->source,         // line 136
(isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 136, $this->source); })()), "roles", [], "any", false, false, false, 136))) {
            // line 137
            yield "                Félicitations ! Votre espace propriétaire est prêt. Vous pouvez dès maintenant configurer votre boutique, ajouter vos produits et suivre vos revenus.
            ";
        } else {
            // line 139
            yield "                Vous avez été ajouté en tant que gestionnaire de boutique. Vous pouvez maintenant gérer les stocks, traiter les commandes et répondre aux clients.
            ";
        }
        // line 141
        yield "        </p>

        <div class=\"credentials-box\">
            <span class=\"label\">Identifiant (Email) :</span>
            <span class=\"value\">";
        // line 145
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 145, $this->source); })()), "email", [], "any", false, false, false, 145), "html", null, true);
        yield "</span>
            <div style=\"margin-top: 15px;\"></div>
            <span class=\"label\">Mot de passe provisoire :</span>
            <span class=\"value\">";
        // line 148
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["plainPassword"]) || array_key_exists("plainPassword", $context) ? $context["plainPassword"] : (function () { throw new RuntimeError('Variable "plainPassword" does not exist.', 148, $this->source); })()), "html", null, true);
        yield "</span>
        </div>

        <p style=\"font-size: 13px; color: #d9534f; font-style: italic;\">
            ⚠️ Par sécurité, merci de modifier ce mot de passe dès votre première connexion.
        </p>

        <div style=\"text-align: center; margin-top: 30px;\">
            <a href=\"";
        // line 156
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getUrl("app_login");
        yield "\" class=\"btn\">Accéder à mon espace</a>
        </div>
    </div>

    <div class=\"footer-info\">
        <span class=\"footer-title\">Assistance & Marketplace</span>

        <table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">
            <tr>
                <td class=\"col\" width=\"50%\" style=\"vertical-align: top; padding-right: 10px;\">
                    <p style=\"margin: 0; font-size: 14px; color: #666;\">
                        <strong style=\"color: #082C6A;\">📍 Siège Social</strong><br>
                        Immeuble BAMA<br>
                        Hamdallaye ACI, Bamako, Mali
                    </p>
                </td>
                <td class=\"col\" width=\"50%\" style=\"vertical-align: top; padding-left: 10px;\">
                    <p style=\"margin: 0; font-size: 14px; color: #666;\">
                        <strong style=\"color: #082C6A;\">✉️ Support Partenaires</strong><br>
                        Tél : +223 74 74 17 45<br>
                        Email : <a href=\"mailto:support@sanfeni.com\" class=\"contact-link\">contact@sanfeni.com</a>
                    </p>
                </td>
            </tr>
        </table>

        <div style=\"margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;\">
            <p style=\"margin: 0; font-size: 12px; color: #999;\">
                &copy; ";
        // line 184
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate("now", "Y"), "html", null, true);
        yield " <strong>SANFENI</strong><br>
                Espace Business - Partenaire de votre croissance.
            </p>
        </div>
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
        return "register/register_shop_email.html.twig";
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
        return array (  274 => 184,  243 => 156,  232 => 148,  226 => 145,  220 => 141,  216 => 139,  212 => 137,  210 => 136,  207 => 135,  205 => 134,  199 => 131,  193 => 127,  189 => 125,  183 => 123,  181 => 122,  177 => 120,  173 => 118,  169 => 116,  167 => 115,  164 => 114,  162 => 113,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<!DOCTYPE html>
<html lang=\"fr\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Bienvenue sur SANFENI</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            background-color: #f4f7ff;
            font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
        }

        table {
            border-collapse: collapse;
        }

        .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .header {
            background: linear-gradient(135deg, #0a216c, #082C6A);
            padding: 45px 30px;
            text-align: center;
            color: #ffffff;
        }

        .content {
            padding: 40px 30px;
            color: #333333;
            line-height: 1.6;
        }

        .credentials-box {
            background-color: #f8f9fa;
            border: 2px dashed #082C6A;
            border-radius: 15px;
            padding: 25px;
            margin: 25px 0;
        }

        .label {
            color: #888888;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: block;
            margin-bottom: 5px;
        }

        .value {
            font-family: 'Courier New', Courier, monospace;
            font-size: 18px;
            color: #1a1a1a;
            font-weight: bold;
        }

        .btn {
            display: inline-block;
            padding: 16px 35px;
            background-color: #082C6A;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 12px;
            font-weight: bold;
            font-size: 16px;
            margin-top: 20px;
        }

        .footer-info {
            background-color: #fafafa;
            padding: 35px 30px;
            border-top: 1px solid #eeeeee;
        }

        .footer-title {
            color: #1a1a1a;
            font-size: 15px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 15px;
            display: block;
        }

        .contact-link {
            color: #082C6A;
            text-decoration: none;
            font-weight: 600;
        }

        @media only screen and (max-width: 480px) {
            .col {
                display: block !important;
                width: 100% !important;
                padding: 10px 0 !important;
            }
        }
    </style>
</head>
<body>
<div class=\"container\">
    <div class=\"header\">
        <h1 style=\"margin: 0; font-size: 24px;\">
            {% if 'ROLE_ADMIN' in user.roles %}
                Accès Administrateur Sanfeni
            {% elseif 'ROLE_SHOP_PROPERTY' in user.roles %}
                Bienvenue, Propriétaire !
            {% else %}
                Accès Gestionnaire Boutique
            {% endif %}
        </h1>
        <p style=\"margin: 10px 0 0; opacity: 0.9;\">
            {% if user.getShop() %}
                Boutique : <strong>{{ user.getShop().getName() }}</strong>
            {% else %}
                Plateforme Administrative <strong>SANFENI</strong>
            {% endif %}
        </p>
    </div>

    <div class=\"content\">
        <p style=\"font-size: 16px;\">Bonjour <strong>{{ user.firstName }}</strong>,</p>

        <p>
            {% if 'ROLE_ADMIN' in user.roles %}
                Votre compte administrateur a été créé. Vous avez désormais un contrôle total sur la gestion de la marketplace, des utilisateurs et des boutiques.
            {% elseif 'ROLE_SHOP_PROPERTY' in user.roles %}
                Félicitations ! Votre espace propriétaire est prêt. Vous pouvez dès maintenant configurer votre boutique, ajouter vos produits et suivre vos revenus.
            {% else %}
                Vous avez été ajouté en tant que gestionnaire de boutique. Vous pouvez maintenant gérer les stocks, traiter les commandes et répondre aux clients.
            {% endif %}
        </p>

        <div class=\"credentials-box\">
            <span class=\"label\">Identifiant (Email) :</span>
            <span class=\"value\">{{ user.email }}</span>
            <div style=\"margin-top: 15px;\"></div>
            <span class=\"label\">Mot de passe provisoire :</span>
            <span class=\"value\">{{ plainPassword }}</span>
        </div>

        <p style=\"font-size: 13px; color: #d9534f; font-style: italic;\">
            ⚠️ Par sécurité, merci de modifier ce mot de passe dès votre première connexion.
        </p>

        <div style=\"text-align: center; margin-top: 30px;\">
            <a href=\"{{ url('app_login') }}\" class=\"btn\">Accéder à mon espace</a>
        </div>
    </div>

    <div class=\"footer-info\">
        <span class=\"footer-title\">Assistance & Marketplace</span>

        <table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">
            <tr>
                <td class=\"col\" width=\"50%\" style=\"vertical-align: top; padding-right: 10px;\">
                    <p style=\"margin: 0; font-size: 14px; color: #666;\">
                        <strong style=\"color: #082C6A;\">📍 Siège Social</strong><br>
                        Immeuble BAMA<br>
                        Hamdallaye ACI, Bamako, Mali
                    </p>
                </td>
                <td class=\"col\" width=\"50%\" style=\"vertical-align: top; padding-left: 10px;\">
                    <p style=\"margin: 0; font-size: 14px; color: #666;\">
                        <strong style=\"color: #082C6A;\">✉️ Support Partenaires</strong><br>
                        Tél : +223 74 74 17 45<br>
                        Email : <a href=\"mailto:support@sanfeni.com\" class=\"contact-link\">contact@sanfeni.com</a>
                    </p>
                </td>
            </tr>
        </table>

        <div style=\"margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;\">
            <p style=\"margin: 0; font-size: 12px; color: #999;\">
                &copy; {{ \"now\"|date(\"Y\") }} <strong>SANFENI</strong><br>
                Espace Business - Partenaire de votre croissance.
            </p>
        </div>
    </div>
</div>
</body>
</html>
", "register/register_shop_email.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/register/register_shop_email.html.twig");
    }
}
