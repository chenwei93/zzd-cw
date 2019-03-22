Ext.define('Starter.view.home.HomeUpdate',{
    extend:'Ext.grid.Panel',
    xtype:'app-homeupdate',

    requires: [
        'Starter.view.home.HomeUpdataController',
        'Starter.view.home.HomeUpdateModel'
    ],
    title:'目录更新',
    viewModel:{
      type:'home-update'
    },
    bind:{
        store:'{list}'
    },
    controller:'home-update',
    scrollable:true,
    columnLines: true,
    height:350,
    columns:[{
        // text: '部门',
        flex:1,
        dataIndex: 'department'
    },{
        // text: '更新时间',
        flex:1,
        dataIndex: 'startTime',
        xtype: 'datecolumn',
        format: 'Y-m-d H:i:s'
    },{
        // text: '条数',
        flex:1,
        dataIndex: 'successCount'
    }]
});