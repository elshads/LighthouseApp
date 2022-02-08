const config = require("../config.json");
const { db } = require("./config");

const app = require("fastify")({ logger: true, ignoreTrailingSlash: true });
const cors = require("fastify-cors");
const session = require("fastify-secure-session");
const passport = require("fastify-passport");
const LocalStrategy = require("passport-local").Strategy;
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
//const pgSessionStore = require("connect-pg-simple");
//const SessionStore = pgSessionStore(session);

const userService = require("./services/userService");


app.register(cors, {});
app.register(session, {
    key: fs.readFileSync(path.join(__dirname, "secret-key")),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
    },
    // store: new SessionStore({
    //     conString: config.connection,
    //     tableName: 'session'
    // })
});
app.register(passport.initialize());
app.register(passport.secureSession());

passport.use(
    "local",
    new LocalStrategy(function(username, password, done) {
        db.one('SELECT * FROM appuser WHERE username=$1', [username], function(err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'Incorrect username or password.' }); }

            crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, passwordHash) {
                if (err) { return done(err); }
                if (!crypto.timingSafeEqual(user.password_hash, passwordHash)) {
                    return done(null, false, { message: 'Incorrect username or password.' });
                }
                return done(null, user);
            });
        });
    })
);



passport.registerUserSerializer(function(user, done) {
    process.nextTick(function() {
        done(null, { id: user.id, username: user.username });
    });
});

passport.registerUserDeserializer(function(user, done) {
    process.nextTick(function() {
        return done(null, user);
    });
});

app.get(
    "/api/auth/login", {
        preValidation: passport.authenticate("local", {
            authInfo: false
                // successRedirect: "/",
                // failureRedirect: "/api/auth/error",
        })
    },
    async() => 'hello world!'
);

app.post(
    "/api/auth/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/api/auth/error",
    })
);

app.get(
    "/api/auth/error",
    (req, res) => {
        res.send("error page");
    }
);

app.get(
    "/register",
    async(req, res) => {
        let result = await userService.updateUser("elshad@example.mail", "mypassword");
        res.send({ result: result });
    }
);

const port = 3000;
const start = async() => {
    try {
        await app.listen(port, () => {
            console.log(`App running on port ${port} ...`);
        });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();