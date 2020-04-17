package entity;

import java.io.Serializable;

/**
 * 封装返回结果实体
 * @author 12510
 *
 */
public class Result implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8946453797496982517L;

	private boolean success; // 操作是否成功
	
	private String message; // 结果信息

	public Result(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
