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

/* stock_mouvement/index.html.twig */
class __TwigTemplate_3208dbfdf0504e0c99a3fa00fdba3ac1 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "stock_mouvement/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "stock_mouvement/index.html.twig"));

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

    // line 10
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

        // line 11
        yield "  <div class=\"content-wrapper\">
    <!-- En-tête de la page -->
    <div class=\"content-header\">
      <div class=\"container-fluid\">
        <div class=\"row mb-2\">
          <div class=\"col-sm-6\">
            <h1 class=\"m-0 font-weight-bold\"><i class=\"fas fa-exchange-alt text-primary mr-2\"></i> Mouvements du Stock</h1>
            <p class=\"text-muted mb-0\">Le registre de toutes les entrées, sorties et transferts de vos marchandises.</p>
          </div>
          <div class=\"col-sm-6\">
            <ol class=\"breadcrumb float-sm-right\">
              <li class=\"breadcrumb-item\"><a href=\"?page=dashboard\">Logiciel</a></li>
              <li class=\"breadcrumb-item active\">Mouvements Stock</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu Principal -->
    <section class=\"content\">
      <div class=\"container-fluid\">

        <!-- SECTION 1 : FILTRES RAPIDES ET BOUTON ACTION -->
        <div class=\"card card-outline card-primary mb-4\">
          <div class=\"card-body p-3\">
            <div class=\"row\">
              <!-- Filtrer par type de mouvement -->
              <div class=\"col-md-4 my-1\">
                <label class=\"text-sm font-weight-bold text-muted\">Filtrer par type :</label>
                <select class=\"form-control\">
                  <option>🔄 Tous les mouvements</option>
                  <option>📈 Entrées (Achats / Approvisionnements)</option>
                  <option>📉 Sorties (Ventes / Pertes / Casse)</option>
                  <option>🚚 Transferts entre dépôts</option>
                </select>
              </div>
              <!-- Filtrer par recherche rapide -->
              <div class=\"col-md-4 my-1\">
                <label class=\"text-sm font-weight-bold text-muted\">Rechercher un article :</label>
                <input type=\"text\" class=\"form-control\" placeholder=\"Ex: Ciment, Fer...\">
              </div>
              <!-- Bouton Ajouter Mouvement -->
              <div class=\"col-md-4 my-1 d-flex align-items-end\">
                <button class=\"btn btn-primary btn-block font-weight-bold\" data-toggle=\"modal\" data-target=\"#modal-nouveau-mouvement\">
                  <i class=\"fas fa-plus-circle mr-2\"></i> Enregistrer un mouvement manuel
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 2 : LE LOG / REGISTRE DES MOUVEMENTS (Paginé) -->
        <div class=\"card card-default\">
          <div class=\"card-header bg-dark\">
            <h3 class=\"card-title font-weight-bold mb-0\">
              <i class=\"fas fa-history mr-1\"></i> Journal des flux récents
            </h3>
          </div>
          <!-- /.card-header -->
          <div class=\"card-body table-responsive p-0\">
            <table class=\"table table-hover table-striped text-nowrap align-middle mb-0\">
              <thead>
              <tr>
                <th>Date & Heure</th>
                <th>Article / Produit</th>
                <th>Type de flux</th>
                <th class=\"text-center\">Quantité</th>
                <th>Trajet (Origine ➡️ Destination)</th>
                <th>Opérateur</th>
                <th>Motif / Justificatif</th>
              </tr>
              </thead>
              <tbody>
              <!-- Ligne 1 : Entrée de stock -->
              <tr>
                <td class=\"text-muted\">21/05/2026 à 14:20</td>
                <td>
                  <span class=\"font-weight-bold d-block\">Sac de Ciment 50kg</span>
                  <small class=\"text-muted\">Réf: CIM-50</small>
                </td>
                <td>
                                    <span class=\"badge badge-success px-2 py-1 font-weight-bold\">
                                        <i class=\"fas fa-plus mr-1\"></i> ENTRÉE STOCK
                                    </span>
                </td>
                <td class=\"text-center font-weight-bold text-success h5\">+ 100 sacs</td>
                <td>Fournisseur ➡️ Entrepôt Principal</td>
                <td>Alassane</td>
                <td><span class=\"text-sm text-truncate d-inline-block\" style=\"max-width: 150px;\">Achat Facture #FC-0045</span></td>
              </tr>

              <!-- Ligne 2 : Transfert de stock -->
              <tr>
                <td class=\"text-muted\">21/05/2026 à 11:05</td>
                <td>
                  <span class=\"font-weight-bold d-block\">Fer à béton 12 (Unité)</span>
                  <small class=\"text-muted\">Réf: FER-B12</small>
                </td>
                <td>
                                    <span class=\"badge badge-warning text-dark px-2 py-1 font-weight-bold\">
                                        <i class=\"fas fa-shipping-fast mr-1\"></i> TRANSFERT INTERNE
                                    </span>
                </td>
                <td class=\"text-center font-weight-bold text-warning h5\">20 barres</td>
                <td>Entrepôt ➡️ Boutique</td>
                <td>Seydou KONE</td>
                <td>Alimentation rayon boutique</td>
              </tr>

              <!-- Ligne 3 : Sortie normale par vente -->
              <tr>
                <td class=\"text-muted\">21/05/2026 à 09:15</td>
                <td>
                  <span class=\"font-weight-bold d-block\">Sac de Ciment 50kg</span>
                  <small class=\"text-muted\">Réf: CIM-50</small>
                </td>
                <td>
                                    <span class=\"badge badge-danger px-2 py-1 font-weight-bold\">
                                        <i class=\"fas fa-shopping-cart mr-1\"></i> SORTIE (VENTE)
                                    </span>
                </td>
                <td class=\"text-center font-weight-bold text-danger h5\">- 5 sacs</td>
                <td>Boutique ➡️ Client</td>
                <td>Caissier central</td>
                <td>Ticket de caisse #TK-984</td>
              </tr>

              <!-- Ligne 4 : Sortie exceptionnelle (Casse/Perte) -->
              <tr>
                <td class=\"text-muted\">20/05/2026 à 16:45</td>
                <td>
                  <span class=\"font-weight-bold d-block\">Pot de Peinture Blanche 20L</span>
                  <small class=\"text-muted\">Réf: PT-BL20</small>
                </td>
                <td>
                                    <span class=\"badge badge-secondary px-2 py-1 font-weight-bold\">
                                        <i class=\"fas fa-heart-broken mr-1\"></i> PERTE / CASSE
                                    </span>
                </td>
                <td class=\"text-center font-weight-bold text-danger h5\">- 1 pot</td>
                <td>Entrepôt Principal ➡️ Aucun</td>
                <td>Adama</td>
                <td class=\"text-danger font-weight-bold\">Pot percé accidentellement</td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->

          <!-- FOOTER DE CARD AVEC PAGINATION -->
          <div class=\"card-footer clearfix bg-white border-top\">
            <ul class=\"pagination pagination-sm m-0 float-right\">
              <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">Précédent</a></li>
              <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>
              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>
              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Suivant</a></li>
            </ul>
            <span class=\"text-muted text-sm float-left mt-1\">Affichage des 4 derniers mouvements sur 128 enregistrés</span>
          </div>
          <!-- /.card-footer -->
        </div>
        <!-- /.card -->

      </div>
    </section>
  </div>

  <!-- ================= MODAL SOUVENT TRÈS APPRÉCIÉ EN DOCUMENTATION PFE ================= -->
  <!-- Fenêtre surgissante pour simuler l'ajout d'un mouvement -->
  <div class=\"modal fade\" id=\"modal-nouveau-mouvement\">
    <div class=\"modal-dialog\">
      <div class=\"modal-content\">
        <div class=\"modal-header bg-primary\">
          <h4 class=\"modal-title font-weight-bold\"><i class=\"fas fa-plus-circle mr-2\"></i> Enregistrer un flux</h4>
          <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">
            <span aria-hidden=\"true\">&times;</span>
          </button>
        </div>
        <div class=\"modal-body\">
          <form>
            <div class=\"form-group\">
              <label>1. Choisir l'article :</label>
              <select class=\"form-control\">
                <option>Sac de Ciment 50kg</option>
                <option>Fer à béton 12</option>
                <option>Peinture Blanche 20L</option>
              </select>
            </div>
            <div class=\"form-group\">
              <label>2. Quel type de mouvement ?</label>
              <select class=\"form-control\">
                <option class=\"text-success font-weight-bold\">📈 Entrée de stock (Ajout)</option>
                <option class=\"text-danger font-weight-bold\">📉 Sortie de stock (Retrait)</option>
                <option class=\"text-warning font-weight-bold\">🚚 Transfert interne (Déplacement)</option>
              </select>
            </div>
            <div class=\"row\">
              <div class=\"col-6\">
                <div class=\"form-group\">
                  <label>3. Quantité :</label>
                  <input type=\"number\" class=\"form-control\" placeholder=\"Ex: 10\" min=\"1\">
                </div>
              </div>
              <div class=\"col-6\">
                <div class=\"form-group\">
                  <label>4. Motif / Raison :</label>
                  <input type=\"text\" class=\"form-control\" placeholder=\"Ex: Casse, Inventaire...\">
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class=\"modal-footer justify-content-between\">
          <button type=\"button\" class=\"btn btn-default font-weight-bold\" data-dismiss=\"modal\">Annuler</button>
          <button type=\"button\" class=\"btn btn-success font-weight-bold\" data-dismiss=\"modal\">Valider le mouvement</button>
        </div>
      </div>
    </div>
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
        return "stock_mouvement/index.html.twig";
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
        return array (  126 => 11,  113 => 10,  101 => 6,  88 => 5,  65 => 3,  42 => 1,);
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
            <h1 class=\"m-0 font-weight-bold\"><i class=\"fas fa-exchange-alt text-primary mr-2\"></i> Mouvements du Stock</h1>
            <p class=\"text-muted mb-0\">Le registre de toutes les entrées, sorties et transferts de vos marchandises.</p>
          </div>
          <div class=\"col-sm-6\">
            <ol class=\"breadcrumb float-sm-right\">
              <li class=\"breadcrumb-item\"><a href=\"?page=dashboard\">Logiciel</a></li>
              <li class=\"breadcrumb-item active\">Mouvements Stock</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu Principal -->
    <section class=\"content\">
      <div class=\"container-fluid\">

        <!-- SECTION 1 : FILTRES RAPIDES ET BOUTON ACTION -->
        <div class=\"card card-outline card-primary mb-4\">
          <div class=\"card-body p-3\">
            <div class=\"row\">
              <!-- Filtrer par type de mouvement -->
              <div class=\"col-md-4 my-1\">
                <label class=\"text-sm font-weight-bold text-muted\">Filtrer par type :</label>
                <select class=\"form-control\">
                  <option>🔄 Tous les mouvements</option>
                  <option>📈 Entrées (Achats / Approvisionnements)</option>
                  <option>📉 Sorties (Ventes / Pertes / Casse)</option>
                  <option>🚚 Transferts entre dépôts</option>
                </select>
              </div>
              <!-- Filtrer par recherche rapide -->
              <div class=\"col-md-4 my-1\">
                <label class=\"text-sm font-weight-bold text-muted\">Rechercher un article :</label>
                <input type=\"text\" class=\"form-control\" placeholder=\"Ex: Ciment, Fer...\">
              </div>
              <!-- Bouton Ajouter Mouvement -->
              <div class=\"col-md-4 my-1 d-flex align-items-end\">
                <button class=\"btn btn-primary btn-block font-weight-bold\" data-toggle=\"modal\" data-target=\"#modal-nouveau-mouvement\">
                  <i class=\"fas fa-plus-circle mr-2\"></i> Enregistrer un mouvement manuel
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 2 : LE LOG / REGISTRE DES MOUVEMENTS (Paginé) -->
        <div class=\"card card-default\">
          <div class=\"card-header bg-dark\">
            <h3 class=\"card-title font-weight-bold mb-0\">
              <i class=\"fas fa-history mr-1\"></i> Journal des flux récents
            </h3>
          </div>
          <!-- /.card-header -->
          <div class=\"card-body table-responsive p-0\">
            <table class=\"table table-hover table-striped text-nowrap align-middle mb-0\">
              <thead>
              <tr>
                <th>Date & Heure</th>
                <th>Article / Produit</th>
                <th>Type de flux</th>
                <th class=\"text-center\">Quantité</th>
                <th>Trajet (Origine ➡️ Destination)</th>
                <th>Opérateur</th>
                <th>Motif / Justificatif</th>
              </tr>
              </thead>
              <tbody>
              <!-- Ligne 1 : Entrée de stock -->
              <tr>
                <td class=\"text-muted\">21/05/2026 à 14:20</td>
                <td>
                  <span class=\"font-weight-bold d-block\">Sac de Ciment 50kg</span>
                  <small class=\"text-muted\">Réf: CIM-50</small>
                </td>
                <td>
                                    <span class=\"badge badge-success px-2 py-1 font-weight-bold\">
                                        <i class=\"fas fa-plus mr-1\"></i> ENTRÉE STOCK
                                    </span>
                </td>
                <td class=\"text-center font-weight-bold text-success h5\">+ 100 sacs</td>
                <td>Fournisseur ➡️ Entrepôt Principal</td>
                <td>Alassane</td>
                <td><span class=\"text-sm text-truncate d-inline-block\" style=\"max-width: 150px;\">Achat Facture #FC-0045</span></td>
              </tr>

              <!-- Ligne 2 : Transfert de stock -->
              <tr>
                <td class=\"text-muted\">21/05/2026 à 11:05</td>
                <td>
                  <span class=\"font-weight-bold d-block\">Fer à béton 12 (Unité)</span>
                  <small class=\"text-muted\">Réf: FER-B12</small>
                </td>
                <td>
                                    <span class=\"badge badge-warning text-dark px-2 py-1 font-weight-bold\">
                                        <i class=\"fas fa-shipping-fast mr-1\"></i> TRANSFERT INTERNE
                                    </span>
                </td>
                <td class=\"text-center font-weight-bold text-warning h5\">20 barres</td>
                <td>Entrepôt ➡️ Boutique</td>
                <td>Seydou KONE</td>
                <td>Alimentation rayon boutique</td>
              </tr>

              <!-- Ligne 3 : Sortie normale par vente -->
              <tr>
                <td class=\"text-muted\">21/05/2026 à 09:15</td>
                <td>
                  <span class=\"font-weight-bold d-block\">Sac de Ciment 50kg</span>
                  <small class=\"text-muted\">Réf: CIM-50</small>
                </td>
                <td>
                                    <span class=\"badge badge-danger px-2 py-1 font-weight-bold\">
                                        <i class=\"fas fa-shopping-cart mr-1\"></i> SORTIE (VENTE)
                                    </span>
                </td>
                <td class=\"text-center font-weight-bold text-danger h5\">- 5 sacs</td>
                <td>Boutique ➡️ Client</td>
                <td>Caissier central</td>
                <td>Ticket de caisse #TK-984</td>
              </tr>

              <!-- Ligne 4 : Sortie exceptionnelle (Casse/Perte) -->
              <tr>
                <td class=\"text-muted\">20/05/2026 à 16:45</td>
                <td>
                  <span class=\"font-weight-bold d-block\">Pot de Peinture Blanche 20L</span>
                  <small class=\"text-muted\">Réf: PT-BL20</small>
                </td>
                <td>
                                    <span class=\"badge badge-secondary px-2 py-1 font-weight-bold\">
                                        <i class=\"fas fa-heart-broken mr-1\"></i> PERTE / CASSE
                                    </span>
                </td>
                <td class=\"text-center font-weight-bold text-danger h5\">- 1 pot</td>
                <td>Entrepôt Principal ➡️ Aucun</td>
                <td>Adama</td>
                <td class=\"text-danger font-weight-bold\">Pot percé accidentellement</td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->

          <!-- FOOTER DE CARD AVEC PAGINATION -->
          <div class=\"card-footer clearfix bg-white border-top\">
            <ul class=\"pagination pagination-sm m-0 float-right\">
              <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">Précédent</a></li>
              <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>
              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>
              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>
              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Suivant</a></li>
            </ul>
            <span class=\"text-muted text-sm float-left mt-1\">Affichage des 4 derniers mouvements sur 128 enregistrés</span>
          </div>
          <!-- /.card-footer -->
        </div>
        <!-- /.card -->

      </div>
    </section>
  </div>

  <!-- ================= MODAL SOUVENT TRÈS APPRÉCIÉ EN DOCUMENTATION PFE ================= -->
  <!-- Fenêtre surgissante pour simuler l'ajout d'un mouvement -->
  <div class=\"modal fade\" id=\"modal-nouveau-mouvement\">
    <div class=\"modal-dialog\">
      <div class=\"modal-content\">
        <div class=\"modal-header bg-primary\">
          <h4 class=\"modal-title font-weight-bold\"><i class=\"fas fa-plus-circle mr-2\"></i> Enregistrer un flux</h4>
          <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">
            <span aria-hidden=\"true\">&times;</span>
          </button>
        </div>
        <div class=\"modal-body\">
          <form>
            <div class=\"form-group\">
              <label>1. Choisir l'article :</label>
              <select class=\"form-control\">
                <option>Sac de Ciment 50kg</option>
                <option>Fer à béton 12</option>
                <option>Peinture Blanche 20L</option>
              </select>
            </div>
            <div class=\"form-group\">
              <label>2. Quel type de mouvement ?</label>
              <select class=\"form-control\">
                <option class=\"text-success font-weight-bold\">📈 Entrée de stock (Ajout)</option>
                <option class=\"text-danger font-weight-bold\">📉 Sortie de stock (Retrait)</option>
                <option class=\"text-warning font-weight-bold\">🚚 Transfert interne (Déplacement)</option>
              </select>
            </div>
            <div class=\"row\">
              <div class=\"col-6\">
                <div class=\"form-group\">
                  <label>3. Quantité :</label>
                  <input type=\"number\" class=\"form-control\" placeholder=\"Ex: 10\" min=\"1\">
                </div>
              </div>
              <div class=\"col-6\">
                <div class=\"form-group\">
                  <label>4. Motif / Raison :</label>
                  <input type=\"text\" class=\"form-control\" placeholder=\"Ex: Casse, Inventaire...\">
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class=\"modal-footer justify-content-between\">
          <button type=\"button\" class=\"btn btn-default font-weight-bold\" data-dismiss=\"modal\">Annuler</button>
          <button type=\"button\" class=\"btn btn-success font-weight-bold\" data-dismiss=\"modal\">Valider le mouvement</button>
        </div>
      </div>
    </div>
  </div>
{% endblock %}

", "stock_mouvement/index.html.twig", "/Users/alassanesanogo/Mes_projets/groupe_salen/e_dolibarr/templates/stock_mouvement/index.html.twig");
    }
}
