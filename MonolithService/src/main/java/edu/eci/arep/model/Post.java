package edu.eci.arep.model;

import edu.eci.arep.dto.PostDto;

import java.util.Date;

public class Post {

    private String content;
    private String author;
    private String publishedAt;

    public Post(PostDto postDto){
        if (postDto.getContent().length() > 140){
            this.content = null;
        }
        else{
            this.content = postDto.getContent();
        }
        this.author = postDto.getAuthor();
        this.publishedAt = new Date().toString();
    }

    public Post(){}
}
