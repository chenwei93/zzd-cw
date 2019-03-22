/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'DA',
        title: '',
        appTitle: '',
        user: '管理员',
        nick: '管理员',
        dept: '部门'
    }
});
