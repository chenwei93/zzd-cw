Ext.define('DA.store.Module', {
    extend: 'Ext.data.Store',
    storeId: 'da-module',

    fields: [
        'name', 'title', 'icon', {
            name: 'default',
            type: 'boolean'
        }, 'menu', 'home'/*模块对应的首页*/
    ],

    data: {
        items: [
            {default: true, name: 'portal', title: "资源普查", icon: "normal", menu: 'portal', home: 'zhgzt'},
            {name: 'da', title: "日常工作", icon: "normal", menu: 'da', home: 'worktask-type'},
            {name: 'mgr', title: "平台管理", icon: "normal", menu: 'mgr', home: 'zhgzt-m'},
            {name: 'dataopen', title: "数据共享与开放管理", icon: "normal", menu: 'dataopen', home: 'zhgzt'},
            {name: 'entry', title: "数据服务", icon: "normal", menu: 'entry', home: 'zhgzt-e'},
            {name: 'dataservice', title: "资源目录", icon: "normal", menu: 'dataservice', home: 'zhgzt-s'},
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
