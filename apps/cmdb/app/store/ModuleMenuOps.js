Ext.define('Cmdb.store.ModuleMenuOps', {
    extend: 'Ext.data.TreeStore',

    storeId: 'menu-ops',
    fields: [{
        name: 'text'
    }],

    root: {
        iconCls: 'x-fa fa-desktop',
        text: '运维管理中心',
        expanded: true,
        children: [{
            text: '运维监控台',
            iconCls: 'x-fa fa-desktop',
            viewType: 'zkt',
            leaf: true
        }, {
            text: '日志查询',
            iconCls: 'x-fa fa-clock-o',
            viewType: 'rzgl',
            leaf: true
        }, {
            text: '综合查询',
            iconCls: 'x-fa  fa-list',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [
                {
                    text: '工单查询',
                    iconCls: 'x-fa fa-search',
                    viewType: 'gdcx',
                    leaf: true
                }, {
                    text: '工单统计',
                    iconCls: 'x-fa fa-bars',
                    viewType: 'gdtj',
                    leaf: true
                }]
        // }, {
        //     text: '数据资源管理',
        //     iconCls: 'x-fa  fa-database',
        //     viewType: 'pageblank',
        //     expanded: false,
        //     selectable: false,
        //     children: [
        //         {
        //             text: '数据目录',
        //             iconCls: 'x-fa fa-list',
        //             viewType: 'entrydata',
        //             leaf: true
        //         }, {
        //             text: '资源主机配置',
        //             iconCls: 'x-fa fa-laptop',
        //             viewType: 'resourcenode',
        //             leaf: true
        //         }, {
        //             text: '自动编目',
        //             iconCls: 'x-fa fa-pie-chart',
        //             viewType: 'resourcepool',
        //             leaf: true
        //         }, {
        //             text: '数据汇集配置',
        //             iconCls: 'x-fa fa-th-large',
        //             viewType: 'sjhjpz',
        //             leaf: true
        //
        //         }]
        }, {
            text: '数据共享开放管理',
            iconCls: 'x-fa fa-cloud',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [{
                text: '数据采集',
                iconCls: 'x-fa fa-pencil',
                viewType: 'sjdr',
                leaf: true
            }, {
                text: '资源管理',
                iconCls: 'x-fa fa-bars',
                viewType: 'zygl',
                leaf: true
            }, {
                text: '脱敏管理',
                iconCls: 'x-fa fa-spinner',
                viewType: 'tmgl',
                leaf: true
            }, {
                text: '风控管理',
                iconCls: 'x-fa fa-arrows-h',
                viewType: 'fkgl',
                leaf: true
            }]
        // }, {
        //
        //     text: '数据质量管理',
        //     iconCls: 'x-fa fa-asterisk',
        //     viewType: 'pageblank',
        //     expanded: false,
        //     selectable: false,
        //     children: [
        //         {
        //             text: '数据标准管理',
        //             iconCls: 'x-fa fa-exchange',
        //             viewType: 'jhpt',
        //             leaf: true
        //         }, {
        //             text: '数据质量报告',
        //             iconCls: 'x-fa fa-list-alt',
        //             viewType: 'sjzlbg',
        //             leaf: true
        //         }]


        }, {

            text: '接口服务平台',
            iconCls: 'x-fa fa-sliders',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [
                {
                    text: '接口资源配置',
                    iconCls: 'x-fa fa-tag',
                    viewType: 'jkzypz',
                    leaf: true
                }, {
                    text: '服务注册中心',
                    iconCls: 'x-fa fa-exchange',
                    viewType: 'fwzczx',
                    leaf: true
                }, {
                    text: '自定义服务',
                    iconCls: 'x-fa fa-sort',
                    viewType: 'zdyfw',
                    leaf: true
                }, {
                    text: '服务发布',
                    iconCls: 'x-fa fa-cogs',
                    viewType: 'fwpzwh',
                    leaf: true
                }]


        }, {
            text: '安全管理',
            iconCls: 'x-fa fa-shield',
            viewType: 'pageblank',
            expanded: false,
            selectable: false,
            children: [
                {
                    text: '合规管理',
                    iconCls: 'x-fa fa-exchange',
                    viewType: 'hggl',
                    leaf: true
                }, {
                    text: '漏洞和补丁管理',
                    iconCls: 'x-fa fa-bug',
                    viewType: 'ldhbdgl',
                    leaf: true
                }, {
                    text: '基线管理',
                    iconCls: 'x-fa fa-bars',
                    viewType: 'jxgl',
                    leaf: true
                }, {
                    text: '威胁管理',
                    iconCls: 'x-fa fa-exclamation-triangle',
                    viewType: 'wxgl',
                    leaf: true
                }, {
                    text: '防篡改管理',
                    iconCls: 'x-fa fa-lock',
                    viewType: 'fcggl',
                    leaf: true
                }, {
                    text: '准入管理',
                    iconCls: 'x-fa fa-arrows',
                    viewType: 'zrgl',
                    leaf: true
                }, {
                    text: '安全检测管理',
                    iconCls: 'x-fa fa-search-plus',
                    viewType: 'aqjcgl',
                    leaf: true
                }]


        }]
    }
});
