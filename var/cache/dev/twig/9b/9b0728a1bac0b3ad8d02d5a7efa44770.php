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

/* components/AdminOrderDetails.html.twig */
class __TwigTemplate_e0e63fdd761601e7809f89b9179b4fdd extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/AdminOrderDetails.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/AdminOrderDetails.html.twig"));

        // line 1
        yield "<div";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["attributes"]) || array_key_exists("attributes", $context) ? $context["attributes"] : (function () { throw new RuntimeError('Variable "attributes" does not exist.', 1, $this->source); })()), "html", null, true);
        yield ">
    ";
        // line 2
        if ((($tmp =  !Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, (isset($context["field"]) || array_key_exists("field", $context) ? $context["field"] : (function () { throw new RuntimeError('Variable "field" does not exist.', 2, $this->source); })()), "value", [], "any", false, false, false, 2))) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 3
            yield "
        <table class=\"table table-striped table-sm\">
            <thead>
            <tr>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Etat</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            ";
            // line 15
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, (isset($context["field"]) || array_key_exists("field", $context) ? $context["field"] : (function () { throw new RuntimeError('Variable "field" does not exist.', 15, $this->source); })()), "value", [], "any", false, false, false, 15));
            foreach ($context['_seq'] as $context["_key"] => $context["detail"]) {
                // line 16
                yield "                ";
                // line 17
                yield "                <tr>
                    <td>";
                // line 18
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["detail"], "product", [], "any", false, false, false, 18), "html", null, true);
                yield "</td>
                    <td>";
                // line 19
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["detail"], "quantity", [], "any", false, false, false, 19), "html", null, true);
                yield "</td>
                    <td>";
                // line 20
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, $context["detail"], "price", [], "any", false, false, false, 20), 2, ",", " "), "html", null, true);
                yield " €</td>
                    <td>";
                // line 21
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["detail"], "state", [], "any", false, false, false, 21), "html", null, true);
                yield " </td>
                    <td>
                        ";
                // line 24
                yield "                        ";
                // line 25
                yield "                        ";
                // line 26
                yield "                        ";
                // line 27
                yield "                        ";
                // line 28
                yield "                        <button type=\"button\" data-action=\"live#action\"
                                data-live-action-param=\"updateStatus\">etat</button>
                        ";
                // line 31
                yield "                    </td>
                </tr>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['detail'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 34
            yield "            </tbody>
        </table>
    ";
        } else {
            // line 37
            yield "        <em>Aucun article dans cette commande</em>
    ";
        }
        // line 39
        yield "</div>
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
        return "components/AdminOrderDetails.html.twig";
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
        return array (  124 => 39,  120 => 37,  115 => 34,  107 => 31,  103 => 28,  101 => 27,  99 => 26,  97 => 25,  95 => 24,  90 => 21,  86 => 20,  82 => 19,  78 => 18,  75 => 17,  73 => 16,  69 => 15,  55 => 3,  53 => 2,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<div{{ attributes }}>
    {% if field.value is not empty %}

        <table class=\"table table-striped table-sm\">
            <thead>
            <tr>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Etat</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {% for detail in field.value %}
                {#            {{ dump(detail.state ) }} #}
                <tr>
                    <td>{{ detail.product }}</td>
                    <td>{{ detail.quantity }}</td>
                    <td>{{ detail.price|number_format(2, ',', ' ') }} €</td>
                    <td>{{ detail.state }} </td>
                    <td>
                        {#                        <div {{ stimulus_controller('details') }} >#}
                        {#                            <button class=\"btn btn-primary\" {{ stimulus_action('details', 'toggleState') }}>Etat#}
                        {#                            </button>#}
                        {#                        </div>#}
                        {#                        <div data-controller=\"details\">#}
                        <button type=\"button\" data-action=\"live#action\"
                                data-live-action-param=\"updateStatus\">etat</button>
                        {#                        </div>#}
                    </td>
                </tr>
            {% endfor %}
            </tbody>
        </table>
    {% else %}
        <em>Aucun article dans cette commande</em>
    {% endif %}
</div>
", "components/AdminOrderDetails.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/components/AdminOrderDetails.html.twig");
    }
}
