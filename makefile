BLENDER_VER := 2.79
ADDONS_DIR := ~/.config/blender/$(BLENDER_VER)/scripts/addons
EXPORT_FILE := anim.blend
BLENDER_EXECUTE := blender279a

init-ubuntu: 
	sudo apt install blender

init-archlinux:
	sudo pacman -S blender

init-npm:
	sudo npm i -g webpack-cli webpack-dev-server

build:
	webpack --config webpack.prod.js
test:
	webpack-dev-server --config webpack.dev.js
export:
	$(BLENDER_EXECUTE) --background blends/$(EXPORT_FILE) --python exporter/test.py
	#$(BLENDER_EXECUTE) blends/$(EXPORT_FILE) --python exporter/tests/test.py

install-exporter:
	mkdir -p $(ADDONS_DIR)
	rm -rf $(ADDONS_DIR)/hmi_exporter
	rm -rf $(ADDONS_DIR)/io_three
	ln -s `pwd`/exporter/io_three $(ADDONS_DIR)
	ln -s `pwd`/exporter/hmi_exporter $(ADDONS_DIR)

clean:
	 rm -rf blends/*.blend1
