/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Cmdb.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Cmdb.ux.ProjectAjax',

        //main
        'Cmdb.view.main.MainController',
        'Cmdb.view.main.MainModel',
        'Cmdb.view.main.MainHeader',
        'Cmdb.view.main.MainNav',
        'Cmdb.view.main.MainMenu',
        'Cmdb.view.main.MainLoader',

        //portal
        'Cmdb.view.portal.zhgzt.Zhgzt',
        'Cmdb.view.portal.wddb.Wddb',
        'Cmdb.view.portal.xxzx.Xxzx',
        'Cmdb.view.portal.wdgl.Wdgl',
        'Cmdb.view.portal.grxx.Grxx',
        'Cmdb.view.portal.yyzx.Yyzx',
        'Cmdb.view.portal.ryxxgl.jbxxgl.Jbxxgl',
        'Cmdb.view.portal.ryxxgl.kqgl.Kqgl',
        'Cmdb.view.portal.ryxxgl.rlzgl.Rlzgl',
        'Cmdb.view.portal.ryxxgl.ryddgl.Ryddgl',
        'Cmdb.view.portal.ryxxgl.tdrzgl.Tdrzgl',

        //asset
        'Cmdb.view.asset.bmzcqd.Bmzcqd',
        'Cmdb.view.asset.qlzcqd.Qlzcqd',
        'Cmdb.view.asset.zcdj.Zcdj',
        'Cmdb.view.asset.zcywgl.Zcywgl',
        'Cmdb.view.asset.zcfw.yzysq.Yzysq',
        'Cmdb.view.asset.zckgl.gxgl.Gxgl',
        'Cmdb.view.asset.zckgl.zcbdxh.Zcbdxh',
        'Cmdb.view.asset.zcfw.sqsh.Sqsh',
        'Cmdb.view.asset.zcfw.Zcfw',
        'Cmdb.view.asset.sjkfgl.Sjkfgl',
        'Cmdb.view.asset.sjhjgl.Sjhjgl',
        'Cmdb.view.asset.sjgxgl.Sjgxgl',
        'Cmdb.view.asset.jkzygl.Jkzygl',
        'Cmdb.view.asset.bmzcqd.ZcBd',

        'Cmdb.view.asset.bmzcqd.ZcBdController',
        'Cmdb.view.asset.bmzcqd.ZcBdAddItem',
        'Cmdb.view.asset.bmzcqd.ZcBdAdd',
        'Cmdb.view.asset.bmzcqd.ZcBdEdit',
        'Cmdb.view.asset.bmzcqd.ZcBdItemEdit',
        'Cmdb.view.asset.bmzcqd.ZcBdModel',
        'Cmdb.view.asset.bmzcqd.ZcBdShow',
        'Cmdb.view.asset.bmzcqd.ZcBdGrid',

        'Cmdb.view.asset.zcwh.Zcwh',
        'Cmdb.view.asset.zcwh.entry.EntryEdit',
        'Cmdb.view.asset.zcwh.entry.EntryFL',
        'Cmdb.view.asset.zcwh.entry.EntryFLCatalog',
        'Cmdb.view.asset.zcwh.entry.EntrySearch',
        'Cmdb.view.asset.zcwh.entry.EntryView',
        'Cmdb.view.asset.zcwh.entry.EntryViewGrid',
        'Cmdb.view.asset.zcwh.entry.EntryWhTab',
        'Cmdb.view.asset.zcwh.entrydata.EntryData',
        'Cmdb.view.asset.zcwh.entrydata.EntryDataList',
        'Cmdb.view.asset.zcwh.resource.Resource',
        'Cmdb.view.asset.zckgl.entryset.EntryMetadata',
        'Cmdb.view.asset.zckgl.entryset.EntrySet',
        'Cmdb.view.asset.zckgl.entryset.ResourceFormat',
        'Cmdb.view.asset.zckgl.catalog.CatalogHY',
        'Cmdb.view.asset.zckgl.catalog.CatalogSS',
        'Cmdb.view.asset.zckgl.catalog.CatalogZT',
        'Cmdb.view.asset.zckgl.dictionary.Dictionary',
        'Cmdb.view.asset.zckgl.keyword.Keyword',
        'Cmdb.view.asset.sjzcgl.resourcenode.ResourceNode',
        'Cmdb.view.asset.sjzcgl.resourcepool.ResourcePool',
        'Cmdb.view.asset.sjzcgl.jkpz.Jkpz',
        'Cmdb.view.asset.fwzcgl.Fwzcgl',
        'Cmdb.view.asset.yzyzcgl.zypzgl.Zypzgl',
        'Cmdb.view.asset.zckgl.bzgl.Bzgl',
        'Cmdb.view.asset.zckgl.jhgl.Jhgl',
        'Cmdb.view.asset.bmzcqd.ZcSjy',
        'Cmdb.view.asset.bmzcqd.ZcSjyZd',
        'Cmdb.view.asset.bmzcqd.ZcSjyFl',
        'Cmdb.view.asset.bmzcqd.Zcmlx',

        //monitor
        'Cmdb.view.monitor.bb.Bb',
        'Cmdb.view.monitor.jkq.Jkq',
        'Cmdb.view.monitor.sjt.Sjt',
        'Cmdb.view.monitor.zyk.Zyk',
        'Cmdb.view.monitor.zkt.Zkt',
        'Cmdb.view.monitor.rwgl.Rwgl',
        'Cmdb.view.monitor.utils.Utils',

        //ops
        'Cmdb.view.ops.ywjkt.Ywjkt',
        'Cmdb.view.ops.gdfw.Gdfw',
        'Cmdb.view.ops.sjgl.Sjgl',
        'Cmdb.view.ops.wtgl.Wtgl',
        'Cmdb.view.ops.shenjgl.Shenjgl',
        'Cmdb.view.ops.zbgl.Zbgl',
        'Cmdb.view.ops.xjgl.Xjgl',
        'Cmdb.view.ops.yjylgl.Yjylgl',
        'Cmdb.view.ops.xmgl.Xmgl',
        'Cmdb.view.ops.aqgl.aqjcgl.Aqjcgl',
        'Cmdb.view.ops.aqgl.fcggl.Fcggl',
        'Cmdb.view.ops.aqgl.hggl.Hggl',
        'Cmdb.view.ops.aqgl.jxgl.Jxgl',
        'Cmdb.view.ops.aqgl.ldhbdgl.Ldhbdgl',
        'Cmdb.view.ops.aqgl.wxgl.Wxgl',
        'Cmdb.view.ops.aqgl.zrgl.Zrgl',

        'Cmdb.view.ops.gdgl.cjgd.Cjgd',
        'Cmdb.view.ops.gdgl.grdb.Grdb',
        'Cmdb.view.ops.gdgl.gryb.Gryb',
        'Cmdb.view.ops.gdgl.gdcx.Gdcx',
        'Cmdb.view.ops.gdgl.gdtj.Gdtj',

        'Cmdb.view.ops.yzyzcpz.zyfp.Zyfp',
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.Fwsmwh',
        'Cmdb.view.ops.jkzcwh.jkpz.Jkpz',
        'Cmdb.view.ops.sjzcwh.sjgxpz.Sjgxpz',
        'Cmdb.view.ops.sjzcwh.sjhjpz.Sjhjpz',
        'Cmdb.view.ops.sjzcwh.sjkfpz.Sjkfpz',
        'Cmdb.view.ops.rzgl.Rzgl',
        'Cmdb.view.ops.sjbd.SjbdsqFrom',
        'Cmdb.view.ops.sjbd.SjbdsqShow',
        'Cmdb.view.ops.sjbd.SjbdWHFrom',
        'Cmdb.view.ops.sjbd.SjbdWHShow',
        'Cmdb.view.ops.sjbd.SjbdZcFrom',
        'Cmdb.view.ops.sjbd.SjbdZcShow',

        'Cmdb.view.ops.ywpz.Ywpz',
        'Cmdb.view.ops.ywpz.Fkgl',
        'Cmdb.view.ops.ywpz.Fwpzwh',
        'Cmdb.view.ops.ywpz.Fwzczx',
        'Cmdb.view.ops.ywpz.Jhpt',
        'Cmdb.view.ops.ywpz.Jkzypz',
        'Cmdb.view.ops.ywpz.Sjdr',
        'Cmdb.view.ops.ywpz.Sjkfpzjt',
        'Cmdb.view.ops.ywpz.Sjzlbg',
        'Cmdb.view.ops.ywpz.Tmgl',
        'Cmdb.view.ops.ywpz.Zdyfw',
        'Cmdb.view.ops.ywpz.Zygl',

        //mgr
        'Cmdb.view.mgr.fwzxgl.Fwzxgl',
        'Cmdb.view.mgr.jkgl.Jkgl',
        'Cmdb.view.mgr.xtgl.Xtgl',
        'Cmdb.view.mgr.xtgl.principal.Principal',
        'Cmdb.view.mgr.xtgl.principal.User',
        'Cmdb.view.mgr.xtgl.roles.Roles',
        'Cmdb.view.mgr.gdgl.gdfl.Gdfl',
        'Cmdb.view.mgr.lcgl.gzlsj.Gzlsj',
        'Cmdb.view.mgr.lcgl.lcpz.Lcpz',
        'Cmdb.view.asset.bmzcqd.ZcBd',


        //interface
        'Cmdb.view.interface.link.dataMgr',

        //business
        'Cmdb.view.business.allzcml.AllZcml',
        'Cmdb.view.business.allzcml.PeMgr',
        'Cmdb.view.business.assetdeal.sjgl.sjAsset',
        'Cmdb.view.business.mlzl.Mlzl',
        'Cmdb.view.business.assetdeal.yzyasset.yzyAssetSq',

        //dashboard
        'Cmdb.view.dashboard.gz.gdcl.ChartGdcl',
        'Cmdb.view.dashboard.gz.gdcl.Gdcl',
        'Cmdb.view.dashboard.gz.rykq.Rykq',
        'Cmdb.view.dashboard.gz.rykq.ChartRykq',
        'Cmdb.view.dashboard.gz.ywbl.Ywbl',
        'Cmdb.view.dashboard.gz.ywbl.ChartYwbl',
        'Cmdb.view.dashboard.gz.ywbl.ChartYwbl2',
        'Cmdb.view.dashboard.sj.sjgx.Sjgx',
        'Cmdb.view.dashboard.sj.sjgx.ChartSjgx',
        'Cmdb.view.dashboard.sj.sjhj.Sjhj',
        'Cmdb.view.dashboard.sj.sjhj.ChartSjhj',
        'Cmdb.view.dashboard.zc.yzyyc.Yzyyc',
        'Cmdb.view.dashboard.zc.zyzlzc.Zyzlzc',
        'Cmdb.view.dashboard.zsdt.Zsdt',

        //entry
        'Cmdb.view.entry.link.nodeEntry',
        'Cmdb.view.entry.link.centerEntry',

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
