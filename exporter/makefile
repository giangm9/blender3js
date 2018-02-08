BLENDER_VER := 2.76
ADDONS_DIR := ~/.config/blender/$(BLENDER_VER)/scripts/addons

test:
	blender --background tests/blend/smallstool.blend --python tests/test.py
install:
	mkdir -p $(ADDONS_DIR)
	rm -rf $(ADDONS_DIR)/hmi_exporter
	rm -rf $(ADDONS_DIR)/io_three
	ln -s `pwd`/io_three $(ADDONS_DIR)
	ln -s `pwd`/hmi_exporter $(ADDONS_DIR)