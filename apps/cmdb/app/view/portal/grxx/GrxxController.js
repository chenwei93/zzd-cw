Ext.define('Cmdb.view.portal.grxx.GrxxController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.grxx',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
        vm.getStore('list').filterBy(function (record) {
            if (record.get('code') == Ext.app.ViewController.LOGIN_USER.name) {
                return true
            } else {
                return false
            }
        })
    },
    onEdit: function (tr, td, view, a, index, record) {
        this.open({
            xtype: 'grxx-edit',
            record: record,
            viewModel: {
                data: {
                    grxx: record
                }
            }
        }, {
            width: 600,
            height: 400,
            title: '编辑'
        })
    },
    onShow: function (tr, td, view, a, index, record) {
        this.open({
            xtype: 'grxx-show',
            record: record,
            viewModel: {
                data: {
                    grxx: record
                }
            }
        }, {
            width: 600,
            height: 400,
            title: '查看'
        })
    },
    onSure: function (btn) {
        btn.up('grxx-edit').record.commit();
        btn.up('window').close()
    },
    onCancel: function (btn) {
        btn.up('window').close()
    }
});