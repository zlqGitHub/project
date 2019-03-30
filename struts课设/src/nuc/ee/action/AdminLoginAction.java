package nuc.ee.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import nuc.ee.model.Admin;
import nuc.ee.model.Course;
import nuc.ee.service.AdminService;
import nuc.ee.service.CourseService;

@SuppressWarnings("serial")
public class AdminLoginAction extends ActionSupport implements ModelDriven<Admin>{
	private Admin ad = new Admin();
	AdminService as = new AdminService();
	List<Admin> adList = new ArrayList<Admin>();
	CourseService cs = new CourseService();
	List<Course> csList = new ArrayList<Course>();
	
	public List<Course> getCsList() {
		return csList;
	}

	public void setCsList(List<Course> csList) {
		this.csList = csList;
	}

	public List<Admin> getAdList() {
		return adList;
	}

	public void setAdList(List<Admin> adList) {
		this.adList = adList;
	}

	public String execute() {
		System.out.println(ad.getAdmin()+ad.getPass()+ad.getType());
		
		int i = as.get_admin(ad.getAdmin(),ad.getPass(),ad.getType());
		
		ActionContext.getContext().getSession().put("type", ad.getType());
		ActionContext.getContext().getSession().put("admin", ad.getAdmin());
	
		if(i == 1) {
			if(ad.getType().equals("学校")) {
				csList = cs.get_course();
				return "teacher";
			}
			else if(ad.getType().equals("ena")){
				return "ena";
			}
			else if(ad.getType().equals("enb")){
				return "enb";
			}
			else if(ad.getType().equals("enc")){
				return "enc";
			}
		}
		this.addFieldError("error", "用户名或密码错误");
		return "loginFail";
	}

	@Override
	public Admin getModel() {
		// TODO Auto-generated method stub
		return ad;
	}

}
