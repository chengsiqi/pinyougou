// 自定义 controller  一个基本的baseController
app.controller("baseController",function($scope){
	
	// 分页控件配置
	$scope.paginationConf = {
		currentPage: 1,	// 当前页
		totalItems: 10,	// 总记录数
		itemsPerPage: 10, // 每页记录数
		perPageOptions: [10, 20, 30, 40, 50], // 分页选项 用来选择每页记录数
		onChange: function(){ // 当页码变更后触发的方法  初始化加载的时候也会触发
			$scope.reloadList();
		}
	}
	
	// 刷新列表
	$scope.reloadList = function(){
		// 切换页码
		$scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
	}
	
	$scope.selectIds=[]; //用户勾选的复选框ID集合
	
	//（1）数组的push方法：向数组中添加元素
	//（2）数组的splice方法：从数组的指定位置移除指定个数的元素 ，参数1为位置  ，参数2位移除的个数 
	//（3）复选框的checked属性：用于判断是否被选中
	$scope.updateSelection = function($event,id){
		if($event.target.checked){
			// 如果复选框被选中
			$scope.selectIds.push(id); 
		}else{
			var index = $scope.selectIds.indexOf(id);
			$scope.selectIds.splice(index,1);
		}
	}
	
	//提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
	$scope.jsonToString = function(jsonString,key){
		var json = JSON.parse(jsonString);
		var result='';
		
		for (var i = 0; i < json.length; i++) {
			if(i>0){
				result += ",";
			}
			result += json[i][key];
		}
		return result;
	}
	
});