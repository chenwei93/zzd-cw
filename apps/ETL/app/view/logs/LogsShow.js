Ext.define('ETL.view.logs.LogsShow', {
    extend: 'Ext.form.Panel',
    xtype: 'logs-show',
    layout: 'column',

    defaults: {
        xtype: 'displayfield',
        columnWidth: 1,
        margin: 5
    },
    viewModel: true,
    items: [{
        fieldLabel: '任务名称',
        name: 'jobName',
        bind: '{jobName}'
    }, {
        fieldLabel:'日志id',
        flex:1,
        name: 'channel_id',
        bind: '{channel_id}'
    }, {
        fieldLabel: '启动时间',
        flex: 2,
        name:'start_date',
        bind:'{start_date}'
    }, {
        fieldLabel: '结束时间',
        flex: 1,
        name:'end_date',
        bind:'{end_date}'
    }, {
        fieldLabel: '状态',
        flex: 1,
        name:'status',
        bind:'{status}'
    },{
        fieldLabel:'是否成功',
        flex:1,
        name:'errors',
        bind:'{errors}',
        renderer:function (data) {
            if (data.errors='0'){
                return"成功"
            }else{
                return"失败"
            }
        }
    },{
        fieldLabel:'运行流程',
        flex:1,
        name:'log_field',
        bind:'{log_field}'
    }],
    listeners: {
        render: 'OnLogsRender'
    }

});