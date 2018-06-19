new Vue({
        el: '#exercise',
        data: {
            value: '',
            value2: ''
        },
        methods: {
            alertBox1: function (event) {
              alert('Hello World')
            },
            saveData: function (event) {
              this.value = event.target.value
            },
            saveData2: function (event) {
              this.value2 = event.target.value
            }
        }
    });
