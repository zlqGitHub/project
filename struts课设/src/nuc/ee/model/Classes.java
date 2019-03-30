package nuc.ee.model;

public class Classes {
	private int userid;
	private String username;
	private String en;
	private String td;
	private String classname;
	private String teachername;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getEn() {
		return en;
	}
	public void setEn(String en) {
		this.en = en;
	}
	public String getTd() {
		return td;
	}
	public void setTd(String td) {
		this.td = td;
	}
	public String getClassname() {
		return classname;
	}
	public void setClassname(String classname) {
		this.classname = classname;
	}
	public String getTeachername() {
		return teachername;
	}
	public void setTeachername(String teachername) {
		this.teachername = teachername;
	}
	@Override
    public boolean equals(Object obj) {
        if (obj instanceof Classes) {
        	Classes classes = (Classes)obj;
            if (classname.equals(classes.getClassname())) {
                
                    return true;
            }
        }

        return false;
    }

    @Override
    public int hashCode() {
        return classname.hashCode();
    }
}

	

