/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.entrydata.EntryDataController', {
    extend: 'Starter.base.ViewController',

    alias: 'controller.entrydata',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    generate: function () {
        var me = this;
        Ext.MessageBox.confirm('确认', '根据新收集的调研表生成资源目录（已生成的资源目录保留）<br/>立即生成?', function (buttonId) {
            if (buttonId != 'ok' && buttonId != 'yes') return;
            Ext.Ajax.request({
                url: '/api/generateAll',

                success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    Ext.toast('成功生成' + obj.count + '条目录');
                    me.reloadStore();
                },

                failure: function (response, opts) {
                    Ext.toast('生成资源目录失败');
                    me.reloadStore();
                }
            });
        }, this);
    },

    onView: function (the, record, item) {
        var id = record.getId();

        this.open({
            record:record,
            xtype: 'entrydata-show',
            viewModel : {
                data: {
                    entrydata: record
                }
            }
        }, '目录详情');
    },

    onReload:function () {

    }

});
