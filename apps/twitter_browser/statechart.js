TwitterBrowser.statechart = SC.Statechart.create({
    initialState: 'search',

    search: SC.State.extend({
        enterState: function() {
            TwitterBrowser.mainPane = SC.TemplatePane.append({
                layerId: 'twitter_browser',
                templateName: 'twitter_browser'
            });
        }
    })
});
