/*!
 * Extensible 1.6.1
 * Copyright(c) Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        "Extensible": "../../src",
        "Extensible.example": ".."
    }
});
Ext.require([
    'Extensible.calendar.data.MemoryEventStore',
    'Extensible.calendar.CalendarPanel',
    'Extensible.example.calendar.data.Events'
]);

Ext.onReady(function () {
    var eventStore = Ext.create('Extensible.calendar.data.MemoryEventStore', {
        // defined in ../data/Events.js
        data: Extensible.example.calendar.data.Events.getData()
    });

    //
    // example 1: simplest possible stand-alone configuration
    //
    Ext.create('Extensible.calendar.CalendarPanel', {
        eventStore: eventStore,
        renderTo: 'simple',
        title: '工作日程',
        width: 350,
        height: 250
    });

    //
    // example 2: shows off some common Ext.Panel configs as well as a
    // few extra CalendarPanel-specific configs + a calendar store
    //

});
