(function (document, mixpanel) {
    window.mixpanel = mixpanel; 

    var loadScript = function() {
        var script, firstScript;
        script = document.createElement("script");
        script.type = "text/javascript";
        script.async = !0;
        script.src = ("https:" === document.location.protocol ? "https:" : "http:") +
            '//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';
        firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    };

    mixpanel._i = [];

    var createCommands = function(mixpanelTracker) {
        var commands = [
            'disable', 
            'track', 
            'track_pageview', 
            'track_links',
            'track_forms', 
            'register', 
            'register_once', 
            'unregister', 
            'identify', 
            'alias', 
            'name_tag',
            'set_config'
        ];
        var peopleCommands = ['set','increment','track_charge','append'];
        var addCommand = function(tracker,command) {
            tracker[command] = function() {
                var commandArray = [command].concat(_.toArray(arguments));
                tracker.push(commandArray);
            };
        };

        _.each(commands,function(command){
            addCommand(mixpanelTracker,command);
        });

        _.each(peopleCommands,function(command){
            addCommand(mixpanelTracker.people,command);
        });
    };

    mixpanel.init = function(token, config, name) {
        var proxy = mixpanel;

        loadScript();

        if ('undefined' !== typeof name) {
            proxy = mixpanel[name] = [];
            createCommands(proxy); // this was originally run unconditionally
        }
        else
            name = 'mixpanel';
        proxy.people  = proxy.people || [];
        mixpanel._i.push([token, config, name]);
    };

    mixpanel.__SV = 1.2;

    mixpanel.people = [];
    createCommands(mixpanel);

})(document, window.mixpanel || []);