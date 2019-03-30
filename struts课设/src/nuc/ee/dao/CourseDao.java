package nuc.ee.dao;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import nuc.ee.model.Course;
import nuc.ee.util.Conn;

public class CourseDao {
	//学生查看课程信息
	public List<Course> course_select() {
		ResultSet rs = null;
		List<Course> csList = new ArrayList<Course>();
		
		try {
			Conn dbc = new Conn();
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			String books_select = "select * from course";
			pst = conn.prepareStatement(books_select);
			rs = pst.executeQuery();
			
			while(rs.next()) {
				Course c = new Course();
				c.setId(rs.getInt(1));
				c.setTd(rs.getString(2));
				c.setIntroduce(rs.getString(3));
				csList.add(c);
			}
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return csList;
	}

}
