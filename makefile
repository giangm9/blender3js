BLENDER_VER := 2.76
ADDONS_DIR := ~/.config/blender/$(BLENDER_VER)/scripts/addons
EXPORT_FILE := anim.blend

init:
	sudo apt install blender
	sudo npm i -g webpack webpack-dev-server
build:
	webpack
test:
	webpack-dev-server
export:
	blender --background exporter/tests/blend/$(EXPORT_FILE) --python exporter/tests/test.py
install-exporter:
	mkdir -p $(ADDONS_DIR)
	rm -rf $(ADDONS_DIR)/hmi_exporter
	rm -rf $(ADDONS_DIR)/io_three
	ln -s `pwd`/exporter/io_three $(ADDONS_DIR)
	ln -s `pwd`/exporter/hmi_exporter $(ADDONS_DIR)
