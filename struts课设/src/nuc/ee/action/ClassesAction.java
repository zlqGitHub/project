package nuc.ee.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import nuc.ee.service.*;
import nuc.ee.model.*;

@SuppressWarnings("serial")
public class ClassesAction extends ActionSupport implements ModelDriven<Classes> {
	public Classes clist = new Classes();
	public List<Classes> lists = new ArrayList<Classes>();
	public ClassesService CService = new ClassesService();
	public String cname;
	public String enname;
	public String tdname;
	public int nowPage;
	public List<Integer> idlist;
	
	
	
	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public int getNowPage() {
		return nowPage;
	}

	public void setNowPage(int nowPage) {
		this.nowPage = nowPage;
	}

	public List<Classes> getLists() {
		return lists;
	}

	public void setLists(List<Classes> lists) {
		this.lists = lists;
	}

	

	public String getEnname() {
		return enname;
	}

	public void setEnname(String enname) {
		this.enname = enname;
	}

	public String getTdname() {
		return tdname;
	}

	public void setTdname(String tdname) {
		this.tdname = tdname;
	}	
	public List<Integer> getIdlist() {
		return idlist;
	}
	public void setIdlist(List<Integer> idlist) {
		this.idlist = idlist;
	}
	public String selectListAll() {		
		lists = CService.selectListAll();
		return "selectListAllOk";
	}
	
	
	
	public String updateClass() {
		String str = (String)ActionContext.getContext().getSession().get("tdname");
		CService.updateClass(idlist, enname, str, cname);
		return "updateClassOk";
	}
	
	@Override
	public Classes getModel() {
		// TODO Auto-generated method stub
		return clist;
	}
}
