// Package routers defines API for routers
package routers

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
)

type ChatRequest struct {
	Model    string `json:"model"`
	Messages []struct {
		Role    string `json:"role"`
		Content string `json:"content"`
	} `json:"messages"`
}

type ChatResponse struct {
	Choices []struct {
		Message struct {
			Content string `json:"content`
		} `json:"message"`
	} `json:"choices`
}

func GetRequest(prompt string) (string, error) {
	model := ""
	reqBody := ChatRequest{
		Model: model,
	}
	reqBody.Messages = append(reqBody.Messages, struct {
		Role    string `json:"role"`
		Content string `json:"content"`
	}{
		Role:    "user",
		Content: prompt,
	})
	body, err := json.Marshal(reqBody)
	if err != nil {
		return "", err
	}

	resp, err := http.Post(
		"http://localhost:8012/v1/chat/completions",
		"application/json",
		bytes.NewBuffer(body),
	)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	data, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	var chatResp ChatResponse
	if err := json.Unmarshal(data, &chatResp); err != nil {
		return "", err
	}

	return chatResp.Choices[0].Message.Content, nil
}
