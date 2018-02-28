BLENDER_VER := 2.76
ADDONS_DIR := ~/.config/blender/$(BLENDER_VER)/scripts/addons
EXPORT_FILE := room.blend

init:
	sudo apt install blender
	sudo npm i -g webpack webpack-dev-server
build:
	webpack
test:
	webpack-dev-server
export:
<<<<<<< HEAD
	blender --background exporter/tests/blend/$(EXPORT_FILE) --python exporter/tests/test.py
install-renderer:
=======
	blender --background exporter/tests/blend/vase.blend --python exporter/tests/test.py
install-exporter:
>>>>>>> c1a41076e185b5f27c799a1e27e96c0ec0a81422
	mkdir -p $(ADDONS_DIR)
	rm -rf $(ADDONS_DIR)/hmi_exporter
	rm -rf $(ADDONS_DIR)/io_three
	ln -s `pwd`/exporter/io_three $(ADDONS_DIR)
	ln -s `pwd`/exporter/hmi_exporter $(ADDONS_DIR)
