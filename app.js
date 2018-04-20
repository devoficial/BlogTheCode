// configuring the modules
var express = require("express"),
    app = express(),
    expressSanitizer = require("express-sanitizer"),
    // request    = require("request"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

// APP Config
// Set up of the DB and view engine and body-parser
mongoose.connect(process.env.DATABASE_URl);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());

// Configuring the blog's schema
var Schema = mongoose.Schema;
var newBlog = new Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

//Mongoose/Model CONFIG
var Blog = mongoose.model("Blog", newBlog);

//Routes
app.get("/", function(req, res) {
    res.redirect("/blogs")
})
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log("Someting went wrong");
            console.log(err);
        }
        else {
            //   console.log(blogs);
            res.render("index", { allbolgs: blogs });
        }
    })
});
// NEW ROUTE
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, data) {
        if (err) {
            console.log("There is something wrong in the DB");
            // res.render("new")
        }
        else {
            res.redirect("/blogs");
        }
    });
});

app.get("/blogs/:id", function(req, res) {
    var id = req.params.id;
    Blog.findById(id, function(err, showBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("show", { blog: showBlog });
            //   console.log(showBlog);
        }
    });

});
//Edit route

app.get("/blogs/:id/edit", function(req, res) {

    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("edit", { blog: foundBlog });
        }
    });

});

//UPDATE route
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE route
app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err, deleted) {
        if (err) {
            res.redirect("/blogs/" + req.params.id);
        }
        else {
            res.redirect("/blogs");
        }
    });
});


//Setting up the server 
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started");
});
