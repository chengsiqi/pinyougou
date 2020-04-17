 //控制层 
app.controller('specificationController' ,function($scope,$controller,specificationService){	
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		specificationService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		specificationService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//查询实体 
	$scope.findOne=function(id){				
		specificationService.findOne(id).success(
			function(response){
				$scope.entity= response;					
			}
		);				
	}
	
	//保存 
	$scope.save=function(){				
		var serviceObject;//服务层对象  				
		if($scope.entity.specification.id!=null){//如果有ID
			serviceObject=specificationService.update( $scope.entity ); //修改  
		}else{
			serviceObject=specificationService.add( $scope.entity  );//增加 
		}				
		serviceObject.success(
			function(response){
				if(response.success){
					//重新查询 
		        	$scope.reloadList();//重新加载
				}else{
					alert(response.message);
				}
			}		
		);				
	}
	
	// 批量删除
	$scope.dele =function(){
		if($scope.selectIds.length>0){
			specificationService.dele($scope.selectIds).success(
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
			alert("请选择要删除的数据！");
		}
	}
	
	$scope.searchEntity={};//定义搜索对象 
	
	//搜索
	$scope.search=function(page,rows){			
		specificationService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
    
	// 增加规格选项行
	// 注意：要修改specification.html “新建”按钮，弹出窗口时对entity进行初始化specificationOptionList集合，否则向集合添加数据时会报错！
	$scope.addTableRow = function(){
		$scope.entity.specificationOptionList.push({});
	}
	
	// 在每一行将索引值传递给集合，在集合中删除。
	// 删除 规格选项行
	$scope.deleTableRow = function(index){
		$scope.entity.specificationOptionList.splice(index,1);
	}
});	
