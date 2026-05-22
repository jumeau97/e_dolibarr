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

/* components/UserComponent.html.twig */
class __TwigTemplate_1df652ac546527597ace85eae02799e7 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/UserComponent.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/UserComponent.html.twig"));

        // line 1
        yield "<div";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["attributes"]) || array_key_exists("attributes", $context) ? $context["attributes"] : (function () { throw new RuntimeError('Variable "attributes" does not exist.', 1, $this->source); })()), "html", null, true);
        yield ">
    <section class=\"content\">
        <div class=\"container-fluid\">
            <!-- /.row -->
            <div class=\"row\">
                <div class=\"col-12\">
                    <div data-loading=\"show\" class=\"text-center p-3\">
                        <div class=\"spinner-border text-primary\" role=\"status\">
                            <span class=\"sr-only\">Chargement...</span>
                        </div>
                        <p>Mise à jour des utilisateurs...</p>
                    </div>
                    <div class=\"card\">
                        <div class=\"card-header\">
                            <h3 class=\"card-title\">
                                <button type=\"button\" class=\"btn btn-primary btn-sm shadow-sm\" data-toggle=\"modal\"
                                        data-target=\"#modal-add-user\">
                                    <i class=\"fas fa-user-plus mr-1\"></i> Nouveau membre
                                </button>
                            </h3>

                            <div class=\"card-tools\">
                                <div class=\"input-group input-group-sm\" style=\"width: 400px;\">
                                    <input type=\"text\" name=\"table_search\" data-model=\"norender|searchQuery\"
                                           class=\"form-control float-right\"
                                           placeholder=\"Nom\">

                                    <div class=\"input-group-append\">
                                        <button data-action=\"live#\$render\" type=\"submit\" class=\"btn btn-default\">
                                            <i class=\"fas fa-search\"></i>
                                            Rechercher
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class=\"card-body table-responsive p-0\">
                            <table class=\"table table-hover text-nowrap\">
                                <thead>
                                <tr>
                                    <th>Prénom & Nom</th>
                                    <th>E-mail</th>
                                    <th>Rôles</th>
                                    <th class=\"text-center\">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                ";
        // line 49
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["this"]) || array_key_exists("this", $context) ? $context["this"] : (function () { throw new RuntimeError('Variable "this" does not exist.', 49, $this->source); })()), "pagedData", [], "any", false, false, false, 49), "items", [], "any", false, false, false, 49));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["user"]) {
            // line 50
            yield "                                    ";
            // line 51
            yield "                                    <tr data-toggle=\"collapse\" data-target=\"#user-detail-";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 51), "html", null, true);
            yield "\"
                                        style=\"cursor: pointer;\">
                                        <td>
                                            <span class=\"text-primary\"><i class=\"fas fa-user-circle mr-1\"></i></span>
                                            <strong>";
            // line 55
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "firstName", [], "any", false, false, false, 55), "html", null, true);
            yield "</strong> ";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::upper($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["user"], "lastName", [], "any", false, false, false, 55)), "html", null, true);
            yield "
                                        </td>
                                        <td>";
            // line 57
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "email", [], "any", false, false, false, 57), "html", null, true);
            yield "</td>
                                        <td>
                                            ";
            // line 59
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "roles", [], "any", false, false, false, 59));
            foreach ($context['_seq'] as $context["_key"] => $context["role"]) {
                // line 60
                yield "                                                ";
                if (($context["role"] == "ROLE_ADMIN")) {
                    yield "<span
                                                    class=\"badge badge-danger\">Admin</span>
                                                ";
                } elseif ((                // line 62
$context["role"] == "ROLE_FORMATEUR")) {
                    yield "<span class=\"badge badge-warning\">Formateur</span>
                                                ";
                } elseif ((                // line 63
$context["role"] == "ROLE_APPRENANT")) {
                    yield "<span class=\"badge badge-warning\">Apprenant</span>
                                                    ";
                    // line 65
                    yield "                                                ";
                }
                // line 66
                yield "                                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['role'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 67
            yield "                                        </td>
                                        <td class=\"text-center\">
                                            <button class=\"btn btn-xs btn-outline-info shadow-sm\">
                                                <i class=\"fas fa-plus\"></i> Détails
                                            </button>
                                        </td>
                                    </tr>

                                    ";
            // line 76
            yield "                                    <tr id=\"user-detail-";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 76), "html", null, true);
            yield "\" class=\"collapse bg-light\">
                                        <td colspan=\"4\" class=\"p-4 border-left border-info\"
                                            style=\"border-left-width: 5px !important;\">
                                            <div class=\"row\">
                                                ";
            // line 81
            yield "                                                <div class=\"col-md-4\">
                                                    <h6 class=\"text-muted font-weight-bold small text-uppercase\">
                                                        Informations profil</h6>
                                                    <hr class=\"mt-1\">
                                                    ";
            // line 86
            yield "                                                    <p class=\"mb-1\"><strong>Identifiant unique :</strong> #";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 86), "html", null, true);
            yield "
                                                    </p>
                                                </div>

                                                <div class=\"col-md-8 border-left pl-4\">
                                                    ";
            // line 91
            if (CoreExtension::inFilter("ROLE_FORMATEUR", CoreExtension::getAttribute($this->env, $this->source, $context["user"], "roles", [], "any", false, false, false, 91))) {
                // line 92
                yield "                                                        ";
                // line 93
                yield "                                                        <h6 class=\"text-info font-weight-bold\"><i
                                                                class=\"fas fa-chalkboard-teacher mr-1\"></i> Modules
                                                            enseignés</h6>
                                                        <hr class=\"mt-1\">
                                                        ";
                // line 97
                $context["managedModules"] = ((CoreExtension::getAttribute($this->env, $this->source, $context["user"], "modules", [], "any", true, true, false, 97)) ? (Twig\Extension\CoreExtension::default(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "modules", [], "any", false, false, false, 97), [])) : ([]));
                // line 98
                yield "                                                        ";
                if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), (isset($context["managedModules"]) || array_key_exists("managedModules", $context) ? $context["managedModules"] : (function () { throw new RuntimeError('Variable "managedModules" does not exist.', 98, $this->source); })())) > 0)) {
                    // line 99
                    yield "                                                            <div class=\"row\">
                                                                ";
                    // line 100
                    $context['_parent'] = $context;
                    $context['_seq'] = CoreExtension::ensureTraversable((isset($context["managedModules"]) || array_key_exists("managedModules", $context) ? $context["managedModules"] : (function () { throw new RuntimeError('Variable "managedModules" does not exist.', 100, $this->source); })()));
                    foreach ($context['_seq'] as $context["_key"] => $context["module"]) {
                        // line 101
                        yield "                                                                    <div class=\"col-sm-6 mb-2\">
                                                                        <div
                                                                            class=\"p-3 border rounded bg-white shadow-sm position-relative overflow-hidden\">

                                                                            ";
                        // line 106
                        yield "                                                                            <div class=\"position-absolute\"
                                                                                 style=\"top: 10px; right: 10px;\">
                                                                                <i class=\"fas fa-circle ";
                        // line 108
                        yield (((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["module"], "state", [], "any", false, false, false, 108)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("text-success") : ("text-danger"));
                        yield "\"
                                                                                   title=\"";
                        // line 109
                        yield (((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["module"], "state", [], "any", false, false, false, 109)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("Actif") : ("Inactif"));
                        yield "\"
                                                                                   style=\"font-size: 0.6rem;\"></i>
                                                                            </div>

                                                                            <div class=\"d-flex align-items-center mb-2\">
                                                                                <i class=\"fas fa-layer-group text-info mr-2\"></i>
                                                                                <span class=\"font-weight-bold text-dark\"
                                                                                      style=\"font-size: 0.9rem;\">";
                        // line 116
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["module"], "libelle", [], "any", false, false, false, 116), "html", null, true);
                        yield "</span>
                                                                            </div>

                                                                            <div
                                                                                class=\"d-flex justify-content-between align-items-center\">
                                                                                ";
                        // line 122
                        yield "                                                                                <div>
                                                                                    ";
                        // line 123
                        if ((CoreExtension::getAttribute($this->env, $this->source, $context["module"], "isPromotion", [], "any", false, false, false, 123) && CoreExtension::getAttribute($this->env, $this->source, $context["module"], "promotionPrice", [], "any", false, false, false, 123))) {
                            // line 124
                            yield "                                                                                        <span
                                                                                            class=\"badge badge-success shadow-xs\">
                            <i class=\"fas fa-tag mr-1\"></i> ";
                            // line 126
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, $context["module"], "promotionPrice", [], "any", false, false, false, 126), 0, ".", " "), "html", null, true);
                            yield " FCFA
                        </span>
                                                                                        <small class=\"text-muted ml-1\"
                                                                                               style=\"text-decoration: line-through;\">
                                                                                            ";
                            // line 130
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, $context["module"], "price", [], "any", false, false, false, 130), 0, ".", " "), "html", null, true);
                            yield "
                                                                                        </small>
                                                                                    ";
                        } else {
                            // line 133
                            yield "                                                                                        <span
                                                                                            class=\"badge badge-light border text-dark\">
                            ";
                            // line 135
                            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(((CoreExtension::getAttribute($this->env, $this->source, $context["module"], "price", [], "any", true, true, false, 135)) ? (Twig\Extension\CoreExtension::default(CoreExtension::getAttribute($this->env, $this->source, $context["module"], "price", [], "any", false, false, false, 135), 0)) : (0)), 0, ".", " "), "html", null, true);
                            yield " FCFA
                        </span>
                                                                                    ";
                        }
                        // line 138
                        yield "                                                                                </div>

                                                                                ";
                        // line 141
                        yield "                                                                                ";
                        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["module"], "isPromotion", [], "any", false, false, false, 141)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                            // line 142
                            yield "                                                                                    <span
                                                                                        class=\"badge badge-pill badge-warning\"
                                                                                        style=\"font-size: 0.65rem; text-transform: uppercase;\">
                        Promo
                    </span>
                                                                                ";
                        }
                        // line 148
                        yield "                                                                            </div>

                                                                            ";
                        // line 151
                        yield "                                                                            ";
                        if ((($tmp =  !CoreExtension::getAttribute($this->env, $this->source, $context["module"], "state", [], "any", false, false, false, 151)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                            // line 152
                            yield "                                                                                <div class=\"mt-1\">
                                                                                    <small
                                                                                        class=\"text-danger font-italic\"
                                                                                        style=\"font-size: 0.75rem;\">
                                                                                        <i class=\"fas fa-eye-slash mr-1\"></i>
                                                                                        Actuellement masqué
                                                                                    </small>
                                                                                </div>
                                                                            ";
                        }
                        // line 161
                        yield "                                                                        </div>
                                                                    </div>
                                                                ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_key'], $context['module'], $context['_parent']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 164
                    yield "                                                            </div>
                                                        ";
                } else {
                    // line 166
                    yield "                                                            <p class=\"text-muted small italic\">Aucun module assigné.</p>
                                                        ";
                }
                // line 168
                yield "
                                                    ";
            } elseif (CoreExtension::inFilter("ROLE_APPRENANT", CoreExtension::getAttribute($this->env, $this->source,             // line 169
$context["user"], "roles", [], "any", false, false, false, 169))) {
                // line 170
                yield "                                                        ";
                // line 171
                yield "                                                        <h6 class=\"text-primary font-weight-bold\"><i
                                                                class=\"fas fa-user-graduate mr-1\"></i> Formations
                                                            suivies</h6>
                                                        <hr class=\"mt-1\">

                                                        ";
                // line 177
                yield "                                                        ";
                if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["user"], "inscriptions", [], "any", false, false, false, 177)) > 0)) {
                    // line 178
                    yield "                                                            <div class=\"table-responsive\">
                                                                <table class=\"table table-sm table-borderless\">
                                                                    <thead>
                                                                    <tr class=\"text-muted small\">
                                                                        <th>Module</th>
                                                                        <th>Statut</th>
                                                                        <th>Certification</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    ";
                    // line 188
                    $context['_parent'] = $context;
                    $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "inscriptions", [], "any", false, false, false, 188));
                    foreach ($context['_seq'] as $context["_key"] => $context["ins"]) {
                        // line 189
                        yield "                                                                        <tr class=\"border-bottom\">
                                                                            <td class=\"py-2\">
                                                                                <span
                                                                                    class=\"font-weight-bold\">";
                        // line 192
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["ins"], "module", [], "any", false, false, false, 192), "libelle", [], "any", false, false, false, 192), "html", null, true);
                        yield "</span>
                                                                            </td>
                                                                            <td>
                                    <span
                                        class=\"badge ";
                        // line 196
                        yield (((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["ins"], "paymentState", [], "any", false, false, false, 196)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("badge-success") : ("badge-secondary"));
                        yield " btn-xs\">
                                        ";
                        // line 197
                        yield (((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["ins"], "paymentState", [], "any", false, false, false, 197)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("Payé") : ("En attente"));
                        yield "
                                    </span>
                                                                            </td>
                                                                            <td>
                                                                                ";
                        // line 201
                        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["ins"], "isCertified", [], "any", false, false, false, 201)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                            // line 202
                            yield "                                                                                    <span class=\"text-success small\"><i
                                                                                            class=\"fas fa-certificate mr-1\"></i>Certifié</span>
                                                                                ";
                        } else {
                            // line 205
                            yield "                                                                                    <span class=\"text-muted small\">En cours</span>
                                                                                ";
                        }
                        // line 207
                        yield "                                                                            </td>
                                                                        </tr>
                                                                    ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_key'], $context['ins'], $context['_parent']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 210
                    yield "                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        ";
                } else {
                    // line 214
                    yield "                                                            <p class=\"text-muted small italic\">Aucune inscription
                                                                enregistrée pour cet apprenant.</p>
                                                        ";
                }
                // line 217
                yield "                                                    ";
            }
            // line 218
            yield "                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ";
            $context['_iterated'] = true;
        }
        // line 222
        if (!$context['_iterated']) {
            // line 223
            yield "                                    <tr>
                                        <td colspan=\"4\" class=\"text-center py-5\">
                                            <div class=\"text-muted\">
                                                <i class=\"fas fa-users-slash fa-3x mb-3 opacity-50\"></i>
                                                <p class=\"lead\">Aucun utilisateur trouvé pour
                                                    \"<strong>";
            // line 228
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["searchQuery"]) || array_key_exists("searchQuery", $context) ? $context["searchQuery"] : (function () { throw new RuntimeError('Variable "searchQuery" does not exist.', 228, $this->source); })()), "html", null, true);
            yield "</strong>\"</p>
                                                <button class=\"btn btn-sm btn-primary\" data-action=\"live#update\"
                                                        data-model=\"searchQuery\" data-value=\"\">
                                                    Réinitialiser la recherche
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['user'], $context['_parent'], $context['_iterated']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 237
        yield "                                </tbody>
                            </table>
                        </div>

                        ";
        // line 242
        yield "                        ";
        if ((CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["this"]) || array_key_exists("this", $context) ? $context["this"] : (function () { throw new RuntimeError('Variable "this" does not exist.', 242, $this->source); })()), "pagedData", [], "any", false, false, false, 242), "totalItemCount", [], "any", false, false, false, 242) > 0)) {
            // line 243
            yield "                            <div class=\"card-footer clearfix\">
                                <ul class=\"pagination pagination-sm m-0 float-right\">
                                    <li class=\"page-item ";
            // line 245
            yield ((((isset($context["currentPage"]) || array_key_exists("currentPage", $context) ? $context["currentPage"] : (function () { throw new RuntimeError('Variable "currentPage" does not exist.', 245, $this->source); })()) <= 1)) ? ("disabled") : (""));
            yield "\">
                                        <button class=\"page-link\" data-action=\"live#update\" data-model=\"currentPage\"
                                                data-value=\"";
            // line 247
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(((isset($context["currentPage"]) || array_key_exists("currentPage", $context) ? $context["currentPage"] : (function () { throw new RuntimeError('Variable "currentPage" does not exist.', 247, $this->source); })()) - 1), "html", null, true);
            yield "\" ";
            yield ((((isset($context["currentPage"]) || array_key_exists("currentPage", $context) ? $context["currentPage"] : (function () { throw new RuntimeError('Variable "currentPage" does not exist.', 247, $this->source); })()) <= 1)) ? ("disabled") : (""));
            yield ">
                                            &laquo;
                                        </button>
                                    </li>

                                    ";
            // line 252
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(range(1, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["this"]) || array_key_exists("this", $context) ? $context["this"] : (function () { throw new RuntimeError('Variable "this" does not exist.', 252, $this->source); })()), "pagedData", [], "any", false, false, false, 252), "totalPage", [], "any", false, false, false, 252)));
            foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
                // line 253
                yield "                                        <li class=\"page-item ";
                yield ((($context["i"] == (isset($context["currentPage"]) || array_key_exists("currentPage", $context) ? $context["currentPage"] : (function () { throw new RuntimeError('Variable "currentPage" does not exist.', 253, $this->source); })()))) ? ("active") : (""));
                yield "\">
                                            <button class=\"page-link\" data-action=\"live#update\" data-model=\"currentPage\"
                                                    data-value=\"";
                // line 255
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["i"], "html", null, true);
                yield "\">";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["i"], "html", null, true);
                yield "</button>
                                        </li>
                                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['i'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 258
            yield "
                                    <li class=\"page-item ";
            // line 259
            yield ((((isset($context["currentPage"]) || array_key_exists("currentPage", $context) ? $context["currentPage"] : (function () { throw new RuntimeError('Variable "currentPage" does not exist.', 259, $this->source); })()) >= CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["this"]) || array_key_exists("this", $context) ? $context["this"] : (function () { throw new RuntimeError('Variable "this" does not exist.', 259, $this->source); })()), "pagedData", [], "any", false, false, false, 259), "totalPage", [], "any", false, false, false, 259))) ? ("disabled") : (""));
            yield "\">
                                        <button class=\"page-link\" data-action=\"live#update\" data-model=\"currentPage\"
                                                data-value=\"";
            // line 261
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(((isset($context["currentPage"]) || array_key_exists("currentPage", $context) ? $context["currentPage"] : (function () { throw new RuntimeError('Variable "currentPage" does not exist.', 261, $this->source); })()) + 1), "html", null, true);
            yield "\" ";
            yield ((((isset($context["currentPage"]) || array_key_exists("currentPage", $context) ? $context["currentPage"] : (function () { throw new RuntimeError('Variable "currentPage" does not exist.', 261, $this->source); })()) >= CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["this"]) || array_key_exists("this", $context) ? $context["this"] : (function () { throw new RuntimeError('Variable "this" does not exist.', 261, $this->source); })()), "pagedData", [], "any", false, false, false, 261), "totalPage", [], "any", false, false, false, 261))) ? ("disabled") : (""));
            yield ">
                                            &raquo;
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ";
        }
        // line 268
        yield "                    </div>
                    <!-- /.card -->
                </div>

            </div>

        </div><!-- /.container-fluid -->
    </section>
</div>
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
        return "components/UserComponent.html.twig";
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
        return array (  512 => 268,  500 => 261,  495 => 259,  492 => 258,  481 => 255,  475 => 253,  471 => 252,  461 => 247,  456 => 245,  452 => 243,  449 => 242,  443 => 237,  428 => 228,  421 => 223,  419 => 222,  411 => 218,  408 => 217,  403 => 214,  397 => 210,  389 => 207,  385 => 205,  380 => 202,  378 => 201,  371 => 197,  367 => 196,  360 => 192,  355 => 189,  351 => 188,  339 => 178,  336 => 177,  329 => 171,  327 => 170,  325 => 169,  322 => 168,  318 => 166,  314 => 164,  306 => 161,  295 => 152,  292 => 151,  288 => 148,  280 => 142,  277 => 141,  273 => 138,  267 => 135,  263 => 133,  257 => 130,  250 => 126,  246 => 124,  244 => 123,  241 => 122,  233 => 116,  223 => 109,  219 => 108,  215 => 106,  209 => 101,  205 => 100,  202 => 99,  199 => 98,  197 => 97,  191 => 93,  189 => 92,  187 => 91,  178 => 86,  172 => 81,  164 => 76,  154 => 67,  148 => 66,  145 => 65,  141 => 63,  137 => 62,  131 => 60,  127 => 59,  122 => 57,  115 => 55,  107 => 51,  105 => 50,  100 => 49,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<div{{ attributes }}>
    <section class=\"content\">
        <div class=\"container-fluid\">
            <!-- /.row -->
            <div class=\"row\">
                <div class=\"col-12\">
                    <div data-loading=\"show\" class=\"text-center p-3\">
                        <div class=\"spinner-border text-primary\" role=\"status\">
                            <span class=\"sr-only\">Chargement...</span>
                        </div>
                        <p>Mise à jour des utilisateurs...</p>
                    </div>
                    <div class=\"card\">
                        <div class=\"card-header\">
                            <h3 class=\"card-title\">
                                <button type=\"button\" class=\"btn btn-primary btn-sm shadow-sm\" data-toggle=\"modal\"
                                        data-target=\"#modal-add-user\">
                                    <i class=\"fas fa-user-plus mr-1\"></i> Nouveau membre
                                </button>
                            </h3>

                            <div class=\"card-tools\">
                                <div class=\"input-group input-group-sm\" style=\"width: 400px;\">
                                    <input type=\"text\" name=\"table_search\" data-model=\"norender|searchQuery\"
                                           class=\"form-control float-right\"
                                           placeholder=\"Nom\">

                                    <div class=\"input-group-append\">
                                        <button data-action=\"live#\$render\" type=\"submit\" class=\"btn btn-default\">
                                            <i class=\"fas fa-search\"></i>
                                            Rechercher
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class=\"card-body table-responsive p-0\">
                            <table class=\"table table-hover text-nowrap\">
                                <thead>
                                <tr>
                                    <th>Prénom & Nom</th>
                                    <th>E-mail</th>
                                    <th>Rôles</th>
                                    <th class=\"text-center\">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {% for user in this.pagedData.items %}
                                    {# Ligne principale cliquable pour ouvrir les détails #}
                                    <tr data-toggle=\"collapse\" data-target=\"#user-detail-{{ user.id }}\"
                                        style=\"cursor: pointer;\">
                                        <td>
                                            <span class=\"text-primary\"><i class=\"fas fa-user-circle mr-1\"></i></span>
                                            <strong>{{ user.firstName }}</strong> {{ user.lastName|upper }}
                                        </td>
                                        <td>{{ user.email }}</td>
                                        <td>
                                            {% for role in user.roles %}
                                                {% if role == 'ROLE_ADMIN' %}<span
                                                    class=\"badge badge-danger\">Admin</span>
                                                {% elseif role == 'ROLE_FORMATEUR' %}<span class=\"badge badge-warning\">Formateur</span>
                                                {% elseif role == 'ROLE_APPRENANT' %}<span class=\"badge badge-warning\">Apprenant</span>
                                                    {#                                                {% else %}<span class=\"badge badge-primary\">Apprenant</span> #}
                                                {% endif %}
                                            {% endfor %}
                                        </td>
                                        <td class=\"text-center\">
                                            <button class=\"btn btn-xs btn-outline-info shadow-sm\">
                                                <i class=\"fas fa-plus\"></i> Détails
                                            </button>
                                        </td>
                                    </tr>

                                    {# TIROIR DE DÉTAILS #}
                                    <tr id=\"user-detail-{{ user.id }}\" class=\"collapse bg-light\">
                                        <td colspan=\"4\" class=\"p-4 border-left border-info\"
                                            style=\"border-left-width: 5px !important;\">
                                            <div class=\"row\">
                                                {# INFOS GÉNÉRALES #}
                                                <div class=\"col-md-4\">
                                                    <h6 class=\"text-muted font-weight-bold small text-uppercase\">
                                                        Informations profil</h6>
                                                    <hr class=\"mt-1\">
                                                    {#                                                    <p class=\"mb-1\"><strong>Date d'inscription :</strong> {{ user.createdAt|date('d/m/Y')|default('N/A') }}</p> #}
                                                    <p class=\"mb-1\"><strong>Identifiant unique :</strong> #{{ user.id }}
                                                    </p>
                                                </div>

                                                <div class=\"col-md-8 border-left pl-4\">
                                                    {% if 'ROLE_FORMATEUR' in user.roles %}
                                                        {# SECTION FORMATEUR (Déjà vue) #}
                                                        <h6 class=\"text-info font-weight-bold\"><i
                                                                class=\"fas fa-chalkboard-teacher mr-1\"></i> Modules
                                                            enseignés</h6>
                                                        <hr class=\"mt-1\">
                                                        {% set managedModules = user.modules|default([]) %}
                                                        {% if managedModules|length > 0 %}
                                                            <div class=\"row\">
                                                                {% for module in managedModules %}
                                                                    <div class=\"col-sm-6 mb-2\">
                                                                        <div
                                                                            class=\"p-3 border rounded bg-white shadow-sm position-relative overflow-hidden\">

                                                                            {# Indicateur de statut (Actif/Inactif) - Petit point discret #}
                                                                            <div class=\"position-absolute\"
                                                                                 style=\"top: 10px; right: 10px;\">
                                                                                <i class=\"fas fa-circle {{ module.state ? 'text-success' : 'text-danger' }}\"
                                                                                   title=\"{{ module.state ? 'Actif' : 'Inactif' }}\"
                                                                                   style=\"font-size: 0.6rem;\"></i>
                                                                            </div>

                                                                            <div class=\"d-flex align-items-center mb-2\">
                                                                                <i class=\"fas fa-layer-group text-info mr-2\"></i>
                                                                                <span class=\"font-weight-bold text-dark\"
                                                                                      style=\"font-size: 0.9rem;\">{{ module.libelle }}</span>
                                                                            </div>

                                                                            <div
                                                                                class=\"d-flex justify-content-between align-items-center\">
                                                                                {# Gestion du Prix et de la Promo #}
                                                                                <div>
                                                                                    {% if module.isPromotion and module.promotionPrice %}
                                                                                        <span
                                                                                            class=\"badge badge-success shadow-xs\">
                            <i class=\"fas fa-tag mr-1\"></i> {{ module.promotionPrice|number_format(0, '.', ' ') }} FCFA
                        </span>
                                                                                        <small class=\"text-muted ml-1\"
                                                                                               style=\"text-decoration: line-through;\">
                                                                                            {{ module.price|number_format(0, '.', ' ') }}
                                                                                        </small>
                                                                                    {% else %}
                                                                                        <span
                                                                                            class=\"badge badge-light border text-dark\">
                            {{ module.price|default(0)|number_format(0, '.', ' ') }} FCFA
                        </span>
                                                                                    {% endif %}
                                                                                </div>

                                                                                {# Étiquette \"Promo\" clignotante ou colorée si actif #}
                                                                                {% if module.isPromotion %}
                                                                                    <span
                                                                                        class=\"badge badge-pill badge-warning\"
                                                                                        style=\"font-size: 0.65rem; text-transform: uppercase;\">
                        Promo
                    </span>
                                                                                {% endif %}
                                                                            </div>

                                                                            {# Petit rappel si le module est inactif #}
                                                                            {% if not module.state %}
                                                                                <div class=\"mt-1\">
                                                                                    <small
                                                                                        class=\"text-danger font-italic\"
                                                                                        style=\"font-size: 0.75rem;\">
                                                                                        <i class=\"fas fa-eye-slash mr-1\"></i>
                                                                                        Actuellement masqué
                                                                                    </small>
                                                                                </div>
                                                                            {% endif %}
                                                                        </div>
                                                                    </div>
                                                                {% endfor %}
                                                            </div>
                                                        {% else %}
                                                            <p class=\"text-muted small italic\">Aucun module assigné.</p>
                                                        {% endif %}

                                                    {% elseif 'ROLE_APPRENANT' in user.roles %}
                                                        {# SECTION APPRENANT : On parcourt ses inscriptions #}
                                                        <h6 class=\"text-primary font-weight-bold\"><i
                                                                class=\"fas fa-user-graduate mr-1\"></i> Formations
                                                            suivies</h6>
                                                        <hr class=\"mt-1\">

                                                        {# On suppose que l'entité User a une relation 'inscriptions' #}
                                                        {% if user.inscriptions|length > 0 %}
                                                            <div class=\"table-responsive\">
                                                                <table class=\"table table-sm table-borderless\">
                                                                    <thead>
                                                                    <tr class=\"text-muted small\">
                                                                        <th>Module</th>
                                                                        <th>Statut</th>
                                                                        <th>Certification</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {% for ins in user.inscriptions %}
                                                                        <tr class=\"border-bottom\">
                                                                            <td class=\"py-2\">
                                                                                <span
                                                                                    class=\"font-weight-bold\">{{ ins.module.libelle }}</span>
                                                                            </td>
                                                                            <td>
                                    <span
                                        class=\"badge {{ ins.paymentState ? 'badge-success' : 'badge-secondary' }} btn-xs\">
                                        {{ ins.paymentState ? 'Payé' : 'En attente' }}
                                    </span>
                                                                            </td>
                                                                            <td>
                                                                                {% if ins.isCertified %}
                                                                                    <span class=\"text-success small\"><i
                                                                                            class=\"fas fa-certificate mr-1\"></i>Certifié</span>
                                                                                {% else %}
                                                                                    <span class=\"text-muted small\">En cours</span>
                                                                                {% endif %}
                                                                            </td>
                                                                        </tr>
                                                                    {% endfor %}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        {% else %}
                                                            <p class=\"text-muted small italic\">Aucune inscription
                                                                enregistrée pour cet apprenant.</p>
                                                        {% endif %}
                                                    {% endif %}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                {% else %}
                                    <tr>
                                        <td colspan=\"4\" class=\"text-center py-5\">
                                            <div class=\"text-muted\">
                                                <i class=\"fas fa-users-slash fa-3x mb-3 opacity-50\"></i>
                                                <p class=\"lead\">Aucun utilisateur trouvé pour
                                                    \"<strong>{{ searchQuery }}</strong>\"</p>
                                                <button class=\"btn btn-sm btn-primary\" data-action=\"live#update\"
                                                        data-model=\"searchQuery\" data-value=\"\">
                                                    Réinitialiser la recherche
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                {% endfor %}
                                </tbody>
                            </table>
                        </div>

                        {# Le footer de pagination reste le même #}
                        {% if this.pagedData.totalItemCount > 0 %}
                            <div class=\"card-footer clearfix\">
                                <ul class=\"pagination pagination-sm m-0 float-right\">
                                    <li class=\"page-item {{ currentPage <= 1 ? 'disabled' }}\">
                                        <button class=\"page-link\" data-action=\"live#update\" data-model=\"currentPage\"
                                                data-value=\"{{ currentPage - 1 }}\" {{ currentPage <= 1 ? 'disabled' }}>
                                            &laquo;
                                        </button>
                                    </li>

                                    {% for i in 1..this.pagedData.totalPage %}
                                        <li class=\"page-item {{ i == currentPage ? 'active' }}\">
                                            <button class=\"page-link\" data-action=\"live#update\" data-model=\"currentPage\"
                                                    data-value=\"{{ i }}\">{{ i }}</button>
                                        </li>
                                    {% endfor %}

                                    <li class=\"page-item {{ currentPage >= this.pagedData.totalPage ? 'disabled' }}\">
                                        <button class=\"page-link\" data-action=\"live#update\" data-model=\"currentPage\"
                                                data-value=\"{{ currentPage + 1 }}\" {{ currentPage >= this.pagedData.totalPage ? 'disabled' }}>
                                            &raquo;
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        {% endif %}
                    </div>
                    <!-- /.card -->
                </div>

            </div>

        </div><!-- /.container-fluid -->
    </section>
</div>
", "components/UserComponent.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/components/UserComponent.html.twig");
    }
}
