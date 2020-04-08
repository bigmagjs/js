$(".bigmag-serch").click(function(){$(".searchform-wrap").fadeIn()}),$(".searchform-wrap .btn-mini-close").click(function(){$(".searchform-wrap").fadeOut()}),$(".login").click(function(){$(".login-form").fadeIn()}),$(".login-form .btn-log-close").click(function(){$(".login-form").fadeOut()}),$(".bigmag-social #social a.login,.bigmag-social .panel-icon").attr("target","");
var no_image = "https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png";
var month_format = [, "يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
var more_text = "إظهار المزيد";
var comments_text = "يمكنك التعليق باستخدام رابط يوتيوب أو رابط صورة :)";
var pagenav_prev = "السابق";
var pagenav_next = "التالي";
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicebigmagRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);

// News Ticker plugin ~ URL: http://jonmifsud.com/open-source/jquery/jquery-webticker
(function(e){function n(e,t){var s=e.data("settings");if(typeof t==="undefined")t=false;if(t){i(e)}var o=r(e);e.animate(o.css,o.time,"linear",function(){e.css(s.direction,"0");n(e,true)})}function r(e){var t=e.data("settings");var n=e.children().first();var r=Math.abs(-e.css(t.direction).replace("px","").replace("auto","0")-n.outerWidth(true));var t=e.data("settings");var i=r*1e3/t.speed;var s={};s[t.direction]=e.css(t.direction).replace("px","").replace("auto","0")-r;return{css:s,time:i}}function i(e){var t=e.data("settings");e.css("transition-duration","0s").css(t.direction,"0");var n=e.children().first();if(n.hasClass("webticker-init"))n.remove();else e.children().last().after(n)}function s(e,t){if(typeof t==="undefined")t=false;if(t){i(e)}var n=r(e);var s=n.time/1e3;s+="s";e.css(n.css).css("transition-duration",s)}function o(t,n,r){var i;e.get(t,function(t){var s=e(t);s.find("item").each(function(){var t=e(this),n={title:t.find("title").text(),link:t.find("link").text()};listItem="<li><a href='"+n.link+"'>"+n.title+"</a></li>";i+=listItem});r.webTicker("update",i,n)})}function u(t){var n=t.data("settings");t.width("auto");var r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});if(r<t.parent().width()||t.children().length==1){if(n.duplicate){itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get());while(r-itemWidth<t.parent().width()||t.children().length==1){var i=t.children().clone();t.append(i);r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get())}}else{var s=t.parent().width()-r;s+=t.find("li:first").width();var o=t.find("li:first").height();t.append('<li class="ticker-spacer" style="width:'+s+"px;height:"+o+'px;"></li>')}}if(n.startEmpty){var o=t.find("li:first").height();t.prepend('<li class="webticker-init" style="width:'+t.parent().width()+"px;height:"+o+'px;"></li>')}r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});t.width(r+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)});while(widthCompare>=t.width()){t.width(t.width()+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)})}}var t=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(e["transition"]=="")return true;while(t.length)if(t.pop()+"Transition"in e)return true;return false}();var a={init:function(r){r=jQuery.extend({speed:50,direction:"right",moving:true,startEmpty:true,duplicate:false,rssurl:false,hoverpause:true,rssfrequency:0,updatetype:"reset"},r);return this.each(function(){jQuery(this).data("settings",r);var i=jQuery(this);i.addClass("newsticker");var a=i.wrap("<div class='mask'></div>");a.after("<span class='tickeroverlay-right'>&nbsp;</span><span class='tickeroverlay-left'>&nbsp;</span>");var f=i.parent().wrap("<div class='tickercontainer'></div>");u(i);if(r.rssurl){o(r.rssurl,r.type,i);if(r.rssfrequency>0){window.setInterval(function(){o(r.rssurl,r.type,i)},r.rssfrequency*1e3*60)}}if(t){i.css("transition-duration","0s").css(r.direction,"0");s(i,false);i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){if(!i.is(t.target)){return false}s(e(this),true)})}else{n(e(this))}if(r.hoverpause){i.hover(function(){if(t){var n=e(this).css(r.direction);e(this).css("transition-duration","0s").css(r.direction,n)}else jQuery(this).stop()},function(){if(jQuery(this).data("settings").moving){if(t){s(e(this),false)}else{n(i)}}})}})},stop:function(){var n=e(this).data("settings");if(n.moving){n.moving=false;return this.each(function(){if(t){var r=e(this).css(n.direction);e(this).css("transition-duration","0s").css(n.direction,r)}else e(this).stop()})}},cont:function(){var r=e(this).data("settings");if(!r.moving){r.moving=true;return this.each(function(){if(t){s(e(this),false)}else{n(e(this))}})}},update:function(t,n,r,i){n=n||"reset";if(typeof r==="undefined")r=true;if(typeof i==="undefined")i=false;if(typeof t==="string"){t=e(t)}var s=e(this);s.webTicker("stop");var o=e(this).data("settings");if(n=="reset"){s.html(t);s.css(o.direction,"0");u(s)}else if(n=="swap"){s.children("li").addClass("old");for(var a=0;a<t.length;a++){id=e(t[a]).data("update");match=s.find('[data-update="'+id+'"]');if(match.length<1){if(r){if(s.find(".ticker-spacer:first-child").length==0&&s.find(".ticker-spacer").length>0){s.children("li.ticker-spacer").before(t[a])}else{s.append(t[a])}}}else s.find('[data-update="'+id+'"]').replaceWith(t[a]);}s.children("li.webticker-init, li.ticker-spacer").removeClass("old");if(i)s.children("li").remove(".old");stripWidth=0;s.children("li").each(function(){stripWidth+=e(this).outerWidth(true)});s.width(stripWidth+200)}s.webTicker("cont")}};e.fn.webTicker=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.webTicker")}}})(jQuery);

//SlickNav
!function(e,t,n){function a(t,n){this.element=t,this.settings=e.extend({},i,n),this.settings.duplicate||n.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=i,this._name=s,this.init()}var i={label:"القائمة",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"",openedSymbol:"",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},s="slicknav",o="slicknav",l={DOWN:40,ENTER:13,ESCAPE:27,LEFT:37,RIGHT:39,SPACE:32,TAB:9,UP:38};a.prototype.init=function(){var n,a,i=this,s=e(this.element),r=this.settings;if(r.duplicate?i.mobileNav=s.clone():i.mobileNav=s,r.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("id")})),r.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("class")})),r.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("style")})),n=o+"_icon",""===r.label&&(n+=" "+o+"_no-text"),"a"==r.parentTag&&(r.parentTag='a href="#"'),i.mobileNav.attr("class",o+"_nav"),a=e('<div class="'+o+'_menu"></div>'),""!==r.brand){var c=e('<div class="'+o+'_brand">'+r.brand+"</div>");e(a).append(c)}i.btn=e(["<"+r.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+o+"_btn "+o+'_collapsed">','<span class="'+o+'_menutxt">'+r.label+"</span>",'<span class="'+n+'">','<span class="'+o+'_icon-bar"></span>','<span class="'+o+'_icon-bar"></span>','<span class="'+o+'_icon-bar"></span>',"</span>","</"+r.parentTag+">"].join("")),e(a).append(i.btn),""!==r.appendTo?e(r.appendTo).append(a):e(r.prependTo).prepend(a),a.append(i.mobileNav);var p=i.mobileNav.find("li");e(p).each(function(){var t=e(this),n={};if(n.children=t.children("ul").attr("role","menu"),t.data("menu",n),n.children.length>0){var a=t.contents(),s=!1,l=[];e(a).each(function(){return e(this).is("ul")?!1:(l.push(this),void(e(this).is("a")&&(s=!0)))});var c=e("<"+r.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+o+'_item"/>');if(r.allowParentLinks&&!r.nestedParentLinks&&s)e(l).wrapAll('<span class="'+o+"_parent-link "+o+'_row"/>').parent();else{var p=e(l).wrapAll(c).parent();p.addClass(o+"_row")}r.showChildren?t.addClass(o+"_open"):t.addClass(o+"_collapsed"),t.addClass(o+"_parent");var d=e('<span class="'+o+'_arrow">'+(r.showChildren?r.openedSymbol:r.closedSymbol)+"</span>");r.allowParentLinks&&!r.nestedParentLinks&&s&&(d=d.wrap(c).parent()),e(l).last().after(d)}else 0===t.children().length&&t.addClass(o+"_txtnode");t.children("a").attr("role","menuitem").click(function(t){r.closeOnClick&&!e(t.target).parent().closest("li").hasClass(o+"_parent")&&e(i.btn).click()}),r.closeOnClick&&r.allowParentLinks&&(t.children("a").children("a").click(function(t){e(i.btn).click()}),t.find("."+o+"_parent-link a:not(."+o+"_item)").click(function(t){e(i.btn).click()}))}),e(p).each(function(){var t=e(this).data("menu");r.showChildren||i._visibilityToggle(t.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(t).mousedown(function(){i._outlines(!1)}),e(t).keyup(function(){i._outlines(!0)}),e(i.btn).click(function(e){e.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+o+"_item",function(t){t.preventDefault(),i._itemClick(e(this))}),e(i.btn).keydown(function(t){var n=t||event;switch(n.keyCode){case l.ENTER:case l.SPACE:case l.DOWN:t.preventDefault(),n.keyCode===l.DOWN&&e(i.btn).hasClass(o+"_open")||i._menuToggle(),e(i.btn).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown","."+o+"_item",function(t){var n=t||event;switch(n.keyCode){case l.ENTER:t.preventDefault(),i._itemClick(e(t.target));break;case l.RIGHT:t.preventDefault(),e(t.target).parent().hasClass(o+"_collapsed")&&i._itemClick(e(t.target)),e(t.target).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown",'[role="menuitem"]',function(t){var n=t||event;switch(n.keyCode){case l.DOWN:t.preventDefault();var a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),s=a.index(t.target),r=s+1;a.length<=r&&(r=0);var c=a.eq(r);c.focus();break;case l.UP:t.preventDefault();var a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),s=a.index(t.target),c=a.eq(s-1);c.focus();break;case l.LEFT:if(t.preventDefault(),e(t.target).parent().parent().parent().hasClass(o+"_open")){var p=e(t.target).parent().parent().prev();p.focus(),i._itemClick(p)}else e(t.target).parent().parent().hasClass(o+"_nav")&&(i._menuToggle(),e(i.btn).focus());break;case l.ESCAPE:t.preventDefault(),i._menuToggle(),e(i.btn).focus()}}),r.allowParentLinks&&r.nestedParentLinks&&e("."+o+"_item a").click(function(e){e.stopImmediatePropagation()})},a.prototype._menuToggle=function(e){var t=this,n=t.btn,a=t.mobileNav;n.hasClass(o+"_collapsed")?(n.removeClass(o+"_collapsed"),n.addClass(o+"_open")):(n.removeClass(o+"_open"),n.addClass(o+"_collapsed")),n.addClass(o+"_animating"),t._visibilityToggle(a,n.parent(),!0,n)},a.prototype._itemClick=function(e){var t=this,n=t.settings,a=e.data("menu");a||(a={},a.arrow=e.children("."+o+"_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(o+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(o+"_collapsed")?(a.arrow.html(n.openedSymbol),a.parent.removeClass(o+"_collapsed"),a.parent.addClass(o+"_open"),a.parent.addClass(o+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(n.closedSymbol),a.parent.addClass(o+"_collapsed"),a.parent.removeClass(o+"_open"),a.parent.addClass(o+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e))},a.prototype._visibilityToggle=function(t,n,a,i,s){function l(t,n){e(t).removeClass(o+"_animating"),e(n).removeClass(o+"_animating"),s||p.afterOpen(t)}function r(n,a){t.attr("aria-hidden","true"),d.attr("tabindex","-1"),c._setVisAttr(t,!0),t.hide(),e(n).removeClass(o+"_animating"),e(a).removeClass(o+"_animating"),s?"init"==n&&p.init():p.afterClose(n)}var c=this,p=c.settings,d=c._getActionItems(t),u=0;a&&(u=p.duration),t.hasClass(o+"_hidden")?(t.removeClass(o+"_hidden"),s||p.beforeOpen(i),"jquery"===p.animations?t.stop(!0,!0).slideDown(u,p.easingOpen,function(){l(i,n)}):"velocity"===p.animations&&t.velocity("finish").velocity("slideDown",{duration:u,easing:p.easingOpen,complete:function(){l(i,n)}}),t.attr("aria-hidden","false"),d.attr("tabindex","0"),c._setVisAttr(t,!1)):(t.addClass(o+"_hidden"),s||p.beforeClose(i),"jquery"===p.animations?t.stop(!0,!0).slideUp(u,this.settings.easingClose,function(){r(i,n)}):"velocity"===p.animations&&t.velocity("finish").velocity("slideUp",{duration:u,easing:p.easingClose,complete:function(){r(i,n)}}))},a.prototype._setVisAttr=function(t,n){var a=this,i=t.children("li").children("ul").not("."+o+"_hidden");n?i.each(function(){var t=e(this);t.attr("aria-hidden","true");var i=a._getActionItems(t);i.attr("tabindex","-1"),a._setVisAttr(t,n)}):i.each(function(){var t=e(this);t.attr("aria-hidden","false");var i=a._getActionItems(t);i.attr("tabindex","0"),a._setVisAttr(t,n)})},a.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li"),a=n.find("a");t.links=a.add(n.find("."+o+"_item")),e.data("menu",t)}return t.links},a.prototype._outlines=function(t){t?e("."+o+"_item, ."+o+"_btn").css("outline",""):e("."+o+"_item, ."+o+"_btn").css("outline","none")},a.prototype.toggle=function(){var e=this;e._menuToggle()},a.prototype.open=function(){var e=this;e.btn.hasClass(o+"_collapsed")&&e._menuToggle()},a.prototype.close=function(){var e=this;e.btn.hasClass(o+"_open")&&e._menuToggle()},e.fn[s]=function(t){var n=arguments;if(void 0===t||"object"==typeof t)return this.each(function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new a(this,t))});if("string"==typeof t&&"_"!==t[0]&&"init"!==t){var i;return this.each(function(){var o=e.data(this,"plugin_"+s);o instanceof a&&"function"==typeof o[t]&&(i=o[t].apply(o,Array.prototype.slice.call(n,1)))}),void 0!==i?i:this}}}(jQuery,document,window);

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

// Simple Tab JQuery Plugin by Taufik Nurrohman
(function(a){a.fn.simpleTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simpleTab").prepend('<ul class="tab-wrapper"></ul>');c.addClass("tab-content").each(function(){a(this).hide();e.find(".tab-wrapper").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".tab-wrapper a").on("click",function(){var f=a(this).parent().index();a(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);

// time ago
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(t){function e(){var e=r.settings;if(e.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var o=i(this);return isNaN(o.datetime)||(0===e.cutoff||Math.abs(n(o.datetime))<e.cutoff?t(this).text(a(o.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function i(e){if(!(e=t(e)).data("timeago")){e.data("timeago",{datetime:r.datetime(e)});var i=t.trim(e.text());r.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(i.length>0)||r.isTime(e)&&e.attr("title")||e.attr("title",i)}return e.data("timeago")}function a(t){return r.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return a(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var r=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:5e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"تقريبا",suffixFromNow:"من الآن",inPast:'any moment now',seconds:"منذ أقل من دقيقة",minute:"منذ دقيقة",minutes:"منذ %d دقيقة",hour:"منذ ساعة",hours:"منذ %d ساعة",day:"منذ يوم",days:"منذ %d يوم",month:"منذ  شهر",months:"منذ %d أشهر",year:"منذ سنة",years:"منذ %d سنة",wordSeparator:" ",numbers:[]}},inWords:function(e){function i(i,n){var r=t.isFunction(i)?i(n,e):i,o=a.numbers&&a.numbers[n]||n;return r.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var a=this.settings.strings,n=a.prefixAgo,r=a.suffixAgo;if(this.settings.allowFuture&&e<0&&(n=a.prefixFromNow,r=a.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var o=Math.abs(e)/1e3,s=o/60,u=s/60,m=u/24,l=m/365,d=o<45&&i(a.seconds,Math.round(o))||o<90&&i(a.minute,1)||s<45&&i(a.minutes,Math.round(s))||s<90&&i(a.hour,1)||u<24&&i(a.hours,Math.round(u))||u<42&&i(a.day,1)||m<30&&i(a.days,Math.round(m))||m<45&&i(a.month,1)||m<365&&i(a.months,Math.round(m/30))||l<1.5&&i(a.year,1)||i(a.years,Math.round(l)),h=a.wordSeparator||"";return void 0===a.wordSeparator&&(h=" "),t.trim([n,d,r].join(h))},parse:function(e){var i=t.trim(e);return i=i.replace(/\.\d+/,""),i=i.replace(/-/,"/").replace(/-/,"/"),i=i.replace(/T/," ").replace(/Z/," UTC"),i=i.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),i=i.replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(e){var i=r.isTime(e)?t(e).attr("datetime"):t(e).attr("title");return r.parse(i)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){o.dispose.call(this);var i=t.proxy(e,this);i();var a=r.settings;a.refreshMillis>0&&(this._timeagoInterval=setInterval(i,a.refreshMillis))},update:function(i){var a=i instanceof Date?i:r.parse(i);t(this).data("timeago",{datetime:a}),r.settings.localeTitle&&t(this).attr("title",a.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:r.parse(r.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var i=t?o[t]:o.init;if(!i)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){i.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});

// sticky sidebar By osama orabi https://osamaorabipro.com
!function(m){m.fn.StickySidebar=function(i){var t,o;function e(i,t){return!0===i.initialized||!(m("body").width()<i.minWidth)&&(function(S,i){S.initialized=!0,m("head").append(m('<style>.StickySidebar:after {content: ""; display: table; clear: both;}</style>')),i.each(function(){var i={};i.sidebar=m(this),i.options=S||{},i.container=m(i.options.containerSelector),0==i.container.length&&(i.container=i.sidebar.parent()),i.sidebar.parents().css("-webkit-transform","none"),i.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),i.stickySidebar=i.sidebar.find(".StickySidebar"),0==i.stickySidebar.length&&(i.sidebar.find("script").remove(),i.stickySidebar=m("<div>").addClass("StickySidebar").append(i.sidebar.children()),i.sidebar.append(i.stickySidebar)),i.marginTop=parseInt(i.sidebar.css("margin-top")),i.marginBottom=parseInt(i.sidebar.css("margin-bottom")),i.paddingTop=parseInt(i.sidebar.css("padding-top")),i.paddingBottom=parseInt(i.sidebar.css("padding-bottom"));var t,o,e=i.stickySidebar.offset().top,a=i.stickySidebar.outerHeight();function f(){i.fixedScrollTop=0,i.sidebar.css({"min-height":"1px"}),i.stickySidebar.css({position:"static",width:""})}i.stickySidebar.css("padding-top",1),i.stickySidebar.css("padding-bottom",1),e-=i.stickySidebar.offset().top,a=i.stickySidebar.outerHeight()-a-e,0==e?(i.stickySidebar.css("padding-top",0),i.stickySidebarPaddingTop=0):i.stickySidebarPaddingTop=1,0==a?(i.stickySidebar.css("padding-bottom",0),i.stickySidebarPaddingBottom=0):i.stickySidebarPaddingBottom=1,i.previousScrollTop=null,i.fixedScrollTop=0,f(),i.onScroll=function(i){if(i.stickySidebar.is(":visible"))if(m("body").width()<i.options.minWidth)f();else{if(i.options.disableOnResponsiveLayouts)if(i.sidebar.outerWidth("none"==i.sidebar.css("float"))+50>i.container.width())return void f();var t=m(document).scrollTop(),o="static";if(t>=i.container.offset().top+(i.paddingTop+i.marginTop-i.options.additionalMarginTop)){var e,a=i.paddingTop+i.marginTop+S.additionalMarginTop,d=i.paddingBottom+i.marginBottom+S.additionalMarginBottom,n=i.container.offset().top,s=i.container.offset().top+function(i){var t=i.height();return i.children().each(function(){t=Math.max(t,m(this).height())}),t}(i.container),r=0+S.additionalMarginTop;e=i.stickySidebar.outerHeight()+a+d<m(window).height()?r+i.stickySidebar.outerHeight():m(window).height()-i.marginBottom-i.paddingBottom-S.additionalMarginBottom;var c=n-t+i.paddingTop+i.marginTop,p=s-t-i.paddingBottom-i.marginBottom,b=i.stickySidebar.offset().top-t,l=i.previousScrollTop-t;"fixed"==i.stickySidebar.css("position")&&"modern"==i.options.sidebarBehavior&&(b+=l),"stick-to-top"==i.options.sidebarBehavior&&(b=S.additionalMarginTop),"stick-to-bottom"==i.options.sidebarBehavior&&(b=e-i.stickySidebar.outerHeight()),b=0<l?Math.min(b,r):Math.max(b,e-i.stickySidebar.outerHeight()),b=Math.max(b,c),b=Math.min(b,p-i.stickySidebar.outerHeight());var g=i.container.height()==i.stickySidebar.outerHeight();o=(g||b!=r)&&(g||b!=e-i.stickySidebar.outerHeight())?t+b-i.sidebar.offset().top-i.paddingTop<=S.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==o)i.stickySidebar.css({position:"fixed",width:i.sidebar.width(),top:b,left:i.sidebar.offset().left+parseInt(i.sidebar.css("padding-left"))});else if("absolute"==o){var h={};"absolute"!=i.stickySidebar.css("position")&&(h.position="absolute",h.top=t+b-i.sidebar.offset().top-i.stickySidebarPaddingTop-i.stickySidebarPaddingBottom),h.width=i.sidebar.width(),h.left="",i.stickySidebar.css(h)}else"static"==o&&f();"static"!=o&&1==i.options.updateSidebarHeight&&i.sidebar.css({"min-height":i.stickySidebar.outerHeight()+i.stickySidebar.offset().top-i.sidebar.offset().top+i.paddingBottom}),i.previousScrollTop=t}},i.onScroll(i),m(document).scroll((t=i,function(){t.onScroll(t)})),m(window).resize((o=i,function(){o.stickySidebar.css({position:"static"}),o.onScroll(o)}))})}(i,t),!0)}(i=m.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern"},i)).additionalMarginTop=parseInt(i.additionalMarginTop)||0,i.additionalMarginBottom=parseInt(i.additionalMarginBottom)||0,e(t=i,o=this)||(console.log("TST: Body width smaller than options.minWidth. Init is delayed."),m(document).scroll(function(t,o){return function(i){e(t,o)&&m(this).unbind(i)}}(t,o)),m(window).resize(function(t,o){return function(i){e(t,o)&&m(this).unbind(i)}}(t,o)))}}(jQuery);

// Auto Responsive Videos By osama orabi https://osamaorabipro.com
!function(t){t.fn.bigmagtube=function(){return this.each(function(){var i=t(this),r=i.find('iframe[src*="youtube.com"],iframe[src*="youtube-nocookie.com"],iframe[src*="player.vimeo.com"],iframe[src*="www.dailymotion.com/embed"]');r.attr("height","").attr("width","");var h=t(this).width(),n=480*h/853;r.attr("height",n).attr("width","100%"),t(window).bind("resize load",function(){var t=i.width(),h=480*t/853;r.attr("height",h).attr("width","100%")})})}}(window.jQuery||window.Zepto);

//Convert any URI in blogger comments to image or video By osama orabi https://osamaorabipro.com
!function(){for(var a=/(\[img\])?((http:|https:)?\/\/\S*?\.(jpg|gif|png|bmp|jpeg]))(\[\/img\])?/gi,b=/(\[vid\])?http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)[\w\=]*)?(\[\/vid\])?/gi,c=/(\[vid\])?(http:|https:)?\/\/(vimeo.com)\/([0-9]*)(\[\/vid\])?/gi,d=document.querySelectorAll(".comment-content"),e=0;e<d.length;e++){for(var f=d[e].getElementsByTagName("a"),g=0;g<f.length;g++)if(f[g].href.match(a)||f[g].href.match(b)||f[g].href.match(c)){var h=document.createElement("span");h.innerHTML=f[g].href;var i=f[g];i.parentNode.insertBefore(h,i),f[g].href="",f[g].innerHTML=""}var j=d[e].innerHTML;j=j.replace(a,'<img style="max-width: 100%; height: auto;display: blocK;margin: 10px auto;" src="$2"" alt=""/>'),j=j.replace(b,'<div style="position:relative;width:100%;height:0;padding-bottom:56.25%;overflow:hidden;margin:20px auto;"><iframe style="position: absolute;width: 100%;height: 100%;top: 0;left: 0;" src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen></iframe></div>'),j=j.replace(c,'<div style="position:relative;width:100%;height:0;padding-bottom:56.25%;overflow:hidden;margin:20px auto;"><iframe style="position: absolute;width: 100%;height: 100%;top: 0;left: 0;" src="https://player.vimeo.com/video/$4" frameborder="0" allowfullscreen></iframe></div>'),d[e].innerHTML=j}}();

/**
 * @author codingsamuel
 * @version 1.0.1
 * @license MIT
 * @copyright codingsamuel 2019
 */
"use strict";function _instanceof(e,a){return null!=a&&"undefined"!=typeof Symbol&&a[Symbol.hasInstance]?a[Symbol.hasInstance](e):e instanceof a}function _classCallCheck(e,a){if(!_instanceof(e,a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var o=a[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}var LwcLazyLoader=function(){function e(a,t){_classCallCheck(this,e),this._wrapper=a,this._selector=t}return _createClass(e,[{key:"_between",value:function(e,a,t){return e>a&&e<t}},{key:"getWrapper",value:function(){return this._wrapper}},{key:"getSelector",value:function(){return this._selector}},{key:"getElements",value:function(){return this.getWrapper().find(this.getSelector())}},{key:"setScrollTop",value:function(e){this._scrollTop=e}},{key:"getScrollTop",value:function(){return this._scrollTop}},{key:"elementsToLoad",value:function(){var e=this,a=this.getElements(),t=[];return a.each(function(a,o){var n=$(o),l=n.offset().top,r=e.getScrollTop(),d=window.innerHeight,c=l-d,s=l+d;e._between(r,c,s)&&t.push(n)}),t}},{key:"rndId",value:function(e){for(var a="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)a+=t.charAt(Math.floor(Math.random()*t.length));return a}},{key:"loadElements",value:function(e,a){for(var t=this,o=function(o){var n=e[o],l=n.attr(a.dataLoadedSelector),r=n.attr(a.dataSrc);if("loaded"!=l&&"loading"!=l){if("true"==n.attr(a.dataIsCSS)){var d=t.rndId(5);n.append('<img id="lwcLazyLoader'.concat(d,'" src="" style="display:none;">')),$("#lwcLazyLoader".concat(d)).attr("src",r).on("load",function(e){$(e.currentTarget).remove(),n.css("background-image","url(".concat(r,")")),a.onElementLoaded&&a.onElementLoaded.call(t,n),n.attr(a.dataLoadedSelector,"loaded")})}else n.attr("src",r).on("load",function(e){a.onElementLoaded&&a.onElementLoaded.call(t,n),n.attr(a.dataLoadedSelector,"loaded")});n.attr(a.dataLoadedSelector,"loading"),a.onElementLoad&&a.onElementLoad.call(t,n)}},n=0;n<e.length;n++)o(n)}}]),e}();$.fn.lwcLazyLoad=function(e){e||(e={});var a=new LwcLazyLoader(this,e.selector||"img");$(document).ready(function(){a.setScrollTop($(document).scrollTop());var t=a.elementsToLoad();a.loadElements(t,{dataSrc:e.dataSelector||"data-lazyload",dataLoadedSelector:e.dataLoadedSelector||"data-lazyloaded",dataIsCSS:e.dataCSSSelector||"data-lazyload-css",onElementLoad:e.onElementLoad,onElementLoaded:e.onElementLoaded})}),$(window).scroll(function(t){a.setScrollTop($(document).scrollTop());var o=a.elementsToLoad();a.loadElements(o,{dataSrc:e.dataSelector||"data-lazyload",dataLoadedSelector:e.dataLoadedSelector||"data-lazyloaded",dataIsCSS:e.dataCSSSelector||"data-lazyload-css",onElementLoad:e.onElementLoad,onElementLoaded:e.onElementLoaded})})};

//Main Scripts

function getmeta(e) {
	var t = new Array;
	t[1] = "يناير", t[2] = "فبراير", t[3] = "مارس", t[4] = "إبريل", t[5] = "مايو", t[6] = "يونيو", t[7] = "يوليو", t[8] = "أغسطس", t[9] = "سبتمبر", t[10] = "أكتوبر", t[11] = "نوفمبر", t[12] = "ديسمبر";
	var a = e.substring(0, 4),
		s = e.substring(5, 7),
		i = e.substring(8, 10);
	return '<span class="recentdate"><i class="fa fa-clock-o"></i> ' + t[parseInt(s, 10)] + " " + i + " " + a + "</span> "
}

function getresult(e, t) {
	if (void 0 === e) var a = t;
	else a = e;
	return a
}

function getauthor(e) {
	for (var t = 0; t < e.length; t++) var a = "<span class='authorname'><i class='fa fa-user'></i> " + e[t].name.$t + "</span>";
	return a
}

function getfc(e) {
	if ("undefined" !== e.category[0]) return e.category[0].term
}

function gethead(e, t, a, s, i) {
	return null == i && (i = "إظهار المزيد"), '<div class="bm-recentLink ' + a + 'head"><div class="bm-recentText"><span class="bm-headtext">' + s + " " + e + '</span><span class="bm-headtextHover">' + s + " " + e + '</span></div><a href="search/label/' + e + '?max-results=8" class="bm-headlinks">' + i + ' <i class="fa fa-angle-double-left"></i></a></div>'
}

var idBlog= "537918683860033517"; // معرف المدونة التي وضعت عليها لوحة التفعيل
var idPage= "7053647278328095938"; // معرف الصفحة التي وضعت عليها لوحة التفعيل
$.ajax({
    dataType: "json",
    url: "https://www.blogger.com/feeds/"+idBlog+"/pages/default/"+idPage+"?alt=json-in-script",
    method: "GET",
    dataType: "jsonp",
    success: function(e) {
        var o, t = $(e.entry.content.$t),
            n = t.find("li"),
            a = t.find("script"),
            l = [];
            $allow = !0, $("body").append(a);
        for (o = 0; o < n.length; o += 1) l.push($(n[o]).text());
        o = window.location.hostname.toLowerCase(), n = window.location.href.toLowerCase();
        var s;
        l.length;
        for (s = 0; s < l.length; s += 1) {
            if (-1 != o.indexOf(l[s])) {
                break
            }
  s == l.length - 1 && $('body *').remove() && $('body').addClass('RE').append('<div style="position: relative;padding: 2em;width: 50%;min-width: 200px;margin: 12em auto;background: white;border-radius: 4px;-webkit-border-radius: 4px;box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);-webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);"><div><div style=" color: #ffffff; position: absolute; margin: 0 auto; left: 0; right: 0; top: -40px; width: 45px; height: 45px;border-radius: 50%; -webkit-border-radius: 50%; z-index: 9; background: #ef513a; padding: 25px; text-align: center; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); font-size: 2.5em;text-decoration: none;"><span style="position: relative;left: 10px;bottom: 8px;">©</span></div><h4 style=" text-align: center; font-size: 26px; margin: 30px 0 15px;">عفواً..!!</h4></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>لا يمكنك إستخدام هذا القالب .. هذا التوقف يحدث تلقائياً بسبب مايلي .. </p><p><span style=" font-size: 17px; font-weight: bold; color: #ef513a;">1</span>-العبث بحقوق ملكية التصميم!..كإخفاء توقيع المصمم </p><p><span style=" font-size: 17px; font-weight: bold; color: #ef513a;">2</span>-لا تملك رخصة؟ .. للحصول على تفعيل القالب يرجى : <a style="color: #ef513a;font-size: 14px; font-weight: 400;" href="https://store.osamaorabipro.com/support/"> طلب رخصة </a></p><p><span style=" font-size: 17px; font-weight: bold; color: #ef513a;">3</span>-تملك رخصة ومع ذلك لا تستطيع إستخدام هذا القالب .. يرجى التواصل بـ :  <a style="color: #ef513a;font-size: 14px; font-weight: 400;" href="https://store.osamaorabipro.com/support/"> فريق الدعم </a></p></div><div style=" text-align: center; overflow: hidden;"><a style="color: #ffffff; background: #ef513a; text-decoration: none; display: block; padding: 10px 12px; margin-bottom: 0; font-size: 14px; font-weight: 400; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; background-image: none; border: 0; border-radius: 4px; -webkit-border-radius: 4px;" href="https://osamaorabipro.com/">الصفحة الرسمية</a></div></div>')
        }
    }
});

	$(".featured .HTML .widget-content").each(function () {
		var e = $(this).find("span").attr("data-label"),
			t = $(this).find("span").attr("data-type");
		t.match("recent") ? $.ajax({
			url: "/feeds/posts/default?alt=json-in-script&max-results=4",
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].author[0].name.$t,
						c = e.feed.entry[s].published.$t,
						o = c.substring(0, 4),
						d = c.substring(5, 7),
						f = c.substring(8, 10),
						m = month_format[parseInt(d, 10)] + " " + f + ", " + o,
						u = e.feed.entry[s].content.$t,
						p = $("<div>").html(u);
					if (-1 < u.indexOf("//www.youtube.com/embed/")) var h = e.feed.entry[s].media$thumbnail.url;
					else h = -1 < u.indexOf("<img") ? p.find("img:first").attr("src") : no_image;
					a += '<li><div class="featured-inner"><a href="/search/label/' + r + '" class="post-tag icon ' + r + '">' + r + '</a><a class="lazy rcp-thumb" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + t + '">' + n + '</a></h3><div class="featured-meta"><span class="featured-author idel">' + l + '</span><span class="featured-date">' + m + "</span></div></div></div></li>"
				}
				a += "</ul>", $(".featured .HTML .widget-content").each(function () {
					$(this).html(a), $(this).find(".rcp-thumb").each(function () {
						$(this).attr("data-lazyload", function (e, t) {
							return t.replace("/default.jpg", "/mqdefault.jpg")
						}).attr("data-lazyload", function (e, t) {
							return t.replace("s72-c", "s1600")
						})
					})
				})
			}
		}) : t.match("label") && $.ajax({
			url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=4",
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].author[0].name.$t,
						c = e.feed.entry[s].published.$t,
						o = c.substring(0, 4),
						d = c.substring(5, 7),
						f = c.substring(8, 10),
						m = month_format[parseInt(d, 10)] + " " + f + ", " + o,
						u = e.feed.entry[s].content.$t,
						p = $("<div>").html(u);
					if (-1 < u.indexOf("//www.youtube.com/embed/")) var h = e.feed.entry[s].media$thumbnail.url;
					else h = -1 < u.indexOf("<img") ? p.find("img:first").attr("src") : no_image;
					a += '<li><div class="featured-inner"><a href="/search/label/' + r + '" class="post-tag icon ' + r + '">' + r + '</a><a class="lazy rcp-thumb" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + t + '">' + n + '</a></h3><div class="featured-meta"><span class="featured-author idel">' + l + '</span><span class="featured-date">' + m + "</span></div></div></div></li>"
				}
				a += "</ul>", $(".featured .HTML .widget-content").each(function () {
					$(this).html(a), $(this).find(".rcp-thumb").each(function () {
						$(this).attr("data-lazyload", function (e, t) {
							return t.replace("/default.jpg", "/mqdefault.jpg")
						}).attr("data-lazyload", function (e, t) {
							return t.replace("s72-c", "s1600")
						})
					})
				})
			}
		}), $(".intro-loader").remove()
	});

$(window)["one"]("scroll", a);
function a() {
	$(".bigmag-widetize .HTML .widget-content span.bigmag-cmnt").each(function () {
		var o = $(this).attr("data-no");
		$.ajax({
			url: "/feeds/comments/default?alt=json-in-script&max-results=" + o,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				var t = "",
					a = '<div class="bigmag-comments">';
				if (e.feed.entry)
					for (var s = 0; s < e.feed.entry.length && s != e.feed.entry.length; s++) {
						for (var i = 0; i < e.feed.entry[s].link.length; i++)
							if ("alternate" == e.feed.entry[s].link[i].rel) {
								t = e.feed.entry[s].link[i].href;
								break
							}
						if ("content" in e.feed.entry[s]) n = e.feed.entry[s].content.$t;
						else if ("summary" in b_rc) n = e.feed.entry[s].summary.$t;
						else var n = "";
						70 < (n = n.replace(/<\S[^>]*>/g, "")).length && (n = n.substring(0, 50) + "...");
						var r = e.feed.entry[s].author[0].name.$t,
							l = e.feed.entry[s].author[0].gd$image.src;
						if (l.match("https://img1.blogblog.com/img/b16-rounded.gif")) c = "https://1.bp.blogspot.com/-u4byJCU2k2I/XnYliN-FmLI/AAAAAAAAF-I/MIpmmnQsUxQ35zlfjZ_FW9rIjbZ4tC9mgCLcBGAsYHQ/s320/user.png";
						else if (l.match("https://1.bp.blogspot.com/-u4byJCU2k2I/XnYliN-FmLI/AAAAAAAAF-I/MIpmmnQsUxQ35zlfjZ_FW9rIjbZ4tC9mgCLcBGAsYHQ/s320/user.png")) c = "https://1.bp.blogspot.com/-u4byJCU2k2I/XnYliN-FmLI/AAAAAAAAF-I/MIpmmnQsUxQ35zlfjZ_FW9rIjbZ4tC9mgCLcBGAsYHQ/s320/user.png";
						else var c = l;
						a += '<div class="bigmag-comment"><div class="bigmag-comment-profile"><img class="lazy bigmag-comment-thumb" data-lazyload="' + c + '"/></div><a href="' + t + '">' + r + '</a><span>"' + n + '"</span><a class="leavecmnt" href="' + t + '">أكتب تعليق</a></div>'
					} else a += '<style>.bigmag-empty-panel img{max-width: 600px; width:100%}.bigmag-empty-panel{text-align: center;}.bigmag-empty-text h3{font-weight: 600;font-size:18px;line-height: 24px;margin-bottom:50px;}.bgr{background: rgb(236,239,241);}.bgr{box-sizing: border-box;padding:5px 10px;}</style><div class="bigmag-empty-panel bgr"><div class="bigmag-empty-thumb"><img src="https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png"></div><div class="bigmag-empty-text"><h3>لا يوجد تعليقات! <br/></h3></div></div>';
				a += '</div><div class="clear"/>', $(".bigmag-widetize .HTML .widget-content span.bigmag-cmnt").each(function () {
					$(this).attr("data-no") == o && $(this).parent().html(a)
				})
			}
		})
	});
};

$(window)["one"]("scroll", b);
function b() {
	$(".bigmag-widetize .HTML .widget-content span.bigmag-recent").each(function () {
		var h = $(this).attr("data-no");
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script&max-results=" + h,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				var t = "",
					a = '<div class="bigmag-recent">';
				if (e.feed.entry)
					for (var s = 0; s < e.feed.entry.length; s++) {
						for (var i = 0; i < e.feed.entry[s].link.length; i++)
							if ("alternate" == e.feed.entry[s].link[i].rel) {
								t = e.feed.entry[s].link[i].href;
								break
							}
						var n = e.feed.entry[s].title.$t,
							r = (e.feed.entry[s].category[0].term, e.feed.entry[s].author[0].name.$t),
							l = e.feed.entry[s].published.$t,
							c = l.substring(0, 4),
							o = l.substring(5, 7),
							d = l.substring(8, 10),
							f = month_format[parseInt(o, 10)] + " " + d + ", " + c,
							m = e.feed.entry[s].content.$t,
							u = $("<div>").html(m);
						if (-1 < m.indexOf("//www.youtube.com/embed/")) p = e.feed.entry[s].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
						else if (-1 < m.indexOf("<img")) p = u.find("img:first").attr("src").replace("s72-c", "s1600");
						else var p = no_image;
						a += '<div class="bigmag-recent-item"><a class="lazy bigmag-recent-thumb" href="' + t + '" data-lazyload=' + p + ' data-lazyload-css="true"><span class="bigmag-trap"/></a><div class="bigmag-recent-content"><h3 class="bigmag-recent-title"><a href="' + t + '">' + n + '</a></h3><span class="bigmag-author">' + r + '</span><span class="bigmag-time">' + f + "</span></div></div>"
					} else a += '<style>.bigmag-empty-panel img{max-width: 600px; width:100%}.bigmag-empty-panel{text-align: center;}.bigmag-empty-text h3{font-weight: 600;font-size:18px;line-height: 24px;margin-bottom:50px;}.bgr{background: rgb(236,239,241);}.bgr{box-sizing: border-box;padding:5px 10px;}</style><div class="bigmag-empty-panel bgr"><div class="bigmag-empty-thumb"><img src="https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png"></div><div class="bigmag-empty-text"><h3>لا يوجد مقالات! <br/></h3></div></div>';
				a += "</div>", $(".bigmag-widetize .HTML .widget-content span.bigmag-recent").each(function () {
					$(this).attr("data-no") == h && $(this).parent().html(a)
				})
			}
		})
	});
};

$(window)["one"]("scroll", c);
function c() {
	$(".bigmag-widetize .HTML .widget-content span.bigmag-tagswid").each(function () {
		var h = $(this).attr("data-label"),
			e = $(this).attr("data-no");
		$.ajax({
			url: "/feeds/posts/default/-/" + h + "?alt=json-in-script&max-results=" + e,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				var t = "",
					a = '<div class="bigmag-recent">';
				if (e.feed.entry)
					for (var s = 0; s < e.feed.entry.length; s++) {
						for (var i = 0; i < e.feed.entry[s].link.length; i++)
							if ("alternate" == e.feed.entry[s].link[i].rel) {
								t = e.feed.entry[s].link[i].href;
								break
							}
						var n = e.feed.entry[s].title.$t,
							r = (e.feed.entry[s].category[0].term, e.feed.entry[s].author[0].name.$t),
							l = e.feed.entry[s].published.$t,
							c = l.substring(0, 4),
							o = l.substring(5, 7),
							d = l.substring(8, 10),
							f = month_format[parseInt(o, 10)] + " " + d + ", " + c,
							m = e.feed.entry[s].content.$t,
							u = $("<div>").html(m);
						if (-1 < m.indexOf("//www.youtube.com/embed/")) p = e.feed.entry[s].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
						else if (-1 < m.indexOf("<img")) p = u.find("img:first").attr("src").replace("s72-c", "s1600");
						else var p = no_image;
						a += '<div class="bigmag-recent-item"><a class="lazy bigmag-recent-thumb" href="' + t + '" data-lazyload=' + p + ' data-lazyload-css="true"><span class="bigmag-trap"/></a><div class="bigmag-recent-content"><h3 class="bigmag-recent-title"><a href="' + t + '">' + n + '</a></h3><span class="bigmag-author">' + r + '</span><span class="bigmag-time">' + f + "</span></div></div>"
					} else a += '<style>.bigmag-empty-panel img{max-width: 600px; width:100%}.bigmag-empty-panel{text-align: center;}.bigmag-empty-text h3{font-weight: 600;font-size:18px;line-height: 24px;margin-bottom:50px;}.bgr{background: rgb(236,239,241);}.bgr{box-sizing: border-box;padding:5px 10px;}</style><div class="bigmag-empty-panel bgr"><div class="bigmag-empty-thumb"><img src="https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png"></div><div class="bigmag-empty-text"><h3>لا يوجد مقالات! <br/></h3></div></div>';
				a += "</div>", $(".bigmag-widetize .HTML .widget-content span.bigmag-tagswid").each(function () {
					$(this).attr("data-label") == h && $(this).parent().html(a)
				})
			}
		})
	});
};

$(window)["one"]("scroll", d);
function d() {
	$(function () {
		$(".recent-single-carousel").each(function () {
			var d = $(this),
				f = $(this).attr("data-label"),
				m = (void 0 === $(this).attr("data-num") || $(this).attr("data-num"), $(this).attr("data-vmt")),
				e = void 0 === $(this).attr("data-results") ? 10 : $(this).attr("data-results"),
				t = "/feeds/posts/summary/-/" + f + "?max-results=" + e + "&alt=json-in-script";
			$.ajax({
				type: "GET",
				url: t,
				async: !0,
				contentType: "application/json",
				dataType: "jsonp",
				success: function (e) {
					var t = e.feed.entry;
					if (t) {
						d.append(gethead(f, "/", "car", '<i class="fa fa-rss"></i>', m)), d.append('<div class="toggler"><ul class="car-inner"></ul></div>');
						for (var a = 0; a < t.length; a++) {
							for (var s, i, n, r, l = t[a], c = 0; c < l.link.length; c++)
								if ("alternate" == l.link[c].rel) {
									i = l.link[c].href;
									break
								}
							r = void 0 !== l.media$thumbnail ? l.media$thumbnail.url.replace("s72-c", "w450-h425-c") : Default_Image_For_Recent_Posts;
							var o = '<li class="bm-soverlay"><div class="imgwrap"><a class="featured-thumb" title="' + (s = l.title.$t) + '" href="' + i + '"><img class="lazy" data-lazyload="' + r + '"/></a></div><div class="recent-carousel-meta metais"><a class="recentLabel" href="/search/label/' + (n = getfc(l)) + '" target="_blank">' + n + '</a><h3><a href="' + i + '">' + s + "</a></h3></div></li>";
							d.find(".car-inner").append(o)
						}
						d.addClass("loaded").fadeIn(), d.find(".car-inner").owlCarousel({
							items: 1,
							rtl: !0,
							nav: !0,
							autoplay: !0,
							loop: !0,
							autoplayTimeout: 3500,
							autoplayHoverPause: !0,
							dots: !1,
							navText: ["", ""],
							responsive: {
								480: {
									items: 1
								},
								768: {
									items: 1
								},
								1024: {
									items: 1
								}
							}
						})
					}
				}
			})
		})
	});
};

	$(function () {
		$(".bm-recent-scroll").each(function () {
			var o = $(this),
				e = "/feeds/posts/summary/?max-results=" + (void 0 === $(this).attr("data-results") ? 12 : $(this).attr("data-results")) + "&alt=json-in-script";
			$.ajax({
				type: "GET",
				url: e,
				async: !0,
				contentType: "application/json",
				dataType: "jsonp",
				success: function (e) {
					var t = e.feed.entry;
					if (t) {
						o.append('<ul class="scroll-inner"></ul>');
						for (var a = 0; a < t.length; a++) {
							for (var s, i, n, r = t[a], l = 0; l < r.link.length; l++)
								if ("alternate" == r.link[l].rel) {
									i = r.link[l].href;
									break
								}
							n = void 0 !== r.media$thumbnail ? -1 !== r.media$thumbnail.url.indexOf("img.youtube.com") ? '<div class="ytube-outer"><span class="fa fa-youtube-play"></span><img class="lazy" data-lazyload="' + r.media$thumbnail.url.replace("default.jpg", "mqdefault.jpg") + '"/></div>' : '<img src="' + r.media$thumbnail.url.replace("s72-c", "w110-h110-c") + '"/>' : '<img class="lazy" data-lazyload="https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png"/>', s = 50 < r.title.$t.length ? r.title.$t.substr(0, 50) + "..." : r.title.$t;
							var c = '<li class="container"><div class="bm-rscrl-img bmrp-thumb"><a href="' + i + '" class="layer">' + n + '<span class="thumb-overlay"></a></div><div class="layerc">' + getmeta(r.published.$t) + '<h3><a href="' + i + '">' + s + "</a></h3></div></li>";
							o.find(".scroll-inner").append(c)
						}
						o.find(".scroll-inner").owlCarousel({
							items: 4,
							rtl: !0,
							dots: !1,
							margin: 25,
							navText: ["", ""],
							nav: !0,
							autoplay: !0,
							loop: !0,
							autoplayTimeout: 2e3,
							autoplayHoverPause: !0,
							responsiveClass: !0,
							responsive: {
								0: {
									items: 1
								},
								480: {
									items: 2
								},
								768: {
									items: 3
								},
								1200: {
									items: 4
								}
							}
						})
					}
				}
			})
		})
	});

  $(window)["one"]("scroll", e);
  function e() {
	$(".recent-post-straight").each(function () {
		var u = $(this).attr("data-label"),
			p = $(this).attr("data-vmt"),
			e = void 0 === $(this).attr("data-results") ? 5 : $(this).attr("data-results"),
			t = "/feeds/posts/summary/-/" + u + "?max-results=" + e + "&alt=json-in-script",
			h = $(this);
		$.ajax({
			type: "GET",
			url: t,
			async: !0,
			contentType: "application/json",
			dataType: "jsonp",
			success: function (e) {
				var t = e.feed.entry;
				if (t) {
					h.append('<div class="toggler"><div class="straight-inner">' + gethead(u, "/", "straight", '<i class="fa fa-rss"></i>', p) + "</div></div>");
					for (var a = 0; a < t.length; a++) {
						for (var s, i = t[a], n = 0; n < i.link.length; n++)
							if ("alternate" == i.link[n].rel) {
								var r = i.link[n].href;
								break
							}
						void 0 !== i.media$thumbnail && (s = i.media$thumbnail.url.replace("s72-c", "w360-h210-c"));
						var l = i.title.$t,
							c = getmeta(i.published.$t),
							o = getauthor(i.author),
							d = getfc(i),
							f = i.summary.$t.substr(0, 150) + "...",
							m = 0 == a ? '<div class="container simplehead"><div class="imgwrap"><div class="bmrp-thumb"><a class="featured-thumb" title="' + l + '" href="' + r + '"><img class="lazy layerimg" data-lazyload="' + s + '"><span class="thumb-overlay"></span></a></div><a class="recentLabel-1" href="/search/label/' + d + '">' + d + '</a><div class="layerc"><h3><a href="' + r + '">' + l + '</a></h3><div class="simplemeta">' + c + o + '</div><div class="straight-sum">' + f + '</div><div class="straight-jump"><a href="' + r + '">أكمل الموضوع <i class="fa fa-angle-double-left"></i></a></div></div></div></div>' : '<div class="simplesub"><div class="recentcontent"><a href="/search/label/' + d + '" class="recentLabel">' + d + '</a><h3><a href="' + r + '">' + l + '</a></h3><div class="simplesubmeta">' + c + o + "</div></div>";
						h.find(".straight-inner").append(m)
					}
				}
			}
		})
	});
};

$(window)["one"]("scroll", f);
function f() {
	$("#related-posts").each(function () {
		var e = $(this).html();
		$.ajax({
			url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + related_number,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = '<div class="rnav owl-carousel">', s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].content.$t,
						l = $("<div>").html(r);
					if (-1 < r.indexOf("http://www.youtube.com/embed/") || -1 < r.indexOf("https://www.youtube.com/embed/")) var c = '<a class="rnav-img" href="' + t + '" style="background:url(' + e.feed.entry[s].media$thumbnail.url + ') no-repeat center center;background-size: cover"><span class="thumb-overlay"></span></a>';
					else c = -1 < r.indexOf("<img") ? '<a class="lazy rnav-img" href="' + t + '" data-lazyload=' + l.find("img:first").attr("src") + ' data-lazyload-css="true"><span class="thumb-overlay"></span></a>' : '<a class="rnav-img" href="' + t + '" style="background:url(' + no_image + ') no-repeat center center;background-size: cover"><span class="thumb-overlay"></span></a>';
					a += "<li>" + c + '<div class="rnav-conent"><h3 class="rnav-title"><a href="' + t + '">' + n + "</a></h3></div></li>"
				}
				a += '</div><div class="clear"/>', $("#related-posts").html(a), $(".rnav.owl-carousel").owlCarousel({
					items: 3,
					rtl: !0,
					nav: !0,
					autoplay: !0,
					loop: !0,
					margin: 5,
					autoplayTimeout: 3500,
					autoplayHoverPause: !0,
					dots: !1,
					navText: ["", ""],
					responsive: {
						0: {
							items: 1,
							nav: !0
						},
						620: {
							items: 2,
							nav: !0
						},
						768: {
							items: 3,
							nav: !0
						}
					}
				}), $(".rnav-img").each(function () {
					$(this).attr("data-lazyload", function (e, t) {
						return t.replace("/default.jpg", "/mqdefault.jpg")
					}).attr("data-lazyload", function (e, t) {
						return t.replace("s72-c", "s1600")
					})
				})
			}
		})
	});
};

$(window)["one"]("scroll", n);
function n() {
	$(function () {
			if ($(".bm-accordion").each(function () {
					$(".bm-tabs,.bm-accordion,.alert-message").find("br").remove(), $("div", this).hide(), $(this).find("span").first().addClass("active"), $("span.active", this).next("div").slideDown();
					var e = $(this);
					$("span", this).click(function () {
						$("div", e).slideUp(), $("span", e).removeClass("active"), $(this).addClass("active"), $(this).next("div").slideDown()
					})
				}), $(".bm-tabs").each(function () {
					var e = $(this),
						t = $(".bm-tabbtn", e),
						a = $(".bm-tabcontent", e);
					a.children("div").hide(), a.children("div").first().fadeIn(), t.children("span").first().addClass("active"), t.children("span").click(function () {
						var e = $(this).index();
						t.children("span").removeClass("active"), $(this).addClass("active"), a.children("div").each(function () {
							$(this).index() == e ? $(this).slideDown() : $(this).slideUp()
						})
					})
				}), 0 < $(".post-body .bm-post-page").length) {
				var articleBody = $(".post-body"),
					pages = "";
				articleBody.find(".bm-post-page").each(function (i) {
					pages += "<button data-target='" + i + "'>" + eval(i + 1) + "</button>"
				}), articleBody.append('<div class="bm-post-pagination">' + pages + "</div>"), $(".bm-post-pagination").insertBefore(".bigmag-right-tags"), $(".bm-post-page").hide(0), $(".bm-post-page").first().fadeIn(), $(".bm-post-pagination button").first().addClass("active")
			}
			$(".bm-post-pagination button").click(function () {
				if (!$(this).hasClass("active")) {
					var e = eval($(this).attr("data-target"));
					$(".bm-post-page").hide().removeClass("active"), $(".bm-post-page").eq(e).fadeIn().addClass("active"), $(".bm-post-pagination button").removeClass("active"), $(this).addClass("active"), $("html,body").animate({
						scrollTop: $(".bm-post-page.active").offset().top
					}, "normal")
				}
			});
			var sb = $(".bm-stab-buttons span"),
				sc = $(".bm-tab-content>div");
			sb.first().addClass("active"), sc.hide(), sc.first().slideDown(), sb.click(function () {
				$(".bm-stab-buttons span").removeClass("active");
				var e = $(this).attr("class");
				$(this).addClass("active"), $(".bm-tab-content>div").each(function () {
					$(this).hasClass(e) ? $(this).fadeIn(800) : $(this).hide()
				})
			})
		}), $(document).ready(function (e) {
			e(".alert-del-btn").click(function () {
				e(this).parents('div[class^="alert-message"]').fadeOut(500)
			})
		}),
		function () {
			for (var e = document.getElementsByTagName("pre"), t = e.length, a = 0; a < t; a++) {
				e[a].innerHTML = '<span class="line-number"></span>' + e[a].innerHTML + '<span class="cl"></span>';
				for (var s = e[a].innerHTML.split(/\n/).length, i = 0; i < s; i++) e[a].getElementsByTagName("span")[0].innerHTML += "<span>" + (i + 1) + "</span>"
			}
		}(), $(document).ready(function () {
			$("pre code").each(function (e, t) {
				hljs.highlightBlock(t)
			})
		}), $(document).ready(function () {
			$("#post-carousel").owlCarousel({
				items: 1,
				smartSpeed: 550,
				nav: !0,
				navText: ["", ""],
				loop: !0,
				autoplay: !0,
				autoplaySpeed: 800,
				transitionStyle: "fade",
				dots: !1,
				rtl: !0,
				responsive: {
					0: {
						items: 1,
						nav: !0
					}
				}
			})
		}), $(document).ready(function () {
			$("#contact").appendTo(".contact-form"), $(".contact-form #contact").css("display", "block"), $(".sub-title").appendTo(".entry-header").insertAfter(".entry-title")
		});
    };
    
    $(document).ready(function () {
			$(".post-item *").replaceText("[full_width]", "<style>@media screen and (min-width: 1000px){#sidebar-wrapper {display: none!important;}#main-wrapper {width: 100%!important;max-width: 100%!important;}.postmarg.body-row.midalizer {width: 100%!important;text-align: center!important;}ol.breadcrumbs {text-align: center!important;}}</style>"), $(".post-body *").replaceText("[right_sidebar]", "<style>@media screen and (min-width: 1000px){.item #main-wrapper{float:left!important}.item #sidebar-wrapper{float:right!important}.PopularPosts{padding: 15px;}}</style>")
		});


    $(window)["one"]("scroll", q);
    function q() {
	$(".share-container").each(function () {
		var e = $(this);
		e.find(".post-sharebtn").click(function () {
			e.find(".post-share").fadeToggle("slow")
		}), $(document).bind("click", function (e) {
			0 === $(e.target).parents(".share-container").length && $(".post-share").fadeOut(300)
		})
	});
};

$(window)["one"]("scroll", w);
function w() {
	jQuery('.list-label-widget-content ul li span:contains(")")').each(function () {
		jQuery(this).html(jQuery(this).html().split(")").join(""))
	}), jQuery('.list-label-widget-content ul li span:contains("(")').each(function () {
		jQuery(this).html(jQuery(this).html().split("(").join(""))
	});
};

$(window)["one"]("scroll", r);
function r() {
	$(".social-item.whatsapp").click(function () {
		var e = navigator.userAgent.toLowerCase(),
			t = -1 < e.indexOf("android"),
			a = -1 < e.indexOf("mobile"),
			s = -1 < e.indexOf("iPhone");
		t || a || s || alert("لا يمكنك مشاركة التدوينة على الواتساب من الحاسوب!")
	});
};

$(window)["one"]("scroll", t);
function t() {
	$(".Label a, .bigmag-max-limit").attr("href", function (e, t) {
		return t.replace(t, t + "?&max-results=" + perPage)
	});
};

$(window)["one"]("scroll", y);
function y() {
	$(document).ready(function () {
		$(".increaseFont").click(function () {
			var e = $(".post-body").css("font-size"),
				t = 1.2 * parseFloat(e, 10);
			return $(".post-body").css("font-size", t), !1
		}), $(".decreaseFont").click(function () {
			var e = $(".post-body").css("font-size"),
				t = .8 * parseFloat(e, 10);
			return $(".post-body").css("font-size", t), !1
		})
	});
};


	$(function () {
		$(".panel-icon").click(function () {
			setTimeout(function () {
				$(".poverlay").fadeIn(300)
			}, 300), setTimeout(function () {
				$(".panel").addClass("active")
			}, 600), $(".panel-icon").addClass("active")
		}), $(".poverlay,.close-panel").click(function () {
			setTimeout(function () {
				$(".poverlay").fadeOut(300)
			}, 300), setTimeout(function () {
				$(".panel-icon").removeClass("active")
			}, 600), $(".panel").removeClass("active")
		})
	}), $(".panel .widget>h2").html(function () {
		return "<span>" + $(this).html() + "</span>"
	}), $(".contact-btn").click(function () {
		var e = $(".contact-sec");
		return e.is(":hidden") && (e.fadeIn(300), e.addClass("contact-show"), $("#body-wrapper").addClass("pop_contact ")), !1
	});


  $(window)["one"]("scroll", u);
  function u() {
	$(document).bind("click", function (e) {
		0 === $(e.target).parents(".contact-sec").length && ($(".contact-sec").fadeOut(300), $("#body-wrapper").removeClass("pop_contact "), $(".contact-sec").removeClass("contact-show"))
	}), $(".contact-close").click(function () {
		return $(".contact-sec").fadeOut(300), $("#body-wrapper").removeClass("pop_contact "), $(".contact-sec").removeClass("contact-show"), !1
	});
};


	$(".social-counter").each(function () {
		var e = $(this);
		0 === $(this).find(".social-item").length && e.remove(), $(this).find(".widget").removeClass("LinkList"), $(".social-counter .social-item.facebook").find(".item-text").text("معجب"), $(".social-counter .social-item.rss,.social-counter .social-item.youtube").find(".item-text").text("مشترك"), $(".social-counter *").replaceText("[", '<span class="item-count">'), $(".social-counter *").replaceText("]", "</span>"), $(".social-item").each(function () {
			var e = $(this).find(".remove-count"),
				t = $(this).find(".item-count");
			$(e).before($(t)), $(e).remove()
		})
	});


  $(window)["one"]("scroll", i);
  function i() {
	$(document).ready(function () {
		$('span[name="author-post"]').before($(".post-author-widget .widget-content").html()), $(".post-author-widget .widget-content").html("")
	});
};

$(window)["one"]("scroll", o);
function o() {
	$(document).ready(function () {
		$(".post-author-social").appendTo(".content-social-author")
	});
};

$(window)["one"]("scroll", p);
function p() {
	$(document).ready(function () {
		var e = $("#bigmag-sidebar-tabs #tabside1 .widget h2").text();
		$(".bigmag-sidebar-tab .item-1 a").text(e);
		var t = $("#bigmag-sidebar-tabs #tabside2 .widget h2").text();
		$(".bigmag-sidebar-tab .item-2 a").text(t);
		var a = $("#bigmag-sidebar-tabs #tabside3 .widget h2").text();
		$(".bigmag-sidebar-tab .item-3 a").text(a), $("#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title").remove(), $(this).find(".bigmag-sidebar-tab li").addClass("bigmag-hide"), $(".bigmag-sidebar-tabs").tabslet({
			mouseevent: "click",
			attribute: "href",
			animation: !0
		}), 0 === $(".bigmag-sidebar-tabs .widget").length && $(".bigmag-sidebar-tabs").remove()
	});
};

$(window)["one"]("scroll", s);
function s() {
	$(document).ready(function () {
		$(".comments-tabs").simpleTab({
			active: 1,
			fx: "fade",
			showSpeed: 400,
			hideSpeed: 400
		}), $(".tab-blogger").append($("#comments")), $(".comments-tabs.simpleTab .tab-wrapper").wrap("<div class='comments-tabs-header'/>"), $(".comments-tabs-header").prepend("<h3>" + comments_text + "</h3>")
	});
};

$(window)["one"]("scroll", g);
function g() {
	$(".PopularPosts ul li img").attr("src", function (e, t) {
		return t.match("hqdefault.jpg") ? t.replace("/hqdefault.jpg", "/mqdefault.jpg") : t.match("default.jpg") ? t.replace("/default.jpg", "/mqdefault.jpg") : t.match("s72-c") ? t.replace("/s72-c", "/s1600") : t.match("w72-h72-p-nu") ? t.replace("/w72-h72-p-nu", "/s1600") : t.replace("https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png", "https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png")
	});
};

$(window)["one"]("scroll", h);
function h() {
	$(document).ready(function () {
		$('span[name="author-post"]').before($(".post-author-widget .widget-content").html()), $(".post-author-widget .widget-content").html("")
	});
};

$(window)["one"]("scroll", j);
function j() {
	$(".widget-content").each(function () {
		var e = $(this).text();
		e.substr(0, 10).match("fbbox") && (e = e.replace("fbbox/", ""), $(this).html('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//www.facebook.com/plugins/likebox.php?href=' + e + '&width=340px&height=258&colorscheme=light&show_faces=true&header=false&stream=false&show_border=false" style="border:none; overflow:hidden; width:100%; height:230px;"></iframe>'))
	});
};

$(document).ready(function () {
	$("p.trans").each(function () {
		var e = $(this).text(),
			t = $(this).attr("data-tran");
		$("#body-wrapper *").replaceText(e, t)
	})
}), $(function () {
	"use strict";
	$(".bigmag-advertising-top").append($("#bigmag-advert-2")), $(".bigmag-advertising-bottom").append($("#bigmag-advert-3")), $("#postAD-top").append($("#HTML201")), $("#postAD-bottom").append($("#HTML203"));
	var e = Math.floor($(".post-body *").length / 2);
	$(".post-body *:eq(" + e + ")").after($("#HTML202"))
}), jQuery(document).ready(function (e) {
	e("abbr.timeago").timeago()
}), $(".post-body").bigmagtube(), 


$(document).ready(function (v) {
var i = -1,
n = "";
v("#bigmag-menu").find("ul").find("li").each(function () {
for (var e = v(this).text(), t = v(this).find("a").attr("href"), a = 0, s = 0; s < e.length && -1 != (a = e.indexOf("_", a)); s++) a++;
if (level = s, level > i && (n += "<ul>"), level < i)
for (offset = i - level, s = 0; s < offset; s++) n += "</ul></li>";
for (e = e.replace(/_/gi, ""), n += "<li><a href='" + t + "'>", s = 0; s < level; s++) n += "";
n += e + "</a>", i = level
});

for (var e = 0; e <= i; e++) n += "</ul>", 0 != e && (n += "</li>");


v("#bigmag-menu .LinkList").html(n), v("#bigmag-menu > .LinkList > ul").attr("id", "bigmag_menu"), v("#bigmag-menu ul > li:first-child > a").parent("li").addClass("home"), v("#bigmag-menu ul > li > ul > li").removeClass("home"),

v("#bigmag_menu a").each(function () {
var e = v(this).text().split("/"),
s = e[0],
a = e[1];
e && v(this).html('<i class="fa fa-' + a + '" aria-hidden="true"></i>' + s)
}),

v("#bigmag_menu a").map(function () {
var e = v(this).attr("href"); - 1 != (e = e.toLowerCase()).indexOf("[mega menu]") && (v(this).addClass("mega-link"), v(this).attr("href", "/search/label/" + v(this).text() + "?&max-results=" + perPage))
}),

v("#bigmag-menu ul > li > ul").parent("li").addClass("hasSubmenu"), v("#bigmag-menu .widget").attr("style", "display:block!important;"), v("#bigmag_menu a.mega-link").map(function () {
var g = v(this),
e = g.attr("href");
if (e = e.toLowerCase(), g.hasClass("mega-link")) {
var b = g.text();
v.ajax({
url: "/feeds/posts/default/-/" + b + "?alt=json-in-script&max-results=4",
type: "get",
dataType: "jsonp",
success: function (e) {
for (g.closest("li").addClass("isMega hasSubmenu"), d = 0; d < e.feed.link.length; d++) {
var t = e.feed.link[d],
a = t.rel,
s = t.type;
if ("alternate" == a && "text/html" == s) {
var i = t.href + "?&max-results=" + perPage;
g.attr("href", i)
}
}
var n = e.feed.openSearch$totalResults.$t,
r = e.feed.openSearch$startIndex.$t,
l = e.feed.openSearch$itemsPerPage.$t,
c = Math.ceil(n / l);
if (e.feed.entry) {
var o = "<ul";
o = o + ' data-itemnums="' + l + '" data-label="' + b + '" data-start="' + r + '" data-stages="' + c + '" data-cstage="1" data-tpst="' + n + '"', o += '><div class="mega-nav"><a class="mega-prev disable" href="javascript:;"><i class="fa fa-arrow-right"></i></a><a class="mega-next" href="javascript:;"><i class="fa fa-arrow-left"></i></a></div><div class="bigmag-mega-loading" style="display:none">\t<div class="bigmag-loading-inner">  <div class="bigmag-thecube">\t<div class="bigmag-cube bigmag-c1"></div>\t<div class="bigmag-cube bigmag-c2"></div>\t<div class="bigmag-cube bigmag-c4"></div>\t<div class="bigmag-cube bigmag-c3"></div>\t\t</div></div>  </div><div class="mega-inner row-megamenu">';
for (var d = 0; d < e.feed.entry.length; d++) {
var f = e.feed.entry[d];
if (f.media$thumbnail) - 1 !== (m = f.media$thumbnail.url).indexOf("/s72-c") && (m = m.replace("/s72-c", "/s1600")), -1 !== m.indexOf("img.youtube.com") && (m = m.replace("/default.jpg", "/maxresdefault.jpg"));
else var m = "https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png";
for (var u = f.title.$t, p = 0; p < f.link.length; p++)
if ("alternate" == f.link[p].rel) var h = f.link[p].href;
o = o + '<div class="bigmag-mega-item col-megamenu"><div class="bigmag-m-thumb bmrp-thumb" style="background:url(\'' + m + '\')"><a class="linkcover" href="' + h + '"><span class="thumb-overlay"></span></a></div><div class="bigmag-text"><a href="' + h + '">' + u + "</a></div></div>"
}
o += "</div></ul>", g.after(function () {
v(this).after(o);
var e = v(this).closest(".isMega");
e.find(".mega-prev").click(function () {
var l = v(this).closest("ul");
l.find(".bigmag-mega-loading").fadeIn(0);
var e = l.attr("data-label"),
c = Number(l.attr("data-start")),
o = Number(l.attr("data-cstage")),
t = (Number(l.attr("data-stages")), Number(l.attr("data-itemnums")));
if (c -= t, o - 1 <= 1 ? v(this).addClass("disable") : v(this).removeClass("disable"), l.find(".mega-next").removeClass("disable"), 1 < o) {
var d = "",
a = "/feeds/posts/default/-/" + e + "?alt=json-in-script&start-index=" + c + "&max-results=" + t;
v.ajax({
url: a,
type: "get",
dataType: "jsonp",
success: function (e) {
if (l.attr("data-start", c), l.attr("data-cstage", o - 1), e.feed.entry) {
for (var t = 0; t < e.feed.entry.length; t++) {
var a = e.feed.entry[t];
if (a.media$thumbnail) - 1 !== (s = a.media$thumbnail.url).indexOf("/s72-c") && (s = s.replace("/s72-c", "/s1600")), -1 !== s.indexOf("img.youtube.com") && (s = s.replace("/default.jpg", "/maxresdefault.jpg"));
else var s = "https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png";
for (var i = a.title.$t, n = 0; n < a.link.length; n++)
if ("alternate" == a.link[n].rel) var r = a.link[n].href;
d = d + '<div class="bigmag-mega-item col-megamenu"><div class="bigmag-m-thumb bmrp-thumb" style="background:url(\'' + s + '\')"><a class="linkcover" href="' + r + '"><span class="thumb-overlay"></span></a></div><div class="bigmag-text"><a href="' + r + '">' + i + "</a></div></div>"
}
l.find(".mega-inner").html(d), setTimeout(function () {
l.find(".bigmag-mega-loading").fadeOut()
}, 1e3)
}
},
error: function (e) {
setTimeout(function () {
l.find(".bigmag-mega-loading").fadeOut()
}, 1e3)
}
})
}
}), e.find(".mega-next").click(function () {
var l = v(this).closest("ul");
l.find(".bigmag-mega-loading").fadeIn(0);
var e = l.attr("data-label"),
c = Number(l.attr("data-start")),
o = Number(l.attr("data-cstage")),
t = Number(l.attr("data-stages")),
a = Number(l.attr("data-itemnums"));
if (c += a, o + 1 == t ? v(this).addClass("disable") : v(this).removeClass("disable"), 1 <= o ? l.find(".mega-prev").removeClass("disable") : l.find(".mega-prev").addClass("disable"), o < t) {
var d = "",
s = "/feeds/posts/default/-/" + e + "?alt=json-in-script&start-index=" + c + "&max-results=" + a;
v.ajax({
url: s,
type: "get",
dataType: "jsonp",
success: function (e) {
if (l.attr("data-start", c), l.attr("data-cstage", o + 1), e.feed.entry) {
for (var t = 0; t < e.feed.entry.length; t++) {
var a = e.feed.entry[t];
if (a.media$thumbnail) - 1 !== (s = a.media$thumbnail.url).indexOf("/s72-c") && (s = s.replace("/s72-c", "/s1600")), -1 !== s.indexOf("img.youtube.com") && (s = s.replace("/default.jpg", "/maxresdefault.jpg"));
else var s = "https://3.bp.blogspot.com/-Auu9GFpjt54/W5FBINOr8CI/AAAAAAAAAyA/VF1LcviFSIA1-3SbfNfvmHxckazNcjaXQCLcBGAs/s1600/notfound.png";
for (var i = a.title.$t, n = 0; n < a.link.length; n++)
if ("alternate" == a.link[n].rel) var r = a.link[n].href;
d = d + '<div class="bigmag-mega-item col-megamenu"><div class="bigmag-m-thumb bmrp-thumb" style="background:url(\'' + s + '\')"><a class="linkcover" href="' + r + '"><span class="thumb-overlay"></span></a></div><div class="bigmag-text"><a href="' + r + '">' + i + "</a></div></div>"
}
l.find(".mega-inner").html(d), setTimeout(function () {
l.find(".bigmag-mega-loading").fadeOut()
}, 1e3)
}
},
error: function (e) {
setTimeout(function () {
l.find(".bigmag-mega-loading").fadeOut()
}, 1e3)
}
})
}
})
})
}
},
error: function (e) {}
})
}
}), v(".FeaturedPost .post-summary").map(function () {
if (v(this).find(".image")) {
var e = v(this).find(".image").attr("src");
v(this).attr("style", "background-image:url(" + e + ");")
}
v(this).append("<div class='overlay'></div>")
})
});

var btn = $("#to-BigMag");
$(window).scroll(function () {
	300 < $(window).scrollTop() ? btn.addClass("to-bm-visible") : btn.removeClass("to-bm-visible")
}), btn.on("click", function (e) {
	e.preventDefault(), $("html, body").animate({
		scrollTop: 0
	}, "300")
});

(function ($) {
	$.fn.toc = function (o, p) {
		p = $.extend({
			title: "Table of Content:",
			top: "Top",
			mincolor: "#4d90fe",
			float: "none",
			Allallowtoc: true,
			contents: this.contents().map(function () {
				if (this.nodeType === 8) return this.nodeValue
			}).get()
		},
		p);
		var ext;
		if (p.Allallowtoc == false) {
			ext = [p.contents] == " allowtoc_Content "
		} else {
			ext = true
		};
		if (ext) {
			style = ' #toc-list{position:relative;overflow:hidden;display:inline-block;border:1px solid #f5f5f5;background-color:#f5f5f5;padding:10px 20px;margin:0 10px 15px;min-width:180px;float:' + p.float + ';}#toc-Content{color:#000000;font-size:17px;font-weight:700;cursor:pointer;margin:10px 0;}#toc-list a:before{content:"•";color:' + p.mincolor + ';margin:0 5px;display:inline-block;font-size:15px;}#toc-list a{color:#777;font-size:13px;margin-bottom:5px;display:block;clear:both;}#toc-list a:hover{color:' + p.mincolor + ';}.post-body h1:target,.post-body h2:target,.post-body h3:target,.post-body h4:target,.post-body h5:target,.post-body h6:target{padding:10px 0;color:' + p.mincolor + ';font-weight:bold;}#toc-top{position:relative;display:block;width:100%;clear:both;margin:5px 0;}div[dir="rtl"] #toc-top{text-align:left;}div[dir="ltr"] #toc-top{text-align:right;}#toc-top a{color:white;background-color:' + p.mincolor + ';border:1px solid ' + p.mincolor + ';font-size:11px;display:inline-block;min-width:80px;margin:5px;padding:2px 12px;text-align:center;font-weight:normal;line-height:normal;}#toc-top a:hover{color:#cecece;background-color:#f5f5f5;border:1px solid #f5f5f5;}#toc-list:hover,#toc-top a:hover{-webkit-box-shadow:0 5px 8px rgba(0,0,0,0.16);-moz-box-shadow:0 5px 8px rgba(0,0,0,0.16);-ms-box-shadow:0 5px 8px rgba(0,0,0,0.16);-o-box-shadow:0 5px 8px rgba(0,0,0,0.16);box-shadow:0 5px 8px rgba(0,0,0,0.16);}#toc-list{-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;border-radius:4px;}#toc-top a{-webkit-border-radius:30px;-moz-border-radius:30px;-ms-border-radius:30px;-o-border-radius:30px;border-radius:30px;}#toc-list *{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;}'; !
			function (t) {
				var e = document.createElement("style");
				e.innerHTML = t,
				document.body.appendChild(e)
			} (style);
			this.prepend('<div id="toc-list"><div id="toc-Content" onclick="" role="button" tabindex="0">' + p.title + '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#000000" d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg></div><dl  id="toc"></dl></div>').children(o).each(function (i) {
				i = i + 1;
				$(this).attr('id', 'section-' + i).nextUntil(o).not('br+br,p,div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, emx, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video').after('<div id="toc-top"><a href="#toc-list">' + p.top + ' ↑</a></div>');
				$('<dt><a href="#section-' + i + '">' + $(this).text() + '</a></dt>').appendTo('#toc-list dl')
			});
			$('#toc-Content').on("click", function () {
				var toc = document.getElementById("toc");
				if (toc.style.display === "none") {
					toc.style.display = "block"
				} else {
					toc.style.display = "none"
				}
			});
			$('#toc-list a, a[href="#toc-list"]').on("click", function () {
				var hash = this.hash;
				$('html,body').animate({
					scrollTop: $(hash).offset().top
				},
				600, function () {
					window.location.hash = hash
				});
				return false
			})
		}
	}
})(jQuery);

var static_page_text = $.trim($(".static_page .post-body").text());
if ("[sitemap]" === static_page_text) {
	var postbody = $(".static_page .post-body");
	$.ajax({
		url: "/feeds/posts/default?alt=json-in-script",
		type: "get",
		dataType: "jsonp",
		success: function (e) {
			for (var t = [], a = 0; a < e.feed.category.length; a++) t.push(e.feed.category[a].term);
			t = t.join("/"), postbody.html('<div class="siteLabel"></div>'), $(".static_page .post-body .siteLabel").text(t);
			var s = $(".siteLabel").text().split("/"),
				i = "";
			for (get = 0; get < s.length; ++get) i += "<span>" + s[get] + "</span>";
			$(".siteLabel").html(i), $(".siteLabel span").each(function () {
				var u = $(this),
					p = $(this).text();
				$.ajax({
					url: "/feeds/posts/default/-/" + p + "?alt=json-in-script",
					type: "get",
					dataType: "jsonp",
					success: function (e) {
						for (var t = "", a = '<div class="mapa">', s = 0; s < e.feed.entry.length; s++) {
							for (var i = 0; i < e.feed.entry[s].link.length; i++)
								if ("alternate" == e.feed.entry[s].link[i].rel) {
									t = e.feed.entry[s].link[i].href;
									break
								}
							var n = e.feed.entry[s].title.$t,
								r = e.feed.entry[s].author[0].name.$t,
								l = e.feed.entry[s].published.$t,
								c = l.substring(0, 4),
								o = l.substring(5, 7),
								d = l.substring(8, 10),
								f = month_format[parseInt(o, 10)] + " " + d + ", " + c,
								m = (e.feed.entry[s].category[0].term, e.feed.entry[s].content.$t);
							$("<div>").html(m), a += '<div class="mapapost"><div class="map-thumb"><div class="map-img"><a href="' + t + '" style="background:url(' + e.feed.entry[s].media$thumbnail.url + ') no-repeat center center;background-size: cover"/></div></div><h3 class="wrp-titulo"><a href="' + t + '">' + n + '</a></h3><div class="map-meta"><span class="p-author">' + r + '</span><span class="p-date">' + f + "</span></div></div>"
						}
						a += "</div>", u.replaceWith('<div class="mapasite"><h2>' + p + '<span class="botao"><i class="fa fa-plus-circle"></i></span></h2>' + a + "</div>"), $(document).on("click", ".mapasite h2", function () {
							$(this).parent(".mapasite").addClass("active"), $(this).find(".botao .fa").removeClass("fa-plus-circle").addClass("fa-minus-circle")
						}), $(document).on("click", ".mapasite.active h2", function () {
							$(this).parent(".mapasite").removeClass("active"), $(this).find(".botao .fa").addClass("fa-plus-circle").removeClass("fa-minus-circle")
						})
					}
				})
			})
		}
	})
}

$(window)["one"]("scroll", k);
function k() {
	$(".ticker .HTML .widget-content").each(function () {
		var e = $(this).find("span").attr("data-no"),
			t = $(this).find("span").attr("data-label"),
			a = $(this).find("span").attr("data-type");
		a.match("recent") ? $.ajax({
			url: "/feeds/posts/default?alt=json-in-script&max-results=" + e,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].content.$t,
						c = $("<div>").html(l);
					if (-1 < l.indexOf("//www.youtube.com/embed/")) var o = e.feed.entry[s].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
					else o = -1 < l.indexOf("<img") ? c.find("img:first").attr("src").replace("s72-c", "s1600") : no_image;
					a += '<li><div class="tk-thumb"><a class="lazy tk-img" href="' + t + '" data-lazyload=' + o + ' data-lazyload-css="true"><span class="img-overlay"/></a></div><a href="/search/label/' + r + '" class="post-tag icon ' + r + '">' + r + '</a><h3 class="recent-title"><a href="' + t + '">' + n + "</a></h3></li>"
				}
				a += "</ul>", $(".ticker .widget-content").each(function () {
					$(this).html(a), $(this).prev("h2").prepend('<i class="fa fa-rocket"></i>'), $(this).find("ul").webTicker()
				})
			}
		}) : a.match("label") && $.ajax({
			url: "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=" + e,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].content.$t,
						c = $("<div>").html(l);
					if (-1 < l.indexOf("//www.youtube.com/embed/")) var o = e.feed.entry[s].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
					else o = -1 < l.indexOf("<img") ? c.find("img:first").attr("src").replace("s72-c", "s1600") : no_image;
					a += '<li><div class="tk-thumb"><a class="tk-img" href="' + t + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><a href="/search/label/' + r + '" class="post-tag icon ' + r + '">' + r + '</a><h3 class="recent-title"><a href="' + t + '">' + n + "</a></h3></li>"
				}
				a += "</ul>", $(".ticker .HTML .widget-content").each(function () {
					$(this).html(a), $(this).prev("h2").prepend('<i class="fa fa-thumb-tack"></i>'), $(this).find("ul").webTicker()
				})
			}
		})
	});
};

$(window)["one"]("scroll", l);
function l() {
	$(".recent-boxes .HTML .widget-content").each(function () {
		var g = $(this).find("span").attr("data-label"),
			e = $(this).find("span").attr("data-no"),
			b = $(this).prev("h2").text(),
			v = $(this).parent().attr("id"),
			t = $(this).find("span").attr("data-type");
		t.match("feat") && $.ajax({
			url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=5",
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].author[0].name.$t,
						c = e.feed.entry[s].published.$t,
						o = c.substring(0, 4),
						d = c.substring(5, 7),
						f = c.substring(8, 10),
						m = month_format[parseInt(d, 10)] + " " + f + ", " + o,
						u = e.feed.entry[s].content.$t,
						p = $("<div>").html(u);
					if (-1 < u.indexOf("//www.youtube.com/embed/")) var h = e.feed.entry[s].media$thumbnail.url;
					else h = -1 < u.indexOf("<img") ? p.find("img:first").attr("src") : no_image;
					a += 0 == s ? '<div class="bx-first"><div class="bx-item"><div class="box-thumbnail"><a class="lazy bf-thumb" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + r + '" href="/search/label/' + r + '">' + r + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + m + "</span></div></div></div>" : '<li><div class="box-thumbnail"><a class="lazy box-image" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
				}
				a += "</ul>", $(".recent-boxes .HTML .widget-content").each(function () {
					$(this).parent().attr("id") == v && ($(this).html(a), $(this).parent().addClass("feat"), $(this).parent().addClass("boxes"), $(this).prev("h2").html('<a href="/search/label/' + g + '">' + b + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + g + '">' + more_text + "</a>"), $(this).find(".box-image,.bf-thumb").each(function () {
						$(this).attr("data-lazyload", function (e, t) {
							return t.replace("/default.jpg", "/mqdefault.jpg")
						}).attr("data-lazyload", function (e, t) {
							return t.replace("s72-c", "s1600")
						})
					}))
				})
			}
		}), t.match("columnright") && $.ajax({
			url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + e,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].author[0].name.$t,
						c = e.feed.entry[s].published.$t,
						o = c.substring(0, 4),
						d = c.substring(5, 7),
						f = c.substring(8, 10),
						m = month_format[parseInt(d, 10)] + " " + f + ", " + o,
						u = e.feed.entry[s].content.$t,
						p = $("<div>").html(u);
					if (-1 < u.indexOf("//www.youtube.com/embed/")) var h = e.feed.entry[s].media$thumbnail.url;
					else h = -1 < u.indexOf("<img") ? p.find("img:first").attr("src") : no_image;
					a += 0 == s ? '<div class="bx-first"><div class="box-thumbnail"><a class="lazy bf-thumb" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + r + '" href="/search/label/' + r + '">' + r + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + m + "</span></div></div>" : '<li><div class="box-thumbnail"><a class="lazy box-image" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
				}
				a += "</ul>", $(".recent-boxes .HTML .widget-content").each(function () {
					$(this).parent().attr("id") == v && ($(this).html(a), $(this).parent().addClass("column"), $(this).parent().addClass("columnright"), $(this).parent().addClass("boxes"), $(this).prev("h2").html('<a href="/search/label/' + g + '">' + b + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + g + '">' + more_text + "</a>"), $(this).find(".box-image,.bf-thumb").each(function () {
						$(this).attr("data-lazyload", function (e, t) {
							return t.replace("/default.jpg", "/mqdefault.jpg")
						}).attr("data-lazyload", function (e, t) {
							return t.replace("s72-c", "s1600")
						})
					}))
				})
			}
		}), t.match("columnleft") && $.ajax({
			url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + e,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].author[0].name.$t,
						c = e.feed.entry[s].published.$t,
						o = c.substring(0, 4),
						d = c.substring(5, 7),
						f = c.substring(8, 10),
						m = month_format[parseInt(d, 10)] + " " + f + ", " + o,
						u = e.feed.entry[s].content.$t,
						p = $("<div>").html(u);
					if (-1 < u.indexOf("//www.youtube.com/embed/")) var h = e.feed.entry[s].media$thumbnail.url;
					else h = -1 < u.indexOf("<img") ? p.find("img:first").attr("src") : no_image;
					a += 0 == s ? '<div class="bx-first"><div class="box-thumbnail"><a class="lazy bf-thumb" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + r + '" href="/search/label/' + r + '">' + r + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + m + "</span></div></div>" : '<li><div class="box-thumbnail"><a class="lazy box-image" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
				}
				a += "</ul>", $(".recent-boxes .HTML .widget-content").each(function () {
					$(this).parent().attr("id") == v && ($(this).html(a), $(this).parent().addClass("column"), $(this).parent().addClass("columnleft"), $(this).parent().addClass("boxes"), $(this).prev("h2").html('<a href="/search/label/' + g + '">' + b + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + g + '">' + more_text + "</a>"), $(this).find(".box-image,.bf-thumb").each(function () {
						$(this).attr("data-lazyload", function (e, t) {
							return t.replace("/default.jpg", "/mqdefault.jpg")
						}).attr("data-lazyload", function (e, t) {
							return t.replace("s72-c", "s1600")
						})
					}))
				})
			}
		}), t.match("gallery") && $.ajax({
			url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + e,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].author[0].name.$t,
						c = e.feed.entry[s].content.$t,
						o = $("<div>").html(c);
					if (-1 < c.indexOf("//www.youtube.com/embed/")) var d = e.feed.entry[s].media$thumbnail.url;
					else d = -1 < c.indexOf("<img") ? o.find("img:first").attr("src") : no_image;
					a += '<li><a class="lazy box-image" href="' + t + '" data-lazyload=' + d + ' data-lazyload-css="true"><span class="gallery-overlay"/></a><div class="category-gallery"><a class="icon ' + r + '" href="/search/label/' + r + '"></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + l + '</span></div><div class="clear"/></li>'
				}
				a += "</ul>", $(".recent-boxes .HTML .widget-content").each(function () {
					$(this).parent().attr("id") == v && ($(this).html(a), $(this).parent().addClass("gallery"), $(this).prev("h2").html('<a href="/search/label/' + g + '">' + b + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + g + '">' + more_text + "</a>"), $(this).find(".box-image").each(function () {
						$(this).attr("data-lazyload", function (e, t) {
							return t.replace("/default.jpg", "/mqdefault.jpg")
						}).attr("data-lazyload", function (e, t) {
							return t.replace("s72-c", "s1600")
						})
					}))
				})
			}
		}), t.match("videos") && $.ajax({
			url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + e,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = "<ul>", s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].author[0].name.$t,
						l = e.feed.entry[s].content.$t,
						c = $("<div>").html(l);
					if (-1 < l.indexOf("//www.youtube.com/embed/")) var o = e.feed.entry[s].media$thumbnail.url;
					else o = -1 < l.indexOf("<img") ? c.find("img:first").attr("src") : no_image;
					a += '<li><div class="videos-item"><a class="lazy box-image" href="' + t + '" data-lazyload=' + o + ' data-lazyload-css="true"><span class="videos-overlay"/></a><div class="recent-content"><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + r + '</span></div><div class="clear"/></div></li>'
				}
				a += "</ul>", $(".recent-boxes .HTML .widget-content").each(function () {
					$(this).parent().attr("id") == v && ($(this).html(a), $(this).parent().addClass("videos"), $(this).prev("h2").html('<a href="/search/label/' + g + '">' + b + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + g + '">' + more_text + "</a>"), $(this).find(".box-image").each(function () {
						$(this).attr("data-lazyload", function (e, t) {
							return t.replace("/default.jpg", "/mqdefault.jpg")
						}).attr("data-lazyload", function (e, t) {
							return t.replace("s72-c", "s1600")
						})
					}))
				})
			}
		}), t.match("smallmag-slider") && $.ajax({
			url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + e,
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				for (var t = "", a = '<div class="main-carousel">', s = 0; s < e.feed.entry.length; s++) {
					for (var i = 0; i < e.feed.entry[s].link.length; i++)
						if ("alternate" == e.feed.entry[s].link[i].rel) {
							t = e.feed.entry[s].link[i].href;
							break
						}
					var n = e.feed.entry[s].title.$t,
						r = e.feed.entry[s].category[0].term,
						l = e.feed.entry[s].author[0].name.$t,
						c = e.feed.entry[s].published.$t,
						o = c.substring(0, 4),
						d = c.substring(5, 7),
						f = c.substring(8, 10),
						m = month_format[parseInt(d, 10)] + " " + f + ", " + o,
						u = e.feed.entry[s].content.$t,
						p = $("<div>").html(u);
					if (-1 < u.indexOf("//www.youtube.com/embed/")) var h = e.feed.entry[s].media$thumbnail.url;
					else h = -1 < u.indexOf("<img") ? p.find("img:first").attr("src") : no_image;
					a += '<li class="carousel-item"><a class="lazy box-image" href="' + t + '" data-lazyload=' + h + ' data-lazyload-css="true"><span class="carousel-overlay"/></a><div class="smallmag-content"><div class="smallmag-tag"><a class="icon ' + r + '" href="/search/label/' + r + '">' + r + '</a></div><h3 class="recent-title"><a href="' + t + '">' + n + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
				}
				a += "</div>", $(".recent-boxes .HTML .widget-content").each(function () {
					$(this).parent().attr("id") == v && ($(this).html(a), $(this).parent().addClass("smallmag-slider"), $(this).prev("h2").html('<a href="/search/label/' + g + '">' + b + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + g + '">' + more_text + "</a>"), $(".main-carousel").owlCarousel({
						items: 2,
						rtl: !0,
						smartSpeed: 550,
						nav: !0,
						navText: ["", ""],
						loop: !0,
						autoplay: !0,
						autoplaySpeed: 800,
						dots: !1,
						responsive: {
							0: {
								items: 1,
								nav: !0
							},
							601: {
								items: 2,
								nav: !0
							}
						}
					}), $(this).find(".box-image").each(function () {
						$(this).attr("data-lazyload", function (e, t) {
							return t.replace("/default.jpg", "/mqdefault.jpg")
						}).attr("data-lazyload", function (e, t) {
							return t.replace("s72-c", "s1600")
						})
					}))
				})
			}
		})
	});
};
$(function(){$("#bigmag-menu").slicknav({prependTo:".bigmag-navigation"}),$("#bigmag-top-menu").slicknav({prependTo:".bigmag-bigmag-top-menu"})}),$("html").lwcLazyLoad({selector:".lazy"});
$(window)["one"]("scroll", z);
function z() {
function isScrolledIntoView(e){var t=$(e),a=$(window),s=a.scrollTop(),n=s+a.height(),r=t.offset().top;return r+t.height()<=n&&s<=r}$(function(){if(interesting_pop){var l=$(".pop-recent");l.append("<h2 class='poph2'>إقرأ ايضاً</h2>"),l.append("<span class='close-pop'><i class='fa-close'/></span>"),$.ajax({type:"GET",url:"/feeds/posts/summary?max-results=3&alt=json-in-script&start-index=5",async:!0,contentType:"application/json",dataType:"jsonp",success:function(e){var t=e.feed.entry;if(t)for(var a=0;a<t.length;a++){for(var s=t[a],n=0;n<e.feed.entry[a].link.length;n++)if("alternate"==e.feed.entry[a].link[n].rel){var r=e.feed.entry[a].link[n].href;break}try{var o=s.media$thumbnail.url}catch(e){o="#"}var i=s.title.$t,p=getauthor(s.author),c=(s.summary.$t.substr(0,300),getmeta(s.published.$t));$('<div class="pop-item"><img class="lazy" data-lazyload="'+o+'"/><h3><a href="'+r+'">'+i+'</a></h3><div class="pop-meta">'+p+" - "+c+"</div></div>").appendTo(l)}}})}}),$(function(){$(window).scroll(function(){isScrolledIntoView(document.querySelector(".bigmag-right-tags"))&&($(".pop-recent").hasClass("hard-active")||$(".pop-recent").addClass("active"))}),$(".close-pop").click(function(){$(".pop-recent").removeClass("active").addClass("hard-active")})});};
    var numPages=5;
    var firstText ='<i class="fa fa-angle-double-right"></i>';
    var lastText ='<i class="fa fa-angle-double-left"></i>';
    var prevText ='<i class="fa fa-angle-right"></i>';
    var nextText ='<i class="fa fa-angle-left"></i>';
    var urlactivepage=location.href;
    var home_page="/";
 function looppagecurrentg(e){var a="";pageNumber=parseInt(numPages/2),pageNumber==numPages-pageNumber&&(numPages=2*pageNumber+1),pageStart=currentPageNo-pageNumber,pageStart<1&&(pageStart=1),lastPageNo=parseInt(e/perPage)+1,lastPageNo-1==e/perPage&&(lastPageNo-=1),pageEnd=pageStart+numPages-1,pageEnd>lastPageNo&&(pageEnd=lastPageNo),a+="<span class='showpageOf'>Page "+currentPageNo+" of "+lastPageNo+"</span>";var t=parseInt(currentPageNo)-1;currentPageNo>1&&(a+="page"==currentPage?'<span class="showpage firstpage"><a href="'+home_page+'">'+firstText+"</a></span>":'<span class="displaypageNum firstpage"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+firstText+"</a></span>"),currentPageNo>2&&(a+=3==currentPageNo?"page"==currentPage?'<span class="showpage"><a href="'+home_page+'">'+prevText+"</a></span>":'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+prevText+"</a></span>":"page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+t+');return false">'+prevText+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+t+');return false">'+prevText+"</a></span>"),pageStart>1&&(a+="page"==currentPage?'<span class="displaypageNum"><a href="'+home_page+'">1</a></span>':'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a></span>'),pageStart>2&&(a+=" ... ");for(var s=pageStart;s<=pageEnd;s++)a+=currentPageNo==s?'<span class="pagecurrent">'+s+"</span>":1==s?"page"==currentPage?'<span class="displaypageNum"><a href="'+home_page+'">1</a></span>':'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a></span>':"page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+s+');return false">'+s+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+s+');return false">'+s+"</a></span>";pageEnd<lastPageNo-1&&(a+=" ... "),pageEnd<lastPageNo&&(a+="page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastPageNo+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastPageNo+"</a></span>");var r=parseInt(currentPageNo)+1;currentPageNo<lastPageNo-1&&(a+="page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+r+');return false">'+nextText+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+r+');return false">'+nextText+"</a></span>"),currentPageNo<lastPageNo&&(a+="page"==currentPage?'<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastText+"</a></span>":'<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastText+"</a></span>");for(var p=document.getElementsByName("pageArea"),n=document.getElementById("blog-pager"),l=0;l<p.length;l++)p[l].innerHTML=a;p&&p.length>0&&(a=""),n&&(n.innerHTML=a)}function totalcountdata(e){var a=e.feed;looppagecurrentg(parseInt(a.openSearch$totalResults.$t,10))}function pagecurrentg(){var e=urlactivepage;-1!=e.indexOf("/search/label/")&&(postLabel=-1!=e.indexOf("?updated-max")?e.substring(e.indexOf("/search/label/")+14,e.indexOf("?updated-max")):e.substring(e.indexOf("/search/label/")+14,e.indexOf("?&max"))),-1==e.indexOf("?q=")&&-1==e.indexOf(".html")&&(-1==e.indexOf("/search/label/")?(currentPage="page",currentPageNo=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata"><\/script>')):(currentPage="label",-1==e.indexOf("&max-results=")&&(perPage=20),currentPageNo=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+postLabel+'?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')))}function redirectpage(e){jsonstart=(e-1)*perPage,noPage=e;var a=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),a.appendChild(t)}function redirectlabel(e){jsonstart=(e-1)*perPage,noPage=e;var a=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.setAttribute("src",home_page+"feeds/posts/summary/-/"+postLabel+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),a.appendChild(t)}function finddatepost(e){post=e.feed.entry[0];var a=post.published.$t.substring(0,19)+post.published.$t.substring(23,29),t=encodeURIComponent(a);if("page"==currentPage)s="/search?updated-max="+t+"&max-results="+perPage+"#PageNo="+noPage;else var s="/search/label/"+postLabel+"?updated-max="+t+"&max-results="+perPage+"#PageNo="+noPage;location.href=s}"undefined"==typeof firstText&&(firstText="First"),"undefined"==typeof lastText&&(lastText="Last");var noPage,currentPage,currentPageNo,postLabel;pagecurrentg();
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
