# maps
This repositoy contains commonly used geo-jsons which serve as base layer for analysis.

# 1. hex-grid-100km-worldextent.geojson
This geojson consists of hex grid with hex size of 100km with world extent. It is in EPSG 4326 WGS84 project system. This grid can be used as base layer for analysis based on requirment. Eg to represent heat maps, aggregation maps, hexbinning etc. The location can be anywhere on land or in sea.

# 2. hex-grid-100km-worldextent_clipped.geojson
This geojson is same as above but clipped to country boundaries. This layer can serve as base layer for locations inside country boundaries on land. 
