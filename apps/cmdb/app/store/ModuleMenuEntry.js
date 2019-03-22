Ext.define('Cmdb.store.ModuleMenuEntry', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-entry',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '数字资产管理中心',
        expanded: true,
        children: [{
            //     text: '数据目录总览',
            //     iconCls: 'x-fa fa-list',
            //     viewType: 'entrydata',
            //     leaf: true
            // }, {
            text: '数据目录总览',
            iconCls: 'x-fa  fa-database',
            viewType: 'pageblank',
            expanded: true,
            selectable: false,
            children: [
                {
                    text: '数据目录',
                    iconCls: 'x-fa fa-list',
                    viewType: 'entrydata',
                    leaf: true
                }, {
                    text: '资源主机配置',
                    iconCls: 'x-fa fa-laptop',
                    viewType: 'resourcenode',
                    leaf: true
                }, {
                    text: '自动编目',
                    iconCls: 'x-fa fa-pie-chart',
                    viewType: 'resourcepool',
                    leaf: true
                }, {
                    text: '数据汇集配置',
                    iconCls: 'x-fa fa-th-large',
                    viewType: 'sjhjpz',
                    leaf: true

                }]
        }, {
            text: '数字资源配置管理',
            iconCls: 'x-fa fa-list',
            viewType: 'nodeentry',
            leaf: true
        }, {
            text: '数据资源目录管理',
            iconCls: 'x-fa fa-list',
            viewType: 'centerentry',
            leaf: true
        }, {

            text: '数据质量管理',
            iconCls: 'x-fa fa-asterisk',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [
                {
                    text: '数据标准管理',
                    iconCls: 'x-fa fa-exchange',
                    viewType: 'jhpt',
                    leaf: true
                }, {
                    text: '数据质量报告',
                    iconCls: 'x-fa fa-list-alt',
                    viewType: 'sjzlbg',
                    leaf: true
                }]

        }]
    }
});
