BLENDER_VER := 2.76
ADDONS_DIR := ~/.config/blender/$(BLENDER_VER)/scripts/addons

test:
	blender --background tests/blend/animFK.blend --python hmi_exporter/exporter.py
install:
	rm -rf $(ADDONS_DIR)/io_three
	mkdir -p $(ADDONS_DIR)
	ln -s `pwd`/io_three $(ADDONS_DIR)