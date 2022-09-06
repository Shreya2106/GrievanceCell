package com.pack.springapp.models;

import java.io.Serializable;

@SuppressWarnings("serial")
public class JwtModel implements Serializable{
	private final String jwt;
	
	public JwtModel(String jwt) {
        this.jwt = jwt;
    }
	public String getJwt() {
        return jwt;
    }
}
