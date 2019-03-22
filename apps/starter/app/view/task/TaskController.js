Ext.define('Starter.view.task.TaskController', {
    extend: 'Starter.base.ViewController',

    alias: 'controller.task',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onreset: function () {
        this.getView().getStore().reload({
            type: 'ajax2',
            url: '/rest/tasks?sort=endTime,desc'

        })
    },
    MsgAlert: function (msg) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'}
        })
    },
    onExport: function () {
        this.open('task-export', {
            title: '目录导出'
        });
    },
    onDownload: function () {
        var me = this;
        var value = me.lookup('chooseDept').getValue();
        Ext.Ajax.request({
            url: '/api/isDefaultByDepartment',
            success: function (rs) {
                var judge = rs.responseText;
                if (judge == 'true' && value == undefined) {
                    me.MsgAlert('请选择部门。');
                } else if (judge == 'false') {
                    window.location.href = '/api/exportData?download=true&department=';
                }
            }
        });
    },

    export: function () {
        var me = this;
        var btn = this.lookup('exportBtn');
        // var href = btn.getHref();
        var href = '/api/exportData?download=true&department=',
            value = me.lookup('chooseDept').getValue();
        if (href == null) return;
        href = href.replace("download=true&", "");
        console.log(href);
        Ext.Ajax.request({
            url: '/api/isDefaultByDepartment',
            success: function (rs) {
                var judge = rs.responseText;
                if (judge == 'true') {
                    if (value == undefined) {
                        me.MsgAlert('请选择部门。')
                    } else {
                        Ext.Ajax.request({
                            url: '/api/exportData?department=' + value,
                            success: function (response, opts) {
                                Ext.toast('已经加入后台导出');
                                me.reloadStore();
                                me.closeFrom(btn);
                            },
                            failure: function (response, opts) {
                                Ext.toast('后台任务创建失败');
                                me.reloadStore();
                                me.closeFrom(btn);
                            },
                            reader: 'text'
                        });
                    }
                } else {
                    Ext.Ajax.request({
                        url: href,
                        success: function (response, opts) {
                            Ext.toast('已经加入后台导出');
                            me.reloadStore();
                            me.closeFrom(btn);
                        },
                        failure: function (response, opts) {
                            Ext.toast('后台任务创建失败');
                            me.reloadStore();
                            me.closeFrom(btn);
                        },
                        reader: 'text'
                    });
                }
            }
        });

    },

    onSelectDepartment: function (data) {
        var id = data.getValue();
        var button = this.lookup('exportBtn');
        // var button1 = this.lookup('exportHT');
        // button1.setHref('/api/exportData?download=true&department=' + id);
        button.setHref('/api/exportData?download=true&department=' + id);
    }
});