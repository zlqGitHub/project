package nuc.ee.util;

import org.apache.poi.hssf.usermodel.HSSFCell;
//import org.apache.poi.xssf.usermodel.XSSFCell;
public class ExcelUtil {
	public static String formatCell(HSSFCell xssfCell){
		
		if(xssfCell==null){
			return "";
		}else{
			if(xssfCell.getCellType()==HSSFCell.CELL_TYPE_BOOLEAN){
				return String.valueOf(xssfCell.getBooleanCellValue());
			}else if(xssfCell.getCellType()==HSSFCell.CELL_TYPE_NUMERIC){
				return String.valueOf(xssfCell.getNumericCellValue());
			}else{
				return String.valueOf(xssfCell.getStringCellValue());
			}
			
		}
	}

}
