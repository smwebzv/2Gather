import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import mapStyle from "../../helpers/map-style.json";
import { markers } from "../../helpers/mapsData";
import { styles } from "./Map.style";

const Map = () => {
    const mapRef = React.useRef<MapView>(null);
    
    return(
        <View style={styles.mainContainer}>
            <MapView
                style={styles.map}
                ref={mapRef}
                clusterColor={'#48C5B5'}
                customMapStyle={mapStyle}
                region={{
                    latitude: 45.21643213354111,
                    longitude: 25.68369124084711,
                    latitudeDelta: 31.882984368010884,
                    longitudeDelta: 21.22871808707714,
                  }}
            >
                {
                    markers.map((item, index) => 
                        <Marker key={index} coordinate={{ latitude: item.latitude, longitude: item.longitude }} />
                    )
                }
            </MapView>
        </View>
    )
}

export default Map;