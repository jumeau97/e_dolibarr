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

/* menus/_aside.html.twig */
class __TwigTemplate_fa2ae82413538635921f04defd21f9b7 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "menus/_aside.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "menus/_aside.html.twig"));

        // line 1
        yield "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">
    <a href=\"#\" class=\"brand-link\">
        <span class=\"brand-text font-weight-bold ml-3\">Smart<span class=\"font-weight-light\">ERP</span></span>
    </a>

    <div class=\"sidebar\">
        <!-- Profil -->
        <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">
            <div class=\"image\">
                <img src=\"";
        // line 10
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("dist/img/user2-160x160.jpg"), "html", null, true);
        yield "\" class=\"img-circle elevation-2\" alt=\"User Image\">
            </div>
            <div class=\"info\">
                <a href=\"#\" class=\"d-block\">";
        // line 13
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 13), "firstName", [], "any", true, true, false, 13)) ? (Twig\Extension\CoreExtension::default(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 13, $this->source); })()), "user", [], "any", false, false, false, 13), "firstName", [], "any", false, false, false, 13), "Alassane")) : ("Alassane")), "html", null, true);
        yield "</a>
            </div>
        </div>

        <nav class=\"mt-2\">
            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">

                <!-- ACCUEIL -->
                <li class=\"nav-item\">
                    <a href=\"?page=dashboard\" class=\"nav-link ";
        // line 22
        yield ((((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 22, $this->source); })()), "request", [], "any", false, false, false, 22), "query", [], "any", false, false, false, 22), "get", ["page"], "method", false, false, false, 22) == "dashboard") || Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 22, $this->source); })()), "request", [], "any", false, false, false, 22), "query", [], "any", false, false, false, 22), "get", ["page"], "method", false, false, false, 22)))) ? ("active") : (""));
        yield "\">
                        <i class=\"nav-icon fas fa-home\"></i>
                        <p>Accueil (Vue d'ensemble)</p>
                    </a>
                </li>

                <!-- ASSISTANT IA -->
                <li class=\"nav-header text-warning font-weight-bold\">ASSISTANT IA & PRÉVISIONS</li>
                <li class=\"nav-item\">
                    <a href=\"?page=pred_sales\" class=\"nav-link ";
        // line 31
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 31, $this->source); })()), "request", [], "any", false, false, false, 31), "query", [], "any", false, false, false, 31), "get", ["page"], "method", false, false, false, 31) == "pred_sales")) ? ("active") : (""));
        yield "\">
                        <i class=\"fas fa-brain nav-icon text-warning\"></i>
                        <p>Prédictions des Ventes</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <a href=\"?page=pred_stocks\" class=\"nav-link ";
        // line 37
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 37, $this->source); })()), "request", [], "any", false, false, false, 37), "query", [], "any", false, false, false, 37), "get", ["page"], "method", false, false, false, 37) == "pred_stocks")) ? ("active") : (""));
        yield "\">
                        <i class=\"fas fa-boxes nav-icon text-warning\"></i>
                        <p>Alerte Rupture & Stock</p>
                    </a>
                </li>

                <!-- COMPTOIR & VENTES -->
                <li class=\"nav-header\">VENTES AU QUOTIDIEN</li>
                <li class=\"nav-item\">
                    <a href=\"?page=sales_pos\" class=\"nav-link ";
        // line 46
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 46, $this->source); })()), "request", [], "any", false, false, false, 46), "query", [], "any", false, false, false, 46), "get", ["page"], "method", false, false, false, 46) == "sales_pos")) ? ("active") : (""));
        yield " text-info\">
                        <i class=\"nav-icon fas fa-cash-register\"></i>
                        <p><b>Faire une Vente (Caisse)</b></p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <a href=\"?page=sales_orders\" class=\"nav-link ";
        // line 52
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 52, $this->source); })()), "request", [], "any", false, false, false, 52), "query", [], "any", false, false, false, 52), "get", ["page"], "method", false, false, false, 52) == "sales_orders")) ? ("active") : (""));
        yield "\">
                        <i class=\"nav-icon fas fa-file-invoice-dollar\"></i>
                        <p>Factures & Commandes</p>
                    </a>
                </li>

                <!-- STOCKS, MULTI-ENTREPÔTS & LOGISTIQUE -->
                <li class=\"nav-header\">LOGISTIQUE & ENTREPÔTS</li>
                <li class=\"nav-item\">
                    <a href=\"?page=products\" class=\"nav-link ";
        // line 61
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 61, $this->source); })()), "request", [], "any", false, false, false, 61), "query", [], "any", false, false, false, 61), "get", ["page"], "method", false, false, false, 61) == "products")) ? ("active") : (""));
        yield "\">
                        <i class=\"nav-icon fas fa-cubes\"></i>
                        <p>Catalogue Articles</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <!-- AJUSTEMENT : Lien direct vers la gestion multi-sites (Dépôt central / Boutique) -->
                    <a href=\"?page=warehouse_index\" class=\"nav-link ";
        // line 68
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 68, $this->source); })()), "request", [], "any", false, false, false, 68), "query", [], "any", false, false, false, 68), "get", ["page"], "method", false, false, false, 68) == "warehouse_index")) ? ("active") : (""));
        yield "\">
                        <i class=\"nav-icon fas fa-warehouse\"></i>
                        <p>État des Entrepôts</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <a href=\"?page=stock_movements\" class=\"nav-link ";
        // line 74
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 74, $this->source); })()), "request", [], "any", false, false, false, 74), "query", [], "any", false, false, false, 74), "get", ["page"], "method", false, false, false, 74) == "stock_movements")) ? ("active") : (""));
        yield "\">
                        <i class=\"nav-icon fas fa-exchange-alt\"></i>
                        <p>Mouvements & Transferts</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <!-- AJUSTEMENT : Utile si tu relies la plateforme à du transport de marchandises (Yiringasso / Raftras) -->
                    <a href=\"?page=shipping_logs\" class=\"nav-link ";
        // line 81
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 81, $this->source); })()), "request", [], "any", false, false, false, 81), "query", [], "any", false, false, false, 81), "get", ["page"], "method", false, false, false, 81) == "shipping_logs")) ? ("active") : (""));
        yield "\">
                        <i class=\"nav-icon fas fa-truck-loading\"></i>
                        <p>Suivi des Livraisons</p>
                    </a>
                </li>

                <!-- ARGENT / FINANCES -->
                <li class=\"nav-header\">ARGENT & TRÉSORERIE</li>
                <li class=\"nav-item\">
                    <a href=\"?page=finance_expenses\" class=\"nav-link ";
        // line 90
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 90, $this->source); })()), "request", [], "any", false, false, false, 90), "query", [], "any", false, false, false, 90), "get", ["page"], "method", false, false, false, 90) == "finance_expenses")) ? ("active") : (""));
        yield "\">
                        <i class=\"nav-icon fas fa-arrow-circle-down text-danger\"></i>
                        <p>Enregistrer une Dépense</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <a href=\"?page=finance_accounts\" class=\"nav-link ";
        // line 96
        yield (((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 96, $this->source); })()), "request", [], "any", false, false, false, 96), "query", [], "any", false, false, false, 96), "get", ["page"], "method", false, false, false, 96) == "finance_accounts")) ? ("active") : (""));
        yield "\">
                        <i class=\"nav-icon fas fa-wallet\"></i>
                        <p>État de la Caisse / Banque</p>
                    </a>
                </li>

                <!-- DECONNEXION -->
                <li class=\"nav-item mt-4\">
                    <a href=\"#\" class=\"nav-link text-muted\">
                        <i class=\"nav-icon fas fa-power-off\"></i>
                        <p>Quitter le logiciel</p>
                    </a>
                </li>

            </ul>
        </nav>
    </div>
</aside>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "menus/_aside.html.twig";
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
        return array (  181 => 96,  172 => 90,  160 => 81,  150 => 74,  141 => 68,  131 => 61,  119 => 52,  110 => 46,  98 => 37,  89 => 31,  77 => 22,  65 => 13,  59 => 10,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">
    <a href=\"#\" class=\"brand-link\">
        <span class=\"brand-text font-weight-bold ml-3\">Smart<span class=\"font-weight-light\">ERP</span></span>
    </a>

    <div class=\"sidebar\">
        <!-- Profil -->
        <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">
            <div class=\"image\">
                <img src=\"{{ asset('dist/img/user2-160x160.jpg') }}\" class=\"img-circle elevation-2\" alt=\"User Image\">
            </div>
            <div class=\"info\">
                <a href=\"#\" class=\"d-block\">{{ app.user.firstName|default('Alassane') }}</a>
            </div>
        </div>

        <nav class=\"mt-2\">
            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">

                <!-- ACCUEIL -->
                <li class=\"nav-item\">
                    <a href=\"?page=dashboard\" class=\"nav-link {{ app.request.query.get('page') == 'dashboard' or app.request.query.get('page') is empty ? 'active' : '' }}\">
                        <i class=\"nav-icon fas fa-home\"></i>
                        <p>Accueil (Vue d'ensemble)</p>
                    </a>
                </li>

                <!-- ASSISTANT IA -->
                <li class=\"nav-header text-warning font-weight-bold\">ASSISTANT IA & PRÉVISIONS</li>
                <li class=\"nav-item\">
                    <a href=\"?page=pred_sales\" class=\"nav-link {{ app.request.query.get('page') == 'pred_sales' ? 'active' : '' }}\">
                        <i class=\"fas fa-brain nav-icon text-warning\"></i>
                        <p>Prédictions des Ventes</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <a href=\"?page=pred_stocks\" class=\"nav-link {{ app.request.query.get('page') == 'pred_stocks' ? 'active' : '' }}\">
                        <i class=\"fas fa-boxes nav-icon text-warning\"></i>
                        <p>Alerte Rupture & Stock</p>
                    </a>
                </li>

                <!-- COMPTOIR & VENTES -->
                <li class=\"nav-header\">VENTES AU QUOTIDIEN</li>
                <li class=\"nav-item\">
                    <a href=\"?page=sales_pos\" class=\"nav-link {{ app.request.query.get('page') == 'sales_pos' ? 'active' : '' }} text-info\">
                        <i class=\"nav-icon fas fa-cash-register\"></i>
                        <p><b>Faire une Vente (Caisse)</b></p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <a href=\"?page=sales_orders\" class=\"nav-link {{ app.request.query.get('page') == 'sales_orders' ? 'active' : '' }}\">
                        <i class=\"nav-icon fas fa-file-invoice-dollar\"></i>
                        <p>Factures & Commandes</p>
                    </a>
                </li>

                <!-- STOCKS, MULTI-ENTREPÔTS & LOGISTIQUE -->
                <li class=\"nav-header\">LOGISTIQUE & ENTREPÔTS</li>
                <li class=\"nav-item\">
                    <a href=\"?page=products\" class=\"nav-link {{ app.request.query.get('page') == 'products' ? 'active' : '' }}\">
                        <i class=\"nav-icon fas fa-cubes\"></i>
                        <p>Catalogue Articles</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <!-- AJUSTEMENT : Lien direct vers la gestion multi-sites (Dépôt central / Boutique) -->
                    <a href=\"?page=warehouse_index\" class=\"nav-link {{ app.request.query.get('page') == 'warehouse_index' ? 'active' : '' }}\">
                        <i class=\"nav-icon fas fa-warehouse\"></i>
                        <p>État des Entrepôts</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <a href=\"?page=stock_movements\" class=\"nav-link {{ app.request.query.get('page') == 'stock_movements' ? 'active' : '' }}\">
                        <i class=\"nav-icon fas fa-exchange-alt\"></i>
                        <p>Mouvements & Transferts</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <!-- AJUSTEMENT : Utile si tu relies la plateforme à du transport de marchandises (Yiringasso / Raftras) -->
                    <a href=\"?page=shipping_logs\" class=\"nav-link {{ app.request.query.get('page') == 'shipping_logs' ? 'active' : '' }}\">
                        <i class=\"nav-icon fas fa-truck-loading\"></i>
                        <p>Suivi des Livraisons</p>
                    </a>
                </li>

                <!-- ARGENT / FINANCES -->
                <li class=\"nav-header\">ARGENT & TRÉSORERIE</li>
                <li class=\"nav-item\">
                    <a href=\"?page=finance_expenses\" class=\"nav-link {{ app.request.query.get('page') == 'finance_expenses' ? 'active' : '' }}\">
                        <i class=\"nav-icon fas fa-arrow-circle-down text-danger\"></i>
                        <p>Enregistrer une Dépense</p>
                    </a>
                </li>
                <li class=\"nav-item\">
                    <a href=\"?page=finance_accounts\" class=\"nav-link {{ app.request.query.get('page') == 'finance_accounts' ? 'active' : '' }}\">
                        <i class=\"nav-icon fas fa-wallet\"></i>
                        <p>État de la Caisse / Banque</p>
                    </a>
                </li>

                <!-- DECONNEXION -->
                <li class=\"nav-item mt-4\">
                    <a href=\"#\" class=\"nav-link text-muted\">
                        <i class=\"nav-icon fas fa-power-off\"></i>
                        <p>Quitter le logiciel</p>
                    </a>
                </li>

            </ul>
        </nav>
    </div>
</aside>", "menus/_aside.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/menus/_aside.html.twig");
    }
}
