Ext.define('Cmdb.view.asset.zcfw.sqsh.Timeline', {
    extend: 'Ext.DataView',
    xtype: 'profiletimeline',

    cls: 'timeline-items-wrap',

    scrollable: false,

    store2: {
        autoLoad: true,
        data: [
            {
                "_id": 642,
                "name": "Marion Williams",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                // "date": "8/23/2015",
                // "time": "8:45 PM",
                // "timeElapsed": "30 Min",
                "date": '1521682500010',
                "userId": 6,
                "notificationType": "image_sharing"
            },
            {
                "_id": 351,
                "name": "Nora Watson",
                "content": "Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date": "1521283500010",
                "userId": 7,
                "notificationType": "job_meeting"
            },
            {
                "_id": 553,
                "name": "Ray Williams",
                "content": "laborum",
                "date": "1521243500010",
                "userId": 8,
                "notificationType": "comment_reply"
            },
            {
                "_id": 232,
                "name": "Marion Brooks",
                "content": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "date": "1520283500010",
                "userId": 9,
                "notificationType": "new_follower"
            },
            //------------------- YESTERDAY ---------------------
            {
                "_id": 775,
                "name": "Nettie Stewart",
                "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date": "1521283501010",
                "userId": 12,
                "notificationType": "comment"
            },
            {
                "_id": 247,
                "name": "Beatrice Carter",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin.",
                "date": "1511283500010",
                "userId": 14,
                "notificationType": "like"
            }
        ]
    },
    store: {
        type: 'timeline'
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
    ],
    listeners: {
        render: function () {
            var store = this.getStore(),
                win = this.up('window');
            if (win != null) {
                store.filterBy(function (record) {
                    if (record.get('tabId') == win.needTabId) {
                        return true
                    } else {
                        return false
                    }
                });
                var btn = document.querySelectorAll('.fa-table');
                if (btn != null) {
                    var store = Ext.getStore('zcfp').getData().items;
                    for (var i = 0; i < btn.length; i++) {
                        btn[i].addEventListener('click', function () {
                            var xtype = this.getAttribute('data-xtype');
                            var date = this.getAttribute('dateS'),
                                tabid = win.needTabId, jude;
                            for (var i in store) {
                                if (store[i].get('dealTime') == date && store[i].get('tabId') == tabid) {
                                    jude = store[i].data;

                                }
                            }
                            Ext.create('Ext.window.Window', {
                                title: '查看',
                                width: 800,
                                height: 550,
                                modal: true,
                                plain: true,
                                alwaysOnTop: true,
                                scrollable: true,
                                items: [{
                                    xtype: xtype,
                                    viewModel: {
                                        data: {
                                            show: jude
                                        }
                                    }
                                }],
                            }).show();
                        })
                    }

                }
            }


        }
    }
});
