Ext.define('gridpractice.controller.Main', {
    extend: 'Ext.app.Controller',
    views:['List','Add'],
	stores:['Users'],
	models:['User'],
		init: function(){
		this.control({
			'viewport > userlist':{
				itemclick: function(dv, record, item, index, e){
				this.index = index;
				}
			},
			'viewport > button[action=add]':{
				click: this.addUser
			},
			'viewport > button[action=delete]':{
				click: this.removeUser
			},
			'useradd button[action=save]':{
				click: this.updateUser
			}
			
		});
	},

	addUser: function(grid,record){
		var view = Ext.widget('useradd');
		// view.down('form').loadRecord(record);
	},

	updateUser: function(button){
    	var win = button.up('window'),
			form = win.down('form'),	
			values = form.getValues();
			grid.getStore().add(values);
			grid.getStore().sort();
			win.close();
			this.getUsersStore().sync();
			grid.getView().refresh();
	},

	removeUser: function(){
		grid.getStore().removeAt(this.index);
		grid.getView().refresh();
	}


});