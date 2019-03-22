Ext.define('Cmdb.view.monitor.zkt.ZktTimeline', {
    extend: 'Ext.DataView',
    xtype: 'zkt-timeline',

    cls: 'timeline-items-wrap',

    scrollable: false,

    store1: {
        autoLoad: true,
        data: [
            {
                "_id": 642,
                "name": "陈薇",
                "content": "云资源检测到1项安全异常",
                // "date": "8/23/2015",
                // "time": "8:45 PM",
                // "timeElapsed": "30 Min",
                "date": '1521682500010',
                "userId": 6,
                "notificationType": "comment"
            },
            {
                "_id": 351,
                "name": "方荣",
                "content": "接口调用发现一项异常，异常原因：服务器的带宽、内存、CPU、存储空间等不足。",
                "date": "1521283500010",
                "userId": 7,
                "notificationType": "comment"
            },
            {
                "_id": 553,
                "name": "莫智胜",
                "content": "云资源磁盘空间内存不足。",
                "date": "1521243500010",
                "userId": 8,
                "notificationType": "comment"
            },
            {
                "_id": 232,
                "name": "陈薇",
                "content": "接口调用超时",
                "date": "1520283500010",
                "userId": 9,
                "notificationType": "comment"
            },
            //------------------- YESTERDAY ---------------------
            {
                "_id": 775,
                "name": "王石",
                "content": "数据开放访问异常",
                "date": "1521283501010",
                "userId": 12,
                "notificationType": "comment"
            },
            {
                "_id": 247,
                "name": "陈薇",
                "content": "网络异常",
                "date": "1511283500010",
                "userId": 14,
                "notificationType": "comment"
            }
        ]
    },
    store: {
        autoLoad: true,
        proxy: {
            type: 'ajax2',
            url: 'app/store/data/ops/rzgl/rzgl.json'
        }
    },


    itemSelector: '.timeline-item',

    itemTpl: [
        '<div class="timeline-item{userId:this.cls(values,parent[xindex-2],xindex-1,xcount)}">' +
        // '{date:this.epoch(values,parent[xindex-2],xindex-1,xcount)}' +
        '<div class="profile-pic-wrap" style="">' +
        // '<div style="width: 46px;height: 46px"></div>' +
        // '<div>{date:this.elapsed} 前</div>' +
        '</div>' +
        '<tpl if="notificationType == \'image_sharing\'">' +
        '<div class="line-wrap">' +
        '<div class="contents-wrap">' +
        '<div class="shared-by"><a href="#">{name}</a> shared an image</div>' +
        // '<img src="resources/images/img2.jpg" class="shared-img" alt="Smiley face">' +
        '</div>' +
        '</div>' +
        '<tpl elseif="notificationType == \'job_meeting\'">' +
        '<div class="line-wrap">' +
        '<div class="contents-wrap">' +
        '<div class="job-meeting"><a href="#">Job Meeting</a></div>' +
        '<div>{content}</div>' +
        '</div>' +
        '</div>' +
        '<tpl elseif="notificationType == \'comment_reply\'">' +
        '<div class="line-wrap">' +
        '<div class="contents-wrap">' +
        '<div class="shared-by"><a href="#">{name}</a> commented on The Article</div>' +
        '<div class="article-comment"><span class="x-fa fa-quote-left"></span>{content}</div>' +
        '</div>' +
        '</div>' +
        '<tpl elseif="notificationType == \'new_follower\'">' +
        '<div class="line-wrap">' +
        '<div class="contents-wrap">' +
        '<div class="followed-by">' +
        // '<img src="resources/images/user-profile/10.png" alt="Smiley face">' +
        '<div class="followed-by-inner"><a href="#">{name}</a> followed you.</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<tpl elseif="notificationType == \'comment\'">' +
        '<div class="line-wrap">' +
        '<div class="contents-wrap">' +
        '<div style="float:left"><span class="shared-by"><a href="#">{name}</a></span></div>' + '<div style="text-align: right"><span>{date:this.elapsed} 前</span></div>' +
        '<div style="margin-top: 10px">{content}</div>' +
        '</div>' +
        '</div>' +
        '<tpl elseif="notificationType == \'like\'">' +
        '<div >' +
        '<div class="contents-wrap">' +
        '<div class="followed-by">' +
        //class="line-wrap"  class="contents-wrap"class="shared-by"
        // '<img src="resources/images/user-profile/1.png" alt="Smiley face">' +
        '<div class="followed-by-inner"><a href="#">{name}</a> Like The Article.</div>' +
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
