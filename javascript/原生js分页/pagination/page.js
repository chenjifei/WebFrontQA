(function(w) {
	w.Paging = function(settings) {
		var options = Object.assign({}, settings);
		var page = new Paging();
		page.init(options);
	};

	function Paging() {
		var rnd = Math.random().toString().replace('.', '');
		this.id = "Paging_" + rnd;
	}
	Paging.prototype = {
		init: function(settings) {
			this.settings = Object.assign({
				callback: null,
				pagesize: 10,
				current: 1,
				first: '首页',
				prev: '上一页',
				next: '下一页',
				last: '末页',
				toolbar: false,
				pageSizeList: [10, 15, 20],
				pagenum: 7
			}, settings);

			this.target = document.querySelector(this.settings.target);
			this.container = document.createElement("div");
			this.container.className = 'ui-paging-container';
			this.container.setAttribute("id", this.id);
			this.target.append(this.container);

			this.render(this.settings);
			this.format();
			this.bindEvent();
		},
		render: function(ops) {
			this.count = ops.count || this.settings.count;
			this.pagesize = ops.pagesize || this.settings.pagesize;
			this.current = ops.current || this.settings.current;
			this.pagecount = Math.ceil(this.count / this.pagesize);
			this.pagenum = ops.pagenum || this.settings.pagenum;
			this.format();
		},
		bindEvent: function() {
			var _this = this;
			this.container.addEventListener("click", function(e) {
				var target = e.target.className;
				if(target.indexOf('ui-pager-disabled') != -1 
				|| target.indexOf("focus") != -1
				|| e.target.nodeName.toLowerCase() == "input"
				|| e.target.nodeName.toLowerCase() == "select"
				|| e.target.nodeName.toLowerCase() == "a"
				|| e.target.nodeName.toLowerCase() == "option") {
					return false;
				}
				if(target.indexOf("js-page-action") != -1) {
					if(target.indexOf("js-page-first") != -1) {
						_this.current = 1;
					}
					if(target.indexOf("js-page-prev") != -1) {
						_this.current = Math.max(1, _this.current - 1);
					}
					if(target.indexOf("js-page-next") != -1) {
						_this.current = Math.min(_this.pagecount, _this.current + 1);
					}
					if(target.indexOf("js-page-last") != -1) {
						_this.current = _this.pagecount;
					}
				} else if(e.target.getAttribute("data-page")) {
					_this.current = parseInt(e.target.getAttribute("data-page"))
				}
				_this.go();
			});
		},
		go: function(p) {
			var _this = this;
			this.current = p || this.current;
			this.current = Math.max(1, _this.current);
			this.current = Math.min(this.current, _this.pagecount);
			this.format();
			this.settings.callback && this.settings.callback(this.current, this.pagesize, this.pagecount);

		},
		changePagesize: function(ps) {
			this.render({
				pagesize: ps
			})
		},
		format: function() {
			var ul = document.createElement("ul");
			var firstLi = this.createEle("li", "js-page-first js-page-action ui-pager", this.settings.first)
			ul.append(firstLi);
			var prevLi = this.createEle("li", "js-page-prev js-page-action ui-pager", this.settings.prev);
			ul.append(prevLi);
			ul.append(this.contact(this.current, this.pagenum, this.pagecount))
			var nextLi = this.createEle("li", "js-page-next js-page-action ui-pager", this.settings.next);
			ul.append(nextLi);
			var lastLi = this.createEle("li", "js-page-last js-page-action ui-pager", this.settings.last);
			ul.append(lastLi);
			this.container.innerHTML = "";
			this.container.append(ul);
			if(this.current == 1) {
				document.querySelector(".js-page-prev").className += ' ui-pager-disabled';
				document.querySelector(".js-page-first").className += ' ui-pager-disabled';
			}
			if(this.current == this.pagecount) {
				document.querySelector(".js-page-next").className += ' ui-pager-disabled';
				document.querySelector(".js-page-last").className += ' ui-pager-disabled';
			}
			document.querySelector('li[data-page="' + this.current + '"]').className += " focus";
			this.removeSiblingsStyle(document.querySelector('li[data-page="' + this.current + '"]'));
			if(this.settings.toolbar) {
				this.bindToolbar();
			}
		},
		bindToolbar: function() {
			var _this = this;
			var li = document.createElement("li");
			li.className = 'ui-paging-toolbar';
			var selectEle = document.createElement("select");
			selectEle.className = "ui-select-pagesize";
			var inputEle = document.createElement("input");
			inputEle.className = 'ui-paging-count';
			var aEle = document.createElement("a");
			aEle.textContent = "跳转";
			aEle.setAttribute("href", "javascript:void(0)");
			for(var i = 0, l = this.settings.pageSizeList.length; i < l; i++) {
				var optionEle = document.createElement("option");
				optionEle.setAttribute("value", this.settings.pageSizeList[i]);
				optionEle.textContent = this.settings.pageSizeList[i] + '条/页';
				selectEle.append(optionEle)
			}
			for(var s = 0;s<selectEle.options.length;s++){
				 if(selectEle.options[s].value == this.pagesize){  
			        selectEle.options[s].selected = true;  
			        break;  
			    }  
			}
			inputEle.value = this.current;
			inputEle.addEventListener("click", function() {
						this.focus();
			}, false);
			inputEle.addEventListener("keydown", function(e) {
				if(e.keyCode == 13) {
					var current = parseInt(this.value) || 1;
					_this.go(current);
				}
			}, false);
			aEle.addEventListener("click", function() {
				var current = parseInt(this.previousSibling.value) || 1;
				_this.go(current);
			}, false);
			selectEle.addEventListener("change", function() {
				_this.changePagesize(this.value);
			}, false);
			li.append(selectEle);
			li.append(inputEle);
			li.append(aEle);
			this.container.childNodes[0].append(li);
		},
		contact: function(curpage, pageNum, totalpage) {
			var start = 1,
				end = totalpage,
				html = '';
			if(pageNum % 2 != 0) {
				var pageoffset = (pageNum - 1) / 2;
				if(totalpage > pageNum) {
					if(curpage > pageoffset) {
						start = curpage - pageoffset;
						end = totalpage > curpage + pageoffset ? curpage + pageoffset : totalpage;
					} else {
						start = 1;
						end = totalpage > pageNum ? pageNum : totalpage;
					}
					if(curpage + pageoffset > totalpage) {
						start = start - (curpage + pageoffset - end);
					}
				}
			} else {
				//偶数时确保当前页前面的页数比后面少一页
				var pageoffset = pageNum / 2,
					pageprevoffset = pageoffset - 1,
					pagenextoffset = pageoffset;
				if(totalpage > pageNum) {
					if(curpage > pageprevoffset) {
						start = curpage - pageprevoffset;
						end = totalpage > curpage + pagenextoffset ? curpage + pagenextoffset : totalpage
					} else {
						start = 1;
						end = totalpage > pageNum ? pageNum : totalpage;
					}
					if(curpage + pagenextoffset > totalpage) {
						start = start - (curpage + pagenextoffset - end);
					}
				}
			}
			var frg = document.createDocumentFragment();
			for(var i = start; i <= end; i++) {
				var li = this.createEle("li", "ui-pager", i);
				li.setAttribute("data-page", i);
				frg.append(li);
			}
			return frg;
		},
		removeSiblingsStyle: function(ele) {
			var b = ele.parentNode.childNodes;
			for(var i = 0; i < b.length; i++) {
				if(b[i] != ele) {
					b[i].className.replace(" focus", '');
				}
			}
		},
		createEle: function(tag, classname, textContent) {
			var $tag = document.createElement(tag);
			$tag.className = classname;
			$tag.textContent = textContent;
			return $tag;
		}
	}
})(this);