#version 130

uniform vec3  uWarmColor;
uniform vec3  uCoolColor;
uniform float uDiffuseWarm;
uniform float uDiffuseCool;
uniform sampler2D uTex;

in vec3 oNormal;
in vec3 oLightVector;
in vec3 oColor;
in vec2 oTexcoord;

void main(void)
{
  vec3 normalVector = normalize(oNormal);
  vec3 lightVector = normalize(oLightVector);
  float diffuseLighting = dot(lightVector, normalVector);
  float interpolationValue = (1.0 + diffuseLighting)/2;

  vec3 coolColorMod = uCoolColor + oColor * uDiffuseCool;
  vec3 warmColorMod = uWarmColor + oColor * uDiffuseWarm;
  vec3 colorOut = mix(coolColorMod, warmColorMod, interpolationValue);

  //gl_FragColor = texture(uTex, oTexcoord) * colorOut;
  gl_FragColor.rgb = colorOut;
  gl_FragColor.a = 1;
}
