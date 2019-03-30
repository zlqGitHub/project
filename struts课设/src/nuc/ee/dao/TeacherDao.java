package nuc.ee.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import nuc.ee.model.*;
import nuc.ee.util.Conn;

public class TeacherDao {
	public List<Teacher> selectTeacher(String en,String td){			//≤È’“∑Ω∑®
		List<Teacher> teacherlist=new ArrayList<Teacher>();
		ResultSet rs=null;
		try{
		   	 Conn conn=new Conn();
			 Connection dbc=conn.conn();
			 String sql_select=null;
			 sql_select="select * from teacher where td=? and en=?";
			 PreparedStatement pst=dbc.prepareStatement(sql_select);
			 pst.setString(1, td);
			 pst.setString(2, en);
			 rs=pst.executeQuery();
			 while(rs.next()){
			 Teacher teacher = new Teacher();
			 teacher.setTd(rs.getString("td"));
			 teacher.setTeachername(rs.getString("teachername"));
			 teacherlist.add(teacher);
			 }
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return teacherlist;
	}
}
