package nuc.ee.action;

import java.io.File;
import java.io.FileInputStream;
import java.text.DecimalFormat;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
//import org.apache.poi.xssf.usermodel.*;
import com.opensymphony.xwork2.ActionSupport;

import nuc.ee.dao.UserDao;
import nuc.ee.model.User;
import nuc.ee.util.ExcelUtil;

@SuppressWarnings("serial")
public class uploadAction extends ActionSupport{
	UserDao dao = new UserDao();
	private File upload;
	public String tip;
	
	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

		//批量导入
		public String InuptUser()throws Exception{
			POIFSFileSystem fs=new POIFSFileSystem(new FileInputStream(upload));
			HSSFWorkbook wb=new HSSFWorkbook(fs);
			HSSFSheet hssfSheet=wb.getSheetAt(0);  // 获取第一个Sheet页
			if(hssfSheet!=null){
				for(int rowNum=1;rowNum<=hssfSheet.getLastRowNum();rowNum++){
					HSSFRow hssfRow=hssfSheet.getRow(rowNum);
					if(hssfRow==null){
						continue;
					}
					User user = new User();
					user.setUsername(ExcelUtil.formatCell(hssfRow.getCell(0)));
					user.setPassword(ExcelUtil.formatCell(hssfRow.getCell(1)));
					
					DecimalFormat df = new DecimalFormat("0");  					  
					String userid = df.format(hssfRow.getCell(2).getNumericCellValue());  
//					System.out.println(userid);
					

					user.setUserid(Integer.parseInt(userid));
					user.setSex(ExcelUtil.formatCell(hssfRow.getCell(3)));
					
 					  
					String age = df.format(hssfRow.getCell(4).getNumericCellValue());  
//					System.out.println("age="+age);
					
					user.setAge(Integer.parseInt(age));
					
					String telphone = df.format(hssfRow.getCell(5).getNumericCellValue());  
					System.out.println("telphone="+telphone);
					
					user.setTelphone(telphone);
					user.setDepartment(ExcelUtil.formatCell(hssfRow.getCell(6)));
					try{					
						 dao.insertUser(user);
					}catch(Exception e){
						e.printStackTrace();
					}
				}
			}
			tip = "上传成功！";
			return "uploadOK";
		}

}
