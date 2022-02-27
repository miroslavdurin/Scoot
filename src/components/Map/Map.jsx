import React from 'react';
import './Map.css';

function Map(props) {
    const {mapDesktop, mapTablet, mapMobile, locations} = props;

    return (
        <section className="section-map mb-120">
            <div className="map container">
                
                <picture>
                    <source srcSet={mapMobile} media="(max-width: 720px)" alt="world map" className="map__image"/>
                    <source srcSet={mapTablet} media="(max-width: 768px)" alt="world map" className="map__image"/>
                    <source srcSet={mapDesktop} alt="world map" className="map__image"/>
                    <img src={mapDesktop} alt="world map" className="map__image" />
                </picture>
                <div className="map__location map__location--new-york">
                    <h4 className="heading--h4">
                        {locations[0]}
                    </h4>
                </div>

                <div className="map__location map__location--london">
                    <h4 className="heading--h4">
                        {locations[1]}
                    </h4>
                </div>

                <div className="map__location map__location--yokohama">
                    <h4 className="heading--h4">
                        {locations[2]}
                    </h4>
                </div>

                <div className="map__location map__location--jakarta">
                    <h4 className="heading--h4">
                        {locations[3]}
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default Map;