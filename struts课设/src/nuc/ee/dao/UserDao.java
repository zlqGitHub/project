package nuc.ee.dao;

import java.sql.Connection;



import java.sql.PreparedStatement;
import java.sql.ResultSet;
//import java.sql.SQLException;
import java.util.*;

import nuc.ee.model.Classes;
import nuc.ee.model.Company;
import nuc.ee.model.GignUp;
import nuc.ee.model.Teacher;
import nuc.ee.model.User;
import nuc.ee.model.UserLogin;
import nuc.ee.util.Conn;

public class UserDao {	
	//在注册表中查询，看该学号是否已经注册过
	public int regist_select(User u) {
		ResultSet rs = null;
		int i = 0;
		try {
			Conn dbc = new Conn();   
			Connection conn = dbc.conn();
//				System.out.println(conn);
			PreparedStatement pst =null;
			String select = "select * from user where userid = ?";
			pst = conn.prepareStatement(select);
			pst.setInt(1, u.getUserid());
			rs = pst.executeQuery();
			if(rs.next()) {
				i++;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return i;
		
	}
	
	//3、注册写入信息
	public int user_insert(User u) {
		int rs = 0;
		try {
			Conn dbc = new Conn();   
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			String insert = "insert into user(userid,password,username,sex,age,telphone,department) values(?,?,?,?,?,?,?)";
			pst = conn.prepareStatement(insert);
			pst.setInt(1, u.getUserid());
			pst.setString(2, u.getPassword());
			pst.setString(3, u.getUsername());
			pst.setString(4, u.getSex());
//				System.out.println(stu.getSex());
			pst.setInt(5, u.getAge());
			pst.setString(6, u.getTelphone());
			pst.setString(7, u.getDepartment());
			
			rs = pst.executeUpdate();
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return rs;
	}
	
	//登录判断
	//判断账号、密码是否正确
	public User login_select(UserLogin u) {
		ResultSet rs = null;
		User user = new User();
		try {
			Conn dbc = new Conn();   
			Connection conn = dbc.conn();
//					System.out.println(conn);
			PreparedStatement pst =null;
			String select = "select * from user where userid = ? and password = ?";
			pst = conn.prepareStatement(select);
			pst.setInt(1, u.getUserid());
			pst.setString(2, u.getPassword());
			rs = pst.executeQuery();
			if(rs.next()) {
				user.setUserid(rs.getInt(2));
				user.setUsername(rs.getString(4));
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return user;
	}
	
	
	//将报名信息写入表中
	public int insert_user(GignUp gp,int num,String time){
		UserDao uDao = new UserDao();
		int rs = 0;
		try {
			Conn dbc = new Conn();
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			//删除报名信息
			uDao.delete_user(gp.getUserid());
			//将新记录插入表中
			String insert_info = "insert into namelist (td,userid,username,number,date) values(?,?,?,?,?)";
			pst = conn.prepareStatement(insert_info);
			pst.setString(1, gp.getTd());
			pst.setInt(2, gp.getUserid());
			pst.setString(3, gp.getUsername());
			pst.setInt(4, num);
			pst.setString(5, time);
			rs = pst.executeUpdate();
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return rs;
	}
	
	//删除报名表中的信息
	public void delete_user(int userid){
		try {
			Conn dbc = new Conn();
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			//先将原记录其删除
			String delete_info = "delete from namelist where userid = ?";
			pst = conn.prepareStatement(delete_info);
			pst.setInt(1, userid);
			int rs = pst.executeUpdate();
			System.out.println("rs="+rs);
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
	//查询该注册者还有几次报名机会
	public int get_change(int userid){
		int change = 0;
		ResultSet rs = null;
		try {
			Conn dbc = new Conn();
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			
			String insert_info = "select * from namelist where userid = ?";
			pst = conn.prepareStatement(insert_info);
			pst.setInt(1, userid);		
			rs = pst.executeQuery();
			
			if(rs.next()) {
				change = rs.getInt(5);
//				change--;
			}
			else {
				change = 3;
			}
					
		}
		catch(Exception e) {
			e.printStackTrace();
		}
//		System.out.println("3."+change);
		return change;
	}
	
	//用户登录成功后获取公司的信息
	public List<Company> get_company(){
		List<Company> comList = new ArrayList<Company>();
		ResultSet rs = null;
		try {
			Conn dbc = new Conn();   
			Connection conn = dbc.conn();
			PreparedStatement pst =null;
			String select = "select * from company";
			pst = conn.prepareStatement(select);
			rs = pst.executeQuery();
			while(rs.next()) {
				Company com = new Company();
				com.setId(rs.getInt(1));
				com.setName(rs.getString(2));
				com.setIcon(rs.getString(3));
				com.setIntroduce(rs.getString(4));
				comList.add(com);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return comList;
	}
	
	//用户登录成功后获取教师的信息
		public List<Teacher> get_teacher(){
			List<Teacher> teaList = new ArrayList<Teacher>();
			ResultSet rs = null;
			try {
				Conn dbc = new Conn();   
				Connection conn = dbc.conn();
				PreparedStatement pst =null;
				String select = "select * from teacher";
				pst = conn.prepareStatement(select);
				rs = pst.executeQuery();
				while(rs.next()) {
					Teacher tea = new Teacher();
					tea.setTeachername(rs.getString(2));
					tea.setTd(rs.getString(3));
					tea.setIntroduce(rs.getString(4));
					tea.setEn(rs.getString(5));
					tea.setImg(rs.getString(6));
					teaList.add(tea);
				}
			}
			catch(Exception e) {
				e.printStackTrace();
			}		
			return teaList;
		}
		
		
		//用户登录成功后获取个人信息
		public List<User> myInfo_select(int userid){
			ResultSet rs = null;
			List<User> list = new ArrayList<User>();
			try {
				Conn dbc = new Conn();
				Connection conn = dbc.conn();
				PreparedStatement pst =null;
				String myInfo_select = "select * from user where userid = ?";
				pst = conn.prepareStatement(myInfo_select);
				pst.setInt(1, userid);
				rs = pst.executeQuery();
				
				while(rs.next()) {
					User myI = new User();
					myI.setUserid(rs.getInt(2));
					myI.setPassword(rs.getString(3));
					myI.setUsername(rs.getString(4));
					myI.setSex(rs.getString(5));
					myI.setAge(rs.getInt(6));
					myI.setTelphone(rs.getString(7));
					myI.setDepartment(rs.getString(8));
					list.add(myI);
				}
				
			}
			catch(Exception e) {
				e.printStackTrace();
			}
			
			return list;
		}
		
		//用户登录成功后获取自己的班级信息
		public String get_class(int id){
			String classes = null;
			ResultSet rs = null;
			try {
				Conn dbc = new Conn();   
				Connection conn = dbc.conn();
				PreparedStatement pst = null;
				String select = "select * from classes where userid = ?";
				pst = conn.prepareStatement(select);
				pst.setInt(1, id);
				rs = pst.executeQuery();
				if(rs.next()) {
					classes = rs.getString(5);
				}
			}
			catch(Exception e) {
				e.printStackTrace();
			}		
			return classes;
		}
		
		//修改个人信息 
		public int updateMyInfo(int userid,String pass,String tel) {
			int i = 0;
			try {
				Conn dbc = new Conn();
				Connection conn = dbc.conn();
				PreparedStatement pst =null;
				String update = "update user set password=?,telphone=? where userid=?";
				pst = conn.prepareStatement(update);
				pst.setString(1, pass);
				pst.setString(2, tel);
				pst.setInt(3, userid);
				i = pst.executeUpdate();						
			}
			catch(Exception e) {
				e.printStackTrace();
			}
			
			return i;
		}
		
		//登录成功后获取个人报名信息
		public GignUp get_gignUp(int userid){
			GignUp gu = new GignUp(); 
			ResultSet rs = null;
			try {
				Conn dbc = new Conn();
				Connection conn = dbc.conn();
				PreparedStatement pst =null;
				
				String insert_info = "select * from namelist where userid = ?";
				pst = conn.prepareStatement(insert_info);
				pst.setInt(1, userid);		
				rs = pst.executeQuery();
				
				if(rs.next()) { 
					gu.setTd(rs.getString(2));
					gu.setChange(rs.getInt(5));
					gu.setDate(rs.getString(6));
				}
						
			}
			catch(Exception e) {
				e.printStackTrace();
			}

			return gu;
		}
		
		//批量导入
		public int insertUser(User user) {	
			int re=0;
			try{
				Conn dbc=new Conn();
				Connection conn=dbc.conn();
				String sql_insert=null;
				sql_insert="insert into user(username,password,userid,sex,age,telphone,department) values(?,?,?,?,?,?,?)";
				PreparedStatement pst=conn.prepareStatement(sql_insert);
				pst.setString(1,user.getUsername());
				pst.setString(2, "123456");
				pst.setInt(3, user.getUserid());
				pst.setString(4, user.getSex());
				pst.setInt(5, user.getAge());
				pst.setString(6, user.getTelphone());
				pst.setString(7, user.getDepartment());
				re=pst.executeUpdate();
				}
			catch(Exception e){
				System.out.println(e);
			}
			return re;
		}
		
		
		//按班级查询
		public ArrayList<Classes> query2(String classname) {
		    ArrayList<Classes> users = new ArrayList<Classes>();
		    ResultSet rs = null;
		     try {
		    	 Conn dbc=new Conn();
				 Connection conn=dbc.conn();
				 PreparedStatement pst =null;
		         pst = conn.prepareStatement("select * from classes where classname=?");
		         pst.setString(1,classname);
		         rs = pst.executeQuery();
		         while(rs.next()){
		             Classes user = new Classes();
		             user.setUserid(rs.getInt("userid"));
		             user.setUsername(rs.getString("username"));
		             user.setTeachername(rs.getString("teachername"));
		             user.setEn(rs.getString("en"));
		             user.setTd(rs.getString("td"));
		             user.setClassname(rs.getString("classname"));
		             user.setTeachername(rs.getString("teachername"));
		             users.add(user);
		         }
		        
		     } 
		     catch (Exception e) {
		         e.printStackTrace();
		     }
		     return users;
		 }
		
		
		public ArrayList<Classes> queryAll() {
		    ArrayList<Classes> users = new ArrayList<Classes>();
		    ResultSet rs = null;
		     try {
		    	 Conn dbc=new Conn();
				 Connection conn=dbc.conn();
				 PreparedStatement pst =null;
		         pst = conn.prepareStatement("select * from classes");
		         rs = pst.executeQuery();
		         while(rs.next()){
		             Classes user = new Classes();
		             user.setUserid(rs.getInt("userid"));
		             user.setUsername(rs.getString("username"));
		             user.setTeachername(rs.getString("teachername"));
		             user.setEn(rs.getString("en"));
		             user.setTd(rs.getString("td"));
		             user.setClassname(rs.getString("classname"));
		             users.add(user);
		         }
		         return users;
		     } catch (Exception e) {
		         e.printStackTrace();
		     }
		     return null;
		 }
		
		public boolean del(int id) {
		     try {
		    	 Conn dbc=new Conn();
				 Connection conn=dbc.conn();
				 PreparedStatement pst =null;
		        pst = conn.prepareStatement("delete from classes where userid=?");
		        pst.setInt(1,id);
		        int row = pst.executeUpdate();
		        if(row>0){
		            return true;
		        }
		    } catch (Exception e) {
		        e.printStackTrace();
		    }
		    return false;
		}
		
		
		public Classes query1(int id) {
		    Classes user = new Classes();
		    ResultSet rs = null;
		     try {
		    	 Conn dbc=new Conn();
				 Connection conn=dbc.conn();
				 PreparedStatement pst =null;
		        pst = conn.prepareStatement("select * from classes where userid=?");
		        pst.setInt(1,id);
		        rs = pst.executeQuery();
		        if(rs.next()){
		        	user.setUserid(rs.getInt("userid"));
		        	user.setUsername(rs.getString("username"));
		        	user.setTeachername(rs.getString("teachername"));
		        	user.setEn(rs.getString("en"));
		        	user.setTd(rs.getString("td"));
		        	user.setClassname(rs.getString("classname"));
		            return user;
		        }

		    } catch (Exception e) {
		        e.printStackTrace();
		    }
		    return null;
		}
		
		
		public boolean updateUserDao(Classes classes) {
		     try {
		    	 Conn dbc=new Conn();
				 Connection conn=dbc.conn();
				 PreparedStatement pst =null;
		        pst = conn.prepareStatement("update classes set teachername=?,en=?,td=?,classname=?,username=? where userid=?");
		        pst.setString(1,classes.getTeachername());
		        pst.setString(2,classes.getEn());
		        pst.setString(3,classes.getTd());
		        pst.setString(4,classes.getClassname());
		        pst.setString(5,classes.getUsername());
		        pst.setInt(6,classes.getUserid());
		        int row = pst.executeUpdate();
		        if(row>0){
		            return true;
		        }
		    } catch (Exception e) {
		        e.printStackTrace();
		    }
		    return false;
		}

}
