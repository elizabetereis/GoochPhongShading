#version 130

precision mediump float; 

uniform vec4 uAmb;
uniform vec4 uDiff;
uniform vec4 uSpec;

in vec2 oTexcoord;

uniform sampler2D uTex;

void main(void) {
	
	vec4 color = clamp(uAmb + uDiff + uSpec, 0.0, 1.0); 
	//gl_FragColor = texture(uTex, oTexcoord) * color;
	gl_FragColor = color;

} 	
