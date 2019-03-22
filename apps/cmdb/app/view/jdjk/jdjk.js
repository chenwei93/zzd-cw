(function () {

    var Log = {
        elem: false,
        write: function (text) {
            if (!this.elem)
                this.elem = document.getElementById('log');
            this.elem.innerHTML = text;
            // this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
        }
    };
    //init data
    var init = function () {
        var json = {
            id: "zh",
            name: "云主机001",
            data: {
                name: 'zh',
                status: 'open'
            },
            children: [{
                id: "sbj",
                name: "PC服务器001",
                data: {
                    name: 'sbj',
                    status: 'open'
                },
                children: []
            }, {
                id: "hp",
                name: "PC服务器002",
                data: {
                    name: 'sbj',
                    status: 'open'
                },
                children: []
            }, {
                id: "bh",
                name: "PC服务器003",
                data: {
                    name: 'sbj',
                    status: 'open'

                },
                children: []
            }, {
                id: "bd",
                name: "PC服务器004",
                data: {
                    name: 'sbj',
                    status: 'open'
                },
                children: [] }, {
                id: "bd",
                name: "存储设备001",
                data: {
                    name: 'sbj',
                    status: 'open'
                },
                children: [] }, {
                id: "bd",
                name: "存储设备002",
                data: {
                    name: 'sbj',
                    status: 'open'
                },
                children: []
            }]
        };
        //end
        //init Spacetree
        //Create a new ST instance
        var st = new $jit.ST({
            orientation: "left",
            'injectInto': 'infovis',
            Node: {
                overridable: true,
                width: 200,
                height: 60,
                lineHeight: 60,
                color: '#6495ED'
            },
            //change the animation/transition effect
            transition: $jit.Trans.Quart.easeOut,

            //This method is triggered on label
            //creation. This means that for each node
            //this method is triggered only once.
            //This method is useful for adding event
            //handlers to each node label.


            // onBeforeCompute: function (node) {
            //     Log.write("加载" + node.name);
            // },
            //
            // onAfterCompute: function () {
            //     Log.write("加载完成！");
            // },
            onCreateLabel: function (label, node) {
                //add some styles to the node label
                var style = label.style;
                label.id = node.id;
                style.color = '#fff';
                style.fontSize = '1.3em';
                style.textAlign = 'center';
                style.width = "190px";
                style.height = "60px";
                style.lineHeight = "60px";
                label.innerHTML = node.name;
                label.onclick = function () {
                    st.onClick(node.id);
                };
            },
            onBeforePlotNode: function (node) {
                //add some color to the nodes in the path between the
                //root node and the selected node.
                if (node.selected) {
                    node.data.$color = "#4081B8";
                }
                else {
                    delete node.data.$color;
                    //if the node belongs to the last plotted level
                    if (!node.anySubnode("exist")) {
                        //count children number
                        var count = 0;
                        node.eachSubnode(function (n) {
                            count++;
                        });
                        //assign a node color based on
                        //how many children it has
                        node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];
                    }
                }
            },
            onBeforePlotLine: function (adj) {
                if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                    adj.data.$color = "#87CEFA";
                    adj.data.$lineWidth = 3;
                }
                else {
                    delete adj.data.$color;
                    delete adj.data.$lineWidth;
                }
            },
            onComplete: function () {
                var id = json.id;
                var name = json.data.name,
                    status = json.data.status;

                function cicle(status) {
                    var html = '';
                    if (status == 'open') {
                        html = "<div class='andiv'>" +
                            "<div class='green'></div>" +
                            "<div class='gray'></div>" +
                            "<div class='gray'></div></div>"
                    } else if (status == 'unknow') {
                        html = "<div class='andiv'>" +
                            "<div class='gray'></div>" +
                            "<div class='choosegray'></div>" +
                            "<div class='gray'></div></div>"
                    } else {
                        html = "<div class='andiv'>" +
                            "<div class='gray'></div>" +
                            "<div class='gray'></div>" +
                            "<div class='red'></div></div>"
                    }
                    return html;
                }

                var a = $jit.id(id).innerHTML;
                if (a.indexOf('img') < 0) {
                    $jit.id(id).innerHTML = "<img class='icon' src='images/" + name + ".png' />" + a + cicle(status);
                }

                function childAdd(arr) {
                    var children = arr;
                    for (var i = 0; i < children.length; i++) {
                        var id = children[i].id,
                            status = children[i].data.status,
                            name = children[i].data.name;
                        var html = cicle(status);
                        var _children = children[i]
                        var aDom = $jit.id(id);
                        if (aDom) {
                            var a = aDom.innerHTML;
                            if (a.indexOf('img') < 0) {
                                aDom.innerHTML = "<img class='icon' src='images/" + name + ".png' />" + a + html;
                            }
                            if (_children.children && _children.children.length) {
                                childAdd(_children.children)
                            }


                        }

                    }

                }

                if (json.children && json.children.length) {

                    childAdd(json.children)
                }
                // if (json.children.length != 0) {
                //     var children = json.children;
                //     for (var i = 0; i < children.length; i++) {
                //         var id = children[i].id;
                //         var a = $jit.id(id).innerHTML;
                //         $jit.id(id).innerHTML = "<img src='../resources/logo.png' />" + a;
                //     }
                // }

            }
        });

        //load json data
        st.loadJSON(json);
        //compute node positions and layout
        st.compute();
        //optional: make a translation of the tree
        st.geom.translate(new $jit.Complex(-200, 0), "current");
        //Emulate a click on the root node.
        st.onClick(st.root);
        //end

    };
    init();

})();