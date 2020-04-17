package com.pinyougou.pogogroup;

import java.io.Serializable;
import java.util.List;

import com.pinyougou.pojo.TbSpecification;
import com.pinyougou.pojo.TbSpecificationOption;

/**
 * 规格组合实体类
 * @author 12510
 *
 */
public class Specification implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5076465817363274807L;

	private TbSpecification specification;	// 规格信息
	
	private List<TbSpecificationOption> specificationOptionList;	// 规格选项信息

	public TbSpecification getSpecification() {
		return specification;
	}

	public void setSpecification(TbSpecification specification) {
		this.specification = specification;
	}

	public List<TbSpecificationOption> getSpecificationOptionList() {
		return specificationOptionList;
	}

	public void setSpecificationOptionList(List<TbSpecificationOption> specificationOptionList) {
		this.specificationOptionList = specificationOptionList;
	}

	public Specification() {
		super();
	}

	public Specification(TbSpecification specification, List<TbSpecificationOption> specificationOptionList) {
		super();
		this.specification = specification;
		this.specificationOptionList = specificationOptionList;
	}
}
