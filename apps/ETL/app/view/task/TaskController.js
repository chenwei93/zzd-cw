Ext.define('ETL.view.task.TaskController', {
    extend: 'ETL.base.ViewController',
    alias: 'controller.task',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    showDetail: function (xtype, title, record, extra) {
        var id = record ? record.get('id') : null,
            items = {
                xtype: xtype,
                entityId: id
            };

        var win = {title: title};
        win = extra ? Ext.apply(extra, win) : win;

        this.open(items, win)
    },
    //改变启动停止状态
    onChangeStatus: function (view, rowindex, colindex, btn, event, record, tr) {
        var status = record.get('status1'),
            url = status == 'end' ? '/runJob' : '/stopJob',
            message = status == 'end' ? '启动' : '停止',
            params = {id: record.get('id')};
        Ext.Msg.confirm('提示', '确定改变状态？', function (choose) {
            if (choose == 'yes') {
                Ext.Ajax.request({
                    url: ETL.base.ViewController.HTTP_PREFIX+url,
                    params: params,
                    method: 'POST',
                    success: function (rs) {
                        var res = Ext.decode(rs.responseText);
                        if (res == 'success') {
                            Ext.toast(message + '成功');
                        } else {
                            Ext.toast(message + '失败');
                        }
                    },
                    failure: function () {
                        Ext.toast(message + '失败');
                    }
                })
            }
        })
    },
    //退回
    onUndo: function (view, rowindex, colindex, btn, event, record, tr) {
        var id = record.get('id'),
            params = {id: id};
        Ext.Msg.confirm('提示', '确定退回？', function (choose) {
            if (choose == 'yes') {
                Ext.Ajax.request({
                    url:ETL.base.ViewController.HTTP_PREFIX+ '/repealJob',
                    params: params,
                    method: 'POST',
                    success: function (rs) {
                        var res = Ext.decode(rs.responseText);
                        if (res == 'success') {
                            Ext.toast('退回成功,刷新列表');
                            view.getStore().reload();
                        } else {
                            Ext.toast('退回失败');
                            view.getStore().reload();
                        }
                    },
                    failure: function () {
                        Ext.toast('退回成功，刷新列表');
                        view.getStore().reload();
                    }
                })
            }
        })
    },
    // 详细
    onDetail: function (view, rowindex, colindex, btn, event, record, tr) {
        this.showDetail('task-show', '详细', record, {
            width: 505,
            height: 400,
            gridView: this.getView()
        });
    },
    //编辑、详细页面加载数据
    OnTaskRender: function (view) {
        var id = view.entityId, params = {id: id};
        console.log(view,view.getViewModel());
        if (id) {
            Ext.Ajax.request({
                url: ETL.base.ViewController.HTTP_PREFIX+'/showJobs',
                params: params,
                method: 'POST',
                success: function (rs) {
                    console.log(view,view.getViewModel());
                    var res = Ext.decode(rs.responseText);
                    view.getViewModel().setData(res)
                }
            })
        }
    },
    //搜索
    onSearch: function () {
        var grid = this.getView();
        var searchText = this.lookup('searchText').getValue(),
            status = this.lookup('status1').getValue(),
            time1 = this.lookup('time1').getValue(),
            time2 = this.lookup('time2').getValue();
        var url, data;
        if (searchText && !status && !time1 && !time2) {//只有名称
            url = '/onSearch';
            data = {name: searchText,status:'已发布'}
        } else if (searchText && status && !time1 && !time2) {//名称+状态
            url = '/onSearch';
            data = {name: searchText, status1: status,status:'已发布'};
        } else if (searchText && !status && time1 && time2) {//名称+时间
            url =  '/onSearch';
            data = {
                name: searchText, date: new Date(time1).getTime(),
                date1: new Date(time2).getTime(),
                status:'已发布'
            };
        } else if (!searchText && status && !time1 && !time2) {
            url = '/onSearch';
            data = {status1: status,status:'已发布'}
        } else if (!searchText && status && time1 && time2) {
            url = '/onSearch';
            data = {status1: status, date: new Date(time1).getTime(), data1: new Date(time2).getTime(),status:'已发布'}
        } else if (!searchText && !status && time1 && time2) {
            url = '/onSearch';
            data = {date: new Date(time1).getTime(), data1: new Date(time2).getTime(),status:'已发布'}
        } else if (searchText && status && time1 && time2) {
            url = '/onSearch';
            data = {
                name: searchText,
                status1: status,
                date: new Date(time1).getTime(),
                data1: new Date(time2).getTime(),
                status:'已发布'
            }
        }
        console.log(searchText, status, time1, time2, url, data);
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
    }
});
