import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import * as mapboxgl from "mapbox-gl";
import house1 from "./images/house-img-1.webp";
import house3 from "./images/hall-img-2.webp";
import house4 from "./images/kitchen-img-1.webp";
import house5 from "./images/bathroom-img-1.webp";

const View_property = () => {
  document.title = "View Property";
  const [bigImage, setBigImage] = useState(house1);
  const mapContainerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2h1YmhhbS0yMTA2IiwiYSI6ImNsanBkcWpzaDAyYzIzcG8wem80dTlwNGoifQ.Wq4Ac9g2DsvDZRsV9EjG1Q";

  useEffect(() => {
    if (mapLoaded) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/shubham-2106/clk28bv4k004s01pg6odn61bs",
      center: [75.8026, 26.9124], // Centering map on Jaipur
      zoom: 10.5,
    });

    map.on("load", () => {
      setMapLoaded(true);
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Jaipur Property</strong><p><a href="#" target="_blank" title="Opens in a new window">View Property</a></p>',
                icon: "marker-editor",
              },
              
            },
          ],
        },
      });

      map.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": ["get", "icon"],
          "icon-allow-overlap": true,
        },
      });

      map.on("click", "places", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on("mouseenter", "places", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "places", () => {
        map.getCanvas().style.cursor = "";
      });

      map.addControl(new mapboxgl.NavigationControl());
    });
  }, [mapLoaded]);

  const handleSmallImageClick = (image) => {
    setBigImage(image);
  };

  return (
    <>
      <Nav />

      <section className="view-property">
        <div className="details">
          <div className="thumb">
            <div className="big-image">
              <img src={bigImage} alt="" />
            </div>
            <div className="small-images">
              <img
                src={house1}
                alt=""
                onClick={() => handleSmallImageClick(house1)}
              />
              <img
                src={house3}
                alt=""
                onClick={() => handleSmallImageClick(house3)}
              />
              <img
                src={house4}
                alt=""
                onClick={() => handleSmallImageClick(house4)}
              />
              <img
                src={house5}
                alt=""
                onClick={() => handleSmallImageClick(house5)}
              />
            </div>
          </div>
          <h3 className="name">Modern Flats and Appartments</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Jaipur, India - 302001</span>
          </p>
          <div className="info">
            <p>
              <i className="fas fa-tag"></i>
              <span>15 lac</span>
            </p>
            <p>
              <i className="fas fa-user"></i>
              <span>DS (owner)</span>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <a href="tel:1234567890">1234567890</a>
            </p>
            <p>
              <i className="fas fa-building"></i>
              <span>Flat</span>
            </p>
            <p>
              <i className="fas fa-house"></i>
              <span>Sale</span>
            </p>
            <p>
              <i className="fas fa-calendar"></i>
              <span>10-02-2023</span>
            </p>
          </div>
          <h3 className="title">Details</h3>
          <div className="flex">
            <div className="box">
              <p>
                <i>Rooms :</i>
                <span>3 BHK</span>
              </p>
              <p>
                <i>Deposit amount :</i>
                <span>0</span>
              </p>
              <p>
                <i>Status :</i>
                <span>Ready to move</span>
              </p>
              <p>
                <i>Bedroom :</i>
                <span>3</span>
              </p>
              <p>
                <i>Bathroom :</i>
                <span>3</span>
              </p>
              <p>
                <i>Balcony :</i>
                <span>1</span>
              </p>
            </div>
            <div className="box">
              <p>
                <i>Carpet area :</i>
                <span>750sqft</span>
              </p>
              <p>
                <i>Age :</i>
                <span>3 years</span>
              </p>
              <p>
                <i>Room floor :</i>
                <span>3</span>
              </p>
              <p>
                <i>Total floors :</i>
                <span>22</span>
              </p>
              <p>
                <i>Furnished :</i>
                <span>Semi-furnished</span>
              </p>
              <p>
                <i>Loan :</i>
                <span>Available</span>
              </p>
            </div>
          </div>
          <h3 className="title">Amenities</h3>
          <div className="flex">
            <div className="box">
              <p>
                <i className="fas fa-check"></i>
                <span>Lifts</span>
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span>Security guards</span>
              </p>
              <p>
                <i className="fas fa-times"></i>
                <span>Play ground</span>
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span>Gardens</span>
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span>Water supply</span>
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span>Power backup</span>
              </p>
            </div>
            <div className="box">
              <p>
                <i className="fas fa-check"></i>
                <span>Parking area</span>
              </p>
              <p>
                <i className="fas fa-times"></i>
                <span>Gym</span>
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span>Shopping mall</span>
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span>Hospital</span>
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span>Schools</span>
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span>Market area</span>
              </p>
            </div>
          </div>
          <h3 className="title">Description</h3>
          <p className="description">
            It is a very budget friendly apartment you will get.
          </p>
          <form action="" method="post">
            <input
              type="submit"
              value="save property"
              name="save"
              className="inline-btn"
            />
          </form>
          <br />
          <br />
          <br />
          <br />
          <h1 className="title">Search on Map</h1>

          <main className="pt-2">
            <div className="Container">
              <div
                id="map"
                ref={mapContainerRef}
                style={{ width: "100%", height: "400px" }}
              ></div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default View_property;