package nuc.ee.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import nuc.ee.model.NameList;
import nuc.ee.util.Conn;

public class NameListDao { 
	Conn dbc=new Conn();
	Connection conn=dbc.conn();
	
	public List<NameList> selectNameListAll(){
		List<NameList> list = new ArrayList<NameList>();
		ResultSet rs = null;
		String sql = "select * from namelist";
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			rs = pst.executeQuery();
			while(rs.next()) {
				NameList record = new NameList();
				record.setChange(rs.getInt("number"));;
				record.setTd(rs.getString("td"));
				record.setUserid(rs.getInt("userid"));
				record.setUsername(rs.getString("username"));
				record.setDate(rs.getString("date"));
				list.add(record);
				}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}
	
	public List<NameList> nameListPage(int page, int num,String td){
		List<NameList> list = new ArrayList<NameList>();
		ResultSet rs = null;
		String sql = "select * from namelist where td=? limit ?,?";
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setString(1, td);
			pst.setInt(2, (page - 1) * num);
			pst.setInt(3, num);
			rs = pst.executeQuery();
			while(rs.next()) {
				NameList record = new NameList();
				record.setTd(rs.getString("td"));
				record.setUserid(rs.getInt("userid"));
				record.setUsername(rs.getString("username"));
				if(this.isExistUser(record.getUserid()) == false) {
					list.add(record);
				}									
				}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}
	
	public boolean isExistUser(int id) {
		boolean flag = false;
		ResultSet rs = null;
		String sql = "select * from classes where userid=?";
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setInt(1, id);
			rs = pst.executeQuery();
			if(rs.next()) {
				flag = true;
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return flag;
	}
	
	public int getCount(int num, String td) {
		int n = 0;
		ResultSet rs = null;
		List<Integer> list = new ArrayList<Integer>();
		String sql = "select * from namelist where td=?";
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setString(1, td);
			rs = pst.executeQuery();
			while(rs.next()) {
				list.add(rs.getInt("userid"));
			}	
			n = list.size();
			n = (int)Math.ceil(1.0 * n / num);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return n;
	}
	
	public int getClassesCount(String td) {
		int n = 0;
		ResultSet rs = null;
		List<Integer> list = new ArrayList<Integer>();
		String sql = "select * from classes where td=?";
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setString(1, td);
			rs = pst.executeQuery();
			while(rs.next()) {
				list.add(rs.getInt("userid"));
			}	
			n = list.size();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return n;
	}
	
	
	
	
	public Set<String> selectTdList(){
		Set<String> set = new HashSet<String>();
		ResultSet rs = null;
		String sql = "select * from namelist";
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			rs = pst.executeQuery();
			while(rs.next()) {
				set.add(rs.getString("td"));
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}		
		return set;		
	}

	
}
