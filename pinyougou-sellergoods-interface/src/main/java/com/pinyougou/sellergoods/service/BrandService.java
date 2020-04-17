package com.pinyougou.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;

/**
 * 品牌服务接口
 * @author 12510
 *
 */
public interface BrandService {

	/**
	 * 返回全部列表
	 * @return
	 */
	public List<TbBrand> findAll();
	
	/**
	 * 返回分页结果数据
	 * @param pageNum 当前页数
	 * @param pageSize 每页记录数
	 * @return
	 */
	public PageResult findPage(int pageNum, int pageSize);
	
	/**
	 * 品牌增加
	 * @param brand
	 */
	public void add(TbBrand brand);
	
	/**
	 * 根据Id查询品牌
	 * @param id
	 * @return
	 */
	public TbBrand findOne(Long id);
	
	/**
	 * 品牌更新
	 * @param brand
	 */
	public void update(TbBrand brand);
	
	/**
	 * 删除
	 * @param ids
	 */
	public void delete(Long[] ids);
	
	/**
	 * 条件查询 并返回分页结果
	 * @param brand
	 * @param pageNum
	 * @param pageSize
	 * @return
	 */
	public PageResult findPage(TbBrand brand ,int pageNum , int pageSize);
	
	/**
	 * 品牌下拉框数据
	 * @return
	 */
	public List<Map<Long, String>> selectOptionList();
}
