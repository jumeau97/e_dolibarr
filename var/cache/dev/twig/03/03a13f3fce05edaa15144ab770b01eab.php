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

/* produit_article/index.html.twig */
class __TwigTemplate_a2d312b3136fd853006174bf35397882 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "produit_article/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "produit_article/index.html.twig"));

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

        yield "Nos produits";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
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

        // line 6
        yield "
  ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 11
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

        // line 12
        yield "    <div class=\"content-wrapper\">
        <!-- En-tête de la page -->
        <div class=\"content-header\">
            <div class=\"container-fluid\">
                <div class=\"row mb-2\">
                    <div class=\"col-sm-6\">
                        <h1 class=\"m-0 font-weight-bold\"><i class=\"fas fa-boxes text-primary mr-2\"></i> Gestion Logistique Globale</h1>
                        <p class=\"text-muted mb-0\">Pilotez vos stocks, catégories, entrepôts et mouvements au même endroit.</p>
                    </div>
                    <div class=\"col-sm-6\">
                        <ol class=\"breadcrumb float-sm-right\">
                            <li class=\"breadcrumb-item\"><a href=\"?page=dashboard\">Logiciel</a></li>
                            <li class=\"breadcrumb-item active\">Logistique</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenu Principal -->
        <section class=\"content\">
            <div class=\"container-fluid\">

                <!-- LE MENU PAR ONGLETS -->
                <div class=\"card card-primary card-tabs\">
                    <div class=\"card-header p-0 pt-1\">
                        <ul class=\"nav nav-tabs\" id=\"logistiqueTab\" role=\"tablist\">
                            <li class=\"nav-item\">
                                <a class=\"nav-link active font-weight-bold\" id=\"tab-articles-id\" data-toggle=\"pill\" href=\"#tab-articles\" role=\"tab\"><i class=\"fas fa-cubes mr-1\"></i> Produits & Services</a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link font-weight-bold\" id=\"tab-categories-id\" data-toggle=\"pill\" href=\"#tab-categories\" role=\"tab\"><i class=\"fas fa-tags mr-1\"></i> Catégories</a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link font-weight-bold\" id=\"tab-entrepots-id\" data-toggle=\"pill\" href=\"#tab-entrepots\" role=\"tab\"><i class=\"fas fa-warehouse mr-1\"></i> Nos Entrepôts / Boutiques</a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link font-weight-bold\" id=\"tab-mouvements-id\" data-toggle=\"pill\" href=\"#tab-mouvements\" role=\"tab\"><i class=\"fas fa-exchange-alt mr-1\"></i> Historique des Mouvements</a>
                            </li>
                        </ul>
                    </div>

                    <div class=\"card-body p-0\">
                        <div class=\"tab-content\" id=\"logistiqueTabContent\">

                            <!-- ================= ONGLET 1 : PRODUITS & SERVICES ================= -->
                            <div class=\"tab-pane fade show active\" id=\"tab-articles\" role=\"tabpanel\">
                                <div class=\"p-3 bg-light d-flex justify-content-between align-items-center border-bottom\">
                                    <span class=\"text-muted\">Gestion de vos marchandises et prestations facturables.</span>
                                    <button class=\"btn btn-sm btn-success font-weight-bold\"><i class=\"fas fa-plus mr-1\"></i> Nouveau Produit / Service</button>
                                </div>
                                <div class=\"table-responsive\">
                                    <table class=\"table table-hover table-striped mb-0 text-nowrap align-middle\">
                                        <thead class=\"bg-dark\">
                                        <tr>
                                            <th>Type</th>
                                            <th>Nom de l'élément</th>
                                            <th>Catégorie</th>
                                            <th>Prix de Vente</th>
                                            <th class=\"text-center\">Stock Actuel</th>
                                            <th class=\"text-right\">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><span class=\"badge badge-primary px-2 py-1\">📦 Produit</span></td>
                                            <td><b>Sac de Ciment 50kg</b><br><small class=\"text-muted\">Réf: CIM-50</small></td>
                                            <td>Matériaux</td>
                                            <td>4 750 FCFA</td>
                                            <td class=\"text-center\"><span class=\"badge badge-danger font-weight-bold px-2 py-1\">0 sac (Rupture)</span></td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td><span class=\"badge badge-info px-2 py-1\">🛠️ Service</span></td>
                                            <td><b>Livraison Chantier (Par camion)</b><br><small class=\"text-muted\">Réf: SRV-LIV</small></td>
                                            <td>Prestations</td>
                                            <td>25 000 FCFA</td>
                                            <td class=\"text-center\"><span class=\"text-muted\"><i>Non applicable</i></span></td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- PAGINATION PRODUITS -->
                                <div class=\"card-footer clearfix bg-white border-top\">
                                    <ul class=\"pagination pagination-sm m-0 float-right\">
                                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li>
                                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li>
                                    </ul>
                                    <span class=\"text-muted text-sm float-left mt-1\">Affichage de 1 à 2 sur 24 articles</span>
                                </div>
                            </div>

                            <!-- ================= ONGLET 2 : CATÉGORIES ================= -->
                            <div class=\"tab-pane fade\" id=\"tab-categories\" role=\"tabpanel\">
                                <div class=\"p-3 bg-light d-flex justify-content-between align-items-center border-bottom\">
                                    <span class=\"text-muted\">Classez vos produits pour simplifier la recherche à la caisse.</span>
                                    <button class=\"btn btn-sm btn-success font-weight-bold\"><i class=\"fas fa-plus mr-1\"></i> Nouvelle Catégorie</button>
                                </div>
                                <div class=\"table-responsive\">
                                    <table class=\"table table-hover table-striped mb-0 text-nowrap\">
                                        <thead class=\"bg-dark\">
                                        <tr>
                                            <th>Nom de la catégorie</th>
                                            <th>Nombre d'articles liés</th>
                                            <th class=\"text-right\">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><b>🧱 Matériaux de construction</b></td>
                                            <td>24 articles</td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td><b>🛠️ Prestations & Services</b></td>
                                            <td>5 services</td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- PAGINATION CATÉGORIES -->
                                <div class=\"card-footer clearfix bg-white border-top\">
                                    <ul class=\"pagination pagination-sm m-0 float-right\">
                                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li>
                                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li>
                                    </ul>
                                    <span class=\"text-muted text-sm float-left mt-1\">Affichage de 1 à 2 sur 2 catégories</span>
                                </div>
                            </div>

                            <!-- ================= ONGLET 3 : ENTREPÔTS & BOUTIQUES ================= -->
                            <div class=\"tab-pane fade\" id=\"tab-entrepots\" role=\"tabpanel\">
                                <div class=\"p-3 bg-light d-flex justify-content-between align-items-center border-bottom\">
                                    <span class=\"text-muted\">Lieux physiques de stockage ou de vente.</span>
                                    <button class=\"btn btn-sm btn-success font-weight-bold\"><i class=\"fas fa-plus mr-1\"></i> Ajouter un Emplacement</button>
                                </div>
                                <div class=\"table-responsive\">
                                    <table class=\"table table-hover table-striped mb-0 text-nowrap\">
                                        <thead class=\"bg-dark\">
                                        <tr>
                                            <th>Nom du dépôt / Boutique</th>
                                            <th>Localisation</th>
                                            <th>Volume d'articles stockés</th>
                                            <th class=\"text-right\">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><b>🏢 Entrepôt Principal</b></td>
                                            <td>Zone Industrielle</td>
                                            <td>1 450 articles</td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-info\"><i class=\"fas fa-eye mr-1\"></i> Voir le stock</button></td>
                                        </tr>
                                        <tr>
                                            <td><b>🏪 Boutique Centre-Ville</b></td>
                                            <td>Grand Marché</td>
                                            <td>320 articles</td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-info\"><i class=\"fas fa-eye mr-1\"></i> Voir le stock</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- PAGINATION ENTREPÔTS -->
                                <div class=\"card-footer clearfix bg-white border-top\">
                                    <ul class=\"pagination pagination-sm m-0 float-right\">
                                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li>
                                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li>
                                    </ul>
                                    <span class=\"text-muted text-sm float-left mt-1\">Affichage de 1 à 2 sur 2 emplacements</span>
                                </div>
                            </div>

                            <!-- ================= ONGLET 4 : MOUVEMENTS DE STOCK ================= -->
                            <div class=\"tab-pane fade\" id=\"tab-mouvements\" role=\"tabpanel\">
                                <div class=\"p-3 bg-light d-flex justify-content-between align-items-center border-bottom\">
                                    <span class=\"text-muted\">Le cahier d'historique de toutes les entrées, sorties et transferts.</span>
                                    <div class=\"btn-group\">
                                        <button class=\"btn btn-sm btn-danger font-weight-bold\"><i class=\"fas fa-minus-circle mr-1\"></i> Signaler Perte/Casse</button>
                                        <button class=\"btn btn-sm btn-primary font-weight-bold ml-1\"><i class=\"fas fa-exchange-alt mr-1\"></i> Transférer du stock</button>
                                    </div>
                                </div>
                                <div class=\"table-responsive\">
                                    <table class=\"table table-hover table-striped mb-0 text-nowrap text-sm\">
                                        <thead class=\"bg-dark\">
                                        <tr>
                                            <th>Date & Heure</th>
                                            <th>Article</th>
                                            <th>Type de Mouvement</th>
                                            <th>Quantité</th>
                                            <th>Depuis ➡️ Vers</th>
                                            <th>Par qui ?</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>21/05/2026 à 14:20</td>
                                            <td><b>Sac de Ciment 50kg</b></td>
                                            <td><span class=\"badge badge-success\"><i class=\"fas fa-plus mr-1\"></i> Entrée (Achat)</span></td>
                                            <td class=\"font-weight-bold text-success\">+ 100 sacs</td>
                                            <td>Fournisseur ➡️ Entrepôt Principal</td>
                                            <td>Alassane</td>
                                        </tr>
                                        <tr>
                                            <td>21/05/2026 à 11:05</td>
                                            <td><b>Fer à béton 12</b></td>
                                            <td><span class=\"badge badge-warning text-dark\"><i class=\"fas fa-arrow-right mr-1\"></i> Transfert Interne</span></td>
                                            <td class=\"font-weight-bold text-warning\">20 barres</td>
                                            <td>Entrepôt Principal ➡️ Boutique</td>
                                            <td>Seydou KONE</td>
                                        </tr>
                                        <tr>
                                            <td>21/05/2026 à 09:15</td>
                                            <td><b>Sac de Ciment 50kg</b></td>
                                            <td><span class=\"badge badge-danger\"><i class=\"fas fa-shopping-cart mr-1\"></i> Sortie (Vente)</span></td>
                                            <td class=\"font-weight-bold text-danger\">- 5 sacs</td>
                                            <td>Boutique ➡️ Client Comptoir</td>
                                            <td>Caissier</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- PAGINATION MOUVEMENTS -->
                                <div class=\"card-footer clearfix bg-white border-top\">
                                    <ul class=\"pagination pagination-sm m-0 float-right\">
                                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li>
                                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li>
                                    </ul>
                                    <span class=\"text-muted text-sm float-left mt-1\">Affichage de 1 à 3 sur 52 mouvements</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>

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
        return "produit_article/index.html.twig";
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
        return array (  126 => 12,  113 => 11,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Nos produits{% endblock %}

  {% block stylesheets %}

  {% endblock %}



{% block body %}
    <div class=\"content-wrapper\">
        <!-- En-tête de la page -->
        <div class=\"content-header\">
            <div class=\"container-fluid\">
                <div class=\"row mb-2\">
                    <div class=\"col-sm-6\">
                        <h1 class=\"m-0 font-weight-bold\"><i class=\"fas fa-boxes text-primary mr-2\"></i> Gestion Logistique Globale</h1>
                        <p class=\"text-muted mb-0\">Pilotez vos stocks, catégories, entrepôts et mouvements au même endroit.</p>
                    </div>
                    <div class=\"col-sm-6\">
                        <ol class=\"breadcrumb float-sm-right\">
                            <li class=\"breadcrumb-item\"><a href=\"?page=dashboard\">Logiciel</a></li>
                            <li class=\"breadcrumb-item active\">Logistique</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenu Principal -->
        <section class=\"content\">
            <div class=\"container-fluid\">

                <!-- LE MENU PAR ONGLETS -->
                <div class=\"card card-primary card-tabs\">
                    <div class=\"card-header p-0 pt-1\">
                        <ul class=\"nav nav-tabs\" id=\"logistiqueTab\" role=\"tablist\">
                            <li class=\"nav-item\">
                                <a class=\"nav-link active font-weight-bold\" id=\"tab-articles-id\" data-toggle=\"pill\" href=\"#tab-articles\" role=\"tab\"><i class=\"fas fa-cubes mr-1\"></i> Produits & Services</a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link font-weight-bold\" id=\"tab-categories-id\" data-toggle=\"pill\" href=\"#tab-categories\" role=\"tab\"><i class=\"fas fa-tags mr-1\"></i> Catégories</a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link font-weight-bold\" id=\"tab-entrepots-id\" data-toggle=\"pill\" href=\"#tab-entrepots\" role=\"tab\"><i class=\"fas fa-warehouse mr-1\"></i> Nos Entrepôts / Boutiques</a>
                            </li>
                            <li class=\"nav-item\">
                                <a class=\"nav-link font-weight-bold\" id=\"tab-mouvements-id\" data-toggle=\"pill\" href=\"#tab-mouvements\" role=\"tab\"><i class=\"fas fa-exchange-alt mr-1\"></i> Historique des Mouvements</a>
                            </li>
                        </ul>
                    </div>

                    <div class=\"card-body p-0\">
                        <div class=\"tab-content\" id=\"logistiqueTabContent\">

                            <!-- ================= ONGLET 1 : PRODUITS & SERVICES ================= -->
                            <div class=\"tab-pane fade show active\" id=\"tab-articles\" role=\"tabpanel\">
                                <div class=\"p-3 bg-light d-flex justify-content-between align-items-center border-bottom\">
                                    <span class=\"text-muted\">Gestion de vos marchandises et prestations facturables.</span>
                                    <button class=\"btn btn-sm btn-success font-weight-bold\"><i class=\"fas fa-plus mr-1\"></i> Nouveau Produit / Service</button>
                                </div>
                                <div class=\"table-responsive\">
                                    <table class=\"table table-hover table-striped mb-0 text-nowrap align-middle\">
                                        <thead class=\"bg-dark\">
                                        <tr>
                                            <th>Type</th>
                                            <th>Nom de l'élément</th>
                                            <th>Catégorie</th>
                                            <th>Prix de Vente</th>
                                            <th class=\"text-center\">Stock Actuel</th>
                                            <th class=\"text-right\">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><span class=\"badge badge-primary px-2 py-1\">📦 Produit</span></td>
                                            <td><b>Sac de Ciment 50kg</b><br><small class=\"text-muted\">Réf: CIM-50</small></td>
                                            <td>Matériaux</td>
                                            <td>4 750 FCFA</td>
                                            <td class=\"text-center\"><span class=\"badge badge-danger font-weight-bold px-2 py-1\">0 sac (Rupture)</span></td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td><span class=\"badge badge-info px-2 py-1\">🛠️ Service</span></td>
                                            <td><b>Livraison Chantier (Par camion)</b><br><small class=\"text-muted\">Réf: SRV-LIV</small></td>
                                            <td>Prestations</td>
                                            <td>25 000 FCFA</td>
                                            <td class=\"text-center\"><span class=\"text-muted\"><i>Non applicable</i></span></td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- PAGINATION PRODUITS -->
                                <div class=\"card-footer clearfix bg-white border-top\">
                                    <ul class=\"pagination pagination-sm m-0 float-right\">
                                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li>
                                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li>
                                    </ul>
                                    <span class=\"text-muted text-sm float-left mt-1\">Affichage de 1 à 2 sur 24 articles</span>
                                </div>
                            </div>

                            <!-- ================= ONGLET 2 : CATÉGORIES ================= -->
                            <div class=\"tab-pane fade\" id=\"tab-categories\" role=\"tabpanel\">
                                <div class=\"p-3 bg-light d-flex justify-content-between align-items-center border-bottom\">
                                    <span class=\"text-muted\">Classez vos produits pour simplifier la recherche à la caisse.</span>
                                    <button class=\"btn btn-sm btn-success font-weight-bold\"><i class=\"fas fa-plus mr-1\"></i> Nouvelle Catégorie</button>
                                </div>
                                <div class=\"table-responsive\">
                                    <table class=\"table table-hover table-striped mb-0 text-nowrap\">
                                        <thead class=\"bg-dark\">
                                        <tr>
                                            <th>Nom de la catégorie</th>
                                            <th>Nombre d'articles liés</th>
                                            <th class=\"text-right\">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><b>🧱 Matériaux de construction</b></td>
                                            <td>24 articles</td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td><b>🛠️ Prestations & Services</b></td>
                                            <td>5 services</td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- PAGINATION CATÉGORIES -->
                                <div class=\"card-footer clearfix bg-white border-top\">
                                    <ul class=\"pagination pagination-sm m-0 float-right\">
                                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li>
                                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li>
                                    </ul>
                                    <span class=\"text-muted text-sm float-left mt-1\">Affichage de 1 à 2 sur 2 catégories</span>
                                </div>
                            </div>

                            <!-- ================= ONGLET 3 : ENTREPÔTS & BOUTIQUES ================= -->
                            <div class=\"tab-pane fade\" id=\"tab-entrepots\" role=\"tabpanel\">
                                <div class=\"p-3 bg-light d-flex justify-content-between align-items-center border-bottom\">
                                    <span class=\"text-muted\">Lieux physiques de stockage ou de vente.</span>
                                    <button class=\"btn btn-sm btn-success font-weight-bold\"><i class=\"fas fa-plus mr-1\"></i> Ajouter un Emplacement</button>
                                </div>
                                <div class=\"table-responsive\">
                                    <table class=\"table table-hover table-striped mb-0 text-nowrap\">
                                        <thead class=\"bg-dark\">
                                        <tr>
                                            <th>Nom du dépôt / Boutique</th>
                                            <th>Localisation</th>
                                            <th>Volume d'articles stockés</th>
                                            <th class=\"text-right\">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><b>🏢 Entrepôt Principal</b></td>
                                            <td>Zone Industrielle</td>
                                            <td>1 450 articles</td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-info\"><i class=\"fas fa-eye mr-1\"></i> Voir le stock</button></td>
                                        </tr>
                                        <tr>
                                            <td><b>🏪 Boutique Centre-Ville</b></td>
                                            <td>Grand Marché</td>
                                            <td>320 articles</td>
                                            <td class=\"text-right\"><button class=\"btn btn-xs btn-info\"><i class=\"fas fa-eye mr-1\"></i> Voir le stock</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- PAGINATION ENTREPÔTS -->
                                <div class=\"card-footer clearfix bg-white border-top\">
                                    <ul class=\"pagination pagination-sm m-0 float-right\">
                                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li>
                                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li>
                                    </ul>
                                    <span class=\"text-muted text-sm float-left mt-1\">Affichage de 1 à 2 sur 2 emplacements</span>
                                </div>
                            </div>

                            <!-- ================= ONGLET 4 : MOUVEMENTS DE STOCK ================= -->
                            <div class=\"tab-pane fade\" id=\"tab-mouvements\" role=\"tabpanel\">
                                <div class=\"p-3 bg-light d-flex justify-content-between align-items-center border-bottom\">
                                    <span class=\"text-muted\">Le cahier d'historique de toutes les entrées, sorties et transferts.</span>
                                    <div class=\"btn-group\">
                                        <button class=\"btn btn-sm btn-danger font-weight-bold\"><i class=\"fas fa-minus-circle mr-1\"></i> Signaler Perte/Casse</button>
                                        <button class=\"btn btn-sm btn-primary font-weight-bold ml-1\"><i class=\"fas fa-exchange-alt mr-1\"></i> Transférer du stock</button>
                                    </div>
                                </div>
                                <div class=\"table-responsive\">
                                    <table class=\"table table-hover table-striped mb-0 text-nowrap text-sm\">
                                        <thead class=\"bg-dark\">
                                        <tr>
                                            <th>Date & Heure</th>
                                            <th>Article</th>
                                            <th>Type de Mouvement</th>
                                            <th>Quantité</th>
                                            <th>Depuis ➡️ Vers</th>
                                            <th>Par qui ?</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>21/05/2026 à 14:20</td>
                                            <td><b>Sac de Ciment 50kg</b></td>
                                            <td><span class=\"badge badge-success\"><i class=\"fas fa-plus mr-1\"></i> Entrée (Achat)</span></td>
                                            <td class=\"font-weight-bold text-success\">+ 100 sacs</td>
                                            <td>Fournisseur ➡️ Entrepôt Principal</td>
                                            <td>Alassane</td>
                                        </tr>
                                        <tr>
                                            <td>21/05/2026 à 11:05</td>
                                            <td><b>Fer à béton 12</b></td>
                                            <td><span class=\"badge badge-warning text-dark\"><i class=\"fas fa-arrow-right mr-1\"></i> Transfert Interne</span></td>
                                            <td class=\"font-weight-bold text-warning\">20 barres</td>
                                            <td>Entrepôt Principal ➡️ Boutique</td>
                                            <td>Seydou KONE</td>
                                        </tr>
                                        <tr>
                                            <td>21/05/2026 à 09:15</td>
                                            <td><b>Sac de Ciment 50kg</b></td>
                                            <td><span class=\"badge badge-danger\"><i class=\"fas fa-shopping-cart mr-1\"></i> Sortie (Vente)</span></td>
                                            <td class=\"font-weight-bold text-danger\">- 5 sacs</td>
                                            <td>Boutique ➡️ Client Comptoir</td>
                                            <td>Caissier</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- PAGINATION MOUVEMENTS -->
                                <div class=\"card-footer clearfix bg-white border-top\">
                                    <ul class=\"pagination pagination-sm m-0 float-right\">
                                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li>
                                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>
                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li>
                                    </ul>
                                    <span class=\"text-muted text-sm float-left mt-1\">Affichage de 1 à 3 sur 52 mouvements</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>

{% endblock %}

", "produit_article/index.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/produit_article/index.html.twig");
    }
}
