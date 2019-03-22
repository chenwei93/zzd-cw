Ext.define('DA.view.dataservice.entry.EntryEditFormExt', {
    extend: 'Ext.form.Panel',
    xtype: 'entryedit-formext',

    frame: false,
    layout: 'anchor',
    fieldDefaults: {
        msgTarget: 'side'
    },
    defaults: {
        anchor: '100%'
    },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            padding: '0 0 10 0',
            defaults: {
                flex: 1,
                layout: 'form'
            },
            items: [{
                xtype: 'combo',
                name: 'KFLX',
                store: {
                    autoLoad: true,
                    proxy: {
                        type: 'ajax',
                        url: '/base/api/codes/KFLX',
                        reader: {
                            rootProperty: 'array'
                        }
                    }
                },
                fieldLabel: '开放类型',
                displayField: 'title',
                valueField: 'code'
            }, {
                xtype: 'combo',
                name: 'GXFS',
                fieldLabel: '共享方式',
                store: {
                    autoLoad: true,
                    proxy: {
                        type: 'ajax',
                        url: '/base/api/codes/GXFS',
                        reader: {
                            rootProperty: 'array'
                        }
                    }
                },
                displayField: 'title',
                valueField: 'code'
            }
            ]
        },
        {
            xtype: 'radiogroup',
            fieldLabel: '资源形态',
            cls: 'x-check-group-alt',
            name: 'ContentType'
        },
        {
            xtype: 'fieldset',
            title: '扩展元数据',
            hidden: true,
            collapsible: false,
            reference: 'extendedmsg',
            layout: 'hbox',
            defaults: {
                flex: 1,
                xtype: 'container',
                layout: 'form'
            },
        }
    ],
    listeners: {
        render: function () {
            var me = this;
            var format = me.items.items[1];
            Ext.Ajax.request({
                url: '/base/api/codes/ContentType',
                success: function (rs) {
                    var data = JSON.parse(rs.responseText);
                    var items = [];
                    for (var i = 0; i < data.length; i++) {
                        var a = data[i];
                        if (a.code != 'UnKnown') {
                            var b = {
                                boxLabel: a.title,
                                inputValue: a.code
                            };
                            items.push(b);
                        }
                    }
                    format.add(items)
                }
            });


            var orgItem = function (data) {
                var keys = Object.keys(data);
                var arr = [], jude = 0;
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i],
                        items = data[key];
                    if (items.dataTypeAlias == 'ObjectAttribute') {
                        jude = 1;
                        var _value;
                        if (items.hasOwnProperty('value')) {
                            _value = items.value;
                        } else {
                            _value = null;
                        }
                        var dictionaryValue;
                        if (items.hasOwnProperty('value')) {
                            dictionaryValue = items.value.title;
                        } else {
                            dictionaryValue = null;
                        }
                        if (items.dataType == 'Directory') {
                            if (items.hasOwnProperty('attributes')) {
                                if (items.attributes.hasOwnProperty('valueRangeReference')) {
                                    var code = items.attributes.valueRangeReference
                                }
                            } else {
                                var code = items.name;
                            }
                            var addItem = {
                                xtype: 'combo',
                                name: items.name,
                                store: {
                                    autoLoad: true,
                                    proxy: {
                                        type: 'ajax',
                                        url: '/base/api/codes/' + code,
                                        reader: {
                                            rootProperty: 'array'
                                        }
                                    }
                                },
                                fieldLabel: items.title,
                                displayField: 'title',
                                valueField: 'code',
                                value: dictionaryValue
                            };
                        } else {
                            var addItem = {
                                xtype: 'textfield',
                                name: items.name,
                                fieldLabel: items.title,
                                value: _value
                            };
                        }
                        if (addItem != undefined) {
                            arr.push(addItem);
                        }
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
                    me.items.items[2].add(it);
                    me.items.items[2].setHidden(false);

                }
            };
            var _id = me.up('entry-edit').entityId;
            if (_id != undefined) {
                Ext.Ajax.request({
                    url: '/drdms/api/entryDatas/' + _id,
                    success: function (rs) {
                        var _rs = JSON.parse(rs.responseText),
                            kflx, gxfs, ContentType;
                        if (_rs.hasOwnProperty('kflx')) {
                            if (_rs.kflx.hasOwnProperty('title')) {
                                kflx = _rs.kflx.title;
                            }
                        }
                        if (_rs.hasOwnProperty('gxfs')) {
                            if (_rs.gxfs.hasOwnProperty('title')) {
                                gxfs = _rs.gxfs.title;
                            }
                        }
                        if (_rs.hasOwnProperty('contentType')) {
                            ContentType = _rs.contentType;
                            var formatItem = format.items.items;
                            for (var i = 0; i < formatItem.length; i++) {
                                if (formatItem[i].inputValue == ContentType) {
                                    formatItem[i].setValue(true);
                                }
                            }
                        }
                        var data = {
                            KFLX: kflx,
                            GXFS: gxfs,
                        };
                        me.getForm().setValues(data);
                        var fields = _rs.extraAttributes;
                        orgItem(fields);
                    }
                });
            } else {
                Ext.Ajax.request({
                    url: '/drdms/api/entryNew',
                    success: function (rs) {
                        var data = JSON.parse(rs.responseText);
                        var field = me.up('entryedit-panelwizard').items.items[0].items.items[2];
                        field.setValue(data.resId);
                        if (data.hasOwnProperty('extraAttributes')) {
                            if (data.extraAttributes != null) {
                                orgItem(data.extraAttributes);
                            }
                        }
                    }
                })
            }
        }
    }
});
