package nuc.ee.service;

import java.util.ArrayList;
import java.util.List;

import nuc.ee.dao.UserDao;
import nuc.ee.model.Company;
import nuc.ee.model.GignUp;
import nuc.ee.model.Teacher;
import nuc.ee.model.User;
import nuc.ee.model.UserLogin;

public class UserService {
	UserDao uDao = new UserDao();
	//注册信息时判断是否已注册
	public int select_user(User u) {
		int i = uDao.regist_select(u);
		return i;
	}
	
	//将注册信息写入表中
	public int insert_user(User u) {
		int i = uDao.user_insert(u);
		return i;
	}
	
	//用户登录
	public User login_user(UserLogin u) {
		User user = new User();
		user = uDao.login_select(u);
		return user;
	}
	
	//用户报名前获取可报名的次数
	public int get_change(int userid) {
		int change = uDao.get_change(userid);
		return change;
	}
	
	//将报名信息写入表中
	public void insert_user(GignUp gp,int num,String time) {
		uDao.insert_user(gp, num, time);
	}
	
	//获取公司信息
	public List<Company> get_company(){
		List<Company> comList = new ArrayList<Company>();
		comList = uDao.get_company();
		return comList;
	}
	
	//获取教师信息
	public List<Teacher> get_teacher(){
		List<Teacher> teaList = new ArrayList<Teacher>();
		teaList = uDao.get_teacher();	
		return teaList;
	}
	
	//查询个人信息
	public List<User> myInfo_select(int userid){
		List<User> list = new ArrayList<User>();
		list = uDao.myInfo_select(userid);
		return list;
	}
	
	//修改个人信息
	public int updateMyInfo(int userid,String pass,String tel) {
		int i = 0;
		i = uDao.updateMyInfo(userid, pass, tel);
		return i;
	}
	
	//获取个人报名信息
	public GignUp get_gignUp(int userid){
		GignUp gu = new GignUp(); 
		gu = uDao.get_gignUp(userid);
		return gu;
	}
	
	//获取自己的分班信息
	public String get_class(int id){
		String classes =null;
		classes = uDao.get_class(id);
		return classes;
	}
}
