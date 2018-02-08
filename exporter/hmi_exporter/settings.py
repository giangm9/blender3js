""" Contains pre-defined settings """

from io_three import constants
import copy

full = {
    constants.SKINNING: True,
  constants.EMBED_ANIMATION: True,

  constants.VERTICES:  True,
  constants.FACES: True,
  constants.NORMALS: True,

  constants.BONES: True,
  constants.EXTRA_VGROUPS: '',
  constants.APPLY_MODIFIERS: True,
  constants.GEOMETRY_TYPE: constants.BUFFER_GEOMETRY,
  constants.INDEX_TYPE: constants.UINT_16,

  constants.MATERIALS: True,
  constants.UVS: True,
  constants.FACE_MATERIALS: False,
  constants.MAPS: True,
  constants.COLORS: True,
  constants.MIX_COLORS: True,

  constants.SCALE: 1,
  constants.ENABLE_PRECISION: True,
  constants.PRECISION: constants.DEFAULT_PRECISION,
  constants.CUSTOM_PROPERTIES: False,
  constants.LOGGING: constants.CRITICAL,
  constants.COMPRESSION: None,
  constants.INDENT: True,
  constants.EXPORT_TEXTURES: True,
  constants.EMBED_TEXTURES: True,
  constants.TEXTURE_FOLDER: 'tests/blend/textures',
  constants.SCENE: True,
  # constants.EMBED_GEOMETRY: properties.option_embed_geometry,
  constants.LIGHTS: True,
  constants.CAMERAS: True,
  constants.HIERARCHY: True,
  constants.MORPH_TARGETS: True,
  constants.BLEND_SHAPES: True,
  constants.ANIMATION: True,
  constants.KEYFRAMES: True,
  constants.FRAME_STEP: 1,
  constants.FRAME_INDEX_AS_TIME: False,
  constants.INFLUENCES_PER_VERTEX: 2
}


no_animation = copy.copy(full)
no_animation.update({
  constants.SKINNING: True,
  constants.EMBED_ANIMATION: True,
  constants.ANIMATION: False,
  constants.KEYFRAMES: False,
})
