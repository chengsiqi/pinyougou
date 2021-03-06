 //控制层 
app.controller('typeTemplateController' ,function($scope,$controller,typeTemplateService,brandService,specificationService){	
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		typeTemplateService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		typeTemplateService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//查询实体 
	$scope.findOne=function(id){				
		typeTemplateService.findOne(id).success(
			function(response){
				$scope.entity= response;
				// 从数据库中查询出来的是字符串，我们必须将其转换为json对象才能实现信息的回显。
				$scope.entity.brandIds = JSON.parse(response.brandIds); // 字符串要转换成json对象  转换品牌列表
				$scope.entity.specIds = JSON.parse(response.specIds); // 字符串要转换成json对象 转换规格列表
				$scope.entity.customAttributeItems = JSON.parse(response.customAttributeItems); // 字符串要转换成json对象 转换扩展属性列表
			}
		);				
	}
	
	//保存 
	$scope.save=function(){				
		var serviceObject;//服务层对象  				
		if($scope.entity.id!=null){//如果有ID
			serviceObject=typeTemplateService.update( $scope.entity ); //修改  
		}else{
			serviceObject=typeTemplateService.add( $scope.entity  );//增加 
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
			typeTemplateService.dele($scope.selectIds).success(
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
		typeTemplateService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//select2 需要的数据格式
	//$scope.brandList = {data:[{"id":"1","text":"联想"},{"id":"2","text":"华为"}]};
	
	// 初始化品牌列表
	$scope.brandList = {data:[]}; 
    // 读取品牌列表
	$scope.findBrandList = function(){
		brandService.selectOptionList().success(
			function(response){
				$scope.brandList.data = response;
				//$scope.brandList = {data:response};
			}
		);
	}
	
	// 初始化规格列表
	$scope.specList = {data:[]}; 
    // 读取规格列表
	$scope.findSpecList = function(){
		specificationService.selectOptionList().success(
			function(response){
				// $scope.brandList.data = response;
				$scope.specList = {data:response};
			}
		);
	}
	
	// 增加 扩展属性行
	$scope.addTableRow = function(){
		$scope.entity.customAttributeItems.push({});
	}
	
	// 删除 扩展属性行
	$scope.deleTableRow = function(index){
		$scope.entity.customAttributeItems.splice(index,1);
	}
});	
