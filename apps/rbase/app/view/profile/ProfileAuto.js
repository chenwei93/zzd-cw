Ext.define('RBase.view.profile.ProfileAuto', {
    extend: 'Ext.form.Panel',
    xtype: 'profile-auto',

    margin: '20 0 20 0',
    initComponent: function () {
        var me = this;
        me.callParent(arguments);

        var _items = {
            defaults: {
                border: false,
                xtype: 'panel',
                layout: 'anchor',
                padding: '5'
            },
            layout: 'hbox',
            items: [{
                items: [{
                    xtype: 'treepicker',
                    width: 280,
                    minPickerHeight: 200,
                    displayField: 'chi_name',
                    store: Ext.create('Ext.data.TreeStore', {
                        fields: ['chi_name'],
                        root: {
                            name: '领域',
                            expanded: true
                        },
                        proxy: {
                            type: 'ajax',
                            url: 'Tree.json',
                            reader: {
                                type: "json"
                            }
                        }
                    }),
                    name: '综合政务',
                    anchor: '-5'
                }]
            }, {
                items: [{
                    xtype: 'combo',
                    width: 80,
                    queryMode: 'local',
                    triggerAction: 'all',
                    forceSelection: false,
                    editable: false,
                    text: 'title',
                    displayField: 'text',
                    valueField: 'value',
                    emptyText: '映射',
                    store: {
                        fields: ['text', 'value'],
                        data: [
                            {text: '映射', value: 'ys'},
                            {text: '转换', value: 'zh'}
                        ]
                    },
                    anchor: '-5'
                }]
            }, {
                items: [{
                    xtype: 'textfield',
                    width: 160,
                    name: 'sourceValue',
                    emptyText: '请输入......',
                    anchor: '100%'
                }]
            }, {
                items: [{
                    xtype: 'button',
                    width: 80,
                    text: '脚本',
                    handler: function () {
                        Ext.create({
                            xtype: 'window',
                            title: '请输入脚本内容',
                            height: 580,
                            width: 610,
                            scrollable: true,
                            items: [{
                                xtype: 'textarea',
                                width: 580,
                                height: 380,
                                padding: '20 10 20 10'
                            }, {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center'
                                },
                                items: [{
                                    xtype: 'button',
                                    text: '保存',
                                    handler: function () {
                                        var win = this.up('window');
                                        win.close();
                                    },
                                    margin: 10
                                }, {
                                    xtype: 'button',
                                    text: '取消',
                                    handler: function () {
                                        var win = this.up('window');
                                        win.close();
                                    },
                                    margin: 10
                                }]
                            }]
                        }).show();
                    },
                    anchor: '100%'
                }]
            }]
        };
        Ext.Ajax.request({
            url: '/app/data/queryIndexerMapper.json',
            success: function (rs) {
                var arr = JSON.parse(rs.responseText);
                var _length = arr.length;
                var _form = me;
                var n_items;
                //console.log(me);
                for (var i = 0; i < _length; i++) {
                    me.removeAll();
                    me.add(_items);
                    me.getForm().setValues(arr[i]);
                    n_items = me.items.items;
                    _form.add(n_items);
                    //me.removeAll();
                }
                me = _form;
            }
        })
    },

    items: [{
        defaults: {
            border: false,
            xtype: 'panel',
            layout: 'anchor',
            padding: '5'
        },
        layout: 'hbox',
        items: [{
            items: [{
                xtype: 'treepicker',
                width: 280,
                minPickerHeight: 200,
                displayField: 'chi_name',
                store: Ext.create('Ext.data.TreeStore', {
                    fields: ['chi_name'],
                    root: {
                        name: '领域',
                        expanded: true
                    },
                    proxy: {
                        type: 'ajax',
                        url: 'app/view/profile/Tree.json',
                        reader: {
                            type: "json"
                        }
                    }
                }),
                name: '综合政务',
                anchor: '-5'
            }]
        }, {
            items: [{
                xtype: 'combo',
                width: 80,
                queryMode: 'local',
                triggerAction: 'all',
                forceSelection: false,
                editable: false,
                text: 'title',
                displayField: 'text',
                valueField: 'value',
                emptyText: '映射',
                store: {
                    fields: ['text', 'value'],
                    data: [
                        {text: '映射', value: 'ys'},
                        {text: '转换', value: 'zh'}
                    ]
                },
                anchor: '-5'
            }]
        }, {
            items: [{
                xtype: 'textfield',
                width: 160,
                name: 'sourceValue',
                emptyText: '请输入......',
                anchor: '100%'
            }]
        }, {
            items: [{
                xtype: 'button',
                width: 80,
                text: '脚本',
                handler: function () {
                    Ext.create({
                        xtype: 'window',
                        title: '请输入脚本内容',
                        height: 580,
                        width: 610,
                        scrollable: true,
                        modal:true,
                        items: [{
                            xtype: 'textarea',
                            width: 580,
                            height: 380,
                            padding: '20 10 20 10'
                        }, {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [{
                                xtype: 'button',
                                text: '保存',
                                handler: function () {
                                    var win = this.up('window');
                                    win.close();
                                },
                                margin: 10
                            }, {
                                xtype: 'button',
                                text: '取消',
                                handler: function () {
                                    var win = this.up('window');
                                    win.close();
                                },
                                margin: 10
                            }]
                        }]
                    }).show();
                },
                anchor: '100%'
            }]
        }]
    }]

});