package nuc.ee.action;

import java.util.ArrayList;


import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import nuc.ee.model.Company;
import nuc.ee.model.Course;
import nuc.ee.model.GignUp;
import nuc.ee.model.Teacher;
import nuc.ee.model.User;
import nuc.ee.model.UserLogin;
import nuc.ee.service.CourseService;
import nuc.ee.service.UserService;


@SuppressWarnings("serial")
public class LoginAction extends ActionSupport implements ModelDriven<UserLogin>{
	private Course course = new Course();
	User user = new User();
	UserLogin u = new UserLogin();
	UserService us = new UserService();
	List<Company> comList = new ArrayList<Company>();   //保存公司信息 
	List<Teacher> teaList = new ArrayList<Teacher>();   //保存教师信息
	List<User> myInfo = new ArrayList<User>();            //保存个人信息
	GignUp gu = new GignUp();                          //保存个人报名信息
	String classes;                                    //保存自己的分班的信息
	public int userid;
	public String username;
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	int height;

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	CourseService cs = new CourseService();
	
	List<Course> csList = new ArrayList<Course>();
	
	public List<Course> getCsList() {
		return csList;
	}

	public void setCsList(List<Course> csList) {
		this.csList = csList;
	}

	public List<Company> getComList() {
		return comList;
	}

	public void setComList(List<Company> comList) {
		this.comList = comList;
	}

	public List<Teacher> getTeaList() {
		return teaList;
	}

	public void setTeaList(List<Teacher> teaList) {
		this.teaList = teaList;
	}
	
	public List<User> getMyInfo() {
		return myInfo;
	}

	public void setMyInfo(List<User> myInfo) {
		this.myInfo = myInfo;
	}

	public GignUp getGu() {
		return gu;
	}

	public void setGu(GignUp gu) {
		this.gu = gu;
	}

	public String getClasses() {
		return classes;
	}

	public void setClasses(String classes) {
		this.classes = classes;
	}

	public String LoginMethod() {
		System.out.println("u="+u.getUserid());
		user = us.login_user(u);   
		if(user != null && user.getUserid() != 0) {
			ActionContext.getContext().getSession().put("userid", user.getUserid());
			ActionContext.getContext().getSession().put("username", user.getUsername());
			userid = user.getUserid();
			username = user.getUsername();
			csList = cs.get_course();
			comList = us.get_company();
			teaList = us.get_teacher();
			myInfo = us.myInfo_select(user.getUserid());
			gu = us.get_gignUp(user.getUserid());
			classes = us.get_class(user.getUserid());
			if(classes == null) {
				classes = "暂未分班";
			}
			System.out.println("myInfo="+myInfo);
			//将个人信息保存
			ActionContext.getContext().getSession().put("pass",myInfo.iterator().next().getPassword());
			ActionContext.getContext().getSession().put("tel",myInfo.iterator().next().getTelphone());
			
			ActionContext.getContext().getSession().put("classes", classes);
			ActionContext.getContext().getSession().put("gu", gu);
			ActionContext.getContext().getSession().put("myInfo", myInfo);
			ActionContext.getContext().getSession().put("csList", csList);
			ActionContext.getContext().getSession().put("teaList", teaList);
			ActionContext.getContext().getSession().put("comList", comList);
			height = (int) ((Math.ceil((csList.size()/2.0))*187));
			ActionContext.getContext().getSession().put("height", height);
//			System.out.println(num);
			
			return "success";
			
		}
		else {
			this.addFieldError("error", "用户名或密码错误");
			return "loginFail";
		}
	}

	@Override
	public UserLogin getModel() {
		// TODO Auto-generated method stub
		return u;
	}
	
}
