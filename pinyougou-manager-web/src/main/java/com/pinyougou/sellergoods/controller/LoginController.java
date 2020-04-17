package com.pinyougou.sellergoods.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 
 * @author 12510
 *
 */

@RestController
@RequestMapping("/login")
public class LoginController {

	@RequestMapping("/name")
	public Map<String, String> getName(){
		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		
		Map<String, String> map = new HashMap<>();
		map.put("loginName", name);
		return map;
	}
}
