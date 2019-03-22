Ext.define('AP.view.services.ServicesAddView', {
    extend: 'Ext.panel.Panel',
    xtype: 'services-addview',


    controller: 'services-addview',
    layout: 'column',
    margin: '10 0',
    tbar: [{
        tooltip: '自动生成',
        text: '自动生成',
        iconCls: 'x-fa fa-cloud-download',
        handler: 'onRefresh'
    }, {
        tooltip: '保存',
        iconCls: 'x-fa fa-save',
        handler: 'onSave'
    }, '-', {
        tooltip: '上传',
        iconCls: 'x-fa fa-upload',
        handler: 'onUpload'
    }, {
        tooltip: '下载',
        iconCls: 'x-fa fa-download',
        handler: 'onDownload'
    }, '->', {
        iconCls: 'x-fa fa-refresh',
        tooltip: '更新',
        handler: 'onRefresh'
    }],
    items: [{
        height: 400,
        columnWidth: 0.3,
        header: false,
        title: false,
        xtype: 'grid',
        border: true,
        reference: 'grid',
        scrollable: true,
        listeners: {
            cellclick: 'onCellClick'
        },
        columns: [{
            flex: 1,
            dataIndex: 'title',
            renderer: function (value) {
                return '<img src="resources/fx.png">' + value;
            }
        }]
    }, {
        height: 400,
        columnWidth: 0.7,
        xtype: 'form',
        reference: 'form',
        layout: 'fit',
        border: true,
        trackResetOnLoad: true,
        items: [{
            xtype: 'textarea',
            flex: 1,
            name: 'code',
            triggerWrapCls: 'textarea-border-no',
            fieldStyle: 'font-size: 16px; font-family: "Courier New";'
        }]
    }],
    listeners: {
        render: function () {
            var me = this;
            setTimeout(function () {
                if (me.up('window') != undefined) {
                    if (top._record != undefined) {
                        if (top._record.hasOwnProperty('function')) {
                            if (top._record.function != null) {
                                if (top._record.function.hasOwnProperty('delegateClassName')) {
                                    top._needName = top._record.function.delegateClassName;
                                    var store = {
                                        autoLoad: true,
                                        proxy: {
                                            type: 'ajax',
                                            url: '/ap/server/script/' + top._needName + '/api'
                                        }
                                    };

                                    me.items.items[0].setStore(store);
                                    Ext.Ajax.request({
                                        url: '/ap/server/script/' + top._needName + '/',
                                        success: function (rs) {
                                            me.items.items[1].items.items[0].setValue(rs.responseText);
                                        }
                                    });
                                }
                            }

                        }
                    }
                }
            }, 1000)
        }
    }
});