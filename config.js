/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.specialChars = config.specialChars.concat([ [ '&alpha;', 'alpha' ],
        [ '&beta;', 'beta' ],
        [ '&gamma;', 'gamma' ],
        [ '&delta;', 'delta' ],
        [ '&epsilon;', 'epsilon' ],
        [ '&zeta;', 'zeta' ],
        [ '&eta;', 'eta' ],
        [ '&theta;', 'theta' ],
        [ '&iota;', 'iota' ],
        [ '&kappa;', 'kappa' ],
        [ '&lambda;', 'lambda' ],
        [ '&mu;', 'mu' ],
        [ '&nu;', 'nu' ],
        [ '&xi;', 'xi' ],
        [ '&omicron;', 'omicron' ],
        [ '&pi;', 'pi' ],
        [ '&rho;', 'rho' ],
        [ '&sigma;', 'sigma' ],
        [ '&tau;', 'tau' ],
        [ '&upsilon;', 'upsilon' ],
        [ '&phi;', 'phi' ],
        [ '&chi;', 'chi' ],
        [ '&psi;', 'psi' ],
        [ '&omega;', 'omega' ] ]);
    config.extraPlugins += (config.extraPlugins.length == 0 ? '' : ',') + 'ckeditor_wiris';
    config.allowedContent = true;
};
