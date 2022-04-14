package edu.eci.arep.model;

import edu.eci.arep.dto.UserDto;

import java.util.UUID;

public class User {

    private String username;
    private String bio;
    private String id;

    public User(UserDto userDto){
        id = UUID.randomUUID().toString();
        this.username = userDto.getUsername();
        this.bio = userDto.getBio();
    }

    public User(){}

    public void update(UserDto userDto){
        this.bio = userDto.getBio();
    }

    public String getUsername() {return username;}

    public String getBio() {return bio;}

    public String getId() {return id;}
}
