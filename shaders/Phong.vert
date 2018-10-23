#version 130

in vec3 aPosition;
in vec2 aTexcoord;

uniform mat4 uMVP;

out vec2 oTexcoord;

void main(void) { 				
	
	gl_Position = uMVP * vec4( aPosition, 1.0 );  
	oTexcoord = aTexcoord;
} 
