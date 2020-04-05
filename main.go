package main

import (
	"os"
	"github.com/gin-gonic/gin"
	"github.com/GeertJohan/go.rice"
  )

func main() {
	r := gin.Default()
	staticBox := rice.MustFindBox("web/dist")
	r.StaticFS("/", staticBox.HTTPBox())

	port := os.Getenv("PORT")
	if len(port) == 0 {
		port = "3000"
	}
	r.Run(":" + port)
  }
