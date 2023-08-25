package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Recipe struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

func setupRouter() *gin.Engine {
	r := gin.Default()

	// Ping test
	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	r.GET("/recipes", func(c *gin.Context) {
		c.IndentedJSON(http.StatusOK, []Recipe{
			{
				Name:        "Food 1",
				Description: "I am a food, 1",
			},
		})
	})

	return r
}

func main() {
	r := setupRouter()
	// Listen and Serve on localhost:8080
	r.Run(":8080")
}
