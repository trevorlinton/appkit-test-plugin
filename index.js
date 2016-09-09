module.exports = {
	init:function(appkit){
		appkit.args.command('testing','test plugin test',{}, () => { console.log("testing"); });
	},
	update:function(){},
	group:'test-plugin',
	help:'testing plugin loader',
	primary:true
};
