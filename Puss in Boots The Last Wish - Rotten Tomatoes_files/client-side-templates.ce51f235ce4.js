"use strict";(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._modalTrailer={root:function(a,o,e,t,r){var l="";try{l+='<div class="modal-trailer__dialog modal__dialog" role="dialog" aria-modal="true">\n    <div class="modal-trailer__header">\n        <button class="js-close-modal modal-trailer__close-btn rt-icon rt-icon__close" data-qa="modal-trailer-close-btn"></button>\n        <a href="',l+=t.suppressValue(t.contextOrFrameLookup(o,e,"ctaUrl"),a.opts.autoescape),l+='" class="modal-trailer__desktop-cta-btn button">\n            ',l+=t.suppressValue(t.contextOrFrameLookup(o,e,"ctaCopy"),a.opts.autoescape),l+='\n        </a>\n    </div>\n    <div class="js-modal-trailer-video-player modal-tailer__video-player"></div>\n    <div class="modal-trailer__btn-group">\n        <a href="',l+=t.suppressValue(t.contextOrFrameLookup(o,e,"ctaUrl"),a.opts.autoescape),l+='" class="modal-trailer__mobile-cta-btn button">\n            ',l+=t.suppressValue(t.contextOrFrameLookup(o,e,"ctaCopy"),a.opts.autoescape),r(null,l+="\n        </a>\n    </div>\n</div>")}catch(a){r(t.handleError(a,0,0))}}};