/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection, platform, FlashDetect */

(function () {

  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };


  var _p = platform;
  document.getElementById('platform').innerHTML = '<b>Browser</b>: ' + _p.description;

  var _w = window.screen;
  document.getElementById('screen').innerHTML = '<b>Display resolution</b>: ' + _w.width + ' x ' + _w.height;

  var _f = FlashDetect;
  if (_f.installed){
    document.getElementById('flash').innerHTML = '<b>Adobe Flash plugin</b> installed v.: ' + _f.raw;
  } else {
    document.getElementById('flash').innerHTML = '<b>Adobe Flash plugin</b> is not installed.';
  }

  var _p = window.open('http://www.google.com', '_blank' );
  if (_p === null || typeof(_p) === 'undefined') {
    document.getElementById('popup-blocker').innerHTML = '<b>Popup windows</b>: blocked';
  } else {
    _p.close();
    document.getElementById('popup-blocker').innerHTML = '<b>Popup windows</b>: not blocked';
  }

})();
