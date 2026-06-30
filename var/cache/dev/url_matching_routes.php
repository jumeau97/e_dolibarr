<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/doc.json' => [[['_route' => 'app.swagger', '_controller' => 'nelmio_api_doc.controller.swagger'], null, ['GET' => 0], null, false, false, null]],
        '/api/doc' => [[['_route' => 'app.swagger_ui', '_controller' => 'nelmio_api_doc.controller.swagger_ui'], null, ['GET' => 0], null, false, false, null]],
        '/_wdt/styles' => [[['_route' => '_wdt_stylesheet', '_controller' => 'web_profiler.controller.profiler::toolbarStylesheetAction'], null, null, null, false, false, null]],
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/xdebug' => [[['_route' => '_profiler_xdebug', '_controller' => 'web_profiler.controller.profiler::xdebugAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/alert/rupture/stock' => [[['_route' => 'app_alert_rupture_stock', '_controller' => 'App\\Controller\\AlertRuptureStockController::index'], null, null, null, false, false, null]],
        '/entrepot' => [[['_route' => 'app_entrepot', '_controller' => 'App\\Controller\\EntrepotController::index'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'app_home', '_controller' => 'App\\Controller\\HomeController::index'], null, null, null, false, false, null]],
        '/predprediction/vente' => [[['_route' => 'app_predprediction_vente', '_controller' => 'App\\Controller\\PredpredictionVenteController::index'], null, null, null, false, false, null]],
        '/product' => [[['_route' => 'app_produit_article', '_controller' => 'App\\Controller\\ProduitArticleController::index'], null, null, null, false, false, null]],
        '/product/add' => [[['_route' => 'add_product', '_controller' => 'App\\Controller\\ProduitArticleController::addProduct'], null, null, null, false, false, null]],
        '/send-email' => [[['_route' => 'sending_email_to_bstp', '_controller' => 'App\\Controller\\RegisterController::send'], null, null, null, false, false, null]],
        '/user/register' => [[['_route' => 'register_customer', '_controller' => 'App\\Controller\\RegisterController::index'], null, null, null, false, false, null]],
        '/api/user/list-utilisateur' => [[['_route' => 'dashboard_list_utilisateurs', '_controller' => 'App\\Controller\\RegisterController::findAll'], null, null, null, false, false, null]],
        '/api/user/add-user' => [[['_route' => 'dashboard_add_user', '_controller' => 'App\\Controller\\RegisterController::add'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], null, null, null, false, false, null]],
        '/api/login' => [[['_route' => 'api_login', '_controller' => 'App\\Controller\\SecurityController::apiLogin'], null, null, null, false, false, null]],
        '/stock' => [[['_route' => 'app_stock', '_controller' => 'App\\Controller\\StockController::index'], null, null, null, false, false, null]],
        '/stock/mouvement' => [[['_route' => 'app_stock_mouvement', '_controller' => 'App\\Controller\\StockMouvementController::index'], null, null, null, false, false, null]],
        '/user' => [[['_route' => 'user_list', '_controller' => 'App\\Controller\\UserController::list'], null, null, null, false, false, null]],
        '/api/user/current-user' => [[['_route' => 'current-user', '_controller' => 'App\\Controller\\UserController::currentUser'], null, ['GET' => 0], null, false, false, null]],
        '/vente' => [[['_route' => 'app_vente', '_controller' => 'App\\Controller\\VenteController::index'], null, null, null, false, false, null]],
        '/api/login_check' => [[['_route' => 'api_login_check'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|components/([^/]++)(?:/([^/]++))?(*:78)'
                    .'|wdt/([^/]++)(*:97)'
                    .'|profiler/(?'
                        .'|font/([^/\\.]++)\\.woff2(*:138)'
                        .'|([^/]++)(?'
                            .'|/(?'
                                .'|search/results(*:175)'
                                .'|router(*:189)'
                                .'|exception(?'
                                    .'|(*:209)'
                                    .'|\\.css(*:222)'
                                .')'
                            .')'
                            .'|(*:232)'
                        .')'
                    .')'
                .')'
                .'|/entrepot/details/([^/]++)(*:269)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        78 => [[['_route' => 'ux_live_component', '_live_action' => 'get'], ['_live_component', '_live_action'], null, null, false, true, null]],
        97 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        138 => [[['_route' => '_profiler_font', '_controller' => 'web_profiler.controller.profiler::fontAction'], ['fontName'], null, null, false, false, null]],
        175 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        189 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        209 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        222 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        232 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        269 => [
            [['_route' => 'details_entrepot', '_controller' => 'App\\Controller\\EntrepotController::details'], ['id'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
