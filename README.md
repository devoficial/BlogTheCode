# Blog the code
+
## Initial Setup
+ * Create you app.js file and configure express
+ * mongoose , methodOverride, expressSanitizer, bodyParser
+ * Add Home Page that lists all restaurants
+
```javascript
    var express = require("express"),
    app = express(),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");
```
## Connect to mongoose and set viewengine to ejs 
+ * Create Schema for blog
+ * Each blog has following properties
```javascript
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
```
## Setup index route 
+ * and redirect to "/blogs" route
+ * Add in blogs route and fetch all the blogs from DB
+ * create a views directory and add a index.ejs file
+ * Add a form to get new blogs 
+ * Inside the views directory creat a public folder 
+ * Inside public directory add a folder named stylesheet and add a custom stylesheet 
+ * Add header.ejs and footer.ejs file 
+ * Add Navbar
+ * Add in semantic ui framework
+ * style the index page 

## Setup the RESTFUL ROUTES
+ * ADD a get route "/new"
+ * Add new.ejs in views directory
+ * Add in semantic ui framework
+ * style the new page 
+ * add the link in navber as add a new blog
+ * add a post route to to "/blogs"
+ * next add a get route to fetch a newly created blog by id
```javascript
    app.get("/blogs/:id")
```
+ * ADD a get route "/blogs/:id"
+ * Add show.ejs in views directory
+ * Add in semantic ui framework
+ * style the show page 
+ * Add styles  to the container and add two buttons
+ * EDIT AND DELETE
+ * style the show page 


+ * ADD a post route "/blogs/:id"
+ * And redirect it to "/blogs/:id" with new changes 
+ * Add a delete route to get the blog by id and delete it.

# FOLLOW THE RESTFUL ROUTES
+
+ name      url          verb    desc.
+ ===============================================
+ INDEX   /dogs          GET      Display a list of all dogs
+ NEW     /dogs/new      GET      Displays form to make a new dog
+ CREATE  /dogs          POST     Add new dog to DB
+ SHOW    /dogs/:id      GET      Shows info about one dog
+ EDIT    /gogs/:id/edit GET      Shows the edit dog form    
+ UPDATE  /gogs/:id      PUT      Update the edit  dog form    
+ DELETE  /gogs/:id      DELETE   DELETE the dog   

### Have any question email me 
#### [my email](debasisnath85@gmail.com)

