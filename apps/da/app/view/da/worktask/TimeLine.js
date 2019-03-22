Ext.define('DA.view.da.worktask.Timeline', {
    extend: 'Ext.DataView',
    xtype: 'timeline',

    cls: 'timeline-items-wrap',

    scrollable: false,

    store: {
        autoLoad: true,
        data: [
            {
                "_id": 642,
                "name": "xxx",
                "content": "填写表单",
                "date": '1521243500010',
                "userId": 6,
            },
            {
                "_id": 351,
                "name": "xxxx",
                "content": "xxxxxxxx",
                "date": "1521283500010",
                "userId": 7,
                "notificationType": "comment"  },
            {
                "_id": 3,
                "name": "xxxx",
                "content": "xxxxxxxx",
                "date": "1521283500010",
                "userId": 7,
                "notificationType": "comment"  },
            {
                "_id": 1,
                "name": "xxxx",
                "content": "xxxxxxxx",
                "date": "1521283500010",
                "userId": 7,
                "notificationType": "comment"  },
            {
                "_id": 2,
                "name": "xxxx",
                "content": "xxxxxxxx",
                "date": "1521283500010",
                "userId": 7,
                "notificationType": "comment"  },
            {
                "_id": 51,
                "name": "xxxx",
                "content": "xxxxxxxx",
                "date": "1521283500010",
                "userId": 7,
                "notificationType": "comment"  },
            {
                "_id": 31,
                "name": "xxxx",
                "content": "xxxxxxxx",
                "date": "1521283500010",
                "userId": 7,
                "notificationType": "comment"
            }
        ]
    },
    store1: {
        autoLoad: true,
        proxy: {
            type: 'ajax2',
            url: 'app/store/data/ops/rzgl/rzgl.json'
        }
    },


    itemSelector: '.timeline-item',

    itemTpl: [
        '<div class="timeline-item{userId:this.cls(values,parent[xindex-2],xindex-1,xcount)}">' +
        '<div class="profile-pic-wrap" style="">' +
        '</div>' +
        '<tpl>' +
        '<div class="line-wrap">' +
        '<div class="contents-wrap">' +
        '<div style="float:left"><span class="shared-by"><a href="#">{name}</a></span></div>' + '<div style="text-align: right"><span>{date:this.elapsed} 前</span></div>' +
        '<div style="margin-top: 10px">{content}</div>' +
        '</div>' +
        '</div>' +
        '</tpl>' +
        '</div>',
        {
            cls: function (value, record, previous, index, count) {
                var cls = '';

                if (!index) {
                    cls += ' timeline-item-first';
                }
                if (index + 1 === count) {
                    cls += ' timeline-item-last';
                }

                return cls;
            },

            elapsed: function (value) {
                var now = Date.now();
                // now = +new Date("2018/03/22 09:35:00"); // 9:15 PM (For demo only)
                // var now = '1521683500010';
                var seconds = Math.floor((now - value) / 1000),
                    minutes = Math.floor(seconds / 60),
                    hours = Math.floor(minutes / 60),
                    days = Math.floor(hours / 24),
                    weeks = Math.floor(days / 7),
                    months = Math.floor(days / 30),
                    years = Math.floor(days / 365),
                    ret;

                months %= 12;
                weeks %= 52;
                days %= 365;
                hours %= 24;
                minutes %= 60;
                seconds %= 60;
                if (years) {
                    ret = this.part(years, '年');
                    ret += this.part(months, '月', ' ');
                } else if (months) {
                    ret = this.part(months, '月');
                    ret += this.part(days, '天', ' ');
                } else if (weeks) {
                    ret = this.part(weeks, '周');
                    ret += this.part(days, '天', ' ');
                } else if (days) {
                    ret = this.part(days, '天');
                    ret += this.part(hours, '小时', ' ');
                } else if (hours) {
                    ret = this.part(hours, '小时');
                } else if (minutes) {
                    ret = this.part(minutes, '分钟');
                } else {
                    ret = this.part(seconds, '秒');
                }
                return ret;
            },

            epoch: function (value, record, previous, index, count) {
                var previousValue = previous &&
                    (previous.isModel ? previous.data : previous)['date'];

                // TODO use previousValue and value to determine "Yesterday", "Last week",
                // "Last month", etc...

                // if (index === 4) {
                //     return '<div class="timeline-epoch">Yesterday</div>';
                // }

                return '';
            },

            part: function (value, type, gap) {
                var ret = value ? (gap || '') + value + ' ' + type : '';
                // if (value > 1) {
                //     ret += 's';
                // }
                return ret;
            }
        }
    ]
});
