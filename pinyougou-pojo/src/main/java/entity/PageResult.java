package entity;

import java.io.Serializable;
import java.util.List;

/**
 * 分页结果封装对象
 * @author 12510
 *
 */
public class PageResult implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2740111006651432734L;

	private long total; //总记录数
	
	private List rows; //当前页结果

	public PageResult(long total, List rows) {
		super();
		this.total = total;
		this.rows = rows;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

	public List getRows() {
		return rows;
	}

	public void setRows(List rows) {
		this.rows = rows;
	}
	
}
