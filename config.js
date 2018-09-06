// The images
var images = [
    "test/A601B1.png",
    "noiseLow.png",
    "Plains 1.png",
    "plains cliff.png",
    "plateau 1.png",
    "plateau 2.png",
    "Plateau 3.png",
    "plateau 4.png",
    "Plateau.png",
    "pointed cliff 1.png",
    "range1.png",
    "range2.png",
    "range3.png",
    "range4.png",
    "range5.png",
    "river_1.png",
    "river_2.png",
    "river_3.png",
    "Rocks 1.png",
    "Rocks 2.png",
    "rocky9.png",
    "rocky99.png",
    "Shape 2.png",
    "Shape 3.png",
    "Shapes.png",
    "sharp cliff.png",
    "Spine Ghost.png",
    "tallMountain_1.png",
    "tallMountain_2.png",
    "tallMountain_3.png",
    "tallMountain_4.png",
    "tallMountain_5.png",
    "Talus Spine Mezozoic.png",
    "Talus Spine.png",
    "Test.png",
    "Test2.png",
    "volcano.png",
    "A601B1.png",
    "A601B2.png",
    "A601B3.png",
    "B601C1.png",
    "B601C2.png",
    "B601C3.png",
    "Biomes.png",
    "Cell 1.png",
    "Cell 2.png",
    "Cell 3.png",
    "Cell 4.png",
    "Cell 5.png",
    "china mountain 1.png",
    "china mountain 2.png",
    "China Mountain 3.png",
    "China Mountain 4.png",
    "China Mountain 5.png",
    "Circle rock 4.png",
    "Circle Rocks 1.png",
    "Circle Rocks 2.png",
    "Circle Rocks 3.png",
    "circle.png",
    "classic mountain 1.png",
    "classic mountain 2.png",
    "classic mountain 3.png",
    "cliff 1.png",
    "cliff 2.png",
    "cliff 3.png",
    "cliff 4.png",
    "Cliff 5.png",
    "Cliff 6.png",
    "Cliff 7.png",
    "cliff 8.png",
    "cliff 9.png",
    "cliff 10.png",
    "cliff.png",
    "cliff1alt.png",
    "dunes 1.png",
    "dunes 2.png",
    "dunes 3.png",
    "dunes 4.png",
    "dunes 5.png",
    "foothill1.png",
    "foothill2.png",
    "foothill3.png",
    "hard circle.png",
    "hillMound_1.png",
    "hillMound_2.png",
    "hillMound_3.png",
    "hillMound_4.png",
    "hillMound_5.png",
    "hills.png",
    "mesa plates.png",
    "mesa.png",
    "Mezozoic Test 1.png",
    "Mezozoic Test 2.png",
    "mountain 1.png",
    "mountain 2.png",
    "mountain 3.png",
    "mountain 4.png",
    "Mountain 5.png",
    "Mountain 6.png",
    "Mountain 7.png",
    "Mountain 8.png",
    "mountainRange_1.png",
    "mountainRange_2.png",
    "mountainRange_3.png",
    "mountainRange_4.png",
    "mountainRange_5.png",
    "mountainTerraced_1.png",
    "mountainTerraced_2.png",
    "mountainTerraced_3.png",
    "mountainTerraced_4.png",
    "mountainTerraced_5.png",
    "noiseHigh.png"
];
// The low res images (they should all be the same size)
var src_min = "https://github.com/boy0001/HeightMap/raw/gh-pages/images/_min/";
// The max resolution images (Use the same if there are no higher resolution ones available)
var src_max = "https://github.com/boy0001/HeightMap/raw/gh-pages/images/";
// The local source for the image (used in commands)
var src_local = "file://";


/*
// Some java code to resive all images in a directory
String src = <...>;
int width = 100;
int height = 100;
for (File file : new File(src).listFiles()) {
    if (!file.isFile()) continue;
    BufferedImage img = MainUtil.readImage(file);
    BufferedImage scaled = ImageUtil.getScaledInstance(img, width, height, RenderingHints.VALUE_INTERPOLATION_BILINEAR, true);
    File out = new File(src + File.separator + "min" + File.separator + file.getName());
    if (out.exists()) out.delete();
    else out.getParentFile().mkdirs();
    System.out.println("Writing " + out);
    ImageIO.write(scaled, "png", out);
}
 */



