BLENDER_VER := 2.76
ADDONS_DIR := ~/.config/blender/$(BLENDER_VER)/scripts/addons

build:
	webpack
test:
	webpack-dev-server
export:
	blender --background exporter/tests/blend/rotation.blend --python exporter/tests/test.py
install-renderer:
	mkdir -p $(ADDONS_DIR)
	rm -rf $(ADDONS_DIR)/hmi_exporter
	rm -rf $(ADDONS_DIR)/io_three
	ln -s `pwd`/exporter/io_three $(ADDONS_DIR)
	ln -s `pwd`/exporter/hmi_exporter $(ADDONS_DIR)
