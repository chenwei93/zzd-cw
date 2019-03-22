Ext.define('Cmdb.store.Module', {
    extend: 'Ext.data.Store',

    storeId: 'cmdb-module',

    fields: [
        'name', 'title', 'icon', {
            name: 'default',
            type: 'boolean'
        }, 'menu', 'home'/*模块对应的首页*/
    ],

    data: {
        items: [
            {default: true, name: 'portal', title: "工作门户", icon: "normal", menu: 'portal', home: 'zhgzt'},
            {name: 'ops', title: "运维管理中心", icon: "normal", menu: 'ops', home: 'zkt'},
            {name: 'asset', title: "资产管理和服务中心", icon: "normal", menu: 'asset', home: 'zcfw'},
            {name: 'mgr', title: "平台管理部", icon: "normal", menu: 'mgr', home: 'zc-bd'},
            {name: 'dashboard', title: "可视化展厅", icon: "normal", menu: 'dashboard', home: 'zsdt'},
            {name: 'monitor', title: "监控预警室", icon: "normal", menu: 'monitor', home: 'zkt'},
            {name: 'integrate', title: "日常事务处理中心", icon: "normal", menu: 'integrate', home: 'jbxxgl'},
            {name: 'business', title: "日常业务管理中心", icon: "normal", menu: 'business', home: 'mlzl-list'},
            {name: 'interface', title: "接口服务管理中心", icon: "normal", menu: 'interface', home: 'datamgr'},
            {name: 'entry', title: "数字资产管理中心", icon: "normal", menu: 'entry', home: 'entrydata'},
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
