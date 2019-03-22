Ext.define('DA.view.da.worktask.ChooseMenu', {
    extend: 'Ext.tree.Panel',
    xtype: 'choosemenu',


    rootVisible: false,
    listeners: {
        rowdblclick: 'onChoose'
    },
    store: {
        data: {
            text: '菜单',
            expanded: true,
            children: [
                {
                    text: '资源目录',
                    expanded: true,
                    children: [
                        {leaf: true, text: '数据资源目录上架'},
                        {leaf: true, text: '数据资源目录审核'}
                    ]
                },
                {
                    text: '日常工作',
                    expanded: true,
                    children: [
                        {leaf: true, text: '考核管理'}
                    ]
                },
                {
                    text: '资源普查',
                    expanded: true,
                    children: [
                        {leaf: true, text: '元数据会审'},
                        {leaf: true, text: '元数据采集'}
                    ]
                }
            ]
        }
    }
});
