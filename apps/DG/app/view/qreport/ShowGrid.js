Ext.define('DG.view.qreport.ShowReport', {
    extend: 'Ext.grid.Panel',
    xtype: 'showreport',

    tbar: [
        {
            xtype: 'datefield',
            fieldLabel: '运行时间',
            name: 'startTime'
        }, {
            xtype: 'displayfield',
            value: '-'
        }, {
            xtype: 'datefield',
            name: 'endTime'
        }, '->', {
            xtype: 'combo',
            store: {
                autoLoad: true,
                data: [{
                    name: '全部',
                    value: 'all'
                }, {
                    name: '是',
                    value: 'yes'
                }, {
                    name: '否',
                    value: 'no'
                }]
            },
            displayField: 'name',
            valueField: 'value',
            value: 'all',
            listeners: {
                change: 'onComboChange'
            }
        }],
    columns: [
        {
            xtype: 'rownumberer'
        }, {
            text: '规则名称',
            flex: 1,
            dataIndex: 'rolesName'
        }, {
            text: '信息资源名',
            flex: 1,
            dataIndex: 'entryName'
        }, {
            text: '开始时间',
            flex: 1,
            dataIndex: 'startTime'
        }, {
            text: '结束时间',
            flex: 1,
            dataIndex: 'endTime'
        }, {
            text: '异常数量',
            flex: 1,
            dataIndex: 'errorNumber'
        }],
    plugins: [{
        ptype: 'rowwidget',
        onWidgetAttach: function (plugin, bodyComponent, record) {
            var id = record.get('id');
            var store = {
                autoLoad: true,
                data: record.get('errorItems')
            };
            bodyComponent.setStore(store);
        },
        widget: {
            xtype: 'grid',
            bind: {
                title: '{record.rolesName}的异常列表'
            },
            columns: [{
                xtype: 'rownumberer'
            }, {
                text: '表唯一索引',
                flex: 1,
                dataIndex: 'tableId',
            }, {
                text: '字段',
                flex: 1,
                dataIndex: 'dataSet',
            }, {
                text: '数据值',
                dataIndex: 'dataValue',
                flex: 1,
            }, {
                text: '异常描述',
                dataIndex: 'errorDes',
                flex: 1,
            }],
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                store: this.store
            }
        }
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    },
    listeners: {
        render: 'onShowGridRender'
    }
});
