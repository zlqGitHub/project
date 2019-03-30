package nuc.ee.action;

import java.io.UnsupportedEncodingException;
import java.util.Set;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sun.org.apache.xml.internal.security.keys.keyresolver.implementations.PrivateKeyResolver;

import nuc.ee.model.Classes;
import nuc.ee.service.ClassService;

public class ClassAction extends ActionSupport{
		ClassService service = new ClassService();
		private String td;
		private String teachername;
		
		public String getTeachername() {
			return teachername;
		}
		public void setTeachername(String teachername) {
			this.teachername = teachername;
		}
		private Set<Classes> classlist;
		
		public Set<Classes> getClasslist() {
			return classlist;
		}
		public void setClasslist(Set<Classes> classlist) {
			this.classlist = classlist;
		}
		public String getTd() {
			return td;
		}
		public void setTd(String td) {
			this.td = td;
		}
		
		//查询指定企业的班级
		public String selectClass() throws UnsupportedEncodingException {		
			td = new String(td.getBytes("iso-8859-1"),"utf-8");
			String en = (String)ActionContext.getContext().getSession().get("en");
			classlist = service.selectClass(en, td);
			ActionContext.getContext().getSession().put("td", td);
			return SUCCESS;
		}
		
		//给班级分配老师
		public String updateClass() throws UnsupportedEncodingException {		
			teachername = new String(teachername.getBytes("iso-8859-1"),"utf-8");
			String classname = (String)ActionContext.getContext().getSession().get("classname");
			int age = service.updateClass(teachername, classname);
			return SUCCESS;
		}
		
}
