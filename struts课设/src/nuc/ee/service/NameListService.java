package nuc.ee.service;

import java.util.List;
import java.util.Set;

import nuc.ee.dao.NameListDao;
import nuc.ee.model.*;

public class NameListService {
	private NameListDao NLDao = new NameListDao();
	
	public List<NameList> selectNameListAll(){
		return NLDao.selectNameListAll();
	}
	
	public List<NameList> nameListPage(int page, int num, String td){
		return NLDao.nameListPage(page, num, td);
	}
	public Set<String> selectTdList(){
		return NLDao.selectTdList();
	}
	
	
	public int getCount(int num,String td) {
		return NLDao.getCount(num, td);
	}
	
}
