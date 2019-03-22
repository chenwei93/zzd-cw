Ext.define('DA.view.entry.roleconf.ChooseEntry', {
    extend: 'Ext.grid.Panel',
    xtype: 'choose-entry',


    requires: [
        // 'DG.model.Resource'
    ],
    store: {},
    tbar: ['->', {
        xtype: 'combo',
        fieldLabel: '选择资源主机',
        store: {
            autoLoad: true,
            proxy: {
                type: 'ajax2',
                needDG: false,
                url: '/rbase/api/resourceNodes'
            }
        },
        displayField: 'title',
        valueField: 'id',
        listeners: {
            change: 'rNodeChange'
        }
    }, {
        xtype: 'combo',
        fieldLabel: '选择资源池',
        reference: 'rPool',
        displayField: 'name',
        valueField: 'code',
        listeners: {
            change: 'rPoolChange'
        }
    }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '标题',
        dataIndex: 'title',
        flex: 2,
    }, {
        text: '资源池编码',
        dataIndex: 'poolCode'
    }, {
        text: '资源格式',
        dataIndex: 'format'
    }, {
        text: '版本',
        dataIndex: 'version'
    }, {
        text: '文件名/表名',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: '路径/库名',
        flex: 1,
        dataIndex: 'path'
    }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    },
    listeners: {
        rowdblclick: 'onRowDbClick'
    }
});
