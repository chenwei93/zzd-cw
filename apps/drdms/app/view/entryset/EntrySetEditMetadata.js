Ext.define('DRDMS.view.entryset.EntrySetEditMetadata', {
    extend: 'Ext.tree.Panel',
    xtype: 'entryset-editmetadata',


    controller: 'entryset-edit',
    viewModel: {
        type: 'entrymetadata'
    },
    bind: {
        store: '{list}'
    },
    rootVisible: false,
    selType: 'checkboxmodel',
    columns: [{
        xtype: 'treecolumn',
        text: '名称',
        dataIndex: 'text',
        flex: 2,
        sortable: true
    }, {
        text: '系统标识',
        dataIndex: 'name',
        flex: 1,
        sortable: true
    }, {
        text: '数据类型',
        dataIndex: 'dataType',
        flex: 1,
        sortable: false
    }, {
        text: '国标规范',
        dataIndex: 'GB',
        flex: 1,
        sortable: false
    }, {
        text: '标识名称',
        dataIndex: 'fullName',
        flex: 1,
        sortable: false
    }, {
        text: '备注',
        dataIndex: 'memo',
        flex: 1,
        sortable: true
    }]
});