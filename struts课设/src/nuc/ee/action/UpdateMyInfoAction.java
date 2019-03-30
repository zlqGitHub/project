package nuc.ee.action;

import com.opensymphony.xwork2.ActionContext;


import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import nuc.ee.dao.UserDao;
import nuc.ee.model.User;

//修改我的个人信息  更新update
@SuppressWarnings("serial")
public class UpdateMyInfoAction extends ActionSupport implements ModelDriven<User> {

	User stu = new User();    //封装修改个人信息后的值
	UserDao dao = new UserDao();
	
	public User getStu() {
		return stu;
	}

	public void setStu(User stu) {
		this.stu = stu;
	}

	public String UpdateMyInfoMethod() {
		int user = (int) ActionContext.getContext().getSession().get("userid");
		String pass = (String) ActionContext.getContext().getSession().get("pass");
		String tel = (String) ActionContext.getContext().getSession().get("tel");
		System.out.println("pp"+pass+" "+tel+" "+user);	  //session域中的值
		System.out.println("aa"+stu.getPassword());
		System.out.println("bb"+stu.getTelphone());
		//密码、电话未修改
		if(stu.getPassword().equals(pass) && stu.getTelphone().equals(tel)) {  
			dao.updateMyInfo(user, pass, tel);
//			System.out.println(i);
		}
		//密码未修改，电话修改
		else if(stu.getPassword().equals(pass) && !stu.getTelphone().equals(tel)) {
			dao.updateMyInfo(user, pass, stu.getTelphone());
		}
		//密码修改，电话未修改
		else if(!stu.getPassword().equals(pass) && stu.getTelphone().equals(tel)) {
			dao.updateMyInfo(user, stu.getPassword(), tel);
		}
		//都修改
		else {
			dao.updateMyInfo(user, stu.getPassword(), stu.getTelphone());
		}
		this.addFieldError("error", "请重新登录");
		return "updateMyInfoOK";
	}

	@Override
	public User getModel() {
		// TODO Auto-generated method stub
		return stu;
	}

}


