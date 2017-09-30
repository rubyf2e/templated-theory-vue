var f2eURL    = 'http://localhost/~ruby/php/f2e/vue/'
var apiURL    = 'http://localhost:3000/vue/'
var oneApiURL = 'http://localhost/~ruby/php/wordpress/wp-json/wp/v2/'

/**
 * Actual header
 */

 var header = new Vue({

    el: '#header',
    data: {
        value: 'test'
    },
    created: function() {
        this.fetchData()
    },

    methods: {
        fetchData: function() {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL + "header")
            xhr.onload = function() {
                self.value = JSON.parse(xhr.responseText)
            }
            xhr.send();

        }
    }
}),

 mediaTitle = new Vue({

    el: '#mediaTitle',

    data: {
        value: 'test'
    },

    created: function() {
        this.fetchData()
    },

    methods: {
        fetchData: function() {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL + "mediaTitle")
            xhr.onload = function() {
                self.value = JSON.parse(xhr.responseText)
            }
            xhr.send()
        }
    }
}),

 banner = new Vue({

    el: '#banner',

    data: {
        value: 'test'
    },

    created: function() {
        this.fetchData()
    },

    methods: {
        fetchData: function() {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL + "headerTitle")
            xhr.onload = function() {
                self.value = JSON.parse(xhr.responseText)
            }
            xhr.send()
        }
    }
}),
 one = new Vue({

    el: '#one',

    data: {
        value: 'test'
    },

    created: function() {
        this.fetchData()
    },

    methods: {
        fetchData: function() {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', oneApiURL + "posts")
            xhr.onload = function() {
                var response = JSON.parse(xhr.responseText)
                var value    = []
                for (var i = 0; i < response.length; i++) {
                    value.push(
                    { 
                        h3: response[i].title.rendered,
                        p: response[i].content.rendered,
                        href : response[i].link 
                    }
                    );
                }
                self.value = value

            }
            xhr.send()
        }
    }
})