$(function(){
	console.log('dom loaded');
	//文档加载完成
	var $todoForm = $('#todoForm');
	var $todoInput = $('#todoInput');
	var $todoCount = $('#todoCount');
	var $todoList = $('#todoList');

	var fresh = function(){
		$todoCount.html('当前记录总数为: ' + $todoList.children().length);
	};

	// var remove = function(itemList, index){
	// 	var item = itemList[index-1];
	// 	$(item.parentNode).remove();
	// }

	$todoForm.submit(function(e){
		e.preventDefault();
		//新增一条记录
		$todoList.append('<li>' + $todoInput.val() + '&nbsp;<a href="#" class="listItem">x</a></li>');
		$todoInput.val('')
		// var itemList = $('.listItem');
		// for(var t=0; t<itemList.length; t++){
		// 	$(itemList[t]).click(function(){
		// 		// $(itemList[0].parent).remove(); //把点击记录删除
		// 		remove(itemList,t);
		// 	});
		// }
		//刷新数量信息
		fresh();
	});

	//绑定click event，click时删除对应记录
	$todoList.on('click','.listItem',function(e){
		$(this).parent().remove();
		fresh();
	});

	fresh();
})