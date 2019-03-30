package nuc.ee.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import nuc.ee.dao.UserDao;
import nuc.ee.model.Classes;
import nuc.ee.model.User;

@SuppressWarnings("serial")
public class AdministratorsAction extends ActionSupport implements ModelDriven<User>{
	User user = new User();
	User login = new User();
	UserDao userdao = new UserDao();
	List<Classes> students = new ArrayList<Classes>();
	public List<Classes> getStudents() {
		return students;
	}
	public void setStudents(List<Classes> students) {
		this.students = students;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public User getModel() {
		return user;
	}

	
	public String queryAll() throws Exception{
		
		students = userdao.queryAll();
        if(students != null){
            return SUCCESS;
        }else{
            return ERROR;
        }
	}
	
	 
}
