

(function () {
    function establishRoutes(app) {
        app.post('/register', function (req, res) {
            console.log(req.body.Name);
            res.send('Registration');
        })

        // app.post('/register', userController.register);

        app.post('/login', function (req, res) {
            console.log('Login')
            res.send('Login');
        })
        app.get('/', function (req, res) {
            console.log('user')
            res.send('User');
        })

    }
    exports.establishRoutes = establishRoutes;
})()


// exports.register = (req,res)=> {
        
// }