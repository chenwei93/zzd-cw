Ext.define('Cmdb.view.asset.bmzcqd.ZcChooseGx', {
    extend: 'Ext.panel.Panel',
    xtype: 'zc-choosegx',

    layout: 'card',
    defaults: {
        border: false,
        height: 360
    },

    // defaultListenerScope: true,
    tbar: [{
        text: '确认',
        handler: 'onChooseGxSure'
    }, {
        text: '取消',
        handler: 'onChooseGxCancel'
    }],
    items: [
        {
            id: 'card-0',
            items: {
                xtype: 'tagfield',
                displayField: 'name',
                valueField: 'value',
                reference: 'choosePerson',
                emptyText: '选择关系',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '继承', value: 'jc'},
                        {name: '关联', value: 'gl'},
                        {name: '依赖', value: 'yl'}
                    ]
                }

            }
        },
        {
            id: 'card-1',
            scrollable: true,
            bodyPadding: 5,
            items: [{
                tbar: [{
                    reference: 'combo',
                    xtype: 'combo',
                    displayField: 'name',
                    valueField: 'value',

                }],
                xtype: 'treepanel',
                selType: 'checkboxmodel',
                rootVisible: false,
                store: {
                    type: 'tree',
                    autoLoad: true,
                    proxy: {
                        type: 'ajax',
                        url: 'app/store/data/asset/bmzcqd/BmzcqdTree.json',
                        rootProperty: 'children'
                    }
                },
                columns: [{
                    xtype: 'treecolumn',
                    text: '目录项名称',
                    flex: 1,
                    dataIndex: 'text'
                }]
            }]
        }
    ],
    bbar: ['->',
        {
            itemId: 'card-prev',
            text: '上一页',
            handler: 'showPrevious',
            disabled: true
        },
        {
            itemId: 'card-next',
            text: '下一页',
            handler: 'showNext'
        }
    ],

});