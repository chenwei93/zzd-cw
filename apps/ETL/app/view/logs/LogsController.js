Ext.define('ETL.view.logs.LogsController', {
    extend: 'ETL.base.ViewController',
    alias: 'controller.logs',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    // 详细
    onDetail: function (view, rowindex, colindex, btn, event, record, tr) {
        this.showDetail('logs-show', '详细', record, {
            width: 505,
            height: 500,
            gridView: this.getView()
        });
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
    //编辑、详细页面加载数据
    OnLogsRender: function (view) {
        console.log(view.entityId);
        var id = view.entityId, params = {id: id};
        console.log(view,view.getViewModel());
        console.log(id);

        if (id != null) {
            Ext.Ajax.request({
                url: ETL.base.ViewController.HTTP_PREFIX+'/showJobNewestLog1',
                params: params,
                method: 'POST',
                success: function (rs) {
                    console.log(view,view.getViewModel());
                    var res = Ext.decode(rs.responseText)[0];
                    view.getViewModel().setData(res)
                    console.log(res,  view.getViewModel());

                }
            })
        }
    },
    //搜索
    onSearch: function () {
        var grid = this.getView();
        var jobName = this.lookup('searchText').getValue(),
            errors = this.lookup('errors').getValue(),
            time1 = this.lookup('time1').getValue(),
            time2 = this.lookup('time2').getValue();
        var url, data;
        if (jobName && !errors && !time1 && !time2) {//只有名称
            data = {jobName: jobName}
        } else if (jobName && errors && !time1 && !time2) {//名称+状态
            data = {jobName: jobName, errors: errors};
        } else if (jobName && !errors && time1 && time2) {//名称+时间
            data = {
                jobName: jobName, date: new Date(time1).getTime(),
                date1: new Date(time2).getTime()
            };
        } else if (!jobName && errors && !time1 && !time2) {
            data = {errors: errors}
        } else if (!jobName && errors && time1 && time2) {
            data = {errors: errors, date: new Date(time1).getTime(), data1: new Date(time2).getTime()}
        } else if (!jobName && !errors && time1 && time2) {
            data = {date: new Date(time1).getTime(), data1: new Date(time2).getTime()}
        } else if (jobName && status && time1 && time2) {
            data = {
                jobName: jobName,
                errors: errors,
                date: new Date(time1).getTime(),
                data1: new Date(time2).getTime()
            }
        }
        url=ETL.base.ViewController.HTTP_PREFIX+"/showJobLogs";
        //console.log(searchText, errors, time1, time2, url, data);
        if (url) {
            Ext.Ajax.request({
                url: url,
                method: 'POST',
                params: data,
                success: function (rs) {
                    console.log(rs);
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
