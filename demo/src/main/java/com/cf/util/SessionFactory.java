package com.cf.util;

import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SessionFactory {
	public static Reader reader;
	public static SqlSessionFactory sqlsessionFactory;

	static {
		try {
			reader = Resources.getResourceAsReader("com/cf/config/sqlMapConfig.xml");
			sqlsessionFactory = new SqlSessionFactoryBuilder().build(reader);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static SqlSessionFactory getSqlSession() {
		if (sqlsessionFactory == null) {
			createSqlSession();
		}
		return sqlsessionFactory;
	}

	public static void createSqlSession() {
		try {
			reader = Resources.getResourceAsReader("com/cf/config/sqlMapConfig.xml");
			sqlsessionFactory = new SqlSessionFactoryBuilder().build(reader);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
