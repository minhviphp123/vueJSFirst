var vueInstance = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        handleClick: function (e) {
            this.counter++;
        }
    }
});

console.log(vueInstance);
