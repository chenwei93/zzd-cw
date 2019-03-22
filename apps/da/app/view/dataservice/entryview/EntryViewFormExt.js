Ext.define('DA.view.dataservice.entry.EntryViewFormExt', {
    extend: 'Ext.form.Panel',
    xtype: 'entryview-formext',

    frame: false,
    layout: 'anchor',
    fieldDefaults: {
        msgTarget: 'side'
    },
    defaults: {
        anchor: '100%'
    },
    items: [{
        xtype: 'container',
        layout: 'hbox',
        padding: '0 0 10 0',
        defaults: {
            flex: 1,
            layout: 'form'
        },
        items: [{
            name: 'kflx',
            fieldLabel: '是否向社会公开',
            renderer: function (value) {
                if (value == 'YES') {
                    return '是'
                } else {
                    return '否'
                }
            }
        }, {
            name: 'gxfs',
            fieldLabel: '共享方式'
        }, {
            fieldLabel: '资源形态',
            name: 'format',
            renderer: function (value) {
                if (value == 'Db') {
                    return '数据库'
                } else if (value == 'File') {
                    return '文件'
                } else if (value == 'Hdfs') {
                    return 'HDFS'
                } else {
                    return 'HTTP'
                }
            }
        }]
    }, {
        margin: '0 0 0 0',
        xtype: 'fieldset',
        title: '扩展元数据',
        collapsible: false,
        hidden: true,
        layout: 'hbox',
        defaults: {
            flex: 1,
            xtype: 'container',
            layout: 'form'
        },

    }],
    listeners:{
        render:function () {
            var me = this;
            var entityId = me.up('entry-view').entityId;
            var orgItem = function (data) {
                var keys = Object.keys(data);
                var arr = [], jude = 0, ddd = 0;
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i],
                        items = data[key];
                    if (items.dataTypeAlias == 'ObjectAttribute') {
                        ddd++;
                        jude = 1;
                        var value = "";
                        if (items.dataType == 'Directory') {
                            if (items.hasOwnProperty('value')) {
                                value = items.value.title;
                            } else {
                                value = null;
                            }
                        } else {
                            if (items.hasOwnProperty('value')) {
                                value = items.value;
                            } else {
                                value = null;
                            }
                        }
                        var addItem = {
                            xtype: 'displayfield',
                            name: items.name,
                            fieldLabel: items.title,
                            value: value
                        };
                        arr.push(addItem);
                    }
                }
                var single = [], double = [];
                for (var i = 0; i < arr.length; i++) {
                    if (i % 2 == 0) {
                        single.push(arr[i])
                    } else {
                        double.push(arr[i])
                    }
                }
                var it = [{
                    items: single
                }, {
                    items: double
                }];
                if (jude == 1) {
                    me.items.items[1].add(it);
                    me.items.items[1].setHidden(false);
                }
            };
            Ext.Ajax.request({
                url: '/drdms/api/entryDatas/' + entityId,
                success: function (rs) {
                    var rs = JSON.parse(rs.responseText);
                    var fields = rs.extraAttributes;
                    orgItem(fields);
                }
            });
        }
    }
})
;

