meteor-mixpanel
===============

mixpanel analytics repackaged for Meteor

_current version of the snippet that loads the other script: 1.2_
_current version of the mixpanel script loaded from their CDN: 2.2_

You'll need to call `mixpanel.init('API_KEY_GOES_HERE')` in your app code.

The default mixpanel snippet starts loading the bigger mixpanel script from their CDN immediately, assuming that `mixpanel.init`
will be called immediately after the snippet.  In Meteor, this isn't necessarily the case because this package will load and then a bunch of other things might happen before your app code gets called.

For this reason, I've modified the snippet to only start loading the other script during the init function, so you can feel free to call 
`mixpanel.init` from `Meteor.startup` or anywhere else in your app.
