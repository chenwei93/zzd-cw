Ext.define('ETL.view.taskcon.TaskConController', {
    extend: 'ETL.base.ViewController',
    alias: 'controller.taskcon',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    showDetail: function (xtype, title, record, extra) {
        var id = record ? record.get('id') : null,
            items = {
                xtype: xtype,
                entityId: id
            };

        var win = {title: '任务配置' + title};
        win = extra ? Ext.apply(extra, win) : win;

        this.open(items, win)
    },
    //发布
    onPublish: function (view, rowindex, colindex, btn, event, record, tr) {
        var id = record.get('id'),
            params = {id: id};
        Ext.Msg.confirm('提示', '确定发布？', function (choose) {
            if (choose == 'yes') {
                Ext.Ajax.request({
                    url: ETL.base.ViewController.HTTP_PREFIX+'/updateJobStatus',
                    params: params,
                    method: 'POST',
                    success: function () {
                        Ext.toast('发布成功')
                    },
                    failure: function () {
                        Ext.toast('发布成功')
                    }
                })
            }

        })
    },
    //编辑、详细页面加载数据
    OnTaskConRender: function (view) {
        var id = view.entityId, params = {id: id};
        if (id) {
            Ext.Ajax.request({
                url: ETL.base.ViewController.HTTP_PREFIX+'/showJobs',
                params: params,
                method: 'POST',
                success: function (rs) {
                    var res = Ext.decode(rs.responseText);
                    view.getViewModel().setData(res)
                }
            })
        }
    },
    //编辑
    onEdit: function (view, rowindex, colindex, btn, event, record, tr) {
        this.showDetail('taskcon-edit', '编辑', record, {
            width: 505,
            height: 400,
            gridView: this.getView()
        });
    },
    // 详细
    onDetail: function (view, rowindex, colindex, btn, event, record, tr) {
        this.showDetail('taskcon-show','详细',record,{
            width: 505,
            height: 300,
            gridView: this.getView()
        })
    },
    //搜索
    onSearch: function () {
        var grid = this.getView();
        var searchText = this.lookup('searchText').getValue(),
            status = this.lookup('status').getValue(),
            time1 = this.lookup('time1').getValue(),
            time2 = this.lookup('time2').getValue();
        var url, data;
        if (searchText && !status && !time1 && !time2) {//只有名称
            url = '/onSearch';
            data = {name: searchText}
        } else if (searchText && status && !time1 && !time2) {//名称+状态
            url = '/onSearch';
            data = {name: searchText, status: status};
        } else if (searchText && !status && time1 && time2) {//名称+时间
            url = '/onSearch';
            data = {
                name: searchText, date: new Date(time1).getTime(),
                date1: new Date(time2).getTime()
            };
        } else if (!searchText && status && !time1 && !time2) {//状态
            url = status == '已发布' ? '/onSearch' : '/onSearch';
            data = {status: status}
        } else if (!searchText && status && time1 && time2) {//状态+时间
            url = '/onSearch';
            data = {status: status, date: new Date(time1).getTime(), data1: new Date(time2).getTime()}
        } else if (!searchText && !status && time1 && time2) {//时间
            url = '/onSearch';
            data = {date: new Date(time1).getTime(), data1: new Date(time2).getTime()}
        } else if (searchText && status && time1 && time2) {//名称+状态+时间
            url = '/onSearch';
            data = {
                name: searchText,
                status: status,
                date: new Date(time1).getTime(),
                data1: new Date(time2).getTime()
            }
        }
        console.log(url, data);
        if (url) {
            Ext.Ajax.request({
                url: ETL.base.ViewController.HTTP_PREFIX+url,
                method: 'POST',
                params: data,
                success: function (rs) {
                    var res = Ext.decode(rs.responseText);
                    grid.setStore({
                        autoLoad: true,
                        data: res.content
                    })
                }
            })
        }
    },
    //删除
    onDelete: function (view, rowindex, colindex, btn, event, record, tr) {
        var id = record.get('id'),
            params = {id: id};
        Ext.Msg.confirm('提示', '确定删除？', function (choose) {
            if (choose == 'yes') {
                Ext.Ajax.request({
                    url:ETL.base.ViewController.HTTP_PREFIX+ '/removeJob',
                    params: params,
                    method: 'POST',
                    success: function () {
                        Ext.toast('删除成功')
                        view.getStore().reload();
                    },
                    failure: function () {
                        Ext.toast('删除失败')
                    }
                })
            }

        })
    },

    //新增
    onAdd: function () {
        this.showDetail('taskcon-add', '', null, {
            width: 505,
            height: 400,
            gridView: this.getView()
        });
    },

    //确定保存
    onSaveAdd: function (btn) {
        var form = btn.up('taskcon-add');
            if(form==undefined){
            form=btn.up('taskcon-edit')
        }
            entityId = form.entityId,
            win = btn.up('window');
        var url = '/saveJob';
        if (entityId) {
            url = '/updateJobDetails';
        }
        Ext.Msg.confirm('提示', '确定保存？', function (choose) {
            if (choose == 'yes') {
                form.getForm().submit({
                    params:{id:entityId},
                    url: ETL.base.ViewController.HTTP_PREFIX+url,
                    success: function () {
                        win.close();
                        Ext.toast('保存成功')
                    },
                    failure: function () {
                        win.close();
                        Ext.toast('保存成功')

                    }
                })
            }

        })
    },
    // 取消保存
    onCancelAdd: function (btn) {
        var form = btn.up('taskcon-add'),
            win = btn.up('window');
        Ext.Msg.confirm('提示', '确定取消保存？', function (choose) {
            if (choose == 'yes') {
                win.close();
                Ext.toast('取消保存成功')
            }

        })
    }

});
