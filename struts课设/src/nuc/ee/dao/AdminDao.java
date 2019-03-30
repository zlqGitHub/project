package nuc.ee.dao;

import java.sql.Connection;



import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

import nuc.ee.model.Course;
import nuc.ee.util.Conn;

public class AdminDao {
	
	//判断管理是否能登录
	public int select_admin(String name,String pass,String type){
		int i = 0;
		ResultSet rs = null;
		
		try {
			Conn dbc = new Conn();
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			String books_select = "select * from admin where username = ? and password = ? and type = ?";
			pst = conn.prepareStatement(books_select);
			pst.setString(1, name);
			pst.setString(2, pass);
			pst.setString(3, type);
			rs = pst.executeQuery();
			
			if(rs.next()) {
				i = 1;
			}
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return i;
	}
	
	//更新课程信息
	public List<Course> update_course(){
		List<Course> csList = new ArrayList<Course>();
		ResultSet rs = null;
		
		try {
			Conn dbc = new Conn();
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			String books_select = "select * from ena union all select * from enb union all select * from enc";
			pst = conn.prepareStatement(books_select);
			rs = pst.executeQuery();
			
			while(rs.next()) {
				Course c = new Course();
				c.setId(rs.getInt(1));
				c.setTd(rs.getString(2));
				c.setIntroduce(rs.getString(3));
				c.setStatus(rs.getString(4));
				csList.add(c);
			}
//			System.out.println(csList);
			//去掉关闭的课程
			for(int i=0;i<csList.size();i++) {
				if("未开放".equals(csList.get(i).getStatus())) {
					csList.remove(i);	
					i--;
				}
			}
			
//			System.out.println(csList);
			for(int i=0;i<csList.size();i++) {
				
				for(int j=i+1;j<csList.size();j++) {
					if(csList.get(i).getTd().equals(csList.get(j).getTd())) {
						csList.remove(j);
						j--;
					}
					
				}
				
			}

		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return csList;
	}
	
	
	//将更新后的数据写入course表中
	public int insert_course(List<Course> csList){
		int rs = 0;
		
		try {
			Conn dbc = new Conn();
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			//首先将库里的数据删除
			String delete_course = "delete from course";
			pst = conn.prepareStatement(delete_course);
			rs = pst.executeUpdate();
			//将新数据写入表中
			for(int i=0;i<csList.size();i++) {
				String insert_course = "insert into course(td,introduce) value(?,?)";
				pst = conn.prepareStatement(insert_course);
				pst.setString(1, csList.get(i).getTd());
				pst.setString(2, csList.get(i).getIntroduce());
				
				rs = pst.executeUpdate();
			}
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return rs;
	}
	
	
	

}
