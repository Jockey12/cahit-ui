// Package server starts Gin server
package server

import (
	"cahit/backend/routers"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Start() {
	r := gin.Default()
	r.SetTrustedProxies([]string{"localhost"})
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000", "http://localhost:8012", "http://localhost:8080"},
		AllowMethods: []string{"GET", "POST", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Type"},
	}))
	r.Use(gin.Logger())

	r.POST("/chat", routers.ChatHandler)
	if err := r.Run(":8080"); err != nil {
		log.Fatalf("failed: %v", err)
	}
}
