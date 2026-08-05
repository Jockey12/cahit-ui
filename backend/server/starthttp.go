package server

import (
	"cahit/backend/routers"
	"log"

	"github.com/gin-gonic/gin"
)

func Start() {
	r := gin.Default()
	r.SetTrustedProxies([]string{"localhost"})

	r.POST("/chat", routers.ChatHandler)
	if err := r.Run(":8080"); err != nil {
		log.Fatalf("failed: %v", err)
	}
}
