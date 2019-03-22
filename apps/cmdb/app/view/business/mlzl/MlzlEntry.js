Ext.define('Cmdb.view.business.mlzl.MlzlEntry', {
    extend: 'Ext.grid.Panel',
    xtype: 'mlzl-entry',


    bind: {
        store: '{list2}'
    },
    columns: [{
        text: "信息资源名称",
        dataIndex: 'resTitle',
    }, {
        text: "信息资源代码",
        dataIndex: 'resCode',
    }, {
        text: '信息资源提供方',
        columns: [{
            text: '资源提供单位',
            dataIndex: 'rpOrgName'
        }, {
            text: '资源提供方地址',
            dataIndex: 'cntAdd'
        }]
    }, {
        text: "资源提供方代码",
        flex: 1,
        dataIndex: 'rpOrgCode',
    }, {
        text: '信息资源摘要',
        dataIndex: 'abstracts'
    }, {
        text: '信息资源格式',
        columns: [{
            text: '信息资源格式分类',
            dataIndex: 'catalog'
        }, {
            text: '信息资源格式类型',
            dataIndex: 'format'
        }, {
            text: '其他类型资源格式描述',
            dataIndex: 'elseDes'
        }]
    }, {
        text: '信息资源大普查',
        columns: [{
            text: '数据存储总量（G）',
            dataIndex: 'cczl'
        }, {
            text: '结构化信息记录总数（万）',
            dataIndex: 'jlzs'
        }, {
            text: '已共享的数据存储量（G）',
            dataIndex: 'gx_ccl'
        }, {
            text: '已共享结构化记录数（万）',
            dataIndex: 'gx_jls'
        }, {
            text: '已开放的数据存储量（G）',
            dataIndex: 'kf_ccl'
        }, {
            text: '已开放结构化记录数（万）',
            dataIndex: 'kf_jls'
        }]
    }, {
        text: '信息项信息',
        columns: [{
            text: '信息项名称',
            dataIndex: 'inforName'
        }, {
            text: '数据类型',
            dataIndex: 'dataType'
        }, {
            text: '数据长度',
            dataIndex: 'dataLength'
        }]
    }, {
        text: '共享属性',
        columns: [{
            text: '共享类型',
            dataIndex: 'gx_type'
        }, {
            text: '共享条件',
            dataIndex: 'gx_tj'
        }]
    }, {
        text: '共享方式',
        columns: [{
            text: '共享方式分类',
            dataIndex: 'gxfs_catalog'
        }, {
            text: '共享方式类型',
            dataIndex: 'gxfs_type'
        }]
    }, {
        text: '开放属性',
        columns: [{
            text: '是否向社会开放',
            dataIndex: 'kf_type'
        }, {
            text: '开放条件',
            dataIndex: 'kf_tj'
        }]
    }, {
        text: '更新周期',
        dataIndex: 'gxzq'
    }, {
        text: '发布日期',
        dataIndex: 'fbrq'
    }, {
        text: '关联及类目名称',
        dataIndex: 'linkName'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-hand-paper-o',
                tooltip: '申请',
                handler: 'onSQ'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }]
});