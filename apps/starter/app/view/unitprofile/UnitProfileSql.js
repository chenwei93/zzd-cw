Ext.define('Starter.view.unitprofile.UnitProfileSql', {
    extend: 'Ext.grid.property.Grid',
    xtype: 'unitprofile-sql',

    tbar: [{
        xtype: 'panel',
        items: [{
            xtype: 'button',
            text: '保存',
            handler: function () {
                var items = this.up('propertygrid').getStore().data.items,
                    id = this.up('propertygrid').record.id,
                    arr = [], arry = {}, arrz = [];
                for (var i in items) {
                    arr.push(items[i].data)
                }
                for (var j in arr) {
                    arry[arr[j].name] = arr[j].value;
                }
                Ext.Ajax.request({
                    url: '/rest/unitProfiles/' + id,
                    submitEmptyText:false,
                    method: 'PUT',
                    params: arry
                });

            }
        }]

    }],

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        var record = this.record.data.defaults.Db.items,
            demo = {},sC = {};
        for (var i in record) {
            demo[record[i].name] = record[i].value == null ? '' :  record[i].value ;
            sC[record[i].name] = {
                displayName: record[i].title,
                editor: {
                    xtype: 'textfield',
                    emptyText: record[i].defaultValue
                }
            };
        }
        me.setSource(demo);
        me.sourceConfig = sC;

    }
});