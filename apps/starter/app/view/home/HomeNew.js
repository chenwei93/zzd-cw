Ext.define('Starter.view.home.HomeNew',{
    extend:'Ext.grid.Panel',
    xtype:'app-homenew',


    requires: [
        'Starter.view.home.HomeModel',
        'Starter.view.home.HomeNewController'
    ],
    controller:'homenew',
    title:'最新上线',
    viewModel: {
      type:'home'
    },
    bind:{
      store:'{list}'
    },
    scrollable:true,
    columnLines: true,
    height:350,
    columns:[{
        // text: '标题',
        flex:1,
        dataIndex: 'title'
    },{
        // text: '部门',
        flex:1,
        dataIndex: 'dept'
    },{
        // text: '时间',
        flex:1,
        dataIndex: 'createTime',
        xtype: 'datecolumn',
        format: 'Y-m-d H:i:s'
    }]
});