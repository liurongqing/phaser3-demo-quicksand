!function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=r,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"GameScene",function(){return n}),r.d(a,"PreloadScene",function(){return i});var n="game",i="preload";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(o){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,r,n,i=h(o);return t=a?(e=h(this).constructor,Reflect.construct(i,arguments,e)):i.apply(this,arguments),r=this,!(n=t)||"object"!==s(n)&&"function"!=typeof n?f(r):n}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,Phaser.Scene);var e,t,r,i=l(o);function o(){var e,t,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),e=i.call(this,a.PreloadScene),t=f(e),n=void 0,(r="cursors")in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,e}return e=o,(t=[{key:"preload",value:function(){this.load.image("sky","assets/images/sky.png"),this.load.image("platform","assets/images/platform.png"),this.load.image("platform200","assets/images/platform200.png"),this.load.image("platform-quicksand","assets/images/platform_quicksand.jpg"),this.load.spritesheet("dude","assets/images/dude.png",{frameWidth:32,frameHeight:48})}},{key:"create",value:function(){this.scene.start(a.GameScene)}},{key:"update",value:function(){}}])&&c(e.prototype,t),r&&c(e,r),o}();function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(){function o(e,t,r,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),p(this,"display",void 0),p(this,"touchingPlayer",void 0),this.display=e.add.rectangle(t,r,n,i,0,0).setOrigin(0,1),e.physics.add.existing(this.display,!0)}var e,t,r;return e=o,(t=[{key:"handleCollidePlayer",value:function(e,t){this.touchingPlayer||(this.touchingPlayer=t,this.touchingPlayer.setBounce(0))}},{key:"changeCollisionBoxBy",value:function(e){var t=this.display.body;0<e&&t.height>=this.display.height||e<0&&t.height<=0||(t.setSize(t.width,t.height+e),t.setOffset(0,this.display.height-t.height),this.touchingPlayer&&(this.touchingPlayer.y-=e))}},{key:"update",value:function(){var e,t,r,n,i,o,a,s;this.touchingPlayer&&(e=-.5,t=this.display.getBounds(),r=this.touchingPlayer.getBounds(),n=Phaser.Geom.Rectangle.Overlaps(t,r),i=!this.touchingPlayer.body.touching.none,o=!this.touchingPlayer.body.wasTouching.none,a=this.touchingPlayer.body.velocity.y<0||10<this.touchingPlayer.body.velocity.y,n&&a&&(e=.5),this.changeCollisionBoxBy(e),this.touchingPlayer.body.velocity.y<-100&&this.touchingPlayer.setVelocityY(-100),n||i||o||(this.touchingPlayer=void 0,s=this.display.body,this.changeCollisionBoxBy(this.display.height-s.height)))}}])&&y(e.prototype,t),r&&y(e,r),o}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(o){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,r,n,i=O(o);return t=a?(e=O(this).constructor,Reflect.construct(i,arguments,e)):i.apply(this,arguments),r=this,!(n=t)||"object"!==g(n)&&"function"!=typeof n?P(r):n}}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S="dude",k=[o,function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,Phaser.Scene);var e,t,r,n=v(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),w(P(e=n.call(this,a.GameScene)),"cursors",void 0),w(P(e),"player",void 0),w(P(e),"quicksands",[]),e}return e=i,(t=[{key:"create",value:function(){var e=this.scale,t=e.width,r=e.height;this.add.image(.5*t,.5*r,"sky");var n=new d(this,400,r,100,96),i=new d(this,100,r,100,96);this.add.image(400,this.scale.height,"platform-quicksand").setScale(1,3).setOrigin(0,1),this.add.image(100,this.scale.height,"platform-quicksand").setScale(1,3).setOrigin(0,1);var o=this.createPlatforms();this.player=this.createPlayer(),this.physics.add.collider(this.player,o),this.physics.add.collider(n.display,this.player,n.handleCollidePlayer,null,n),this.physics.add.collider(i.display,this.player,i.handleCollidePlayer,null,i),this.quicksands.push(n),this.quicksands.push(i),this.cursors=this.input.keyboard.createCursorKeys()}},{key:"update",value:function(){this.quicksands.forEach(function(e){return e.update()}),this.cursors.left.isDown?(this.player.setVelocityX(-160),this.player.anims.play("left",!0)):this.cursors.right.isDown?(this.player.setVelocityX(160),this.player.anims.play("right",!0)):(this.player.setVelocityX(0),this.player.anims.play("turn")),this.cursors.up.isDown&&this.player.body.touching.down&&this.player.setVelocityY(-300)}},{key:"createPlayer",value:function(){var e=this.physics.add.sprite(100,450,S);return e.setBounce(.2),e.setCollideWorldBounds(!0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers(S,{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:S,frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers(S,{start:5,end:8}),frameRate:10,repeat:-1}),e}},{key:"createPlatforms",value:function(){var e=this.physics.add.staticGroup();return e.create(-300,this.scale.height,"platform").setScale(1,3).setOrigin(0,1).refreshBody(),e.create(200,this.scale.height,"platform200").setOrigin(0,1).refreshBody(),e.create(500,this.scale.height,"platform").setScale(1,3).setOrigin(0,1).refreshBody(),e}}])&&b(e.prototype,t),r&&b(e,r),i}()],j={type:Phaser.AUTO,scale:{mode:Phaser.Scale.NONE,autoCenter:Phaser.Scale.CENTER_BOTH,parent:"root",width:800,height:600},physics:{default:"arcade",arcade:{debug:!0,gravity:{y:300}}},scene:k};t.default=new Phaser.Game(j)}]);