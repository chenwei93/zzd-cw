Ext.define('Starter.view.news.NewsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'news-list',

    requires: [
        'Starter.view.news.News',
        'Starter.view.news.NewsModel'
    ],
    controller: 'news',
    viewModel: {
        type: 'news'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '新增',
        handler: 'onAdd'
    }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '新闻标题',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: '录入人',
        flex: 1,
        dataIndex: 'author'
    }, {
        text: '新闻类型',
        flex: 1,
        dataIndex: 'type',
        renderer: function (data) {
            var arr = {
                TYPE1: '政策法规',
                TYPE2: '工作动态'
            };
            if (arr[data]) {
                return arr[data]
            } else {
                return data
            }
        }
    }, {
        text: '新闻内容',
        flex: 2,
        dataIndex: 'content2'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit',
                tooltip: '编辑'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                handler: 'onShow',
                tooltip: '查看'
            }, {

                xtype: 'button',
                iconCls: 'x-fa fa-close',
                handler: 'onDelete',
                tooltip: '删除'
            }
        ],
        width: 90,
        align: 'center',
        text: '操作',
        tooltip: '操作'
    }]
});
