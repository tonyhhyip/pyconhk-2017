import $ from 'jquery';

/* global location, navigator */

if (location.hostname !== 'localhost' && location.protocol !== 'https:') {
  // Strict HTTPS
  location.href = `https:${location.href.substring(location.protocol.length)}`;
}

if (navigator.serviceWorker && process.env.NODE_ENV === 'production') {
  require.ensure(['./sw'], () => {
    require('./sw');
  });
}

require('./component/sidebar');
require('./component/collapsible');
require('./component/ga');
require('./component/modal');

$('[data-activates]').sideNav();
$('.collapsible').collapsible();

// $FlowFixMe
import('node-waves').then(Waves => Waves.init());
