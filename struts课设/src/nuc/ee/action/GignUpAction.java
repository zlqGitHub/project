package nuc.ee.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionContext;

import com.opensymphony.xwork2.ActionSupport;

import nuc.ee.model.Course;
import nuc.ee.service.CourseService;
import nuc.ee.service.UserService;

@SuppressWarnings("serial")
public class GignUpAction extends ActionSupport{
	UserService us = new UserService();
	CourseService cs = new CourseService();
	int num;
	
	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}
	
	List<Course> csList = new ArrayList<Course>();
	
	public List<Course> getCsList() {
		return csList;
	}

	public void setCsList(List<Course> csList) {
		this.csList = csList;
	}
	public String execute() {
		csList = cs.get_course();
		int userid = (int) ActionContext.getContext().getSession().get("userid");
		num = us.get_change(userid);  //获取学生还可提交报名的次数
		ActionContext.getContext().getSession().put("num", num);
		return "success";
	}
		
}
