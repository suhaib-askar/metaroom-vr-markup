!function e(t,r,n){function i(s,o){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!o&&c)return c(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[s]={exports:{}};t[s][0].call(f.exports,function(e){var r=t[s][1][e];return i(r?r:e)},f,f.exports,e,t,r,n)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={created:function(){var e=20,t=20,r=THREE.ImageUtils.loadTexture("img/box.png");r.wrapS=THREE.RepeatWrapping,r.wrapT=THREE.RepeatWrapping,r.repeat.set(e,t);var n=new THREE.PlaneGeometry(t,e,1,1),i=new THREE.MeshBasicMaterial({map:r,color:16777215,side:THREE.DoubleSide}),a=new THREE.Mesh(n,i);this.metaObject={mesh:a}}};r["default"]=n,t.exports=r["default"]},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={properties:{metaVerse:Object,metaObject:Object},attached:function(){this.update(),this.fire("meta-attached",{target:this})},detached:function(){this.metaVerse.fire("meta-detached",{target:this})}};r["default"]=n,t.exports=r["default"]},{}],3:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(){function t(){r.controls.update(),r.manager.render(r.scene,r.camera),requestAnimationFrame(t)}n(this,e);var r=this;this.metaObjects=new Map,this.renderer=new THREE.WebGLRenderer({antialias:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.domElement.id="hpml-webgl-canvas",this.scene=new THREE.Scene,this.scene.fog=new THREE.FogExp2(16777113,.0075),this.camera=new THREE.PerspectiveCamera(75,this.getWidth()/this.getHeight(),.3,1e4),this.controls=new THREE.VRControls(this.camera),this.effect=new THREE.VREffect(this.renderer),this.effect.setSize(this.getWidth(),this.getHeight()),this.manager=new WebVRManager(this.renderer,this.effect,{hideButton:!1}),this.clock=new THREE.Clock(!0),this.clock.start(),t()}return i(e,[{key:"getWidth",value:function(){return window.innerWidth}},{key:"getHeight",value:function(){return window.innerHeight}},{key:"add",value:function(e){this.scene.add(e.mesh),this.metaObjects.set(e.mesh.uuid,e)}},{key:"remove",value:function(e){this.scene.remove(e.mesh),this.metaObjects["delete"](e.mesh.uuid)}}]),e}();r["default"]=a,t.exports=r["default"]},{}],4:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=e("./game-object.js"),a=n(i),s=e("./fire-meta-events-behavior.js"),o=n(s),c=e("./create-base-wall-behavior.js"),u=n(c),f={};f.GameObject=a["default"],f.fireMetaEventsBehavior=o["default"],f.createBaseWallBehavior=u["default"],window.MRM=f},{"./create-base-wall-behavior.js":1,"./fire-meta-events-behavior.js":2,"./game-object.js":3}]},{},[4]);