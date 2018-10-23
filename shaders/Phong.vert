#version 330 core

layout (location = 0) in vec3 aPosition;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in vec2 aColor;

uniform mat4 uM;
uniform mat4 uN;
uniform mat4 uMVP;

out vec3 vNormal; 
out vec3 vPosW;

void main(void) { 

	vPosW = (uM * vec4(aPosition, 1.0)).xyz; 
	vNormal = normalize((uN * vec4(aNormal, 1.0)).xyz); 			
	
	gl_Position = uMVP * vec4( aPosition, 1.0 );  
} 
