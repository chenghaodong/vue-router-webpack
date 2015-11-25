module.exports = function(router) {
        router.map({
            '/home': {
                component: require('./components/home/home.vue')
            },
            '/login': {
                component: require('./components/user/login.vue')
            }
        });

        router.beforeEach(function () {
            window.scrollTo(0, 0)
        });

        router.redirect({
            '*': '/home'
        })
    };