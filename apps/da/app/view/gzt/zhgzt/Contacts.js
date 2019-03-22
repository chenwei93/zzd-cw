Ext.define('DA.view.gzt.zhgzt.Contacts', {
    extend: 'Ext.grid.Panel',
    xtype: 'contacts',


    requires: ['DA.view.gzt.zhgzt.ContactsController',],
    viewModel: {
        type: 'zhgzt'
    },
    bind: {
        store: '{list1}'
    },
    controller: 'contacts',
    scrollable: true,
    columns: [{
        text: '联系人186',
        dataIndex: 'name',
        renderer: function (value) {
            var code;
            if (value == 'Sally Smith') {
                code = 1
            } else if (value == 'Lisa') {
                code = 2
            } else if (value == 'Bill Wilson') {
                code = 3
            } else {
                code = 4
            }
            var img = '<image src="resources/images/user-profile/' + code + '_.png" class="imgdx"></image>';
            return img + value
        },
        flex: 1
    }],
    bbar: [{
        xtype: 'textfield',
        width: 50,
        emptyText: '筛选'
    }, '->', {
        style: {
            borderRadius: '50%'
        },
        iconCls: 'x-fa fa-plus'
    }]
});
