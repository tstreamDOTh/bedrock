/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(Waypoint) {
    'use strict';

    var mqShowNav;
    var stickyHeader;

    function enableDesktop() {
        if (mqShowNav) {
            stickyHeader = new Waypoint.Sticky({
                element: $('.privacy-head'),
                offset: 0
            });
        }
    }

    if (typeof matchMedia !== 'undefined') {
        mqShowNav = matchMedia('(min-width: 1000px)');

        mqShowNav.addListener(function(mq) {
            if (mq.matches) {
                enableDesktop();
            } else {
                stickyHeader.destroy();
            }
        });

        if (mqShowNav.matches) {
            enableDesktop();
        }
    }

})(window.Waypoint);
