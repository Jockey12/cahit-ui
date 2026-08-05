package routers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type ChatInput struct {
	Prompt string `json:"prompt"`
}

func ChatHandler(c *gin.Context) {
	var req ChatInput

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}
	answer, err := GetRequest(req.Prompt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"response": answer,
	})
}
