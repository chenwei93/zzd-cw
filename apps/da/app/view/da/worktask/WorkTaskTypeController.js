Ext.define('DA.view.da.worktask.WorkTaskTypeController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.worktask-type',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onShow: function (tableview, record, tr) {
        this.open({
            xtype: 'worktask-typeshow',
            viewModel: {
                data: {
                    taskType: record.getData()
                }
            },
        }, {
            title: '查看工作任务类型',
            height: 400,
            width: 600
        })
    },
    onAdd: function (btn) {
        this.open({
            xtype: 'choosemenu',
        }, {
            title: '根据已有功能新增类型',
            height: 400,
            width: 500
        });

    },
    onStart: function () {
        Ext.toast('启用成功');
    },
    onShowMenu: function (field, event) {
        var me = this;
        var Fl = field.config.reference;
        field.getEl().on('click', function (p) {
            //处理点击事件代码
            // debugger
            me.open({
                xtype: 'choosemenu'
            }, {
                title: '选择' + field.fieldLabel,
                height: 400,
                width: 500,
                FL: Fl
            });
        });
    },
    //双击选择菜单以后
    onChoose: function (treeview, record, tr, index, time) {
        var fl = treeview.up('window').FL;
        treeview.up('window').close();
        switch (fl) {
            case 'preNode':
                this.lookup(fl).setValue(record.get('text'));
                break;
            case 'nextNode':
                this.lookup(fl).setValue(record.get('text'));
                break;
            default:
                record.set('title', record.get('text'));
                this.open({
                    xtype: 'worktask-typeedit',
                    edit: false,
                    viewModel: {
                        data: {
                            taskType: record.getData()
                        }
                    },
                }, {
                    title: '新增工作任务类型',
                    height: 400,
                    width: 600
                });
                break;
        }


    },
    onRest: function (btn) {
        this.getView().getStore().reload();
    },
    onSpecialkey: function (field, time, input, event) {
        var text = field.getValue();
        console.log(text)
    },
    onSearch: function (btn) {
        var text = this.lookup('searchText').getValue();
        console.log(text);
    },
    onEdit: function (tableview, rowindex, colindex, btn, time, record, tr) {
        this.open({
            xtype: 'worktask-typeedit',
            edit: true,
            viewModel: {
                data: {
                    taskType: record.getData()
                }
            },
        }, {
            title: '修改工作任务类型',
            height: 400,
            width: 600
        })
    },
    onAbolish: function (tableview, rowindex, colindex, btn, time, record, tr) {
        Ext.MessageBox.confirm('提示', '确定废止这条工作任务类型？', function (btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: '/abolish',
                    success: function () {

                    },
                    failure: function () {
                        record.set('tag', false);
                        Ext.toast('废止工作任务类型成功');
                    }
                })
            }
        })
    },
    //
    onSave: function (btn) {
        var form = btn.up('form');
        form.submit({
            url: '/a',
            method: form.edit ? 'PUT' : 'POST',
            success: function () {
                btn.up('window').close();
                Ext.toast('保存成功');
            },
            failure: function () {
                btn.up('window').close();
                Ext.toast('保存成功');
            }
        })
    },
    onCancel: function (btn) {
        btn.up('window').close();
        Ext.toast('取消保存成功');
    },

});
