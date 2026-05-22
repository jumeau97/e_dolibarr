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

/* menus/header.html.twig */
class __TwigTemplate_93a620fbda61b594c83874c2ddda45a4 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "menus/header.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "menus/header.html.twig"));

        // line 1
        yield "<div id=\"mobile-cart-popup\" class=\"mobile-popup d-lg-none\">
    <div class=\"popup-content\">
        <div class=\"icon-box\">
            <i class=\"fas fa-shopping-bag\"></i>
        </div>
        <div class=\"text-box\">
            <span class=\"popup-title\">Ajouté au panier !</span>
            <span class=\"popup-subtitle\">Votre article a été bien ajouté.</span>
        </div>
        <button class=\"btn-close-popup\" onclick=\"this.parentElement.parentElement.classList.remove('active')\">
            <i class=\"fas fa-times\"></i>
        </button>
    </div>
</div>
<div class=\"header-top-section\">
    <div class=\"container\">
        <div class=\"header-top\">
            <div class=\"header-profile\">
                <a href=\"";
        // line 19
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account");
        yield "\"><span>Mon compte</span></a>
                <a href=\"";
        // line 20
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("account_order");
        yield "\"><span>Commande</span></a>
                <a href=\"#\"><span>Support</span></a>
            </div>
            <div class=\"header-contact d-none d-lg-block\">
                <a href=\"#\">
                    <span>Besoin d'aide? appelez-nous:</span>
                    <span class=\"contact-number\">+223 74 74 17 45</span>
                </a>
            </div>
        </div>
    </div>
</div>
<header id=\"header\" class=\"header sticky-top\">
    <div class=\"header-center-section d-none d-lg-block bg-white\">
        <div class=\"container\">
            <div class=\"header-center\">
                <div class=\"logo\">
                    <a href=\"";
        // line 37
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
        yield "\">
                        <img src=\"";
        // line 38
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/images/logos/logo_orig_1.png"), "html", null, true);
        yield "\" width=\"150px\" alt=\"logo\">
                    </a>
                </div>
                <div class=\"header-cart-items\">

                    ";
        // line 43
        if ((($tmp = $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("IS_AUTHENTICATED_FULLY")) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 44
            yield "                        <div class=\"header-user\">
                               <span>
                        Salut ";
            // line 46
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 46, $this->source); })()), "user", [], "any", false, false, false, 46), "firstName", [], "any", false, false, false, 46), "html", null, true);
            yield " |
                                </span>

                            <a href=\"";
            // line 49
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
            yield "\">  <span>
                                  Se déconnecter
                                </span></a>

                        </div>
                    ";
        } else {
            // line 55
            yield "                        <div class=\"header-user\">
                            <a href=\"";
            // line 56
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            yield "\"> <span>
                         Se connecter
                                </span></a>
                            |
                            <a href=\"";
            // line 60
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("register_customer");
            yield "\">  <span>
                                    S'inscrire
                                </span></a>
                        </div>
                    ";
        }
        // line 65
        yield "
                    ";
        // line 67
        yield "                    ";
        yield $this->env->getRuntime('Symfony\UX\TwigComponent\Twig\ComponentRuntime')->render("HeaderCartComponent", ["previewCart" =>         // line 68
(isset($context["previewCart"]) || array_key_exists("previewCart", $context) ? $context["previewCart"] : (function () { throw new RuntimeError('Variable "previewCart" does not exist.', 68, $this->source); })()), "currentCart" =>         // line 69
(isset($context["currentCart"]) || array_key_exists("currentCart", $context) ? $context["currentCart"] : (function () { throw new RuntimeError('Variable "currentCart" does not exist.', 69, $this->source); })())]);
        // line 70
        yield "
                    ";
        // line 72
        yield "                    <div class=\"header-user\">
                        <a href=\"#\">
                                <span>
                                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"
                                         class=\"fill-current\">
                                        <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>
                                        <path
                                            d=\"M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z\">
                                        </path>
                                    </svg>
                                </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <nav class=\"mobile-menu d-block d-lg-none\">
        <div class=\"mobile-menu-header d-flex justify-content-between align-items-center\">
            <button class=\"btn\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasWithBothOptions\"
                    aria-controls=\"offcanvasWithBothOptions\">
                    <span>
                        <svg width=\"14\" height=\"9\" viewBox=\"0 0 14 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
                            <rect width=\"14\" height=\"1\" fill=\"#1D1D1D\"/>
                            <rect y=\"8\" width=\"14\" height=\"1\" fill=\"#1D1D1D\"/>
                            <rect y=\"4\" width=\"10\" height=\"1\" fill=\"#1D1D1D\"/>
                        </svg>
                    </span>
            </button>
            <a href=\"";
        // line 102
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
        yield "\" class=\"mobile-header-logo\">
                <img src=\"";
        // line 103
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/images/logos/logo_orig_1.png"), "html", null, true);
        yield "\" width=\"100px\" alt=\"logo\">
            </a>
            ";
        // line 105
        yield $this->env->getRuntime('Symfony\UX\TwigComponent\Twig\ComponentRuntime')->render("HeaderCartComponent", ["previewCart" =>         // line 106
(isset($context["previewCart"]) || array_key_exists("previewCart", $context) ? $context["previewCart"] : (function () { throw new RuntimeError('Variable "previewCart" does not exist.', 106, $this->source); })()), "currentCart" =>         // line 107
(isset($context["currentCart"]) || array_key_exists("currentCart", $context) ? $context["currentCart"] : (function () { throw new RuntimeError('Variable "currentCart" does not exist.', 107, $this->source); })())]);
        // line 108
        yield "
        </div>

        <div class=\"offcanvas offcanvas-start\" data-bs-scroll=\"true\" tabindex=\"-1\" id=\"offcanvasWithBothOptions\">

            <div class=\"offcanvas-body\">
                <div class=\"header-top border-bottom p-3 d-flex justify-content-between align-items-center\">
                    <div class=\"\">
                        <h5 class=\"mb-0 fw-bold\" style=\"color: #082C6A;\">Toutes les catégories</h5>
                    </div>
                    ";
        // line 119
        yield "                    <button type=\"button\"
                            class=\"btn-close-custom\"
                            data-bs-dismiss=\"offcanvas\"
                            aria-label=\"Close\">
                        <i class=\"fas fa-times\"></i>
                    </button>
                </div>
                ";
        // line 127
        yield "                ";
        // line 128
        yield "                ";
        // line 129
        yield "                ";
        // line 130
        yield "                ";
        // line 131
        yield "                ";
        // line 132
        yield "                ";
        // line 133
        yield "                ";
        // line 134
        yield "                ";
        // line 135
        yield "                ";
        // line 136
        yield "                ";
        // line 137
        yield "
                <div class=\"category-mobile-menu\">
                    <ul class=\"list-unstyled\">
                        <ul class=\"list-unstyled custom-elevated-menu\">
                            ";
        // line 141
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 141, $this->source); })()));
        $context['_iterated'] = false;
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["cat"]) {
            // line 142
            yield "                                <li class=\"border-bottom\">
                                    ";
            // line 144
            yield "                                    <div class=\"d-flex align-items-center justify-content-between p-3 bg-white\">
                                        <a href=\"";
            // line 145
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home", ["slug" => CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "name", [], "any", false, false, false, 145)]), "html", null, true);
            yield "\"
                                           class=\"d-flex align-items-center text-decoration-none\">
                                            <span class=\"text-dark fw-bold fs-5\">";
            // line 147
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "name", [], "any", false, false, false, 147), "html", null, true);
            yield "</span>
                                        </a>

                                        ";
            // line 150
            if ((($tmp =  !Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "categories", [], "any", false, false, false, 150))) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                // line 151
                yield "                                            <button class=\"btn border-0 p-3\" type=\"button\" data-bs-toggle=\"collapse\"
                                                    data-bs-target=\"#collapse-";
                // line 152
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 152), "html", null, true);
                yield "\">
                                                <i class=\"fas fa-chevron-down text-primary\"></i>
                                            </button>
                                        ";
            }
            // line 156
            yield "                                    </div>
                                    ";
            // line 158
            yield "                                    ";
            if ((($tmp =  !Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "categories", [], "any", false, false, false, 158))) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                // line 159
                yield "                                        <div class=\"collapse bg-light\" id=\"collapse-";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 159), "html", null, true);
                yield "\">
                                            <ul class=\"list-unstyled ps-0 pb-2\">
                                                ";
                // line 161
                $context['_parent'] = $context;
                $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "categories", [], "any", false, false, false, 161));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["subCat"]) {
                    // line 162
                    yield "                                                    <li class=\"py-2 border-bottom border-white\">
                                                        <div
                                                            class=\"d-flex justify-content-between align-items-center px-4 py-2\">
                                                            <a href=\"";
                    // line 165
                    yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home", ["slug" => CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "name", [], "any", false, false, false, 165)]), "html", null, true);
                    yield "\"
                                                               class=\"text-dark text-decoration-none fw-medium fs-6\">
                                                                ";
                    // line 167
                    yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "name", [], "any", false, false, false, 167), "html", null, true);
                    yield "
                                                            </a>

                                                            ";
                    // line 170
                    if ((($tmp =  !Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "categories", [], "any", false, false, false, 170))) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                        // line 171
                        yield "                                                                <button
                                                                    class=\"btn btn-sm btn-outline-secondary rounded-circle\"
                                                                    style=\"width: 10px; height: 10px; padding: 0;\"
                                                                    data-bs-toggle=\"collapse\"
                                                                    data-bs-target=\"#sub-collapse-";
                        // line 175
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "parent", [], "any", false, false, false, 175), "loop", [], "any", false, false, false, 175), "index", [], "any", false, false, false, 175), "html", null, true);
                        yield "-";
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 175), "html", null, true);
                        yield "\">
                                                                    <i class=\"fas fa-plus\"
                                                                       style=\"font-size: 0.7rem;\"></i>
                                                                </button>
                                                            ";
                    }
                    // line 180
                    yield "                                                        </div>

                                                        ";
                    // line 183
                    yield "                                                        ";
                    if ((($tmp =  !Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "categories", [], "any", false, false, false, 183))) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                        // line 184
                        yield "                                                            <div class=\"collapse bg-white-50\"
                                                                 id=\"sub-collapse-";
                        // line 185
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "parent", [], "any", false, false, false, 185), "loop", [], "any", false, false, false, 185), "index", [], "any", false, false, false, 185), "html", null, true);
                        yield "-";
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 185), "html", null, true);
                        yield "\">
                                                                <ul class=\"list-unstyled ps-5 mt-1\">
                                                                    ";
                        // line 187
                        $context['_parent'] = $context;
                        $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "categories", [], "any", false, false, false, 187));
                        foreach ($context['_seq'] as $context["_key"] => $context["subCat2"]) {
                            // line 188
                            yield "                                                                        <li class=\"py-2\">
                                                                            <a href=\"";
                            // line 189
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home", ["slug" => CoreExtension::getAttribute($this->env, $this->source, $context["subCat2"], "name", [], "any", false, false, false, 189)]), "html", null, true);
                            yield "\"
                                                                               class=\"text-secondary text-decoration-none fs-6 d-block\">
                                                                                <i class=\"fas fa-angle-right me-2 text-muted\"></i>";
                            // line 191
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["subCat2"], "name", [], "any", false, false, false, 191), "html", null, true);
                            yield "
                                                                            </a>
                                                                        </li>
                                                                    ";
                        }
                        $_parent = $context['_parent'];
                        unset($context['_seq'], $context['_key'], $context['subCat2'], $context['_parent']);
                        $context = array_intersect_key($context, $_parent) + $_parent;
                        // line 195
                        yield "                                                                </ul>
                                                            </div>
                                                        ";
                    }
                    // line 198
                    yield "                                                    </li>
                                                ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['revindex0'], $context['loop']['revindex'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_key'], $context['subCat'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 200
                yield "                                            </ul>
                                        </div>
                                    ";
            }
            // line 203
            yield "                                </li>
                            ";
            $context['_iterated'] = true;
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['revindex0'], $context['loop']['revindex'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        // line 204
        if (!$context['_iterated']) {
            // line 205
            yield "                                ";
            // line 206
            yield "                                <li class=\"empty-menu-placeholder\">
                                    <div class=\"empty-content text-center py-5 px-3\">
                                        <div class=\"empty-icon mb-3\">
                                            <i class=\"fas fa-th-large text-muted opacity-25\"
                                               style=\"font-size: 3rem;\"></i>
                                        </div>
                                        <h6 class=\"fw-bold text-dark\">Aucune catégorie</h6>
                                        <p class=\"text-muted small\">Les rayons sont en cours de mise à jour.</p>
                                        <button class=\"btn btn-sm rounded-pill mt-2 px-4\"
                                                style=\"background: #082C6A; color: white;\"
                                                onclick=\"window.location.reload();\">
                                            Actualiser
                                        </button>
                                    </div>
                                </li>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['cat'], $context['_parent'], $context['_iterated'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 222
        yield "                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <div class=\"header-bottom d-lg-block d-none\">
        <div class=\"container\">
            <div class=\"header-nav\">
                <nav class=\"navbar-expand-md\">
                    <div class=\"container\">
                        <div class=\"collapse navbar-collapse order-3\" id=\"navbarCollapse\">
                            <!-- Left navbar links -->
                            <ul class=\"navbar-nav\">
                                <li class=\"nav-item dropdown dropdown-hover\">
                                    <a id=\"dropdownSubMenu1\" href=\"#\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\"
                                       aria-expanded=\"false\" class=\"nav-link dropdown-toggle\">
                                        <span class=\"dropdown-btn\">
                                            <span class=\"dropdown-icon\">
                                                <svg width=\"14\" height=\"9\" viewBox=\"0 0 14 9\" fill=\"none\"
                                                     xmlns=\"http://www.w3.org/2000/svg\">
                                                    <rect width=\"14\" height=\"1\"/>
                                                    <rect y=\"8\" width=\"14\" height=\"1\"/>
                                                    <rect y=\"4\" width=\"10\" height=\"1\"/>
                                                </svg>
                                            </span>
                                            <span class=\"list-text\">Catégories</span>
                                        </span>
                                    </a>
                                    <ul aria-labelledby=\"dropdownSubMenu1\" class=\"dropdown-menu border-0 shadow\">
                                        <!-- Level two dropdown-->
                                        ";
        // line 254
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 254, $this->source); })()));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["cat"]) {
            // line 255
            yield "                                            ";
            if ((($tmp = (!Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "categories", [], "any", false, false, false, 255)))) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                // line 256
                yield "                                                <li class=\"dropdown-submenu dropdown-hover\">
                                                    <a id=\"dropdownSubMenu2\"
                                                       href=\"";
                // line 258
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home", ["slug" => CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "name", [], "any", false, false, false, 258)]), "html", null, true);
                yield "\" role=\"button\"
                                                       aria-haspopup=\"true\" aria-expanded=\"false\"
                                                       class=\"dropdown-item dropdown-toggle\">";
                // line 260
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "name", [], "any", false, false, false, 260), "html", null, true);
                yield "</a>
                                                    ";
                // line 261
                if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "categories", [], "any", false, false, false, 261)) > 0)) {
                    // line 262
                    yield "                                                        <ul aria-labelledby=\"dropdownSubMenu2\"
                                                            class=\"dropdown-menu border-0 shadow\">
                                                            ";
                    // line 264
                    $context['_parent'] = $context;
                    $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "categories", [], "any", false, false, false, 264));
                    foreach ($context['_seq'] as $context["_key"] => $context["subCat"]) {
                        // line 265
                        yield "                                                                <!-- Level three dropdown-->
                                                                ";
                        // line 266
                        if ((($tmp = (!Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "categories", [], "any", false, false, false, 266)))) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                            // line 267
                            yield "                                                                    <li class=\"dropdown-submenu\">
                                                                        <a id=\"dropdownSubMenu3\"
                                                                           href=\"";
                            // line 269
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home", ["slug" => CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "name", [], "any", false, false, false, 269)]), "html", null, true);
                            yield "\"
                                                                           role=\"button\"
                                                                           aria-haspopup=\"true\" aria-expanded=\"false\"
                                                                           class=\"dropdown-item dropdown-toggle\">";
                            // line 272
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "name", [], "any", false, false, false, 272), "html", null, true);
                            yield "</a>
                                                                        ";
                            // line 273
                            if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "categories", [], "any", false, false, false, 273)) > 0)) {
                                // line 274
                                yield "                                                                            <ul aria-labelledby=\"dropdownSubMenu3\"
                                                                                class=\"dropdown-menu border-0 shadow\">
                                                                                ";
                                // line 276
                                $context['_parent'] = $context;
                                $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "categories", [], "any", false, false, false, 276));
                                foreach ($context['_seq'] as $context["_key"] => $context["subCat2"]) {
                                    // line 277
                                    yield "                                                                                    <li>
                                                                                        <a href=\"";
                                    // line 278
                                    yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home", ["slug" => CoreExtension::getAttribute($this->env, $this->source, $context["subCat2"], "name", [], "any", false, false, false, 278)]), "html", null, true);
                                    yield "\"
                                                                                           class=\"dropdown-item\">";
                                    // line 279
                                    yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["subCat2"], "name", [], "any", false, false, false, 279), "html", null, true);
                                    yield "</a>
                                                                                    </li>
                                                                                ";
                                }
                                $_parent = $context['_parent'];
                                unset($context['_seq'], $context['_key'], $context['subCat2'], $context['_parent']);
                                $context = array_intersect_key($context, $_parent) + $_parent;
                                // line 282
                                yield "                                                                            </ul>
                                                                        ";
                            }
                            // line 284
                            yield "                                                                    </li>
                                                                ";
                        } else {
                            // line 286
                            yield "                                                                    <li>
                                                                        <a href=\"";
                            // line 287
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home", ["slug" => CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "name", [], "any", false, false, false, 287)]), "html", null, true);
                            yield "\"
                                                                           class=\"dropdown-item\">";
                            // line 288
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["subCat"], "name", [], "any", false, false, false, 288), "html", null, true);
                            yield "</a>
                                                                    </li>
                                                                ";
                        }
                        // line 291
                        yield "                                                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_key'], $context['subCat'], $context['_parent']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 292
                    yield "
                                                        </ul>
                                                    ";
                }
                // line 295
                yield "                                                </li>
                                            ";
            } else {
                // line 297
                yield "                                                <li><a href=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home", ["slug" => CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "name", [], "any", false, false, false, 297)]), "html", null, true);
                yield "\"
                                                       class=\"dropdown-item\">";
                // line 298
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["cat"], "name", [], "any", false, false, false, 298), "html", null, true);
                yield "</a>
                                                </li>
                                            ";
            }
            // line 301
            yield "                                        ";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 302
            yield "                                            ";
            // line 303
            yield "                                            <li class=\"empty-menu-placeholder\">
                                                <div class=\"empty-content text-center py-5 px-3\">
                                                    <div class=\"empty-icon mb-3\">
                                                        <i class=\"fas fa-th-large text-muted opacity-25\"
                                                           style=\"font-size: 3rem;\"></i>
                                                    </div>
                                                    <h6 class=\"fw-bold text-dark\">Aucune catégorie</h6>
                                                    <p class=\"text-muted small\">Les rayons sont en cours de mise à
                                                        jour.</p>
                                                    <button class=\"btn btn-sm rounded-pill mt-2 px-4\"
                                                            style=\"background: #082C6A; color: white;\"
                                                            onclick=\"window.location.reload();\">
                                                        Actualiser
                                                    </button>
                                                </div>
                                            </li>
                                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['cat'], $context['_parent'], $context['_iterated']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 320
        yield "                                        <!-- End Level two -->
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                ";
        // line 329
        yield "                ";
        // line 330
        yield "                ";
        // line 331
        yield "                ";
        // line 332
        yield "                ";
        // line 333
        yield "                ";
        // line 334
        yield "                ";
        // line 335
        yield "                ";
        // line 336
        yield "                ";
        // line 337
        yield "
                ";
        // line 339
        yield "                <div class=\"header-nav-menu py-3\">
                    <div class=\"container\">
                        <div class=\"search-content\">
                            ";
        // line 342
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 342, $this->source); })()), 'form_start');
        yield "
                            <div class=\"search-section-wb\">
                                <div class=\"input-group search-wrapper\">

                                    <input type=\"text\"
                                           name=\"";
        // line 347
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\FormExtension']->getFieldName(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 347, $this->source); })()), "name", [], "any", false, false, false, 347)), "html", null, true);
        yield "\"
                                           id=\"";
        // line 348
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\FormExtension']->getFieldId(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 348, $this->source); })()), "name", [], "any", false, false, false, 348)), "html", null, true);
        yield "\"
                                           class=\"form-control search-input ps-4\"
                                           style=\"font-size: 1.8em;\"
                                           placeholder=\"Rechercher un produit ou une marque...\"
                                           aria-label=\"Search\">

                                    <button type=\"submit\" class=\"btn btn-search-wb\" type=\"button\">
                                        Rechercher
                                    </button>

                                    ";
        // line 359
        yield "                                </div>
                            </div>
                            ";
        // line 361
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 361, $this->source); })()), 'form_end');
        yield "
                        </div>
                    </div>
                </div>
                <div class=\"header-vendor-btn\">

                    ";
        // line 368
        yield "                    ";
        // line 369
        yield "                    ";
        // line 370
        yield "                    ";
        // line 371
        yield "                    ";
        // line 372
        yield "                    ";
        // line 373
        yield "                    ";
        // line 374
        yield "                    ";
        // line 375
        yield "                    ";
        // line 376
        yield "                    ";
        // line 377
        yield "                </div>
            </div>
        </div>
    </div>
</header>
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
        return "menus/header.html.twig";
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
        return array (  734 => 377,  732 => 376,  730 => 375,  728 => 374,  726 => 373,  724 => 372,  722 => 371,  720 => 370,  718 => 369,  716 => 368,  707 => 361,  703 => 359,  690 => 348,  686 => 347,  678 => 342,  673 => 339,  670 => 337,  668 => 336,  666 => 335,  664 => 334,  662 => 333,  660 => 332,  658 => 331,  656 => 330,  654 => 329,  644 => 320,  622 => 303,  620 => 302,  615 => 301,  609 => 298,  604 => 297,  600 => 295,  595 => 292,  589 => 291,  583 => 288,  579 => 287,  576 => 286,  572 => 284,  568 => 282,  559 => 279,  555 => 278,  552 => 277,  548 => 276,  544 => 274,  542 => 273,  538 => 272,  532 => 269,  528 => 267,  526 => 266,  523 => 265,  519 => 264,  515 => 262,  513 => 261,  509 => 260,  504 => 258,  500 => 256,  497 => 255,  492 => 254,  458 => 222,  437 => 206,  435 => 205,  433 => 204,  420 => 203,  415 => 200,  400 => 198,  395 => 195,  385 => 191,  380 => 189,  377 => 188,  373 => 187,  366 => 185,  363 => 184,  360 => 183,  356 => 180,  346 => 175,  340 => 171,  338 => 170,  332 => 167,  327 => 165,  322 => 162,  305 => 161,  299 => 159,  296 => 158,  293 => 156,  286 => 152,  283 => 151,  281 => 150,  275 => 147,  270 => 145,  267 => 144,  264 => 142,  246 => 141,  240 => 137,  238 => 136,  236 => 135,  234 => 134,  232 => 133,  230 => 132,  228 => 131,  226 => 130,  224 => 129,  222 => 128,  220 => 127,  211 => 119,  199 => 108,  197 => 107,  196 => 106,  195 => 105,  190 => 103,  186 => 102,  154 => 72,  151 => 70,  149 => 69,  148 => 68,  146 => 67,  143 => 65,  135 => 60,  128 => 56,  125 => 55,  116 => 49,  110 => 46,  106 => 44,  104 => 43,  96 => 38,  92 => 37,  72 => 20,  68 => 19,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<div id=\"mobile-cart-popup\" class=\"mobile-popup d-lg-none\">
    <div class=\"popup-content\">
        <div class=\"icon-box\">
            <i class=\"fas fa-shopping-bag\"></i>
        </div>
        <div class=\"text-box\">
            <span class=\"popup-title\">Ajouté au panier !</span>
            <span class=\"popup-subtitle\">Votre article a été bien ajouté.</span>
        </div>
        <button class=\"btn-close-popup\" onclick=\"this.parentElement.parentElement.classList.remove('active')\">
            <i class=\"fas fa-times\"></i>
        </button>
    </div>
</div>
<div class=\"header-top-section\">
    <div class=\"container\">
        <div class=\"header-top\">
            <div class=\"header-profile\">
                <a href=\"{{ path('app_account') }}\"><span>Mon compte</span></a>
                <a href=\"{{ path('account_order') }}\"><span>Commande</span></a>
                <a href=\"#\"><span>Support</span></a>
            </div>
            <div class=\"header-contact d-none d-lg-block\">
                <a href=\"#\">
                    <span>Besoin d'aide? appelez-nous:</span>
                    <span class=\"contact-number\">+223 74 74 17 45</span>
                </a>
            </div>
        </div>
    </div>
</div>
<header id=\"header\" class=\"header sticky-top\">
    <div class=\"header-center-section d-none d-lg-block bg-white\">
        <div class=\"container\">
            <div class=\"header-center\">
                <div class=\"logo\">
                    <a href=\"{{ path('app_home') }}\">
                        <img src=\"{{ asset('assets/images/logos/logo_orig_1.png') }}\" width=\"150px\" alt=\"logo\">
                    </a>
                </div>
                <div class=\"header-cart-items\">

                    {% if is_granted('IS_AUTHENTICATED_FULLY') %}
                        <div class=\"header-user\">
                               <span>
                        Salut {{ app.user.firstName }} |
                                </span>

                            <a href=\"{{ path('app_logout') }}\">  <span>
                                  Se déconnecter
                                </span></a>

                        </div>
                    {% else %}
                        <div class=\"header-user\">
                            <a href=\"{{ path('app_login') }}\"> <span>
                         Se connecter
                                </span></a>
                            |
                            <a href=\"{{ path('register_customer') }}\">  <span>
                                    S'inscrire
                                </span></a>
                        </div>
                    {% endif %}

                    {#                    <div class=\"header-cart\"> #}
                    {{ component('HeaderCartComponent', {
                        previewCart : previewCart,
                        currentCart : currentCart,
                    }) }}
                    {#                    </div> #}
                    <div class=\"header-user\">
                        <a href=\"#\">
                                <span>
                                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"
                                         class=\"fill-current\">
                                        <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>
                                        <path
                                            d=\"M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z\">
                                        </path>
                                    </svg>
                                </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <nav class=\"mobile-menu d-block d-lg-none\">
        <div class=\"mobile-menu-header d-flex justify-content-between align-items-center\">
            <button class=\"btn\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasWithBothOptions\"
                    aria-controls=\"offcanvasWithBothOptions\">
                    <span>
                        <svg width=\"14\" height=\"9\" viewBox=\"0 0 14 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
                            <rect width=\"14\" height=\"1\" fill=\"#1D1D1D\"/>
                            <rect y=\"8\" width=\"14\" height=\"1\" fill=\"#1D1D1D\"/>
                            <rect y=\"4\" width=\"10\" height=\"1\" fill=\"#1D1D1D\"/>
                        </svg>
                    </span>
            </button>
            <a href=\"{{ path('app_home') }}\" class=\"mobile-header-logo\">
                <img src=\"{{ asset('assets/images/logos/logo_orig_1.png') }}\" width=\"100px\" alt=\"logo\">
            </a>
            {{ component('HeaderCartComponent', {
                previewCart : previewCart,
                currentCart : currentCart,
            }) }}
        </div>

        <div class=\"offcanvas offcanvas-start\" data-bs-scroll=\"true\" tabindex=\"-1\" id=\"offcanvasWithBothOptions\">

            <div class=\"offcanvas-body\">
                <div class=\"header-top border-bottom p-3 d-flex justify-content-between align-items-center\">
                    <div class=\"\">
                        <h5 class=\"mb-0 fw-bold\" style=\"color: #082C6A;\">Toutes les catégories</h5>
                    </div>
                    {# Bouton de fermeture personnalisé #}
                    <button type=\"button\"
                            class=\"btn-close-custom\"
                            data-bs-dismiss=\"offcanvas\"
                            aria-label=\"Close\">
                        <i class=\"fas fa-times\"></i>
                    </button>
                </div>
                {#                <div class=\"header-input\"> #}
                {#                    <input type=\"text\" placeholder=\"Search....\"> #}
                {#                    <span> #}
                {#                            <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" #}
                {#                                 xmlns=\"http://www.w3.org/2000/svg\"> #}
                {#                                <path #}
                {#                                    d=\"M13.9708 16.4151C12.5227 17.4021 10.9758 17.9723 9.27353 18.0062C5.58462 18.0802 2.75802 16.483 1.05056 13.1945C-1.76315 7.77253 1.33485 1.37571 7.25086 0.167548C12.2281 -0.848249 17.2053 2.87895 17.7198 7.98579C17.9182 9.95558 17.5566 11.7939 16.5852 13.5061C16.4512 13.742 16.483 13.8725 16.6651 14.0553C18.2412 15.6386 19.8112 17.2272 21.3735 18.8244C22.1826 19.6513 22.2058 20.7559 21.456 21.4932C20.7697 22.1678 19.7047 22.1747 18.9764 21.4793C18.3623 20.8917 17.7774 20.2737 17.1796 19.6688C16.118 18.5929 15.0564 17.5153 13.9708 16.4151ZM2.89545 9.0364C2.91692 12.4172 5.59664 15.1164 8.91967 15.1042C12.2384 15.092 14.9138 12.3493 14.8889 8.98505C14.864 5.63213 12.1826 2.92508 8.89047 2.92857C5.58204 2.93118 2.87397 5.68958 2.89545 9.0364Z\" #}
                {#                                    fill=\"black\"></path> #}
                {#                            </svg> #}
                {#                        </span> #}
                {#                </div> #}

                <div class=\"category-mobile-menu\">
                    <ul class=\"list-unstyled\">
                        <ul class=\"list-unstyled custom-elevated-menu\">
                            {% for cat in categories %}
                                <li class=\"border-bottom\">
                                    {# --- NIVEAU 1 (Principal) --- #}
                                    <div class=\"d-flex align-items-center justify-content-between p-3 bg-white\">
                                        <a href=\"{{ path('app_home', {'slug': cat.name}) }}\"
                                           class=\"d-flex align-items-center text-decoration-none\">
                                            <span class=\"text-dark fw-bold fs-5\">{{ cat.name }}</span>
                                        </a>

                                        {% if cat.categories is not empty %}
                                            <button class=\"btn border-0 p-3\" type=\"button\" data-bs-toggle=\"collapse\"
                                                    data-bs-target=\"#collapse-{{ loop.index }}\">
                                                <i class=\"fas fa-chevron-down text-primary\"></i>
                                            </button>
                                        {% endif %}
                                    </div>
                                    {# --- NIVEAU 2 (Sous-menus) --- #}
                                    {% if cat.categories is not empty %}
                                        <div class=\"collapse bg-light\" id=\"collapse-{{ loop.index }}\">
                                            <ul class=\"list-unstyled ps-0 pb-2\">
                                                {% for subCat in cat.categories %}
                                                    <li class=\"py-2 border-bottom border-white\">
                                                        <div
                                                            class=\"d-flex justify-content-between align-items-center px-4 py-2\">
                                                            <a href=\"{{ path('app_home', {'slug': subCat.name}) }}\"
                                                               class=\"text-dark text-decoration-none fw-medium fs-6\">
                                                                {{ subCat.name }}
                                                            </a>

                                                            {% if subCat.categories is not empty %}
                                                                <button
                                                                    class=\"btn btn-sm btn-outline-secondary rounded-circle\"
                                                                    style=\"width: 10px; height: 10px; padding: 0;\"
                                                                    data-bs-toggle=\"collapse\"
                                                                    data-bs-target=\"#sub-collapse-{{ loop.parent.loop.index }}-{{ loop.index }}\">
                                                                    <i class=\"fas fa-plus\"
                                                                       style=\"font-size: 0.7rem;\"></i>
                                                                </button>
                                                            {% endif %}
                                                        </div>

                                                        {# --- NIVEAU 3 (Petits-enfants) --- #}
                                                        {% if subCat.categories is not empty %}
                                                            <div class=\"collapse bg-white-50\"
                                                                 id=\"sub-collapse-{{ loop.parent.loop.index }}-{{ loop.index }}\">
                                                                <ul class=\"list-unstyled ps-5 mt-1\">
                                                                    {% for subCat2 in subCat.categories %}
                                                                        <li class=\"py-2\">
                                                                            <a href=\"{{ path('app_home', {'slug': subCat2.name}) }}\"
                                                                               class=\"text-secondary text-decoration-none fs-6 d-block\">
                                                                                <i class=\"fas fa-angle-right me-2 text-muted\"></i>{{ subCat2.name }}
                                                                            </a>
                                                                        </li>
                                                                    {% endfor %}
                                                                </ul>
                                                            </div>
                                                        {% endif %}
                                                    </li>
                                                {% endfor %}
                                            </ul>
                                        </div>
                                    {% endif %}
                                </li>
                            {% else %}
                                {# --- MESSAGE SI VIDE --- #}
                                <li class=\"empty-menu-placeholder\">
                                    <div class=\"empty-content text-center py-5 px-3\">
                                        <div class=\"empty-icon mb-3\">
                                            <i class=\"fas fa-th-large text-muted opacity-25\"
                                               style=\"font-size: 3rem;\"></i>
                                        </div>
                                        <h6 class=\"fw-bold text-dark\">Aucune catégorie</h6>
                                        <p class=\"text-muted small\">Les rayons sont en cours de mise à jour.</p>
                                        <button class=\"btn btn-sm rounded-pill mt-2 px-4\"
                                                style=\"background: #082C6A; color: white;\"
                                                onclick=\"window.location.reload();\">
                                            Actualiser
                                        </button>
                                    </div>
                                </li>
                            {% endfor %}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <div class=\"header-bottom d-lg-block d-none\">
        <div class=\"container\">
            <div class=\"header-nav\">
                <nav class=\"navbar-expand-md\">
                    <div class=\"container\">
                        <div class=\"collapse navbar-collapse order-3\" id=\"navbarCollapse\">
                            <!-- Left navbar links -->
                            <ul class=\"navbar-nav\">
                                <li class=\"nav-item dropdown dropdown-hover\">
                                    <a id=\"dropdownSubMenu1\" href=\"#\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\"
                                       aria-expanded=\"false\" class=\"nav-link dropdown-toggle\">
                                        <span class=\"dropdown-btn\">
                                            <span class=\"dropdown-icon\">
                                                <svg width=\"14\" height=\"9\" viewBox=\"0 0 14 9\" fill=\"none\"
                                                     xmlns=\"http://www.w3.org/2000/svg\">
                                                    <rect width=\"14\" height=\"1\"/>
                                                    <rect y=\"8\" width=\"14\" height=\"1\"/>
                                                    <rect y=\"4\" width=\"10\" height=\"1\"/>
                                                </svg>
                                            </span>
                                            <span class=\"list-text\">Catégories</span>
                                        </span>
                                    </a>
                                    <ul aria-labelledby=\"dropdownSubMenu1\" class=\"dropdown-menu border-0 shadow\">
                                        <!-- Level two dropdown-->
                                        {% for cat in categories %}
                                            {% if(cat.categories is not empty) %}
                                                <li class=\"dropdown-submenu dropdown-hover\">
                                                    <a id=\"dropdownSubMenu2\"
                                                       href=\"{{ path('app_home',{slug:cat.name}) }}\" role=\"button\"
                                                       aria-haspopup=\"true\" aria-expanded=\"false\"
                                                       class=\"dropdown-item dropdown-toggle\">{{ cat.name }}</a>
                                                    {% if cat.categories|length > 0 %}
                                                        <ul aria-labelledby=\"dropdownSubMenu2\"
                                                            class=\"dropdown-menu border-0 shadow\">
                                                            {% for subCat in cat.categories %}
                                                                <!-- Level three dropdown-->
                                                                {% if(subCat.categories is not empty) %}
                                                                    <li class=\"dropdown-submenu\">
                                                                        <a id=\"dropdownSubMenu3\"
                                                                           href=\"{{ path('app_home',{'slug':subCat.name}) }}\"
                                                                           role=\"button\"
                                                                           aria-haspopup=\"true\" aria-expanded=\"false\"
                                                                           class=\"dropdown-item dropdown-toggle\">{{ subCat.name }}</a>
                                                                        {% if subCat.categories|length > 0 %}
                                                                            <ul aria-labelledby=\"dropdownSubMenu3\"
                                                                                class=\"dropdown-menu border-0 shadow\">
                                                                                {% for subCat2 in subCat.categories %}
                                                                                    <li>
                                                                                        <a href=\"{{ path('app_home',{'slug':subCat2.name}) }}\"
                                                                                           class=\"dropdown-item\">{{ subCat2.name }}</a>
                                                                                    </li>
                                                                                {% endfor %}
                                                                            </ul>
                                                                        {% endif %}
                                                                    </li>
                                                                {% else %}
                                                                    <li>
                                                                        <a href=\"{{ path('app_home',{'slug':subCat.name}) }}\"
                                                                           class=\"dropdown-item\">{{ subCat.name }}</a>
                                                                    </li>
                                                                {% endif %}
                                                            {% endfor %}

                                                        </ul>
                                                    {% endif %}
                                                </li>
                                            {% else %}
                                                <li><a href=\"{{ path('app_home',{slug:cat.name}) }}\"
                                                       class=\"dropdown-item\">{{ cat.name }}</a>
                                                </li>
                                            {% endif %}
                                        {% else %}
                                            {# --- MESSAGE SI VIDE --- #}
                                            <li class=\"empty-menu-placeholder\">
                                                <div class=\"empty-content text-center py-5 px-3\">
                                                    <div class=\"empty-icon mb-3\">
                                                        <i class=\"fas fa-th-large text-muted opacity-25\"
                                                           style=\"font-size: 3rem;\"></i>
                                                    </div>
                                                    <h6 class=\"fw-bold text-dark\">Aucune catégorie</h6>
                                                    <p class=\"text-muted small\">Les rayons sont en cours de mise à
                                                        jour.</p>
                                                    <button class=\"btn btn-sm rounded-pill mt-2 px-4\"
                                                            style=\"background: #082C6A; color: white;\"
                                                            onclick=\"window.location.reload();\">
                                                        Actualiser
                                                    </button>
                                                </div>
                                            </li>
                                        {% endfor %}
                                        <!-- End Level two -->
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                {#                <div class=\"header-nav-menu\"> #}
                {#                    <div class=\"search-content\"> #}
                {#                        <div class=\"search-section\"> #}
                {#                            <input type=\"text\" placeholder=\"Rechercher les produits.........\"> #}
                {#                            <div class=\"divider\"></div> #}
                {#                            <button type=\"button\">All Categories</button> #}
                {#                            <a href=\"#\" class=\"shop-btn\">Search</a> #}
                {#                        </div> #}
                {#                    </div> #}

                {#                </div> #}
                <div class=\"header-nav-menu py-3\">
                    <div class=\"container\">
                        <div class=\"search-content\">
                            {{ form_start(form) }}
                            <div class=\"search-section-wb\">
                                <div class=\"input-group search-wrapper\">

                                    <input type=\"text\"
                                           name=\"{{ field_name(form.name) }}\"
                                           id=\"{{ field_id(form.name) }}\"
                                           class=\"form-control search-input ps-4\"
                                           style=\"font-size: 1.8em;\"
                                           placeholder=\"Rechercher un produit ou une marque...\"
                                           aria-label=\"Search\">

                                    <button type=\"submit\" class=\"btn btn-search-wb\" type=\"button\">
                                        Rechercher
                                    </button>

                                    {#                                    {{ form_widget(form.saved, {'label':'Enregistrer'}) }} #}
                                </div>
                            </div>
                            {{ form_end(form) }}
                        </div>
                    </div>
                </div>
                <div class=\"header-vendor-btn\">

                    {#                    <a href=\"become-vendor.html\" class=\"shop-btn\"> #}
                    {#                        <span class=\"list-text shop-text\">Became Vendor</span> #}
                    {#                        <span class=\"icon\"> #}
                    {#                                <svg width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"none\" #}
                    {#                                     xmlns=\"http://www.w3.org/2000/svg\"> #}
                    {#                                    <path #}
                    {#                                        d=\"M20.257 7.07205C20.038 7.07205 19.8474 7.07205 19.6563 7.07205C17.4825 7.07205 15.3086 7.07205 13.1352 7.07205C10.1545 7.07205 7.17336 7.0725 4.19265 7.0725C3.30392 7.0725 2.41519 7.07024 1.52646 7.07295C1.12124 7.07431 0.809811 7.25265 0.625785 7.62651C0.43866 8.00623 0.488204 8.37556 0.737704 8.70426C0.932347 8.96027 1.20529 9.08173 1.52867 9.08037C2.20948 9.07766 2.8903 9.07902 3.57111 9.07902C5.95285 9.07902 8.33415 9.07902 10.7159 9.07902C13.782 9.07902 16.8485 9.07902 19.9146 9.07902C20.0274 9.07902 20.1398 9.07902 20.2822 9.07902C20.1871 9.18332 20.1141 9.26865 20.0358 9.34857C19.5656 9.82672 19.0922 10.3022 18.6229 10.7812C18.1363 11.2779 17.6541 11.7791 17.1675 12.2757C16.4942 12.9634 15.8116 13.6415 15.1476 14.3391C14.9096 14.5893 14.8455 14.9157 14.9406 15.2575C15.156 16.0305 16.0567 16.2499 16.6119 15.6769C17.4342 14.8286 18.2655 13.9892 19.0927 13.1458C19.6948 12.5317 20.2968 11.9172 20.8985 11.3023C21.5952 10.5902 22.2911 9.87729 22.9878 9.1648C23.1059 9.04425 23.2249 8.9246 23.3435 8.8045C23.6903 8.45367 23.7239 7.84278 23.3943 7.4766C22.998 7.03683 22.5852 6.61241 22.1756 6.18573C21.7965 5.79066 21.4134 5.39965 21.0303 5.00909C20.6733 4.64473 20.3132 4.28306 19.9553 3.91915C19.6147 3.57284 19.2754 3.22563 18.9356 2.87887C18.5154 2.44948 18.0951 2.01964 17.6744 1.5907C17.2511 1.15861 16.8198 0.734188 16.4057 0.29261C16.0363 -0.101559 15.3697 -0.0816927 15.0344 0.257392C14.6238 0.672782 14.5999 1.26381 14.995 1.68552C15.3378 2.0517 15.6957 2.40342 16.0465 2.76192C16.929 3.66449 17.8111 4.56797 18.6937 5.47054C19.1829 5.97081 19.6735 6.47018 20.1632 6.97046C20.1885 6.99574 20.2123 7.02329 20.257 7.07205Z\"/> #}
                    {#                                </svg> #}
                    {#                            </span> #}
                    {#                    </a> #}
                </div>
            </div>
        </div>
    </div>
</header>
", "menus/header.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/menus/header.html.twig");
    }
}
