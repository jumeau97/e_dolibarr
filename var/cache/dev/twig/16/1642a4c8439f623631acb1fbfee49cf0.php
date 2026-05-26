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

/* entrepot/index.html.twig */
class __TwigTemplate_1aec3732a614861d03736da2bc58577c extends Template
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
            'javascripts' => [$this, 'block_javascripts'],
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "entrepot/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "entrepot/index.html.twig"));

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

        yield "Liste des Entrepôts";
        
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
        yield "    <div class=\"content-wrapper\">
        <!-- En-tête -->
        <div class=\"content-header py-3 border-bottom bg-white mb-4\">
            <div class=\"container-fluid\">
                <div class=\"row align-items-center\">
                    <div class=\"col-sm-6\">
                        <h1 class=\"m-0 font-weight-bold text-dark\">
                            <i class=\"fas fa-boxes text-indigo mr-2\"></i> Infrastructures &amp; Entrepôts
                        </h1>
                    </div>
                    <div class=\"col-sm-6 text-sm-right mt-2 mt-sm-0\">
                        <button type=\"button\" class=\"btn btn-indigo btn-sm shadow-sm\" data-toggle=\"modal\" data-target=\"#modal-add-warehouse\">
                            <i class=\"fas fa-plus mr-1\"></i> Ajouter un site
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section Principale -->
        <section class=\"content\">
            <div class=\"container-fluid\">

                <!-- BLOC 1 : LISTE DES ENTREPÔTS (VUE EN CARTES) -->
                <div class=\"row\">

                    <!-- ENTREPÔT 1 -->
                    <div class=\"col-lg-4 col-md-6 mb-4\">
                        <div class=\"card card-outline card-dark h-100 shadow-sm warehouse-card\">
                            <div class=\"card-body\">
                                <div class=\"d-flex justify-content-between align-items-start mb-3\">
                                    <div>
                                        <span class=\"badge badge-dark mb-2\">Code: DEP-CEN</span>
                                        <h5 class=\"font-weight-bold text-dark mb-1\">Dépôt Central</h5>
                                        <p class=\"text-xs text-muted mb-0\"><i class=\"fas fa-map-marker-alt mr-1\"></i> Zone Industrielle, Bamako</p>
                                    </div>
                                    <div class=\"icon text-muted\"><i class=\"fas fa-warehouse fa-2x\"></i></div>
                                </div>

                                <hr class=\"my-2\">

                                <div class=\"row text-center my-3\">
                                    <div class=\"col-6 border-right\">
                                        <span class=\"text-xs text-muted d-block\">Articles uniques</span>
                                        <span class=\"font-weight-bold text-lg text-dark\">128</span>
                                    </div>
                                    <div class=\"col-6\">
                                        <span class=\"text-xs text-muted d-block\">Quantité totale</span>
                                        <span class=\"font-weight-bold text-lg text-indigo\">14 250</span>
                                    </div>
                                </div>

                                <div class=\"progress progress-xs mb-2\">
                                    <div class=\"progress-bar bg-indigo\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>
                                </div>
                                <small class=\"text-muted text-xs d-block mb-3\">Taux d'occupation : <b>85%</b></small>
                            </div>
                            <div class=\"card-footer bg-light p-2 text-right\">
                                <button class=\"btn btn-xs btn-default text-indigo font-weight-bold btn-view-details\" data-warehouse=\"depot-central\">
                                    <i class=\"fas fa-eye mr-1\"></i> Voir l'inventaire complet
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- ENTREPÔT 2 -->
                    <div class=\"col-lg-4 col-md-6 mb-4\">
                        <div class=\"card card-outline card-indigo h-100 shadow-sm warehouse-card\">
                            <div class=\"card-body\">
                                <div class=\"d-flex justify-content-between align-items-start mb-3\">
                                    <div>
                                        <span class=\"badge badge-indigo mb-2\">Code: STK-BOU</span>
                                        <h5 class=\"font-weight-bold text-dark mb-1\">Stock Boutique</h5>
                                        <p class=\"text-xs text-muted mb-0\"><i class=\"fas fa-map-marker-alt mr-1\"></i> Grand Marché, Centre-Ville</p>
                                    </div>
                                    <div class=\"icon text-muted\"><i class=\"fas fa-store fa-2x\"></i></div>
                                </div>

                                <hr class=\"my-2\">

                                <div class=\"row text-center my-3\">
                                    <div class=\"col-6 border-right\">
                                        <span class=\"text-xs text-muted d-block\">Articles uniques</span>
                                        <span class=\"font-weight-bold text-lg text-dark\">42</span>
                                    </div>
                                    <div class=\"col-6\">
                                        <span class=\"text-xs text-muted d-block\">Quantité totale</span>
                                        <span class=\"font-weight-bold text-lg text-indigo\">485</span>
                                    </div>
                                </div>

                                <div class=\"progress progress-xs mb-2\">
                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>
                                </div>
                                <small class=\"text-muted text-xs d-block mb-3\">Taux d'occupation : <b>40%</b></small>
                            </div>
                            <div class=\"card-footer bg-light p-2 text-right\">
                                <button class=\"btn btn-xs btn-default text-indigo font-weight-bold btn-view-details\" data-warehouse=\"stock-boutique\">
                                    <i class=\"fas fa-eye mr-1\"></i> Voir l'inventaire complet
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- BLOC 2 : PANNEAU DES DÉTAILS DYNAMIQUE (Caché par défaut) -->
                <div id=\"detail-pane\" class=\"card card-outline card-secondary shadow-sm d-none mt-2\">
                    <div class=\"card-header bg-white d-flex align-items-center justify-content-between py-3\">
                        <div>
                            <h4 class=\"card-title font-weight-bold text-dark m-0\">
                                <i class=\"fas fa-clipboard-list text-indigo mr-2\"></i> Inventaire Réel : <span id=\"detail-title\">Nom de l'entrepôt</span>
                            </h4>
                        </div>
                        <button type=\"button\" class=\"btn btn-tool text-danger\" onclick=\"closeDetails()\"><i class=\"fas fa-times fa-lg\"></i></button>
                    </div>
                    <div class=\"card-body p-0\">
                        <table class=\"table table-striped table-valign-middle m-0\">
                            <thead class=\"thead-light\">
                            <tr>
                                <th>Référence</th>
                                <th>Désignation de l'article</th>
                                <th class=\"text-center\">Emplacement interne</th>
                                <th class=\"text-right\">Quantité Disponible</th>
                                <th class=\"text-center\">Statut d'alerte</th>
                            </tr>
                            </thead>
                            <tbody id=\"detail-table-content\">
                            <!-- Les lignes seront injectées par JavaScript ici -->
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>

        <!-- MODAL : AJOUTER UN NOUVEL ENTREPÔT / SITE -->
        <div class=\"modal fade\" id=\"modal-add-warehouse\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalAddWarehouseLabel\" aria-hidden=\"true\">
            <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">
                <div class=\"modal-content\">
                    <!-- En-tête de la Modal -->
                    <div class=\"modal-header bg-dark text-white py-3\">
                        <h5 class=\"modal-title font-weight-bold\" id=\"modalAddWarehouseLabel\">
                            <i class=\"fas fa-warehouse text-warning mr-2\"></i> Enregistrer une Nouvelle Infrastructure
                        </h5>
                        <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">
                            <span aria-hidden=\"true\">&times;</span>
                        </button>
                    </div>
                    ";
        // line 157
        yield "                    ";
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 157, $this->source); })()), 'form_start', ["attr" => ["id" => "form-add-warehouse"]]);
        yield "
                    <div class=\"modal-body bg-light\">

                        <div class=\"row\">
                            ";
        // line 162
        yield "                            <div class=\"col-md-4\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        ";
        // line 165
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 165, $this->source); })()), "lieu", [], "any", false, false, false, 165), 'label');
        yield " <span class=\"text-danger\">*</span>
                                    </label>
                                    ";
        // line 167
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 167, $this->source); })()), "lieu", [], "any", false, false, false, 167), 'widget', ["attr" => ["class" => "form-control font-weight-bold", "placeholder" => "Ex: Dépôt Central"]]);
        yield "
                                    ";
        // line 168
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 168, $this->source); })()), "lieu", [], "any", false, false, false, 168), 'errors');
        yield "
                                </div>
                            </div>
                            ";
        // line 172
        yield "                            <div class=\"col-md-8\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        ";
        // line 175
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 175, $this->source); })()), "description", [], "any", false, false, false, 175), 'label');
        yield "
                                    </label>
                                    ";
        // line 177
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 177, $this->source); })()), "description", [], "any", false, false, false, 177), 'widget', ["attr" => ["class" => "form-control", "rows" => "1", "placeholder" => "Zone de stockage principale..."]]);
        yield "
                                    ";
        // line 178
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 178, $this->source); })()), "description", [], "any", false, false, false, 178), 'errors');
        yield "
                                </div>
                            </div>
                        </div>

                        <div class=\"row mt-2\">
                            ";
        // line 185
        yield "                            <div class=\"col-md-4\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        ";
        // line 188
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 188, $this->source); })()), "town", [], "any", false, false, false, 188), 'label');
        yield " <span class=\"text-danger\">*</span>
                                    </label>
                                    ";
        // line 190
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 190, $this->source); })()), "town", [], "any", false, false, false, 190), 'widget', ["attr" => ["class" => "form-control", "placeholder" => "Ex: Bamako"]]);
        yield "
                                    ";
        // line 191
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 191, $this->source); })()), "town", [], "any", false, false, false, 191), 'errors');
        yield "
                                </div>
                            </div>
                            ";
        // line 195
        yield "                            <div class=\"col-md-4\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        ";
        // line 198
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 198, $this->source); })()), "phone", [], "any", false, false, false, 198), 'label');
        yield "
                                    </label>
                                    ";
        // line 200
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 200, $this->source); })()), "phone", [], "any", false, false, false, 200), 'widget', ["attr" => ["class" => "form-control", "placeholder" => "Ex: +223 70 00 00 00"]]);
        yield "
                                    ";
        // line 201
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 201, $this->source); })()), "phone", [], "any", false, false, false, 201), 'errors');
        yield "
                                </div>
                            </div>
                            ";
        // line 205
        yield "                            <div class=\"col-md-4\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        ";
        // line 208
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 208, $this->source); })()), "status", [], "any", false, false, false, 208), 'label');
        yield "
                                    </label>
                                    ";
        // line 210
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 210, $this->source); })()), "status", [], "any", false, false, false, 210), 'widget', ["attr" => ["class" => "form-control custom-select"]]);
        yield "
                                    ";
        // line 211
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 211, $this->source); })()), "status", [], "any", false, false, false, 211), 'errors');
        yield "
                                </div>
                            </div>
                        </div>

                        ";
        // line 217
        yield "                        <div class=\"form-group mt-2\">
                            <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                ";
        // line 219
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 219, $this->source); })()), "address", [], "any", false, false, false, 219), 'label');
        yield " <span class=\"text-danger\">*</span>
                            </label>
                            ";
        // line 221
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 221, $this->source); })()), "address", [], "any", false, false, false, 221), 'widget', ["attr" => ["class" => "form-control", "rows" => "2", "placeholder" => "Quartier, rue, repères précis..."]]);
        yield "
                            ";
        // line 222
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 222, $this->source); })()), "address", [], "any", false, false, false, 222), 'errors');
        yield "
                        </div>

                    </div>

                    ";
        // line 228
        yield "                    <div class=\"modal-footer bg-white py-2\">
                        <button type=\"button\" class=\"btn btn-default btn-sm text-sm\" data-dismiss=\"modal\">Annuler</button>
                        <button type=\"submit\" class=\"btn btn-indigo btn-sm text-sm font-weight-bold\">
                            <i class=\"fas fa-save mr-1\"></i> Enregistrer le site
                        </button>
                    </div>
                    ";
        // line 234
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 234, $this->source); })()), 'form_end');
        yield "

                </div>
            </div>
        </div>
    </div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 242
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_javascripts(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 243
        yield "    <script>
        // Simulation de données de la base pour les détails (Évitant de recharger la page)
        const datasets = {
            'depot-central': [
                { ref: 'HPR-001', name: 'Huile de Palme Raffinée 1L', loc: 'Rayon A-12', qty: '1 450', status: 'Optimal', badge: 'success' },
                { ref: 'RIZ-B50', name: 'Sac de Riz Brisure 50kg', loc: 'Hangar B-02', qty: '420', status: 'Optimal', badge: 'success' },
                { ref: 'SAD-MAD', name: 'Carton de Savon Madar', loc: 'Rayon C-05', qty: '2', status: 'Critique', badge: 'danger' }
            ],
            'stock-boutique': [
                { ref: 'HPR-001', name: 'Huile de Palme Raffinée 1L', loc: 'Étagère C-1', qty: '45', status: 'Optimal', badge: 'success' },
                { ref: 'RIZ-B50', name: 'Sac de Riz Brisure 50kg', loc: 'Palette Entrée', qty: '12', status: 'Optimal', badge: 'success' },
                { ref: 'PAT-500', name: 'Paquet de Pâtes 500g', loc: 'Étagère A-3', qty: '5', status: 'Réappro', badge: 'warning' }
            ]
        };

        document.addEventListener(\"DOMContentLoaded\", function () {
            const detailPane = document.getElementById('detail-pane');
            const detailTitle = document.getElementById('detail-title');
            const detailTableContent = document.getElementById('detail-table-content');

            document.querySelectorAll('.btn-view-details').forEach(button => {
                button.addEventListener('click', function() {
                    const targetKey = this.getAttribute('data-warehouse');
                    const data = datasets[targetKey];

                    // Mettre à jour le titre textuel
                    detailTitle.innerText = this.closest('.card-body').querySelector('h5').innerText;

                    // Nettoyer la table précédente
                    detailTableContent.innerHTML = '';

                    // Injecter les données correspondantes
                    data.forEach(item => {
                        let row = `
                    <tr>
                        <td><span class=\"text-xs font-mono text-muted\">\${item.ref}</span></td>
                        <td class=\"font-weight-bold text-sm\">\${item.name}</td>
                        <td class=\"text-center\"><span class=\"badge badge-light border\">\${item.loc}</span></td>
                        <td class=\"text-right font-weight-bold text-indigo\">\${item.qty}</td>
                        <td class=\"text-center\"><span class=\"badge badge-pill bg-\${item.badge}-light text-\${item.badge} text-xs px-2 py-1\">\${item.status}</span></td>
                    </tr>
                `;
                        detailTableContent.innerHTML += row;
                    });

                    // Rendre le conteneur de détails visible et défiler l'écran vers lui
                    detailPane.classList.remove('d-none');
                    detailPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });
        });

        function closeDetails() {
            document.getElementById('detail-pane').classList.add('d-none');
        }
    </script>
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
        return "entrepot/index.html.twig";
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
        return array (  426 => 243,  413 => 242,  395 => 234,  387 => 228,  379 => 222,  375 => 221,  370 => 219,  366 => 217,  358 => 211,  354 => 210,  349 => 208,  344 => 205,  338 => 201,  334 => 200,  329 => 198,  324 => 195,  318 => 191,  314 => 190,  309 => 188,  304 => 185,  295 => 178,  291 => 177,  286 => 175,  281 => 172,  275 => 168,  271 => 167,  266 => 165,  261 => 162,  253 => 157,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Liste des Entrepôts{% endblock %}

{% block body %}
    <div class=\"content-wrapper\">
        <!-- En-tête -->
        <div class=\"content-header py-3 border-bottom bg-white mb-4\">
            <div class=\"container-fluid\">
                <div class=\"row align-items-center\">
                    <div class=\"col-sm-6\">
                        <h1 class=\"m-0 font-weight-bold text-dark\">
                            <i class=\"fas fa-boxes text-indigo mr-2\"></i> Infrastructures &amp; Entrepôts
                        </h1>
                    </div>
                    <div class=\"col-sm-6 text-sm-right mt-2 mt-sm-0\">
                        <button type=\"button\" class=\"btn btn-indigo btn-sm shadow-sm\" data-toggle=\"modal\" data-target=\"#modal-add-warehouse\">
                            <i class=\"fas fa-plus mr-1\"></i> Ajouter un site
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section Principale -->
        <section class=\"content\">
            <div class=\"container-fluid\">

                <!-- BLOC 1 : LISTE DES ENTREPÔTS (VUE EN CARTES) -->
                <div class=\"row\">

                    <!-- ENTREPÔT 1 -->
                    <div class=\"col-lg-4 col-md-6 mb-4\">
                        <div class=\"card card-outline card-dark h-100 shadow-sm warehouse-card\">
                            <div class=\"card-body\">
                                <div class=\"d-flex justify-content-between align-items-start mb-3\">
                                    <div>
                                        <span class=\"badge badge-dark mb-2\">Code: DEP-CEN</span>
                                        <h5 class=\"font-weight-bold text-dark mb-1\">Dépôt Central</h5>
                                        <p class=\"text-xs text-muted mb-0\"><i class=\"fas fa-map-marker-alt mr-1\"></i> Zone Industrielle, Bamako</p>
                                    </div>
                                    <div class=\"icon text-muted\"><i class=\"fas fa-warehouse fa-2x\"></i></div>
                                </div>

                                <hr class=\"my-2\">

                                <div class=\"row text-center my-3\">
                                    <div class=\"col-6 border-right\">
                                        <span class=\"text-xs text-muted d-block\">Articles uniques</span>
                                        <span class=\"font-weight-bold text-lg text-dark\">128</span>
                                    </div>
                                    <div class=\"col-6\">
                                        <span class=\"text-xs text-muted d-block\">Quantité totale</span>
                                        <span class=\"font-weight-bold text-lg text-indigo\">14 250</span>
                                    </div>
                                </div>

                                <div class=\"progress progress-xs mb-2\">
                                    <div class=\"progress-bar bg-indigo\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>
                                </div>
                                <small class=\"text-muted text-xs d-block mb-3\">Taux d'occupation : <b>85%</b></small>
                            </div>
                            <div class=\"card-footer bg-light p-2 text-right\">
                                <button class=\"btn btn-xs btn-default text-indigo font-weight-bold btn-view-details\" data-warehouse=\"depot-central\">
                                    <i class=\"fas fa-eye mr-1\"></i> Voir l'inventaire complet
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- ENTREPÔT 2 -->
                    <div class=\"col-lg-4 col-md-6 mb-4\">
                        <div class=\"card card-outline card-indigo h-100 shadow-sm warehouse-card\">
                            <div class=\"card-body\">
                                <div class=\"d-flex justify-content-between align-items-start mb-3\">
                                    <div>
                                        <span class=\"badge badge-indigo mb-2\">Code: STK-BOU</span>
                                        <h5 class=\"font-weight-bold text-dark mb-1\">Stock Boutique</h5>
                                        <p class=\"text-xs text-muted mb-0\"><i class=\"fas fa-map-marker-alt mr-1\"></i> Grand Marché, Centre-Ville</p>
                                    </div>
                                    <div class=\"icon text-muted\"><i class=\"fas fa-store fa-2x\"></i></div>
                                </div>

                                <hr class=\"my-2\">

                                <div class=\"row text-center my-3\">
                                    <div class=\"col-6 border-right\">
                                        <span class=\"text-xs text-muted d-block\">Articles uniques</span>
                                        <span class=\"font-weight-bold text-lg text-dark\">42</span>
                                    </div>
                                    <div class=\"col-6\">
                                        <span class=\"text-xs text-muted d-block\">Quantité totale</span>
                                        <span class=\"font-weight-bold text-lg text-indigo\">485</span>
                                    </div>
                                </div>

                                <div class=\"progress progress-xs mb-2\">
                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>
                                </div>
                                <small class=\"text-muted text-xs d-block mb-3\">Taux d'occupation : <b>40%</b></small>
                            </div>
                            <div class=\"card-footer bg-light p-2 text-right\">
                                <button class=\"btn btn-xs btn-default text-indigo font-weight-bold btn-view-details\" data-warehouse=\"stock-boutique\">
                                    <i class=\"fas fa-eye mr-1\"></i> Voir l'inventaire complet
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- BLOC 2 : PANNEAU DES DÉTAILS DYNAMIQUE (Caché par défaut) -->
                <div id=\"detail-pane\" class=\"card card-outline card-secondary shadow-sm d-none mt-2\">
                    <div class=\"card-header bg-white d-flex align-items-center justify-content-between py-3\">
                        <div>
                            <h4 class=\"card-title font-weight-bold text-dark m-0\">
                                <i class=\"fas fa-clipboard-list text-indigo mr-2\"></i> Inventaire Réel : <span id=\"detail-title\">Nom de l'entrepôt</span>
                            </h4>
                        </div>
                        <button type=\"button\" class=\"btn btn-tool text-danger\" onclick=\"closeDetails()\"><i class=\"fas fa-times fa-lg\"></i></button>
                    </div>
                    <div class=\"card-body p-0\">
                        <table class=\"table table-striped table-valign-middle m-0\">
                            <thead class=\"thead-light\">
                            <tr>
                                <th>Référence</th>
                                <th>Désignation de l'article</th>
                                <th class=\"text-center\">Emplacement interne</th>
                                <th class=\"text-right\">Quantité Disponible</th>
                                <th class=\"text-center\">Statut d'alerte</th>
                            </tr>
                            </thead>
                            <tbody id=\"detail-table-content\">
                            <!-- Les lignes seront injectées par JavaScript ici -->
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>

        <!-- MODAL : AJOUTER UN NOUVEL ENTREPÔT / SITE -->
        <div class=\"modal fade\" id=\"modal-add-warehouse\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalAddWarehouseLabel\" aria-hidden=\"true\">
            <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">
                <div class=\"modal-content\">
                    <!-- En-tête de la Modal -->
                    <div class=\"modal-header bg-dark text-white py-3\">
                        <h5 class=\"modal-title font-weight-bold\" id=\"modalAddWarehouseLabel\">
                            <i class=\"fas fa-warehouse text-warning mr-2\"></i> Enregistrer une Nouvelle Infrastructure
                        </h5>
                        <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">
                            <span aria-hidden=\"true\">&times;</span>
                        </button>
                    </div>
                    {# Initialisation du formulaire avec l'action souhaitée (optionnelle si c'est la page courante) #}
                    {{ form_start(form, {'attr': {'id': 'form-add-warehouse'}}) }}
                    <div class=\"modal-body bg-light\">

                        <div class=\"row\">
                            {# Champ Lieu / Nom #}
                            <div class=\"col-md-4\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        {{ form_label(form.lieu) }} <span class=\"text-danger\">*</span>
                                    </label>
                                    {{ form_widget(form.lieu, {'attr': {'class': 'form-control font-weight-bold', 'placeholder': 'Ex: Dépôt Central'}}) }}
                                    {{ form_errors(form.lieu) }}
                                </div>
                            </div>
                            {# Champ Description #}
                            <div class=\"col-md-8\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        {{ form_label(form.description) }}
                                    </label>
                                    {{ form_widget(form.description, {'attr': {'class': 'form-control', 'rows': '1', 'placeholder': 'Zone de stockage principale...'}}) }}
                                    {{ form_errors(form.description) }}
                                </div>
                            </div>
                        </div>

                        <div class=\"row mt-2\">
                            {# Champ Ville #}
                            <div class=\"col-md-4\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        {{ form_label(form.town) }} <span class=\"text-danger\">*</span>
                                    </label>
                                    {{ form_widget(form.town, {'attr': {'class': 'form-control', 'placeholder': 'Ex: Bamako'}}) }}
                                    {{ form_errors(form.town) }}
                                </div>
                            </div>
                            {# Champ Contact Téléphonique #}
                            <div class=\"col-md-4\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        {{ form_label(form.phone) }}
                                    </label>
                                    {{ form_widget(form.phone, {'attr': {'class': 'form-control', 'placeholder': 'Ex: +223 70 00 00 00'}}) }}
                                    {{ form_errors(form.phone) }}
                                </div>
                            </div>
                            {# Champ Statut #}
                            <div class=\"col-md-4\">
                                <div class=\"form-group\">
                                    <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                        {{ form_label(form.status) }}
                                    </label>
                                    {{ form_widget(form.status, {'attr': {'class': 'form-control custom-select'}}) }}
                                    {{ form_errors(form.status) }}
                                </div>
                            </div>
                        </div>

                        {# Champ Adresse complète #}
                        <div class=\"form-group mt-2\">
                            <label class=\"text-xs text-uppercase font-weight-bold text-muted\">
                                {{ form_label(form.address) }} <span class=\"text-danger\">*</span>
                            </label>
                            {{ form_widget(form.address, {'attr': {'class': 'form-control', 'rows': '2', 'placeholder': 'Quartier, rue, repères précis...'}}) }}
                            {{ form_errors(form.address) }}
                        </div>

                    </div>

                    {# Actions du Formulaire #}
                    <div class=\"modal-footer bg-white py-2\">
                        <button type=\"button\" class=\"btn btn-default btn-sm text-sm\" data-dismiss=\"modal\">Annuler</button>
                        <button type=\"submit\" class=\"btn btn-indigo btn-sm text-sm font-weight-bold\">
                            <i class=\"fas fa-save mr-1\"></i> Enregistrer le site
                        </button>
                    </div>
                    {{ form_end(form) }}

                </div>
            </div>
        </div>
    </div>
{% endblock %}

{% block javascripts %}
    <script>
        // Simulation de données de la base pour les détails (Évitant de recharger la page)
        const datasets = {
            'depot-central': [
                { ref: 'HPR-001', name: 'Huile de Palme Raffinée 1L', loc: 'Rayon A-12', qty: '1 450', status: 'Optimal', badge: 'success' },
                { ref: 'RIZ-B50', name: 'Sac de Riz Brisure 50kg', loc: 'Hangar B-02', qty: '420', status: 'Optimal', badge: 'success' },
                { ref: 'SAD-MAD', name: 'Carton de Savon Madar', loc: 'Rayon C-05', qty: '2', status: 'Critique', badge: 'danger' }
            ],
            'stock-boutique': [
                { ref: 'HPR-001', name: 'Huile de Palme Raffinée 1L', loc: 'Étagère C-1', qty: '45', status: 'Optimal', badge: 'success' },
                { ref: 'RIZ-B50', name: 'Sac de Riz Brisure 50kg', loc: 'Palette Entrée', qty: '12', status: 'Optimal', badge: 'success' },
                { ref: 'PAT-500', name: 'Paquet de Pâtes 500g', loc: 'Étagère A-3', qty: '5', status: 'Réappro', badge: 'warning' }
            ]
        };

        document.addEventListener(\"DOMContentLoaded\", function () {
            const detailPane = document.getElementById('detail-pane');
            const detailTitle = document.getElementById('detail-title');
            const detailTableContent = document.getElementById('detail-table-content');

            document.querySelectorAll('.btn-view-details').forEach(button => {
                button.addEventListener('click', function() {
                    const targetKey = this.getAttribute('data-warehouse');
                    const data = datasets[targetKey];

                    // Mettre à jour le titre textuel
                    detailTitle.innerText = this.closest('.card-body').querySelector('h5').innerText;

                    // Nettoyer la table précédente
                    detailTableContent.innerHTML = '';

                    // Injecter les données correspondantes
                    data.forEach(item => {
                        let row = `
                    <tr>
                        <td><span class=\"text-xs font-mono text-muted\">\${item.ref}</span></td>
                        <td class=\"font-weight-bold text-sm\">\${item.name}</td>
                        <td class=\"text-center\"><span class=\"badge badge-light border\">\${item.loc}</span></td>
                        <td class=\"text-right font-weight-bold text-indigo\">\${item.qty}</td>
                        <td class=\"text-center\"><span class=\"badge badge-pill bg-\${item.badge}-light text-\${item.badge} text-xs px-2 py-1\">\${item.status}</span></td>
                    </tr>
                `;
                        detailTableContent.innerHTML += row;
                    });

                    // Rendre le conteneur de détails visible et défiler l'écran vers lui
                    detailPane.classList.remove('d-none');
                    detailPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });
        });

        function closeDetails() {
            document.getElementById('detail-pane').classList.add('d-none');
        }
    </script>
{% endblock %}", "entrepot/index.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/entrepot/index.html.twig");
    }
}
