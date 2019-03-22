/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DA.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'DA.ux.ProjectAjax',

        'DA.view.gzt.zhgzt.Zhgzt',
        'DA.view.gzt.zhgzt.ZhgztM',
        'DA.view.gzt.zhgzt.ZhgztS',
        'DA.view.gzt.zhgzt.ZhgztE',

        //main
        'DA.view.main.MainController',
        'DA.view.main.MainHeader',
        'DA.view.main.MainLoader',
        'DA.view.main.MainMenu',
        'DA.view.main.MainModel',
        'DA.view.main.MainNav',



        //portal
        'DA.view.portal.PortalHome',

        //da
        'DA.view.da.consult.assetcensus.AssetCensus',
        'DA.view.da.worktask.WorkTaskType',//工作任务类型管理
        'DA.view.da.worktask.WorkTask',//工作任务管理

        //mgr
        'DA.view.mgr.workorder.WorkOrder',

        'DA.view.mgr.gdfl.Gdfl',
        'DA.view.mgr.gzlsj.Gzlsj',
        'DA.view.mgr.principal.Principal',
        'DA.view.mgr.principal.User',
        'DA.view.mgr.resourcenode.ResourceNode',
        'DA.view.mgr.resourcepool.ResourcePool',
        'DA.view.mgr.rzgl.RzCjgd',
        'DA.view.mgr.rzgl.Rzgl',
        'DA.view.mgr.workorder.ZcBd',

        'DA.view.mgr.dictionary.Dictionary',

        //dataopen
        'DA.view.dataopen.dataentry.DataEntryOpen',
        'DA.view.dataopen.ywpz.Fkgl',
        'DA.view.dataservice.ywpz.Fwpzwh',
        'DA.view.dataservice.ywpz.Fwzczx',
        'DA.view.dataservice.ywpz.Jhpt',
        'DA.view.dataservice.ywpz.Jkzypz',
        'DA.view.dataservice.ywpz.Sjdr',
        'DA.view.dataservice.ywpz.Sjkfpzjt',
        'DA.view.dataservice.ywpz.Sjzlbg',
        'DA.view.dataservice.ywpz.Tmgl',
        'DA.view.dataservice.ywpz.Ywpz',
        'DA.view.dataservice.ywpz.Zdyfw',
        'DA.view.dataservice.ywpz.Zygl',


        //dataservice
        'DA.view.dataservice.metedata.AnalyzeModel',

        'DA.view.dataservice.entrychangelog.EntryChangeLog',
        'DA.view.dataservice.entrychangelog.EntryChangeLogCenter',
        'DA.view.dataservice.entrydata.EntryData',
        'DA.view.dataservice.entrydata.EntryDataDetails',
        'DA.view.dataservice.entrydata.EntryDataList',
        'DA.view.dataservice.entrydata.EntryDataModel',
        'DA.view.dataservice.entrydata.EntryDataShow',
        'DA.view.dataservice.entry.EntryEdit',
        'DA.view.dataservice.entry.EntryEditPanelWizard',
        'DA.view.dataservice.entry.EntryEditController',
        'DA.view.dataservice.entry.EntryEditFormBase',
        'DA.view.dataservice.entry.EntryEditFormExt',
        'DA.view.dataservice.entry.EntryEditGridDataset',
        'DA.view.dataservice.entry.EntryEditModel',

        'DA.view.dataservice.entryset.EntrySet',

        'DA.view.dataservice.entry.EntryViewGrid',
        'DA.view.dataopen.ywpz.Mlsh',
        'DA.view.dataservice.entry.EntryPendingCenter',
        'DA.view.dataservice.entry.EntrySearch',
        'DA.view.entry.entrywh.EntryWhTab',
        'DA.view.entry.serviceswh.ServiceWH',


        //entry
        'DA.view.entry.newdataservice.EntryDesign',
        'DA.view.entry.bloodconf.BloodConf',
        'DA.view.entry.roleconf.ChooseEntry',
        'DA.view.charts.ChartRykq',
        'DA.view.charts.ChartYwbl',
        'DA.view.charts.ChartYwbl2',
        'DA.view.charts.YwblController',
        'DA.view.entry.itest.ITest',

        'DA.view.entry.services.chooseCreateJK',
        'DA.view.entry.service.Services',
        'DA.view.entry.service.ServicesAddDataset',
        'DA.view.entry.services.ServicesOperate',

        'DA.view.entry.iwh.iWh',


    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'border',

    bodyCls: 'main-wrap-bg',

    items: [{
        region: 'center',
        flex: 1,
        xtype: 'main-loader'
    }, {
        region: 'north',
        xtype: 'main-header',
        viewModel: true
    }, {
        region: 'west',
        xtype: 'main-menu'
        // }, {
        //     region: 'south',
        //     xtype: 'main-nav'
    }],
});
