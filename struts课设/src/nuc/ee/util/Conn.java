package nuc.ee.util;

import java.sql.*;
public class Conn {
	public static final String DBDRIVER="com.mysql.jdbc.Driver";
	public static final String DBURL="jdbc:mysql://localhost:3306/struts?useUnicode=true&characterEncoding=utf8";
	public static final String DBUSER="root";
	public static final String DBPASS="045412";
	Connection conn=null;
	public Connection conn() {
		try {
			Class.forName(DBDRIVER);
			conn=DriverManager.getConnection(DBURL, DBUSER, DBPASS);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return conn;
	}
}
