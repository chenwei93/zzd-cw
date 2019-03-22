/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Cmdb.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Cmdb',
        title: '公共数据资源中心一体化智能管理平台',
        appTitle: '',
        user: '',
        nick: '',
        dept: ''
    }
});
