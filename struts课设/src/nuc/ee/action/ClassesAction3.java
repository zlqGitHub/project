package nuc.ee.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import nuc.ee.dao.UserDao;
import nuc.ee.model.Classes;

@SuppressWarnings("serial")
public class ClassesAction3 extends ActionSupport implements ModelDriven<Classes>{
	UserDao userDao = new UserDao();
	Classes classes  = new Classes();
	List<Classes> students = new ArrayList<Classes>();
	
	public List<Classes> getStudents() {
		return students;
	}

	public void setStudents(List<Classes> students) {
		this.students = students;
	}

	public Classes getClasses() {
		return classes;
	}

	public void setClasses(Classes classes) {
		this.classes = classes;
	}

	@Override
	public Classes getModel() {
		// TODO Auto-generated method stub
		return classes;
	}
	//删除Action
	public String del() throws Exception{
        boolean success = userDao.del(classes.getUserid());
        if(success){
            return SUCCESS;
        }else{
            return ERROR;
        }
    }
	//按id查询Action
	 public String queryUserById() throws Exception{
		 classes = userDao.query1(classes.getUserid());
		 if(classes.getTeachername() != null) {
			 return SUCCESS;
		 }else {
			 return ERROR;
		 }
	 }
	 
	//按班号查询Action
	  public String queryByClass() throws Exception{
		 students = userDao.query2(classes.getClassname());
		 if(classes != null) {
			 return SUCCESS;
		 }else {
			 return ERROR;
		 }
	 }
	//更新Action
	 public String updateUser() throws Exception{
		 boolean success = userDao.updateUserDao(classes);
		 if(success) {
			 return SUCCESS;
		 }else {
			 return ERROR;
		 }
	 }
	
	

}
