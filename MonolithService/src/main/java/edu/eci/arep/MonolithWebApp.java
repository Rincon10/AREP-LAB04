package edu.eci.arep;

import static spark.Spark.*;

public class MonolithWebApp {

    public static void main(String[] args) {

        port(getPort());

    }

    static int getPort(){
        if (System.getenv("PORT") != null){
            return Integer.parseInt(System.getenv("PORT"));
        }return 4567;
    }

}
