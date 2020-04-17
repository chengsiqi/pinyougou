// 首页控制器
app.controller("indexController",function($scope,loginService){
	// 获取用户登录名
	$scope.loginName = function(){
		loginService.loginName().success(
			function(response){
				$scope.loginName = response.loginName;
			}
		);
	}
});