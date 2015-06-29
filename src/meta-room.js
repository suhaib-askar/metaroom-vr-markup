import GameObject from './game-object.js'

Polymer({
    is: 'meta-room',

    properties: {
      metaVerse: Object,
      metaObject: Object
    },

    created: function(){
      var boxWidth = 10;
      var texture = THREE.ImageUtils.loadTexture(
        'img/box.png'
      );
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(boxWidth, boxWidth);
      var geometry = new THREE.BoxGeometry(boxWidth, boxWidth, boxWidth);
      var material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0x333333,
        side: THREE.BackSide
      });

      var mesh = new THREE.Mesh(geometry, material);

      this.metaObject = {
        mesh: mesh
      }
    },

    attached: function() {
      this.fire('meta-attached', {
        target: this
      });
    },

    detached: function() {
      this.metaVerse.fire('meta-detached', {
        target: this
      });
    }
});