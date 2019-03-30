package nuc.ee.action;

import java.io.UnsupportedEncodingException;
import java.util.List;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sun.org.apache.xml.internal.security.keys.keyresolver.implementations.PrivateKeyResolver;

import nuc.ee.model.Teacher;
import nuc.ee.service.TeacherService;

public class TeacherAction extends ActionSupport{
	private String classname;
	private List<Teacher> teacherlist;
	TeacherService service = new TeacherService();
	public List<Teacher> getTeacherlist() {
		return teacherlist;
	}

	public void setTeacherlist(List<Teacher> teacherlist) {
		this.teacherlist = teacherlist;
	}

	public String getClassname() {
		return classname;
	}

	public void setClassname(String classname) {
		this.classname = classname;
	}
	//查询指定企业指定课程的老师
	public String selectTeacher() throws UnsupportedEncodingException {		
		String td = (String) ActionContext.getContext().getSession().get("td");
		String en = (String)ActionContext.getContext().getSession().get("en");
		teacherlist = service.selectTeacher(en,td);
		ActionContext.getContext().getSession().put("classname", classname);
		return SUCCESS;
	}
	
}
