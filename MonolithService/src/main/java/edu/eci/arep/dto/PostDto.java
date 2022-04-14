package edu.eci.arep.dto;

public class PostDto {

    private String content;
    private String author;

    public PostDto(String content, String author){
        this.author = author;
        this.content = content;
    }

    public PostDto(){}

    public String getContent() {return content;}

    public String getAuthor() {return author;}
}
