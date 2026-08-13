package main

import (
	"testing"
)

func double(n int) int {
	return n * 2
}
func Test_main(t *testing.T) {
	tests := []struct {
		name string // description of this test case
		arg  int
		want int
	}{
		{
			name: "hello", arg: 2, want: 4,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := double(tt.arg)
			if got != tt.want {
				t.Errorf("Bad: %d = %d, need %d ", tt.arg, got, tt.want)
			}
		})
	}
}
