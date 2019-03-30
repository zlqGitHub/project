package nuc.ee.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import nuc.ee.model.NameList;
import nuc.ee.service.NameListService;

public class NameListAction extends ActionSupport implements ModelDriven<NameList> {
	public NameList namelist = new NameList();
	public NameListService NLService = new NameListService();
	public List<NameList> lists;
	public Set<String> tdList;
	public List<String> enList = new ArrayList<String>();
	public String tdname = null;
	public boolean flag = false;
	public int nowPage = 1;
	public String newPage;
	public int num = 50;
	public int count;
	public int vis = 0;
	


	

	public List<String> getEnList() {
		return enList;
	}

	public void setEnList(List<String> enList) {
		this.enList = enList;
	}

	public List<NameList> getLists() {
		return lists;
	}

	public void setLists(List<NameList> lists) {
		this.lists = lists;
	}
	public Set<String> getTdList() {
		return tdList;
	}

	public void setTdList(Set<String> tdList) {
		this.tdList = tdList;
	}

	public String getTdname() {
		return tdname;
	}

	public void setTdname(String tdname) {
		this.tdname = tdname;
	}

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public int getNowPage() {
		return nowPage;
	}

	public void setNowPage(int nowPage) {
		this.nowPage = nowPage;
	}

	public String getNewPage() {
		return newPage;
	}

	public void setNewPage(String newPage) {
		this.newPage = newPage;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getVis() {
		return vis;
	}

	public void setVis(int vis) {
		this.vis = vis;
	}

	
	
	
	public String nameListPage() {
		if(tdname != null && !"".equals(tdname)) {
			ActionContext.getContext().getSession().put("tdname", tdname);
		}
		String str = (String)ActionContext.getContext().getSession().get("tdname");
		count = NLService.getCount(num, str);
		if(count == 0) count = 1;
		if(newPage != null && !"".equals(newPage)) {
			nowPage = Integer.parseInt(newPage);
		}
		if(vis == 1) {
			nowPage--;
		}
		if(vis == 2) {
			nowPage++;
		}
		if(nowPage <= 0) {
			nowPage = 1;
		}
		if(nowPage >= count) {
			nowPage = count;
		}
		lists = NLService.nameListPage(nowPage, num, str);
		flag = true;
		return "nameListPageOk";
	}
	
	public String selectNameListAll() {
		lists = NLService.selectNameListAll();
		return "selectNameListAllOk";
	}
	
	public String selectTdList() {
		tdList = NLService.selectTdList(); 
		return "selectTdListOk";
	}
	
	
	@Override
	public NameList getModel() {
		// TODO Auto-generated method stub
		return namelist;
	}

}
