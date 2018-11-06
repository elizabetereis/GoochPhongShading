#version 130

in vec3 aPosition;
in vec3 aNormal;
in vec3 aColor;

uniform mat4 uM;
uniform mat4 uMVP;
uniform mat4 uN;
uniform vec3 uLPos;

out vec3 oNormal;
out vec3 oLightVector;
out vec3 oColor;

void main(void)
{
   vec4 positionWorld = uM * vec4(aPosition, 1.0);
   vec3 normalWorld = normalize((uN * vec4(aNormal, 1.0)).xyz);

   oLightVector = uLPos - positionWorld.xyz;
   oNormal = normalWorld;
   oColor = aColor;

   gl_Position = uMVP * vec4( aPosition, 1.0 );  
}