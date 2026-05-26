// script.js — standalone click handler for ad units that use a #clickCta element
// (This file is NOT needed by index.html, which uses delegated event listeners directly.
//  Include this only in ad creatives that have a dedicated CTA button with id="clickCta".)

document.addEventListener('DOMContentLoaded', function () {
  var clickCta = document.getElementById('clickCta');

  if (clickCta) {
    clickCta.addEventListener('click', function () {
      var targetUrl = (typeof clickTag !== 'undefined' && clickTag)
        ? clickTag
        : 'https://www.google.com/';
      window.open(targetUrl, '_blank');
    });
  }
});