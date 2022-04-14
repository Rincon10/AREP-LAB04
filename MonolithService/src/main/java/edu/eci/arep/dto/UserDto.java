package edu.eci.arep.dto;

public class UserDto {

    private String username;
    private String bio;

    public UserDto(String username, String bio){
        this.username = username;
        this.bio = bio;
    }

    public UserDto(){}

    public String getUsername() {return username;}

    public String getBio() {return bio;}
}
