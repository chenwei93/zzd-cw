Ext.define('DRDMS.view.entry.EntryEditPanelWizard', {
    extend: 'Ext.panel.Panel',
    xtype: 'entryedit-panelwizard',
    bodyPadding: 5,
    layout: 'card',

    controller: 'entry-edit',

    defaultFocus: 'entryedit-formbase',
    viewModel: {
        type: 'entry-edit'
    },

    defaults: {
        /*
         * Seek out the first enabled, focusable, empty textfield when the form is focused
         */
        defaultFocus: 'textfield:not([value]):focusable:not([disabled])',

        defaultButton: 'nextbutton'
    },

    items: [
        {
            xtype: 'entryedit-formbase',
            bodyPadding: 10,
            reference: 'baseForm',
            border: true,
            scrollable: true
        },
        {
            xtype: 'entryedit-formext',
            border: true,
            bodyPadding: 10,
            scrollable: true

        },
        {
            xtype: 'entryedit-griddataset',
            border: true,
            bodyPadding: 0,
            scrollable: true

        }
    ],
    bbar: ['->', {
        // margin: 8,
        text: '上一步',
        ui: 'default',
        bind: {
            disabled: '{atBeginning}'
        },
        listeners: {
            click: 'onPreviousClick'
        }
    }, {
        text: '下一步',
        ui: 'default',
        reference: 'nextbutton',
        bind: {
            disabled: '{atEnd}'
        },
        listeners: {
            click: 'onNextClick'
        }
    }],
    tbar: {
        hidden: true,
        reference: 'progress',
        defaultButtonUI: 'wizard-blue',
        cls: 'wizardprogressbar',
        defaults: {
            disabled: true,
            iconAlign: 'top'
        },
        layout: {
            pack: 'center'
        },
        items: [
            {
                step: 0,
                // iconCls: 'fa fa-info',
                pressed: true,
                enableToggle: true,
                text: '基本属性'
            },
            {
                step: 1,
                // iconCls: 'fa fa-user',
                enableToggle: true,
                text: '扩展属性'
            },
            {
                step: 2,
                // iconCls: 'fa fa-home',
                enableToggle: true,
                text: '资源结构'

            }]

    }
});
