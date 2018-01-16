BLENDER_VER=`blender -v | cut -d ' ' -f 2`
ADDONS_DIR=~/.config/blender/$BLENDER_VER/scripts/addons
mkdir -p $ADDONS_DIR
ln -s ./io_three $ADDONS_DIR/
