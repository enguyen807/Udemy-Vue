new Vue({
  el: '#exercise',
  data: {
    classEffect: {
      highlight: false,
      shrink: true
    },
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '100px',
      backgroundColor: 'red'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'blue'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.classEffect.highlight = !vm.classEffect.highlight;
        vm.classEffect.shrink = !vm.classEffect.shrink;
      }, 1000);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
