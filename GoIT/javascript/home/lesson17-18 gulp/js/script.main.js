function changeCheck(t){var t=t,i=t.find("input").eq(0);return-1==t.attr("class").indexOf("niceCheckDisabled")&&(i.attr("checked")?(t.removeClass("niceChecked"),i.attr("checked",!1).focus()):(t.addClass("niceChecked"),i.attr("checked",!0))),!0}function changeVisualCheck(t){var i=t.parent();t.attr("checked")?i.addClass("niceChecked"):i.removeClass("niceChecked")}function changeCheckStart(t){try{var t=t,i=t.attr("name"),e=t.attr("id"),s=t.attr("checked"),n=t.attr("disabled"),r=t.attr("tabindex"),o=t.attr("value");s?t.after("<span class='niceCheck niceChecked'><input type='checkbox'name='"+i+"'id='"+e+"'checked='"+s+"'value='"+o+"'tabindex='"+r+"' /></span>"):t.after("<span class='niceCheck'><input type='checkbox'name='"+i+"'id='"+e+"'value='"+o+"'tabindex='"+r+"' /></span>"),n&&(t.next().addClass("niceCheckDisabled"),t.next().find("input").eq(0).attr("disabled","disabled")),t.next().bind("mousedown",function(t){changeCheck(jQuery(this))}),t.next().find("input").eq(0).bind("change",function(t){changeVisualCheck(jQuery(this))}),jQuery.browser.msie&&t.next().find("input").eq(0).bind("click",function(t){changeVisualCheck(jQuery(this))}),t.remove()}catch(a){}return!0}!function(t){t.fn.extend({customSelect:function(i){if("undefined"==typeof document.body.style.maxHeight)return this;var e={customClass:"customSelect",mapClass:!0,mapStyle:!0},i=t.extend(e,i),s=i.customClass,n=function(i,e){var s=i.find(":selected"),n=e.children(":first"),o=s.html()||"&nbsp;";n.html(o),s.attr("disabled")?e.addClass(r("DisabledOption")):e.removeClass(r("DisabledOption")),setTimeout(function(){e.removeClass(r("Open")),t(document).off("mouseup.customSelect")},60)},r=function(t){return s+t};return this.each(function(){var e=t(this),o=t("<span />").addClass(r("Inner")),a=t("<span />");e.after(a.append(o)),a.addClass(s),i.mapClass&&a.addClass(e.attr("class")),i.mapStyle&&a.attr("style",e.attr("style")),e.addClass("hasCustomSelect").on("render.customSelect",function(){n(e,a),e.css("width","");var t=parseInt(e.outerWidth(),10)-(parseInt(a.outerWidth(),10)-parseInt(a.width(),10));a.css({display:"inline-block"});var i=a.outerHeight();e.attr("disabled")?a.addClass(r("Disabled")):a.removeClass(r("Disabled")),o.css({width:t,display:"inline-block"}),e.css({"-webkit-appearance":"menulist-button",width:a.outerWidth(),position:"absolute",opacity:0,height:i,fontSize:a.css("font-size")})}).on("change.customSelect",function(){a.addClass(r("Changed")),n(e,a)}).on("keyup.customSelect",function(t){a.hasClass(r("Open"))?(13==t.which||27==t.which)&&n(e,a):(e.trigger("blur.customSelect"),e.trigger("focus.customSelect"))}).on("mousedown.customSelect",function(){a.removeClass(r("Changed"))}).on("mouseup.customSelect",function(i){a.hasClass(r("Open"))||(t("."+r("Open")).not(a).length>0&&"undefined"!=typeof InstallTrigger?e.trigger("focus.customSelect"):(a.addClass(r("Open")),i.stopPropagation(),t(document).one("mouseup.customSelect",function(i){i.target!=e.get(0)&&t.inArray(i.target,e.find("*").get())<0?e.trigger("blur.customSelect"):n(e,a)})))}).on("focus.customSelect",function(){a.removeClass(r("Changed")).addClass(r("Focus"))}).on("blur.customSelect",function(){a.removeClass(r("Focus")+" "+r("Open"))}).on("mouseenter.customSelect",function(){a.addClass(r("Hover"))}).on("mouseleave.customSelect",function(){a.removeClass(r("Hover"))}).trigger("render.customSelect")})}})}(jQuery),!function(t){"use strict";var i=t.jCarousel={};i.version="0.3.4";var e=/^([+\-]=)?(.+)$/;i.parseTarget=function(t){var i=!1,s="object"!=typeof t?e.exec(t):null;return s?(t=parseInt(s[2],10)||0,s[1]&&(i=!0,"-="===s[1]&&(t*=-1))):"object"!=typeof t&&(t=parseInt(t,10)||0),{target:t,relative:i}},i.detectCarousel=function(t){for(var i;t.length>0;){if(i=t.filter("[data-jcarousel]"),i.length>0)return i;if(i=t.find("[data-jcarousel]"),i.length>0)return i;t=t.parent()}return null},i.base=function(e){return{version:i.version,_options:{},_element:null,_carousel:null,_init:t.noop,_create:t.noop,_destroy:t.noop,_reload:t.noop,create:function(){return this._element.attr("data-"+e.toLowerCase(),!0).data(e,this),!1===this._trigger("create")?this:(this._create(),this._trigger("createend"),this)},destroy:function(){return!1===this._trigger("destroy")?this:(this._destroy(),this._trigger("destroyend"),this._element.removeData(e).removeAttr("data-"+e.toLowerCase()),this)},reload:function(t){return!1===this._trigger("reload")?this:(t&&this.options(t),this._reload(),this._trigger("reloadend"),this)},element:function(){return this._element},options:function(i,e){if(0===arguments.length)return t.extend({},this._options);if("string"==typeof i){if("undefined"==typeof e)return"undefined"==typeof this._options[i]?null:this._options[i];this._options[i]=e}else this._options=t.extend({},this._options,i);return this},carousel:function(){return this._carousel||(this._carousel=i.detectCarousel(this.options("carousel")||this._element),this._carousel||t.error('Could not detect carousel for plugin "'+e+'"')),this._carousel},_trigger:function(i,s,n){var r,o=!1;return n=[this].concat(n||[]),(s||this._element).each(function(){r=t.Event((e+":"+i).toLowerCase()),t(this).trigger(r,n),r.isDefaultPrevented()&&(o=!0)}),!o}}},i.plugin=function(e,s){var n=t[e]=function(i,e){this._element=t(i),this.options(e),this._init(),this.create()};return n.fn=n.prototype=t.extend({},i.base(e),s),t.fn[e]=function(i){var s=Array.prototype.slice.call(arguments,1),r=this;return this.each("string"==typeof i?function(){var n=t(this).data(e);if(!n)return t.error("Cannot call methods on "+e+' prior to initialization; attempted to call method "'+i+'"');if(!t.isFunction(n[i])||"_"===i.charAt(0))return t.error('No such method "'+i+'" for '+e+" instance");var o=n[i].apply(n,s);return o!==n&&"undefined"!=typeof o?(r=o,!1):void 0}:function(){var s=t(this).data(e);s instanceof n?s.reload(i):new n(this,i)}),r},n}}(jQuery),function(t,i){"use strict";var e=function(t){return parseFloat(t)||0};t.jCarousel.plugin("jcarousel",{animating:!1,tail:0,inTail:!1,resizeTimer:null,lt:null,vertical:!1,rtl:!1,circular:!1,underflow:!1,relative:!1,_options:{list:function(){return this.element().children().eq(0)},items:function(){return this.list().children()},animation:400,transitions:!1,wrap:null,vertical:null,rtl:null,center:!1},_list:null,_items:null,_target:t(),_first:t(),_last:t(),_visible:t(),_fullyvisible:t(),_init:function(){var t=this;return this.onWindowResize=function(){t.resizeTimer&&clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.reload()},100)},this},_create:function(){this._reload(),t(i).on("resize.jcarousel",this.onWindowResize)},_destroy:function(){t(i).off("resize.jcarousel",this.onWindowResize)},_reload:function(){this.vertical=this.options("vertical"),null==this.vertical&&(this.vertical=this.list().height()>this.list().width()),this.rtl=this.options("rtl"),null==this.rtl&&(this.rtl=function(i){if("rtl"===(""+i.attr("dir")).toLowerCase())return!0;var e=!1;return i.parents("[dir]").each(function(){return/rtl/i.test(t(this).attr("dir"))?(e=!0,!1):void 0}),e}(this._element)),this.lt=this.vertical?"top":"left",this.relative="relative"===this.list().css("position"),this._list=null,this._items=null;var i=this.index(this._target)>=0?this._target:this.closest();this.circular="circular"===this.options("wrap"),this.underflow=!1;var e={left:0,top:0};return i.length>0&&(this._prepare(i),this.list().find("[data-jcarousel-clone]").remove(),this._items=null,this.underflow=this._fullyvisible.length>=this.items().length,this.circular=this.circular&&!this.underflow,e[this.lt]=this._position(i)+"px"),this.move(e),this},list:function(){if(null===this._list){var i=this.options("list");this._list=t.isFunction(i)?i.call(this):this._element.find(i)}return this._list},items:function(){if(null===this._items){var i=this.options("items");this._items=(t.isFunction(i)?i.call(this):this.list().find(i)).not("[data-jcarousel-clone]")}return this._items},index:function(t){return this.items().index(t)},closest:function(){var i,s=this,n=this.list().position()[this.lt],r=t(),o=!1,a=this.vertical?"bottom":this.rtl&&!this.relative?"left":"right";return this.rtl&&this.relative&&!this.vertical&&(n+=this.list().width()-this.clipping()),this.items().each(function(){if(r=t(this),o)return!1;var l=s.dimension(r);if(n+=l,n>=0){if(i=l-e(r.css("margin-"+a)),!(Math.abs(n)-l+i/2<=0))return!1;o=!0}}),r},target:function(){return this._target},first:function(){return this._first},last:function(){return this._last},visible:function(){return this._visible},fullyvisible:function(){return this._fullyvisible},hasNext:function(){if(!1===this._trigger("hasnext"))return!0;var t=this.options("wrap"),i=this.items().length-1,e=this.options("center")?this._target:this._last;return i>=0&&!this.underflow&&(t&&"first"!==t||this.index(e)<i||this.tail&&!this.inTail)?!0:!1},hasPrev:function(){if(!1===this._trigger("hasprev"))return!0;var t=this.options("wrap");return this.items().length>0&&!this.underflow&&(t&&"last"!==t||this.index(this._first)>0||this.tail&&this.inTail)?!0:!1},clipping:function(){return this._element["inner"+(this.vertical?"Height":"Width")]()},dimension:function(t){return t["outer"+(this.vertical?"Height":"Width")](!0)},scroll:function(i,e,s){if(this.animating)return this;if(!1===this._trigger("scroll",null,[i,e]))return this;t.isFunction(e)&&(s=e,e=!0);var n=t.jCarousel.parseTarget(i);if(n.relative){var r,o,a,l,h,c,u,d,f=this.items().length-1,p=Math.abs(n.target),m=this.options("wrap");if(n.target>0){var _=this.index(this._last);if(_>=f&&this.tail)this.inTail?"both"===m||"last"===m?this._scroll(0,e,s):t.isFunction(s)&&s.call(this,!1):this._scrollTail(e,s);else if(r=this.index(this._target),this.underflow&&r===f&&("circular"===m||"both"===m||"last"===m)||!this.underflow&&_===f&&("both"===m||"last"===m))this._scroll(0,e,s);else if(a=r+p,this.circular&&a>f){for(d=f,h=this.items().get(-1);d++<a;)h=this.items().eq(0),c=this._visible.index(h)>=0,c&&h.after(h.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(h),c||(u={},u[this.lt]=this.dimension(h),this.moveBy(u)),this._items=null;this._scroll(h,e,s)}else this._scroll(Math.min(a,f),e,s)}else if(this.inTail)this._scroll(Math.max(this.index(this._first)-p+1,0),e,s);else if(o=this.index(this._first),r=this.index(this._target),l=this.underflow?r:o,a=l-p,0>=l&&(this.underflow&&"circular"===m||"both"===m||"first"===m))this._scroll(f,e,s);else if(this.circular&&0>a){for(d=a,h=this.items().get(0);d++<0;){h=this.items().eq(-1),c=this._visible.index(h)>=0,c&&h.after(h.clone(!0).attr("data-jcarousel-clone",!0)),this.list().prepend(h),this._items=null;var g=this.dimension(h);u={},u[this.lt]=-g,this.moveBy(u)}this._scroll(h,e,s)}else this._scroll(Math.max(a,0),e,s)}else this._scroll(n.target,e,s);return this._trigger("scrollend"),this},moveBy:function(t,i){var s=this.list().position(),n=1,r=0;return this.rtl&&!this.vertical&&(n=-1,this.relative&&(r=this.list().width()-this.clipping())),t.left&&(t.left=s.left+r+e(t.left)*n+"px"),t.top&&(t.top=s.top+r+e(t.top)*n+"px"),this.move(t,i)},move:function(i,e){e=e||{};var s=this.options("transitions"),n=!!s,r=!!s.transforms,o=!!s.transforms3d,a=e.duration||0,l=this.list();if(!n&&a>0)return void l.animate(i,e);var h=e.complete||t.noop,c={};if(n){var u={transitionDuration:l.css("transitionDuration"),transitionTimingFunction:l.css("transitionTimingFunction"),transitionProperty:l.css("transitionProperty")},d=h;h=function(){t(this).css(u),d.call(this)},c={transitionDuration:(a>0?a/1e3:0)+"s",transitionTimingFunction:s.easing||e.easing,transitionProperty:a>0?function(){return r||o?"all":i.left?"left":"top"}():"none",transform:"none"}}o?c.transform="translate3d("+(i.left||0)+","+(i.top||0)+",0)":r?c.transform="translate("+(i.left||0)+","+(i.top||0)+")":t.extend(c,i),n&&a>0&&l.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",h),l.css(c),0>=a&&l.each(function(){h.call(this)})},_scroll:function(i,e,s){if(this.animating)return t.isFunction(s)&&s.call(this,!1),this;if("object"!=typeof i?i=this.items().eq(i):"undefined"==typeof i.jquery&&(i=t(i)),0===i.length)return t.isFunction(s)&&s.call(this,!1),this;this.inTail=!1,this._prepare(i);var n=this._position(i),r=this.list().position()[this.lt];if(n===r)return t.isFunction(s)&&s.call(this,!1),this;var o={};return o[this.lt]=n+"px",this._animate(o,e,s),this},_scrollTail:function(i,e){if(this.animating||!this.tail)return t.isFunction(e)&&e.call(this,!1),this;var s=this.list().position()[this.lt];this.rtl&&this.relative&&!this.vertical&&(s+=this.list().width()-this.clipping()),this.rtl&&!this.vertical?s+=this.tail:s-=this.tail,this.inTail=!0;var n={};return n[this.lt]=s+"px",this._update({target:this._target.next(),fullyvisible:this._fullyvisible.slice(1).add(this._visible.last())}),this._animate(n,i,e),this},_animate:function(i,e,s){if(s=s||t.noop,!1===this._trigger("animate"))return s.call(this,!1),this;this.animating=!0;var n=this.options("animation"),r=t.proxy(function(){this.animating=!1;var t=this.list().find("[data-jcarousel-clone]");t.length>0&&(t.remove(),this._reload()),this._trigger("animateend"),s.call(this,!0)},this),o="object"==typeof n?t.extend({},n):{duration:n},a=o.complete||t.noop;return e===!1?o.duration=0:"undefined"!=typeof t.fx.speeds[o.duration]&&(o.duration=t.fx.speeds[o.duration]),o.complete=function(){r(),a.call(this)},this.move(i,o),this},_prepare:function(i){var s,n,r,o,a=this.index(i),l=a,h=this.dimension(i),c=this.clipping(),u=this.vertical?"bottom":this.rtl?"left":"right",d=this.options("center"),f={target:i,first:i,last:i,visible:i,fullyvisible:c>=h?i:t()};if(d&&(h/=2,c/=2),c>h)for(;;){if(s=this.items().eq(++l),0===s.length){if(!this.circular)break;if(s=this.items().eq(0),i.get(0)===s.get(0))break;if(n=this._visible.index(s)>=0,n&&s.after(s.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(s),!n){var p={};p[this.lt]=this.dimension(s),this.moveBy(p)}this._items=null}if(o=this.dimension(s),0===o)break;if(h+=o,f.last=s,f.visible=f.visible.add(s),r=e(s.css("margin-"+u)),c>=h-r&&(f.fullyvisible=f.fullyvisible.add(s)),h>=c)break}if(!this.circular&&!d&&c>h)for(l=a;!(--l<0)&&(s=this.items().eq(l),0!==s.length)&&(o=this.dimension(s),0!==o)&&(h+=o,f.first=s,f.visible=f.visible.add(s),r=e(s.css("margin-"+u)),c>=h-r&&(f.fullyvisible=f.fullyvisible.add(s)),!(h>=c)););return this._update(f),this.tail=0,d||"circular"===this.options("wrap")||"custom"===this.options("wrap")||this.index(f.last)!==this.items().length-1||(h-=e(f.last.css("margin-"+u)),h>c&&(this.tail=h-c)),this},_position:function(t){var i=this._first,e=i.position()[this.lt],s=this.options("center"),n=s?this.clipping()/2-this.dimension(i)/2:0;return this.rtl&&!this.vertical?(e-=this.relative?this.list().width()-this.dimension(i):this.clipping()-this.dimension(i),e+=n):e-=n,!s&&(this.index(t)>this.index(i)||this.inTail)&&this.tail?(e=this.rtl&&!this.vertical?e-this.tail:e+this.tail,this.inTail=!0):this.inTail=!1,-e},_update:function(i){var e,s=this,n={target:this._target,first:this._first,last:this._last,visible:this._visible,fullyvisible:this._fullyvisible},r=this.index(i.first||n.first)<this.index(n.first),o=function(e){var o=[],a=[];i[e].each(function(){n[e].index(this)<0&&o.push(this)}),n[e].each(function(){i[e].index(this)<0&&a.push(this)}),r?o=o.reverse():a=a.reverse(),s._trigger(e+"in",t(o)),s._trigger(e+"out",t(a)),s["_"+e]=i[e]};for(e in i)o(e);return this}})}(jQuery,window),function(t){"use strict";t.jcarousel.fn.scrollIntoView=function(i,e,s){var n,r=t.jCarousel.parseTarget(i),o=this.index(this._fullyvisible.first()),a=this.index(this._fullyvisible.last());if(n=r.relative?r.target<0?Math.max(0,o+r.target):a+r.target:"object"!=typeof r.target?r.target:this.index(r.target),o>n)return this.scroll(n,e,s);if(n>=o&&a>=n)return t.isFunction(s)&&s.call(this,!1),this;for(var l,h=this.items(),c=this.clipping(),u=this.vertical?"bottom":this.rtl?"left":"right",d=0;l=h.eq(n),0!==l.length;){if(d+=this.dimension(l),d>=c){var f=parseFloat(l.css("margin-"+u))||0;d-f!==c&&n++;break}if(0>=n)break;n--}return this.scroll(n,e,s)}}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this),this.onEvent=t.proxy(function(i){i.preventDefault();var e=this.options("method");t.isFunction(e)?e.call(this):this.carousel().jcarousel(this.options("method"),this.options("target"))},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend",this.onReload),this._element.on(this.options("event")+".jcarouselcontrol",this.onEvent),this._reload()},_destroy:function(){this._element.off(".jcarouselcontrol",this.onEvent),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend",this.onReload)},_reload:function(){var i,e=t.jCarousel.parseTarget(this.options("target")),s=this.carousel();if(e.relative)i=s.jcarousel(e.target>0?"hasNext":"hasPrev");else{var n="object"!=typeof e.target?s.jcarousel("items").eq(e.target):e.target;i=s.jcarousel("target").index(n)>=0}return this._active!==i&&(this._trigger(i?"active":"inactive"),this._active=i),this}})}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselPagination",{_options:{perPage:null,item:function(t){return'<a href="#'+t+'">'+t+"</a>"},event:"click",method:"scroll"},_carouselItems:null,_pages:{},_items:{},_currentPage:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this),this.onScroll=t.proxy(this._update,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend",this.onReload).on("jcarousel:scrollend",this.onScroll),this._reload()},_destroy:function(){this._clear(),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend",this.onReload).off("jcarousel:scrollend",this.onScroll),this._carouselItems=null},_reload:function(){var i=this.options("perPage");if(this._pages={},this._items={},t.isFunction(i)&&(i=i.call(this)),null==i)this._pages=this._calculatePages();else for(var e,s=parseInt(i,10)||0,n=this._getCarouselItems(),r=1,o=0;e=n.eq(o++),0!==e.length;)this._pages[r]=this._pages[r]?this._pages[r].add(e):e,o%s===0&&r++;this._clear();var a=this,l=this.carousel().data("jcarousel"),h=this._element,c=this.options("item"),u=this._getCarouselItems().length;t.each(this._pages,function(i,e){var s=a._items[i]=t(c.call(a,i,e));s.on(a.options("event")+".jcarouselpagination",t.proxy(function(){var t=e.eq(0);if(l.circular){var s=l.index(l.target()),n=l.index(t);parseFloat(i)>parseFloat(a._currentPage)?s>n&&(t="+="+(u-s+n)):n>s&&(t="-="+(s+(u-n)))}l[this.options("method")](t)},a)),h.append(s)}),this._update()},_update:function(){var i,e=this.carousel().jcarousel("target");t.each(this._pages,function(t,s){return s.each(function(){return e.is(this)?(i=t,!1):void 0}),i?!1:void 0}),this._currentPage!==i&&(this._trigger("inactive",this._items[this._currentPage]),this._trigger("active",this._items[i])),this._currentPage=i},items:function(){return this._items},reloadCarouselItems:function(){return this._carouselItems=null,this},_clear:function(){this._element.empty(),this._currentPage=null},_calculatePages:function(){for(var t,i,e=this.carousel().data("jcarousel"),s=this._getCarouselItems(),n=e.clipping(),r=0,o=0,a=1,l={};t=s.eq(o++),0!==t.length;)i=e.dimension(t),r+i>n&&(a++,r=0),r+=i,l[a]=l[a]?l[a].add(t):t;return l},_getCarouselItems:function(){return this._carouselItems||(this._carouselItems=this.carousel().jcarousel("items")),this._carouselItems}})}(jQuery),function(t,i){"use strict";var e,s,n={hidden:"visibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange",webkitHidden:"webkitvisibilitychange"};t.each(n,function(t,n){return"undefined"!=typeof i[t]?(e=t,s=n,!1):void 0}),t.jCarousel.plugin("jcarouselAutoscroll",{_options:{target:"+=1",interval:3e3,autostart:!0},_timer:null,_started:!1,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onAnimateEnd=t.proxy(this._start,this),this.onVisibilityChange=t.proxy(function(){i[e]?this._stop():this._start()},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy),t(i).on(s,this.onVisibilityChange),this.options("autostart")&&this.start()},_destroy:function(){this._stop(),this.carousel().off("jcarousel:destroy",this.onDestroy),t(i).off(s,this.onVisibilityChange)},_start:function(){return this._stop(),this._started?(this.carousel().one("jcarousel:animateend",this.onAnimateEnd),this._timer=setTimeout(t.proxy(function(){this.carousel().jcarousel("scroll",this.options("target"))},this),this.options("interval")),this):void 0},_stop:function(){return this._timer&&(this._timer=clearTimeout(this._timer)),this.carousel().off("jcarousel:animateend",this.onAnimateEnd),this},start:function(){return this._started=!0,this._start(),this},stop:function(){return this._started=!1,this._stop(),this}})}(jQuery,document),function(t){t(function(){t(".jcarousel").jcarousel(),t(".jcarousel-control-prev").on("jcarouselcontrol:active",function(){t(this).removeClass("inactive")}).on("jcarouselcontrol:inactive",function(){t(this).addClass("inactive")}).jcarouselControl({target:"-=1"}),t(".jcarousel-control-next").on("jcarouselcontrol:active",function(){t(this).removeClass("inactive")}).on("jcarouselcontrol:inactive",function(){t(this).addClass("inactive")}).jcarouselControl({target:"+=1"}),t(".jcarousel-pagination").on("jcarouselpagination:active","a",function(){t(this).addClass("active")}).on("jcarouselpagination:inactive","a",function(){t(this).removeClass("active")}).jcarouselPagination()})}(jQuery),$(".jcarousel").jcarousel({animation:{duration:800,easing:"linear",complete:function(){}}}),$(document).ready(function(){$(".styled").customSelect()}),$(document).ready(function(){$(".niceCheck").each(function(){changeCheckStart(jQuery(this))})});