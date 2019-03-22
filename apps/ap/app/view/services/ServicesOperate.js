Ext.define('AP.view.services.ServicesOperate', {
    extend: 'Ext.panel.Panel',
    xtype: 'services-operate',


    requires: [
        'AP.model.Service',
        'AP.view.services.ServicesOperateChooseModel',
        'AP.view.services.ServicesOperateChoose',
        'AP.view.services.ServicesOperateGrid',
        'AP.view.services.ServicesOperateSelect',
        'AP.view.services.ServicesView',
        'AP.view.services.ServicesOperateController'
    ],

    controller: 'services-operate',
    layout: 'column',
    margin: '20 0',
    items: [{
        columnWidth: 0.3,
        margin: '0 15 0 0',
        height: 300,
        border: true,
        reference: 'select',
        xtype: 'services-select'
    }, {
        columnWidth: 0.7,
        border: true,
        height: 300,
        reference: 'grid',
        xtype: 'services-grid'
    }],
    listeners: {
        render: function () {
            var me = this;
            var id = me.up('services').needId;
            if (id != undefined) {
                Ext.Ajax.request({
                        url: '/ap/api/services/' + id,
                        success: function (rs) {
                            var responseText = JSON.parse(rs.responseText),
                                data = "";
                            top._record = responseText;
                            if (responseText.hasOwnProperty('configuration')) {
                                if (responseText.configuration.hasOwnProperty('value')) {
                                    data = JSON.parse(responseText.configuration.value);
                                    top._arrData = [];
                                    for (var i = 0; i < data.length; i++) {
                                        var arr = {};
                                        arr[data[i].qname] = data[i];
                                        top._arrData.push(arr);
                                    }
                                }
                            }
                            var refs = responseText.configuration.attributes.refs,
                                arrRefs = [], arrList = [], jude = 1;
                            var arrSplice = function (string) {
                                var returns = string.substring(string.indexOf('(') + 1, string.indexOf(')"')),
                                    nextString = string.substring(string.indexOf(')"') + 1, string.length),
                                    sItem1 = returns.substring(0, returns.indexOf(',')),
                                    sItem2 = returns.substring(returns.indexOf(',') + 1, returns.length);
                                var pushArr = function (item) {
                                    for (var i = 0; i < arrList.length; i++) {
                                        if (arrList[i] == item) {
                                            jude = 0
                                        }
                                    }
                                    if (jude == 1) {
                                        arrList.push(item);
                                    }
                                };
                                pushArr(sItem1);
                                pushArr(sItem2);
                                if (nextString.indexOf("(") > 0) {
                                    arrSplice(nextString);
                                }
                                arrRefs.push(returns);
                                return arrList
                            };
                            var list = arrSplice(refs);
                            var editorStore = [], comList = [];
                            for (var j = 0; j < list.length; j++) {
                                var obj = {
                                    name: list[j],
                                    value: list[j]
                                };
                                var index = list[j].indexOf(':');
                                index = list[j].indexOf(':', index + 1);
                                var xxString = list[j].substring(0, index);
                                var objC = {
                                    id: xxString,
                                    col: list[j],
                                    name: list[j],
                                    value: list[j]
                                };
                                editorStore.push(obj);
                                comList.push(objC);
                            }
                            var setEditorStore = function () {
                                var editor = {
                                    xtype: 'combo',
                                    typeAhead: true,
                                    triggerAction: 'all',
                                    store: {
                                        data: editorStore
                                    },
                                    displayField: 'name',
                                    valueField: 'value',
                                    createNewOnEnter: true,
                                    createNewOnBlur: true,
                                    filterPickList: true,
                                    queryMode: 'local',
                                    publishes: 'value'
                                };
                                me.lookup('grid').columns[6].setEditor(editor);
                            };
                            setEditorStore();
                            top._listData = editorStore;
                            top._comboList = comList;
                            if (data != "") {
                                var store = {
                                    autoLoad: true,
                                    data: data
                                };
                                me.items.items[0].setStore(store);
                            }
                        }
                    }
                )
            }
        }
    }
})
;