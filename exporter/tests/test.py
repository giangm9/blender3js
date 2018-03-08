import hmi_exporter, bpy, os
#hmi_exporter.export_no_animation("output/cubeC.json")
file_name = bpy.path.basename(bpy.context.blend_data.filepath)
file_name = os.path.splitext(file_name)[0]

#hmi_exporter.export_no_animation("public/models/" + file_name + ".json")
hmi_exporter.export_skinning("public/models/" + file_name + ".json")

# IPython.embed()
