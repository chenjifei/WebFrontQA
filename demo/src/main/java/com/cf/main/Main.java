package com.cf.main;

import com.cf.impl.userImpl;
import com.cf.model.User;

public class Main {

	public static void main(String[] args) {
		User user = new userImpl().selectAllUser();
		System.out.println(user);

	}

}
