/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.resource.ResourceAddController', {
    extend: 'RBase.base.ViewController',
    alias: 'controller.resource-add',

    onSave: function (btn) {
        var win = btn.up('window'),
            store = win.gridView.getStore(),
            title = this.lookup('title').getValue(),
            name =  this.lookup('name').getValue(),
            rPool = this.lookup('rPool').getSelection(),
            fieldsGrid = this.lookup('fields_grid'),
            gStore = fieldsGrid.getStore(),
            fieldsData = gStore.data.items;

        if (title == '' && rPool == null) {
            Ext.toast('标题和资源池不可为空')
        } else if (title == '' && rPool != null) {
            Ext.toast('标题不可为空')
        } else if (title != '' && rPool == null) {
            Ext.toast('资源池不可为空')
        } else if (title != '' && rPool != null) {
            var submit = {
                title: title,
                locator: {
                    poolCode: rPool.get('code'),
                    path: rPool.get('base'),
                    name:name
                },
                description:{
                    name:name
                }
            };

            var submitData = [];
            Ext.Array.each(fieldsData, (item) => {
                item.data._class = "dcsp.fl.common.Field";
                submitData.push(item.data)
            });
            submit.metadata = {
                fields: {
                    _class: "dcsp.fl.common.Fields",
                    items: submitData
                }
            };

            Ext.Msg.confirm('提示', '确定保存？', function (chooce) {
                if (chooce == 'yes') {
                    Ext.Ajax.request({
                        url: '/rbase/api/resources',
                        jsonData: submit,
                        method: 'POST',
                        success: function () {
                            Ext.toast('保存成功，刷新列表');
                            store.reload();
                            win.close();
                        }
                    })
                }
            })
        }


    },

    onCancel: function (btn) {
        var win = btn.up('window');
        Ext.Msg.confirm('提示', '确定取消保存?', function (chooce) {
            if (chooce == 'yes') {
                win.close();
            }
        });
    },
    onFieldsAdd: function (btn) {
        var view = btn.up('grid');
        view.store.insert(0, {
            name: '',
            title: '',
            dataLength: '',
            notNull: '',
            dataType: '',

        });
    },
    onFieldsDelete: function (view, row, col, btn, a, record, tr) {
        view.getStore().removeAt(row);
    }
});
