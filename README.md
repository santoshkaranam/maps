![image](https://user-images.githubusercontent.com/52455330/164527568-014addcd-774f-4796-9a3d-e762626101d8.png)
https://hexbinning.vercel.app/

blog post - https://www.c-sharpcorner.com/blogs/how-to-create-hex-binning-for-data-analysis


# maps
This repositoy contains commonly used geo-jsons which serve as base layer for analysis.

# 1. hex-grid-100km-worldextent.geojson
This geojson consists of hex grid with hex size of 100km with world extent. It is in EPSG 4326 WGS84 project system. This grid can be used as base layer for analysis based on requirment. Eg to represent heat maps, aggregation maps, hexbinning etc. The location can be anywhere on land or in sea.

# 2. hex-grid-100km-worldextent_clipped.geojson
This geojson is same as above but clipped to country boundaries. This layer can serve as base layer for locations inside country boundaries on land.


# Steps to Create Hex Grid Usig QGIS.
1. Select "create grid" from reasearch tools in QGIS as shown
![image](https://user-images.githubusercontent.com/52455330/163946174-45a4e220-f249-4577-8690-78efddef685a.png)
2. for 100km hex grid select 1 degree overlay. (approx 1 degress = 111 Kms)
3. Click "Run" button to create the hex grid with map extent

# Clip Hex Grid to World Extent
1. Load a simple world datasets.
2. select intersection from QGIS
![image](https://user-images.githubusercontent.com/52455330/163947493-0adc6abf-d2a4-4807-9592-fbcea8b25ceb.png)
3. Click "Run" to get clipped hex layer.
4. If you need a complete Hex even at the edges, then save the clicked Hex layer as CSV file without geometries and open the csv file to copy all the IDs.
5. Now Filter the original hex layer before intersection with the IDs from csv. Save the filtered hex to new dataset file.

All the above steps were run to create the hex-grid-100km-worldextent_clipped.geojson file.
