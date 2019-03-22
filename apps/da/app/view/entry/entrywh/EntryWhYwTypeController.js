Ext.define('DA.view.entry.entrywh.EntryWhYwTypeController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.entrywh-ywtype',

    onRender: function (view, event) {
        var me = this,
            allZd = this.lookup('allZd'),
            record = view.needRecord,
            vm = me.getViewModel();
        if (record.get('attributes').editor) {
            var data = record.get('attributes').editor;
            data = data.substring(data.indexOf(':') + 1, data.length).split(',');
            var dataList = ['local', 'field', 'title_field', 'embed'];
            Ext.Array.each(data, (item, index) => {
                vm.set(dataList[index], item)
            });
            var qrtype = this.lookup('qrtype');
            if (data[3] == 'true') {
                qrtype.items.get(0).setValue(true);
            } else {
                qrtype.items.get(1).setValue(true);
            }
        } else {
            vm.set('field', record.get('name'));
        }
        var store = {
            autoLoad: true,
            data: top._fieldItem
        };
        allZd.setStore(store);
    },
    onSure: function (btn) {
        var formPanel = btn.up('entrywh-ywtype'),
            formValue = formPanel.getValues();
        var data = 'attachment:' +
            formValue.local + ',' +
            formValue.field + ',' +
            formValue.title_field + ',' +
            formValue.embed;
        formPanel.needRecord.data.attributes = {
            editor: data,
            renderer: data
        };
        btn.up('window').close();
    },
    onCancel: function (btn) {
        btn.up('window').close();
    }
})
;
