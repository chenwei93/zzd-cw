Ext.define('AP.view.application.ApplicationAddViewController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.appadd-view',

    onSelect: function () {
        var value = this.getView().lookup('select').getValue(), index = 0;
        if (value == 'result') {
            index = 1;
        } else if (value == 'search') {
            index = 0;
        }
        this.getView().getLayout().setActiveItem(index);
    },

    onAutoCreate: function () {
        var me = this;
        var panel = me.getView().items,
            query = panel.items[0].items.items[0],
            result = panel.items[1].items.items[0],
            queryView = panel.items[0].items.items[1],
            resultView = panel.items[1].items.items[1],
            type = me.getView().lookup('select').getValue(),
            length = me.getView().up('application-add').lookup('service').getStore().data.items.length;
        if (length == 0) {
            var msg = '至少选择一项服务';
            me.haveChooseService(msg);
        } else {
            var server = me.getView().up('application-add').lookup('service').store.data.items[0].data.id;
            Ext.Ajax.request({
                url: '/ap/server/page?serviceId=' + server,
                method: 'POST',
                success: function (rs) {
                    var responseText = JSON.parse(rs.responseText);
                    top._queryResult = responseText;
                    for (var i = 0; i < Object.keys(responseText).length; i++) {
                        var a = Object.keys(responseText)[i];
                        var id = responseText[a];
                        if (a == 'Query') {
                            var needPanel = query,
                                needPanelView = queryView;
                        } else {
                            var needPanel = result,
                                needPanelView = resultView;
                        }
                        me.extAjax(needPanel, needPanelView, a, id);
                    }
                }
            });
        }
    },
    extAjax: function (panel, needPanelView, a, id) {
        Ext.Ajax.request({
            url: '/ap/server/page/' + id,
            success: function (rs) {
                var add = {
                    needId: id
                };
                Object.assign(panel, add);
                panel.items.items[0].setValue(rs.responseText);
                needPanelView.judeValue = rs.responseText;
                needPanelView.needSrc = '/ext-ui/static/ct.html?type=' + a + '&id=' + id;
            }
        })
    },
    onAutoSave: function () {
        var me = this;
        var panel = me.getView().getLayout().getActiveItem();
        var arr = panel.items.items[0].items.items[0].getValue(),
            panelView = panel.items.items[1],
            type = me.getView().lookup('select').getValue();
        var putAjax = function (id) {
            Ext.Ajax.request({
                url: '/ap/server/page/' + id,
                headers: {
                    'Content-Type': "text/plain"
                },
                params: arr,
                method: 'PUT',
                success: function (rs) {
                    Ext.toast('保存成功');
                    panelView.judeValue = arr;

                }
            });
        };
        var useId = panel.items.items[0].items.items[0].useID;
        if (type == 'query' || type == null) {
            type = 'Query'
        } else {
            type = 'Result'
        }
        if (top._queryResult == undefined && useId == undefined) {
            var msg = '当前未生成视图';
            me.haveChooseService(msg);
        } else {
            if (useId != undefined) {
                putAjax(useId)
            } else {
                var id = top._queryResult[type];
                putAjax(id);
            }
        }
    },
    haveChooseService: function (msg) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定'}
        })
    },
    onTabChange: function (tabpanel, item, preitem) {
        if (item.title == '预览') {
            var src = item.needSrc,
                value = preitem.items.items[0].value;
            if (value != item.judeValue && item.judeValue != undefined) {
                this.haveChooseService('已有改动，请先保存。');
                tabpanel.setActiveTab(preitem);
            } else {
                if (src != undefined) {
                    item.getFrame().src = src;
                }
            }
        }
    }
});