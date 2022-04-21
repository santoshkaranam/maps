import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {useEffect, useRef, useState} from "react";

const Map = () => {
    const [data, setData] = useState(undefined);
    const [maxMeasure, setMax] = useState(10000000);
    const layerRef = useRef(null);
    useEffect(() => {
        if (data === undefined) {
            fetch("/data.json").then(data => data.json()).then(res => {
                console.log(res);
                console.log('res.features[0].properties.MeasurementCount', res.features[0].properties.MeasurementCount);
                const max = res.features.map(x => x.properties.MeasurementCount);
                console.log('Max-Measure', max, Math.max(...max));
                setMax(Math.max(...max));
                setData(res);
            })
        }
    }, [])

    function onEachFeature(feature, layer) {
        const popupOptions = {
            minWidth: 250,
            maxWidth: 500,
            className: "popup-classname"
        };

        if (feature.properties) {
            const {MeasurementCount} = feature.properties;
            const featureOpacity = MeasurementCount / maxMeasure;
            // console.log('feature - maxMeasure,featureOpacity',maxMeasure,featureOpacity);

            layer.bindPopup(`MeasurementsCount: ${MeasurementCount}`);
            layer.setStyle({
                fillColor: '#00AA00',
                color: '#00FF00',
                weight: 1,
                opacity: 0.25,
                fillOpacity: featureOpacity*0.5
            })
        }
    }

    return (
        <MapContainer
            center={[47.2529694, 8.11154]}
            zoom={6}
            scrollWheelZoom={true}
            style={{height: "100%", width: "100%"}}

        >
            <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://carto.com/attribution/">© CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
            />
            {data && <GeoJSON ref={layerRef} onEachFeature={onEachFeature}
                              attribution="Measurements"
                              data={data}
            />}
        </MapContainer>
    );
};

export default Map;
