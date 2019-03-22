Ext.define('DRDMS.view.entrywh.EntryWhYwTypeController', {
    extend: 'DRDMS.base.ViewController',
    alias: 'controller.entrywh-ywtype',

    onRender: function (view, event) {
        var allZd = this.lookup('allZd');
        var record = view.needRecord;
        if (record.get('attributes').editor) {
            var data = record.get('attributes').editor;
            data = data.substring(data.indexOf(':') + 1, data.length).split(',');
            this.getViewModel().set('local', data[0]);
            this.getViewModel().set('field', data[1]);
            this.getViewModel().set('title_field', data[2]);
            this.getViewModel().set('embed', data[3]);
            var qrtype = this.lookup('qrtype');
            if (data[3] == 'true') {
                qrtype.items.get(0).setValue(true);
            } else {
                qrtype.items.get(1).setValue(true);
            }
        } else {
            this.getViewModel().set('field', record.get('name'));
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