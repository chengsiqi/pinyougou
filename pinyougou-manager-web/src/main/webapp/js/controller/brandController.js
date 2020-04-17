// 定义一个控制器   引入自定义服务brandService
app.controller("brandController",function($scope,$controller,brandService){
	
	// 继承基本控制器
	// $controller也是angular提供的一个服务，可以实现伪继承，实际上就是与BaseController共享$scope
	$controller("baseController",{$scope:$scope});
	
	// 查询品牌列表
	$scope.findAll = function(){
		brandService.findAll().success(
			function(response){
				$scope.list = response;
			}
		);
	}
	
	// 分页结果查询
	$scope.findPage = function(page,rows){
		brandService.findPage(page,rows).success(
			function(response){
				$scope.list = response.rows; // 获取分页结果数据
				$scope.paginationConf.totalItems = response.total; // 更新总记录数
			}
		);
	}
	
	// 保存
	$scope.save = function(){
		/* var methodName = 'add'; // 方法名称
		// 判断id是否存在  如果有 执行更新操作
		if($scope.entity.id != null){
			var methodName = 'update';
		}
		$http.post("../brand/"+ methodName +".do",$scope.entity).success(
			function(response){
				if(response.success){
					// 保存成功  刷新列表
					$scope.reloadList();
				}else{
					alert(response.message);
				}
			}
		); */
		
		//定义一个对象
		var serviceObject; //服务层对象  	
		if($scope.entity.id != null){
			serviceObject = brandService.update( $scope.entity ); // 修改
		}else{
			serviceObject = brandService.add( $scope.entity ); // 新增
		}
		serviceObject.success(
			function(response){
				if(response.success){
					// 保存成功  刷新列表
					$scope.reloadList();
				}else{
					alert(response.message);
				}
			}
		); 
	}
	
	// 根据Id查询
	$scope.findOne = function(id){
		brandService.findOne(id).success(
			function(response){
				$scope.entity = response;
			}
		);
	}
	
	// 批量删除
	$scope.dele =function(){
		if($scope.selectIds.length>0){
			brandService.dele($scope.selectIds).success(
				function(response){
   					if(response.success){
   						// 保存成功  刷新列表
   						$scope.reloadList();
   						$scope.selectIds=[];
   					}else{
   						alert(response.message);
   					}
   				}
			);
		}else{
			alert("请选择要删除的数据");
		}
	}
	
	$scope.searchEntity = {} //定义搜索对象
	// 条件查询
	$scope.search = function(page,rows){
		brandService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list = response.rows; // 获取分页结果数据
				$scope.paginationConf.totalItems = response.total; // 更新总记录数
			}
		);
	}
});