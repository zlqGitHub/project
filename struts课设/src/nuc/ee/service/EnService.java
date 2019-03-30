package nuc.ee.service;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.util.ValueStack;

import nuc.ee.dao.EnDao;
import nuc.ee.model.*;
public class EnService {
	EnDao dao = new EnDao();
	public List<En> inIt(String en) {			//²éÑ¯
		List<En> enalist= dao.inIt(en);
		return enalist;
	}
	public int DeleteEn(String en ,String td){		//É¾³ý
		int age = dao.DeleteEn(en,td);
		return age;
	}	
	public int addEn(String en ,String td,String state,String introduce) {		//Ìí¼Ó
		int age = dao.addEn(en,td, state,introduce);
		return age;
	}
	public int update(String en ,String td, String state) {	//ÐÞ¸Ä	
		int age = dao.updateEn(en,td, state);
		return age;
	}
	
	
	public List<String> selectEnList(String td) {
		List<String> list = new ArrayList<String>();
		if(dao.selectEnaByTd(td)) {
			list.add("ena");
		}
		if(dao.selectEnbByTd(td)) {
			list.add("enb");
		}
		if(dao.selectEncByTd(td)) {
			list.add("enc");
		}
		return list;
	}
}
