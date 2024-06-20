const controller = {}
const { where } = require('sequelize');
const models = require('../models');
controller.space = async (req, res, next) => {

	let spaces = await models.Space.findAll({
		attributes: ['id', 'address', 'type', 'format', 'ward']
	});

	res.locals.spaces = spaces;
	res.locals.title = "Spaces"
	res.render('space');
}

controller.surface = async (req, res, next) => {
	let id = req.query.id;

	let surfaces = await models.Surface.findAll({
		where: {
			space: id
		},
		attributes: ['id', 'format', 'width', 'height']
	})

	res.locals.surfaces = surfaces;
	res.locals.title = "Surface " + id;
	res.render('surface');
}

controller.report = async (req, res, next) => {
	let id = req.query.id;

	let reports = await models.Report.findAll({
		where: {
			surface: id
		}
	})

	res.locals.reports = reports;
	res.locals.title = "Report " + id;
	res.render('report');
}

controller.createReport = async (req, res, next) => {
	let { surface, address, long, lat, report_date, content, email, phone, state } = req.body;

	try {
		await models.Report.create({
			surface,
			address,
			long,
			lat,
			report_date,
			content,
			email,
			phone,
			state
		});
		res.send('Success');
	
	  }
	catch (error) {
		res.status(401).send("Failed to create report");
		console.error("Create report error: ", error);
	}
}

module.exports = controller;