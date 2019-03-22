/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.resource.ResourceEditController', {
    extend: 'RBase.base.ViewController',

    alias: 'controller.resource-edit',

    onSave: function (btn) {
        var win = btn.up('window'),
            record = win.record,
            store = win.gridView.getStore(),
            vLocal = this.lookup('rPool').getSelection(),
            baseName = this.lookup('name').getValue(),
            fieldsGrid = this.lookup('fields_grid'),
            gStore = fieldsGrid.getStore(),
            fieldsData = gStore.data.items;

        Ext.Msg.confirm('提示', '确定保存更改？', function (chooce) {
            if (chooce == 'yes') {
                record.commit();
                var rData = record.data,
                    data = {
                        title: rData.title
                    };
                data.locator = {
                    name: baseName,
                    path: vLocal.get('base'),
                    poolCode: vLocal.get('code')
                };
                var submitData = [], items = [];
                Ext.Array.each(fieldsData, (item) => {
                    if (item.data.hasOwnProperty('name')) {
                        item.data._class = "dcsp.fl.common.Field";
                        submitData.push(item.data);
                    }
                });
                if (submitData.length > 0) {
                    items = submitData;
                } else {
                    if (rData.metadata) {
                        if (rData.metadata.fields) {
                            if (rData.metadata.fields.items) {
                                items = rData.metadata.fields.items;
                            }
                        }
                    }
                }
                data.metadata = {
                    fields: {
                        _class: "dcsp.fl.common.Fields",
                        items: items
                    }
                };
                Ext.Ajax.request({
                    url: '/rbase/api/resources/' + record.get('id'),
                    jsonData: data,
                    method: 'PUT',
                    success: function () {
                        Ext.toast('保存成功，刷新列表');
                        store.reload();
                        win.close();
                    }
                });
            }
        })
    },
    onCancel: function () {
        var win = this.getView().up('window');
        Ext.MessageBox.confirm('提示', '确定取消更改？', function (chooce) {
            if (chooce == 'yes') {
                win.close();
            }
        })
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
