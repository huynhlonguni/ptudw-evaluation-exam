const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressHbs = require('express-handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/html"));

app.engine('hbs', expressHbs.engine({
	layoutsDir: __dirname + "/views/layouts",
	partialsDir: __dirname + "/views/partials",
	extname: "hbs",
	defaultLayout: "layout",
	runtimeOptions: {
		allowProtoPropertiesByDefault: true,
	},
	helpers: {
	}
}))
app.set('view engine', "hbs");

app.use("/", require("./routes/spaceRouter"));

app.listen(port, () => console.log(`Example app listen on port ${port}`))
