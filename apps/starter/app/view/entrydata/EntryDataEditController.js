/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.entrydata.EntryDataEditController', {
    extend: 'Starter.base.ViewController',

    alias: 'controller.entrydata-edit',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onAdd: function () {

        this.open({
            xtype:'entrydata-grid',
            centered: true,
            modal: true
        },'新增信息项');
    },
    onAddClick: function () {
        var view = this.getView(),
            rec = new Starter.model.ResItemAdd({});
        view.store.insert(0, rec);
        view.findPlugin('cellediting').startEdit(rec, 0);
    },
    onSubmit: function (sender, record) {
        var ressortForm = this.getView().getForm();

        if (!ressortForm.isDirty()) {
            Ext.Msg.alert('Status', 'No new data to create.');
            return;
        }
        else if (!ressortForm.isValid()) {
            Ext.Msg.alert('Status', 'Invalid data.');
            return;
        }
        ressortForm.submit({
            url: '/rest/entryDatas',
            jsonSubmit: true,
            waitMsg: 'Saving..',
            headers: {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            submitEmptyText: true,
            success: function (form, action) {
                // var student = Ext.create('Starter.model.Ressort');
                // var resp = Ext.decode(action.response.responseText);
                // console.log(resp);
                //
                // if (resp.data[0]) {
                // //     // addstudent returns student model with Id so we can re-load model into form so form will have isDirty false
                //     student.set(resp.data[0]);
                //     ressortForm.loadRecord(student);
                // }

                Ext.Msg.alert('Status', '保存成功。');

            },
            failure: function (form, action) {
                if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                    Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                }
                if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                    Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                }
                if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                    Ext.Msg.alert('SERVER_INVALID', action.result.message);
                }
            }
        });
    }


});
