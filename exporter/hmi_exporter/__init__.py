from . import settings, utils
from io_three import exporter

def export_full(file_name):
    exporter.export_scene(file_name, settings.full) 

def export_no_animation(file_name):
    exporter.export_scene(file_name, settings.no_animation)

def export_skinning(file_name):
    exporter.export_scene(file_name, settings.skinning)
