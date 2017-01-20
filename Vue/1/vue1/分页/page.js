(function(v){
	v.Paging=function(options){
		var settings = Object.assign({},options);
		var page = new Paging();
		page.init(settings);
	}
	function Paging(){
		var rnd = Math.random().toString().replace(".",'');
		this.id = "Paging_" + rnd;
	}
	Paging.prototype={
		init:function(options){
			
		}
	}
})(Vue)
