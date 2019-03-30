package nuc.ee.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashSet;
import java.util.Set;

import nuc.ee.model.*;
import nuc.ee.util.Conn;

public class ClassDao {
	public Set<Classes> Select(String en,String td){			//查找方法
		Set<Classes> classlist=new HashSet<Classes>();
		ResultSet rs=null;
		try{
		   	 Conn conn=new Conn();
			 Connection dbc=conn.conn();
			 String sql_select=null;
		     sql_select="select * from classes where en=? and td=?";			
			 PreparedStatement pst=dbc.prepareStatement(sql_select);
			 pst.setString(1, en);
			 pst.setString(2, td);
			 rs=pst.executeQuery();
			 while(rs.next()){
			 Classes classes = new Classes();
			 classes.setClassname(rs.getString("classname"));
			 classes.setTeachername(rs.getString("teachername"));
			 classlist.add(classes);
			 }
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return classlist;
	}
	public int updateClass(String teachername,String classname){ 			//添加老师
		int rs=0;
		try{
			Conn dbc=new Conn();	
			Connection conn=dbc.conn();
			String sql_update=null;
			sql_update="update classes set teachername=? where classname=?";
			PreparedStatement pst=conn.prepareStatement(sql_update);
			pst.setString(1, teachername);
			pst.setString(2, classname);
			rs=pst.executeUpdate();
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return rs;
	}
}
