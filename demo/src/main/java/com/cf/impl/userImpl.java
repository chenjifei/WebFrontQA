package com.cf.impl;

import org.apache.ibatis.session.SqlSession;

import com.cf.dao.UserDAO;
import com.cf.model.User;
import com.cf.util.SessionFactory;

public class userImpl implements UserDAO {

	@Override
	public User selectAllUser() {
		SqlSession session = SessionFactory.getSqlSession().openSession();
		UserDAO userDao = (UserDAO) session.getMapper(UserDAO.class);
		User user = userDao.selectAllUser();
		return user;
	}

}
