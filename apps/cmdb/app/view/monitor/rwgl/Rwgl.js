Ext.define('Cmdb.view.monitor.rwgl.Rwgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'rwgl_m',


    requires:['Cmdb.view.monitor.rwgl.RwglController',],
    controller: 'rwgl_m',
    store: {
        // autoLoad: true,
        data: [{
            name: '并联审批流程定义表',
            color: '暂停'
        }, {
            name: '资源内容查询服务[国土局不动产登记信息]',
            color: '暂停'

        }, {
            name: '资源附件查看服务[国土局不动产登记信息]',
            color: '暂停'

        }, {
            name: '存储设备-SAN存储监控',
            code: 'san',
            color: '暂停'

        }, {
            name: '服务器设备-物理服务器设备监控',
            color: '暂停'

        }, {
            name: '网络设备-核心交换机监控',
            color: '暂停'
        }, {
            name: '网络设备-负载均衡监控',
            color: '暂停'
        }, {
            name: '安全设备-防火墙监控',
            color: '暂停'
        }, {
            name: '安全设备-WAF监控',
            color: '暂停'
        }, {
            name: '存储设备-IPSAN监控',
            color: '暂停'
        }]
    },
    columns: [{
        text: '标题',
        dataIndex: 'name',
        flex: 1
    }, {
        text: '状态',
        width: 100,
        dataIndex: 'color',
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-play-circle-o',
                tooltip: '启动',
                handler: 'onQD'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-pause',
                tooltip: '暂停',
                handler: 'onZT'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                tooltip: '编辑',
                handler: 'onBJ'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }]

})
;
