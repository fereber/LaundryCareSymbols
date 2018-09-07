/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function () {
  function addIcon(el, entity) {
    var html = el.innerHTML;
    el.innerHTML = '<span style="font-family: \'LaundryCareSymbols\'">' + entity + '</span>' + html;
  }
  var icons = {
      'icon-wash': '&#xe000;',
      'icon-wash-30': '&#xe001;',
      'icon-wash-40': '&#xe002;',
      'icon-wash-50': '&#xe003;',
      'icon-wash-hand': '&#xe004;',
      'icon-wash-no': '&#xe005;',
      'icon-bleach': '&#xe006;',
      'icon-bleach-chlor-no': '&#xe007;',
      'icon-bleach-chlor': '&#xe008;',
      'icon-bleach-no': '&#xe009;',
      'icon-bleach-no-2': '&#xe00a;',
      'icon-dry': '&#xe00b;',
      'icon-dry-tumble': '&#xe00c;',
      'icon-dry-tumble-low': '&#xe00d;',
      'icon-dry-tumble-normal': '&#xe00e;',
      'icon-dry-tumble-no': '&#xe00f;',
      'icon-iron': '&#xe010;',
      'icon-iron-low': '&#xe011;',
      'icon-iron-medium': '&#xe012;',
      'icon-iron-high': '&#xe013;',
      'icon-iron-no': '&#xe014;',
      'icon-clean': '&#xe015;',
      'icon-clean-pce': '&#xe016;',
      'icon-clean-hcs': '&#xe017;',
      'icon-clean-no': '&#xe018;'
    },
    els = document.getElementsByTagName('*'),
    i, attr, html, c, el;
  for (i = 0;; i += 1) {
    el = els[i];
    if (!el) {
      break;
    }
    attr = el.getAttribute('data-icon');
    if (attr) {
      addIcon(el, attr);
    }
    c = el.className;
    c = c.match(/icon-[^\s'"]+/);
    if (c && icons[c[0]]) {
      addIcon(el, icons[c[0]]);
    }
  }
};