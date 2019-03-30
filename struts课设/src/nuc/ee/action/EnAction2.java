package nuc.ee.action;

import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import nuc.ee.model.En;
import nuc.ee.service.EnService;

public class EnAction2 extends ActionSupport implements ModelDriven<En> {
	public En en = new En();
	public EnService EService = new EnService();
	public String tdname;
	public List<String> enList;
	
	
	public List<String> getEnList() {
		return enList;
	}
	public void setEnList(List<String> enList) {
		this.enList = enList;
	}
	public String getTdname() {
		return tdname;
	}
	public void setTdname(String tdname) {
		this.tdname = tdname;
	}
	
	
	
	
	public String selectEnList() {
		enList = EService.selectEnList((String)ActionContext.getContext().getSession().get("tdname"));
		return "selectEnListOk";
	}

	@Override
	public En getModel() {
		// TODO Auto-generated method stub
		return en;
	}
}
