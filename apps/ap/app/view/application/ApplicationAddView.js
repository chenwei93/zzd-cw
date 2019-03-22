Ext.define('AP.view.application.ApplicationAddView', {
    extend: 'Ext.panel.Panel',
    xtype: 'appadd-view',


    requires: [
        'AP.view.application.ApplicationAddViewController',
        'AP.view.application.ApplicationAddResult',
        'AP.view.application.ApplicationAddSearch'
    ],
    controller: 'appadd-view',
    layout: 'card',
    tbar: [{
        tooltip: '自动生成',
        text: '自动生成',
        iconCls: 'x-fa fa-cloud-download',
        handler: 'onAutoCreate'

    }, '-', {
        tooltip: '保存',
        iconCls: 'x-fa fa-save',
        handler: 'onAutoSave'
    }, {
        xtype: 'combo',
        reference: 'select',
        fieldLabel: '视图',
        labelWidth: 40,
        triggerAction: 'all',
        store: {
            data: [{
                name: '查询视图',
                value: 'search'
            }, {
                name: '结果视图',
                value: 'result'
            }]
        },
        displayField: 'name',
        valueField: 'value',
        listeners: {
            select: 'onSelect'

        },
        emptyText: '查询视图'

    }],
    defaults: {
        layout: 'hbox',
    },
    items: [{
        xtype: 'search',
        flex: 1
    }, {
        xtype: 'result',
        flex: 1
    }],
    listeners: {
        render: function () {
            var me = this;
            var record = me.up('application-add').record;
            var ajaxRequest = function (id, items1, item) {
                Ext.Ajax.request({
                    url: '/ap/server/page/' + id,
                    success: function (rs) {
                        item.setValue(rs.responseText);
                        items1.judeValue = rs.responseText;
                        items1.needSrc = '/ext-ui/static/ct.html?id=' + id;
                    }
                })
            };
            if (record != undefined) {
                var panel = me.items.items,
                    view = record.data.views;
                for (var i = 0; i < view.length; i++) {
                    var item = panel[i].items.items[0].items.items[0],
                        items1 = panel[i].items.items[1];
                    if (view[i] != null) {
                        item.useID = view[i].id;
                        ajaxRequest(view[i].id, items1, item);
                    }
                }


            }
        }
    }
});