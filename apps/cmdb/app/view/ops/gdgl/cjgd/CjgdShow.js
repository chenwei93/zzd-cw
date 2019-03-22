Ext.define('Cmdb.view.ops.gdgl.cjgd.CjgdShow', {
    extend: 'Ext.form.Panel',
    xtype: 'cjgd-show',

    bodyPadding: 10,
    layout: 'column',
    defaults: {
        margin: 10,
        columnWidth: 1
    },
    items: [{
        xtype: 'displayfield',
        fieldLabel: '<em class="required">*</em>' + '事件类型',
        name: 'eventtype',
        renderer: function (data) {
            var arr = {
                event: '事件类型',
                question: '问题类型',
                audit: '审计管理',
                attendance: '值班类型',
                inspection: '巡检类型',
                emergency: '应急演练类型',
                project: '项目管理'
            };
            return arr[data]
        },
        bind: '{show.eventtype}'
    }, {
        xtype: 'displayfield',
        fieldLabel: '<em class="required">*</em>' + '工作标题',
        name: 'title',
        bind: '{show.title}'
    }, {
        xtype: 'displayfield',
        fieldLabel: '<em class="required">*</em>' + '优先级',
        name: 'rb_auto',
        columnWidth: 0.5,
        renderer: function (data) {
            var arr = {
                1: '极低',
                2: '低',
                3: '中',
                4: '高',
                5: '极高'
            };
            return arr[data];

        },
        bind: '{show.rb_auto}'
    }, {
        xtype: 'displayfield',
        name: 'nextperson',
        columnWidth: 0.5,
        fieldLabel: '发送人',
        bind: '{show.pre_person}',
        renderer: function (data) {
            var arr = {
                wangs: '王石',
                chenw: '陈薇',
                mozs: '莫智胜',
                fangr: '方荣',
            };
            if (arr[data]) {
                return arr[data]

            } else {
                return data
            }

        },
    }, {
        xtype: 'displayfield',
        fieldLabel: '工作描述',
        name: 'gddes',
        bind: '{show.gddes}'
    }]
});