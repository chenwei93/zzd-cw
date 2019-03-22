Ext.define('DRDMS.store.EntryMetadata', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.entrymetadata',

    requires: [
        'Ext.data.TreeStore'
    ],

    folderSort: true,
    rootData: {
        "text": ".",
        "children": [
            {
                "element": "信息资源名称",
                "chi_name": "信息资源名称",
                "define": "缩略描述政务信息资源内容的标题",
                "eng_name": "resourceTitle",
                "data_type": "字符串",
                "range": "自由文本",
                "short_name": "resTitle",
                "note": "必选项；最大出现次数为1",
                "leaf": true,
                "example": "某市矿产资源规划数据库",
                "auto": 1
            },
            {
                "element": "信息资源发布日期",
                "chi_name": "信息资源发布日期",
                "define": "政务信息资源提供方发布共享政务信息资源的日期",
                "eng_name": "dateOfPublication",
                "data_type": "日期型",
                "range": "CCYY-MM-DD",
                "short_name": "pubDate",
                "note": "必选项；最大出现次数为1",
                "leaf": true,
                "example": "2004-02-11",
                "auto": 2
            },
            {
                "element": "信息资源摘要",
                "chi_name": "信息资源摘要",
                "define": "对资源内容进行概要说明的文字",
                "eng_name": "abstract",
                "data_type": "字符串",
                "range": "自由文本",
                "short_name": "abstract",
                "note": "必选项；最大出现次数为1",
                "leaf": true,
                "auto": 3,
                "example": "××市矿产资源规划数据库”包含了××市矿产资源总体规划（2000-2010年）的信息，共21个矿产资源规划专题图层、9个基础地理信息图层、4个基础地质信息图层、14个规划附表和4个规划文档，规划图件所有点、线、面图形元素都按《矿产资源规划数据库标准（试行稿）》建立了相应的属性。空间数据成果以MapGis，ArcInfo E00、Coverage、Shape格式存储，规划附表数据库为DBF、Microsoft Access、Microsoft Word格式，规划文本以Microsoft Word，HTML两种格式存储，规划附图成果图件以MapGis格式存储，规划附表成果文件以Microsoft Word格式存储。自编代码字典为DBF格式。"
            },
            {
                "element": "信息资源提供方",
                "chi_name": "信息资源提供方",
                "define": "对政务信息资源的完整性、正确性、真实性等负有责任的政务部门的名称和地址信息。",
                "eng_name": "PointOfContact",
                "data_type": "复合型",
                "range": "自由文本",
                "short_name": "IdPoC",
                "note": "必选项；最大出现次数为N",
                "example": "××市国土资源和房屋管理局",
                "auto": 4,
                "children": [
                    {
                        "element": "信息资源提供单位",
                        "chi_name": "信息资源提供单位",
                        "define": "提供政务信息资源的单位名称",
                        "eng_name": "organisationName",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "rpOrgNam",
                        "note": "必选项；最大出现次数为1",
                        "leaf": true,
                        "example": "××市国土资源和房屋管理局"
                    },
                    {
                        "element": "信息资源提供方地址",
                        "chi_name": "信息资源提供方地址",
                        "define": "资源提供单位的物理联系地址",
                        "eng_name": "address",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "cntAdd",
                        "note": "可选项；最大出现次数为1",
                        "leaf": true,
                        "example": "××市××区××大街××号"
                    }
                ]
            },
            {
                "element": "关键字说明",
                "chi_name": "关键字说明",
                "define": "说明共享政务信息资源的关键字内容及其依据",
                "eng_name": "DescripriveKeywords",
                "data_type": "复合型",
                "range": "自由文本",
                "short_name": "DescKeys",
                "note": "必选项；最大出现次数为N",
                "example": "矿产资源",
                "auto": 5,
                "children": [
                    {
                        "element": "关键字",
                        "chi_name": "关键字",
                        "define": "用于概括共享政务信息资源主要内容的通用词、形式化词或短语",
                        "eng_name": "keyword",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "keyword",
                        "note": "必选项；最大出现次数为N",
                        "leaf": true,
                        "example": "矿产资源"
                    },
                    {
                        "element": "词典名称",
                        "chi_name": "词典名称",
                        "define": "关键字所属的专业关键字词典的名称",
                        "eng_name": "thesaurusName",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "thesaName",
                        "note": "可选项；最大出现次数为1",
                        "leaf": true,
                        "example": "矿产资源"
                    }
                ]
            },
            {
                "element": "信息资源分类",
                "chi_name": "信息资源分类",
                "define": "说明共享政务信息资源分类方式及其相应的分类信息",
                "eng_name": "ResourceCategory",
                "data_type": "复合型",
                "range": "自由文本",
                "short_name": "TpCat",
                "note": "必选项；最大出现次数为N",
                "example": "xxxxxxxxx",
                "auto": 6,
                "children": [
                    {
                        "element": "分类方式",
                        "chi_name": "分类方式",
                        "define": "说明政务信息资源所采用的分类方式",
                        "eng_name": "categroyStandard",
                        "data_type": "字符串",
                        "range": "主题分类",
                        "short_name": "cateStd",
                        "leaf": true,
                        "note": "必选项；最大出现次数为1",
                        "example": "主题分类"
                    },
                    {
                        "element": "类目名称",
                        "chi_name": "类目名称",
                        "define": "给出对应某种政务信息资源分类方式中某个具体类目",
                        "eng_name": "category name",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "cateName",
                        "leaf": true,
                        "note": "必选项；最大出现次数为1",
                        "example": "矿藏"
                    },
                    {
                        "element": "类目编码",
                        "chi_name": "类目编码",
                        "define": "类目名称对应的编码",
                        "eng_name": "categoryCode",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "cateCode",
                        "note": "必选项；最大出现次数为1",
                        "leaf": true,
                        "example": "ZCC00"
                    }
                ]
            },
            {
                "element": "在线资源链接地址",
                "chi_name": "在线资源链接地址",
                "define": "可以获取共享政务信息资源的网络地址",
                "eng_name": "online",
                "data_type": "字符串",
                "range": "自由文本,按RFC 2396 规定",
                "short_name": "onLineSrc",
                "note": "可选项；最大出现次数为N",
                "leaf": true,
                "example": "http://www.bjgtfgj.gov.cn",
                "auto": 7
            },
            {
                "element": "信息资源标识符",
                "chi_name": "信息资源标识符",
                "define": "政务信息资源的唯一不变的标识编码",
                "eng_name": "resourceID",
                "data_type": "字符串",
                "range": "自由文本",
                "short_name": "resID",
                "note": "必选项；最大出现次数为1",
                "leaf": true,
                "example": "11000/A00034VG345",
                "auto": 8
            },
            {
                "element": "服务信息",
                "chi_name": "服务信息",
                "define": "描述政务信息资源提供者所提供的计算机服务功能接口的基本信息",
                "eng_name": "ServiceInformation",
                "data_type": "复合型",
                "range": "自由文本",
                "short_name": "ServInfo",
                "note": "可选项；最大出现次数为1",
                "example": "xxxxxxxxxxx",
                "auto": 9,
                "children": [
                    {
                        "element": "服务地址",
                        "chi_name": "服务地址",
                        "define": "可以访问服务的网络地址",
                        "eng_name": "serviceURL",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "servURL",
                        "note": "必选项；最大出现次数为1",
                        "leaf": true,
                        "example": "http:// 192.168.0.3:8080/climateservice"
                    },
                    {
                        "element": "服务类型",
                        "chi_name": "服务类型",
                        "define": "服务所属的类型",
                        "eng_name": "serviceType",
                        "data_type": "字符串",
                        "range": "服务类型码",
                        "short_name": "servType",
                        "leaf": true,
                        "note": "必选项；最大出现次数为1",
                        "example": "目录服务"
                    }
                ]
            },
            {
                "element": "元数据标识符",
                "chi_name": "元数据标识符",
                "define": "元数据的唯一标识",
                "eng_name": "metadataIdentifier",
                "data_type": "字符串",
                "range": "自由文本",
                "short_name": "mdId",
                "leaf": true,
                "note": "必选项；最大出现次数为1；必须是第一个著录项目、标识符须唯一、由字母（含下划线（_）短划线（-）点（.）斜线（/）逗号（，）和空格（ ））或数字组成，一般由系统自动随机产生",
                "example": "metadata_ 9660512",
                "auto": 10
            },
            {
                "element": "元数据维护方",
                "chi_name": "元数据维护方",
                "define": "对元数据内容负责的政务部门的名称和地址信息",
                "eng_name": "MetadataContact",
                "data_type": "复合型",
                "range": "自由文本",
                "short_name": "MdContact",
                "note": "可选项；最大出现次数为N",
                "example": "xxxxxx",
                "auto": 11,
                "children": [
                    {
                        "element": "元数据联系单位",
                        "chi_name": "元数据联系单位",
                        "define": "负责单位名称",
                        "eng_name": "organisationName",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "rpOrgName",
                        "note": "必选项；最大出现次数为1",
                        "leaf": true,
                        "example": "××市××局"
                    },
                    {
                        "element": "元数据维护方地址",
                        "chi_name": "元数据维护方地址",
                        "define": "与元数据联系人或联系单位联系的物理地址",
                        "eng_name": "address",
                        "data_type": "字符串",
                        "range": "自由文本",
                        "short_name": "cntAdd",
                        "note": "可选项；最大出现次数为1",
                        "leaf": true,
                        "example": "中国××省××市××区××街××号"
                    }
                ]
            }, {
                "element": "元数据更新日期",
                "chi_name": "元数据更新日期",
                "define": "更新元数据的日期",
                "eng_name": "metadatadateUpdate",
                "data_type": "日期型",
                "range": "CCYY-MM-DD",
                "short_name": "mdDateUpd",
                "note": "可选项；最大出现次数为1",
                "leaf": true,
                "example": "2005-05-12",
                "auto": 12
            }]
    },
    constructor: function (config) {
        // Since records claim the data object given to them, clone the data
        // for each instance.
        config = Ext.apply({
            root: Ext.clone(this.rootData)
        }, config);

        this.callParent([config]);
    }
});