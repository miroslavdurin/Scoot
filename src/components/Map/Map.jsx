import React from 'react';
import './Map.css';
import { motion } from 'framer-motion';

const variants = {
    hide: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1
        }
    }
}

function Map(props) {
    const {mapDesktop, mapTablet, mapMobile, locations} = props;

    return (
        <motion.section         
            className="section-map mb-120"
            variants={variants}
            initial="hide"
            animate="show"
        >
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
        </motion.section>
    )
}

export default Map;