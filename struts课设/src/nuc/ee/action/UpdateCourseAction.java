package nuc.ee.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import nuc.ee.model.Course;
import nuc.ee.service.AdminService;
import nuc.ee.service.CourseService;

@SuppressWarnings("serial")
public class UpdateCourseAction extends ActionSupport implements ModelDriven<Course>{
	Course c = new Course();
	CourseService cs = new CourseService();
	List<Course> csList = new ArrayList<Course>();
	AdminService as = new AdminService();
	
	public List<Course> getCsList() {
		return csList;
	}


	public void setCsList(List<Course> csList) {
		this.csList = csList;
	}
	
	public String execute() {
		csList = as.uptate_course();
//		System.out.println("aa"+csList);
		
		return "success";
	}	


	@Override
	public Course getModel() {
		// TODO Auto-generated method stub
		return c;
	}

}
