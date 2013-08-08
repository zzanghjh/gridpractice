/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'gridpractice',
    controllers: ['Main'],
    
    launch: function(){
    	grid = Ext.create('gridpractice.view.List',{
	    	height:200,
	    	width:500
    	});
    	Ext.create('Ext.container.Viewport',{
    		layout: 'vbox',
    		items:[
    			grid,
    				{
    					xtype:'button',
    					text:'Add',
    					action: 'add',
    					height:50,
    					width:50,
    					
    				},
    				{
    					xtype:'button',
    					text:'Delete',
    					action: 'delete',
    					height:50,
    					width:50,
    					
    				}
    		]
    	});
    }
    
    
});
