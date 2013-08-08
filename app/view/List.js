Ext.define('gridpractice.view.List',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.userlist',

	title: 'All Users',

	store: 'Users',
	plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
     ],

	initComponent: function(){
		this.columns = [
			{header: 'Id', dataIndex: 'id', flex:1, editor: 'textfield'},
			{header: 'Name', dataIndex: 'name', flex:1, editor: 'textfield'},
		];

		this.callParent(arguments);
	}
});