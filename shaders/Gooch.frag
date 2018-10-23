#version 330 core

uniform vec3  uSurfaceColor;
uniform vec3  uWarmColor;
uniform vec3  uCoolColor;
uniform float uDiffuseWarm;
uniform float uDiffuseCool;

in vec3 oNormal;
in vec3 oLightVector;
in vec3 oColor;

void main(void)
{

  vec3 normalVector = normalize(oNormal);
  vec3 lightVector = normalize(oLightVector);
  float diffuseLighting = dot(lightVector, normalVector);
  float interpolationValue = (1.0 + diffuseLighting)/2;

  vec3 coolColorMod = uCoolColor + oColor * uDiffuseCool;
  vec3 warmColorMod = uWarmColor + oColor * uDiffuseWarm;
  vec3 colorOut = mix(coolColorMod, warmColorMod, interpolationValue);

  gl_FragColor.rgb = colorOut;
  gl_FragColor.a = 1;
}
