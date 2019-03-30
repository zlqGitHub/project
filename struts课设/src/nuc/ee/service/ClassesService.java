package nuc.ee.service;

import java.util.List;
import nuc.ee.dao.*;
import nuc.ee.model.*;

public class ClassesService {
	private ClassesDao CDao = new ClassesDao();
	
	public List<Classes> selectListAll() {
		return CDao.selectListAll();
	}
		
	
	public void updateClass(List<Integer> userid, String en, String td, String classname) {
		for(int id : userid) {
			CDao.updateClass(id, en, td, classname);
		}
	}
}
