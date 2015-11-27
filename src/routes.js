module.exports = function(router) {
        router.map({
            '/home': {
                component: require('./components/home/home.vue')
            },
            '/login': {
                component: require('./components/users/login/login.vue')
            },
            'register': {
                component: require('./components/users/register/register.vue')
            },
            'forget': {
                component: require('./components/users/forget/forget.vue')
            }
        });

        router.beforeEach(function () {
            window.scrollTo(0, 0)
        });

        router.redirect({
            '*': '/login'
        })
    };