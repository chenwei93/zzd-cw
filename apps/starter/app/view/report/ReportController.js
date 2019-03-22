/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.report.ReportController', {
    extend: 'Starter.base.ViewController',

    alias: 'controller.report',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    renderTargetClass: function (value) {
        return value == 'dcsp.domain.data.EntryData' ? '信息资源' : '信息系统';
    },
    renderSourceType: function (value) {
        return value == 'Attachment' ? '附件' : '填报';
    },

    imports: function () {
        this.open('fileupload', {
            width: 500,
            title: '导入'
        });
    },

    onView: function (the, record, item) {
        var id = record.getId();

        this.open({
            xtype: 'report-edit',
            record: record,
            viewModel: {
                data: {
                    report: record
                }
            }
        }, '资源池编辑');
    },
    MsgAlert: function (msg) {
        Ext.Msg.alert({
            title: '提示',
            msg: msg,
            buttonText: {yes: '确定', no: '取消'}
        })
    },
    fileUpload: function (field, value) {
        var me = this;
        var dept = this.lookup('uploadForm').rawValue,
            file = this.lookup('chooseFile').getValue();
        if (dept == '' && file == '') {
            this.MsgAlert('请选择文件和部门。');
        } else if (dept != '' && file == '') {
            this.MsgAlert('请选择文件。');
        } else if (dept == '' && file != '') {
            this.MsgAlert('请选择部门。');
        } else if (dept != '' && file != '') {
            var form = this.lookup('uploadForm').up('form');
            form.submit({
                url: '/raw/upload/',
                waitMsg: '上传文件中',
                submitEmptyText: false,
                success: function (arg1, action) {
                    Ext.toast('上传成功，刷新调研表清单');
                    me.reloadStore();
                    me.closeFrom(form);
                },
                failure: function (arg1, action) {
                    Ext.toast('上传失败:' + '<b>' + action.result.msg + '</b>');
                    me.closeFrom(form);
                }
            });
        }

    }

});
