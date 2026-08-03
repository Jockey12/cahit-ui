package main

import (
	"cahit/backend/routers"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func getHTTP() {
	r := gin.Default()
	r.SetTrustedProxies([]string{"localhost"})

	r.POST("/dashboard", routers.ChatHandler)
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
		fmt.Printf("Client IP: %s\n", c.ClientIP())
	})
	if err := r.Run(); err != nil {
		log.Fatalf("fialed: %v", err)
	}
}
func main() {
	getHTTP()
}
