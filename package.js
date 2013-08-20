Package.describe({
	summary: "mixpanel analytics repackaged for Meteor"
});

Package.on_use(function (api) {
	api.use('underscore', 'client');
	api.add_files([
		'mixpanel-client.js'
	],'client');
});
