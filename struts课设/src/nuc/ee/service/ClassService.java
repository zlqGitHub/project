package nuc.ee.service;

import java.util.Set;

import nuc.ee.dao.ClassDao;
import nuc.ee.model.*;
public class ClassService {
	ClassDao dao = new ClassDao();
	public Set<Classes> selectClass(String en,String td){
		Set<Classes> classlist = dao.Select(en, td);
		return classlist;
	}
	public int updateClass(String teachername,String classname) {
		int age = dao.updateClass(teachername, classname);
		return age;
	}
}
