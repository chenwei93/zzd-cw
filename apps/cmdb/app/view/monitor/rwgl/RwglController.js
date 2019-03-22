Ext.define('Cmdb.view.monitor.rwgl.RwglController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.rwgl_m',


    onQD: function (view, row, col, btn, time, record, tr) {
        var type = record.get('color');
        var html = '运行中';
        if (type == html) {
            Ext.Msg.alert('提示','当前状态已为运行状态')
        } else {
            if (record.get('code') == 'san') {
                var alldb = {
                    "person": ["chenw", "fangr"],
                    "nextperson": "chenw",
                    "tabId": "id_" + new Date(),
                    "event_status": "undone",
                    "rb_auto": 4,
                    "gddes": "警报：民政局租户存储空间使用率为80%，需要为其分配新的存储空间。<br />" +
                    "已解决：系统已自动为民政局的SAN存储数值增加512G。",
                    "eventtype": "event",
                    "title": '基础设施扩展实施_实例1',
                    "c_time": new Date(),
                    "pre_person": "系统自动提交",
                    "type": "workOrder",
                    "event_type": "wlyc"
                };
                var store = Ext.getStore('alldb');
                store.load();
                store.add(alldb);
                store.sync();
            }
            record.set('color', '运行中')
        }

    },
    onZT: function (view, row, col, btn, time, record, tr) {
        var type = record.get('color');
        var html = '暂停';
        if (type == html) {
            Ext.Msg.alert('提示','当前状态已为暂停状态')
        } else {
            record.set('color', '暂停')
        }

    },
    onBJ: function (view, row, col, btn, time, record, tr) {
        console.log(record)

    },

});