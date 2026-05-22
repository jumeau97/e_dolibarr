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

/* attestation/certificate.html.twig */
class __TwigTemplate_b7a00025c8167c811ee67081912012a4 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "attestation/certificate.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "attestation/certificate.html.twig"));

        // line 1
        yield "<!DOCTYPE html>
<html lang=\"fr\">
<head>
    <meta charset=\"UTF-8\">
    <style>
        @page {
            size: A4 landscape;
            margin: 0;
        }

        .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* Ton image de fond propre au certificat */
        ";
        // line 18
        yield " background-image: url('";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\HttpFoundationExtension']->generateAbsoluteUrl($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/certificate/certificat_model.jpg")), "html", null, true);
        yield "');
            background-size: cover;
            z-index: -1;
        }

        .content {
            padding: 340px 80px;
            font-family: 'Helvetica', sans-serif;
            text-align: center;
        }

        .titre-certificat {
            font-size: 50px;
            color: #2c3e50;
            text-transform: uppercase;
            margin-bottom: 50px;
        }

        .corps-texte {
            font-size: 20px;
            line-height: 2;
            margin-bottom: 10px;
        }

        .nom-apprenant {
            font-size: 38px;
            font-weight: bold;
            color: #d4af37; /* Doré */
            /*text-decoration: none;*/
            /*border-bottom: 1px solid #333;*/
            padding-bottom: 5px;
        }

        .module-nom {
            font-weight: bold;
            font-size: 25px;
        }

        .footer-certif {
            margin-top: 80px;
            font-size: 16px;
        }
    </style>
</head>
<body>
<div class=\"background\"></div>

<div class=\"content\">
    ";
        // line 67
        yield "
    <div class=\"corps-texte\">
        ";
        // line 70
        yield "        ";
        // line 71
        yield "        <span class=\"nom-apprenant\">
                ";
        // line 72
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["inscription"]) || array_key_exists("inscription", $context) ? $context["inscription"] : (function () { throw new RuntimeError('Variable "inscription" does not exist.', 72, $this->source); })()), "participant", [], "any", false, false, false, 72), "firstName", [], "any", false, false, false, 72), "html", null, true);
        yield " ";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::upper($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["inscription"]) || array_key_exists("inscription", $context) ? $context["inscription"] : (function () { throw new RuntimeError('Variable "inscription" does not exist.', 72, $this->source); })()), "participant", [], "any", false, false, false, 72), "lastName", [], "any", false, false, false, 72)), "html", null, true);
        yield "
            </span>
        ";
        // line 75
        yield "        ";
        // line 76
        yield "        ";
        // line 77
        yield "        ";
        // line 78
        yield "        ";
        // line 79
        yield "        ";
        // line 80
        yield "    </div>

    ";
        // line 83
        yield "    ";
        // line 84
        yield "    ";
        // line 85
        yield "</div>
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
        return "attestation/certificate.html.twig";
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
        return array (  153 => 85,  151 => 84,  149 => 83,  145 => 80,  143 => 79,  141 => 78,  139 => 77,  137 => 76,  135 => 75,  128 => 72,  125 => 71,  123 => 70,  119 => 67,  67 => 18,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<!DOCTYPE html>
<html lang=\"fr\">
<head>
    <meta charset=\"UTF-8\">
    <style>
        @page {
            size: A4 landscape;
            margin: 0;
        }

        .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* Ton image de fond propre au certificat */
        {# Remplace absolute_url par le chemin disque réel #}{#    background-image: url('{{ kernel_project_dir ~ \"/public/assets/certificate/certificat_model.jpg\" }}');#} background-image: url('{{ absolute_url(asset(\"assets/certificate/certificat_model.jpg\")) }}');
            background-size: cover;
            z-index: -1;
        }

        .content {
            padding: 340px 80px;
            font-family: 'Helvetica', sans-serif;
            text-align: center;
        }

        .titre-certificat {
            font-size: 50px;
            color: #2c3e50;
            text-transform: uppercase;
            margin-bottom: 50px;
        }

        .corps-texte {
            font-size: 20px;
            line-height: 2;
            margin-bottom: 10px;
        }

        .nom-apprenant {
            font-size: 38px;
            font-weight: bold;
            color: #d4af37; /* Doré */
            /*text-decoration: none;*/
            /*border-bottom: 1px solid #333;*/
            padding-bottom: 5px;
        }

        .module-nom {
            font-weight: bold;
            font-size: 25px;
        }

        .footer-certif {
            margin-top: 80px;
            font-size: 16px;
        }
    </style>
</head>
<body>
<div class=\"background\"></div>

<div class=\"content\">
    {#    <h1 class=\"titre-certificat\">Attestation de Formation</h1> #}

    <div class=\"corps-texte\">
        {#        La direction de <strong>BRVM Formation</strong> certifie que : #}
        {#        <br> #}
        <span class=\"nom-apprenant\">
                {{ inscription.participant.firstName }} {{ inscription.participant.lastName|upper }}
            </span>
        {#        <br> #}
        {#        A suivi avec succès la formation : #}
        {#        <br> #}
        {#        <span class=\"module-nom\">\"{{ inscription.module.libelle }}\"</span> #}
        {#        <br> #}
        {#        Délivré à Bamako, le {{ \"now\"|date(\"d/m/Y\") }} #}
    </div>

    {#    <div class=\"footer-certif\"> #}
    {#        <p>Le Responsable Pédagogique</p> #}
    {#    </div> #}
</div>
</body>
</html>
", "attestation/certificate.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/attestation/certificate.html.twig");
    }
}
