import React from 'react'
import ReactDOM from 'react-dom'
import ImageViewer from './imageViewer'
import { CAROUSELCSS } from './constants';


looker.plugins.visualizations.add({
  // Id and Label are legacy properties that no longer have any function besides documenting
  // what the visualization used to have. The properties are now set via the manifest
  // form within the admin/visualizations page of Looker
  id: "c3_image_carousel",
  label: "C3 Image Carousel",
  // Set up the initial state of the visualization
  create: function(element, config) {
    // Insert a <style> tag with some styles we'll use later.
    element.innerHTML = `
      <style>
        .c3-image_carousel {
          /* Vertical centering */
          height: 100%;
          /* height: 430px; */
          /* width: 565px; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        ${CAROUSELCSS}
      </style>`;

    // Create a container element to let us center the text.
    let container = element.appendChild(document.createElement("div"));
    container.className = "c3-image_carousel";

    // Create an element to contain the text.
    this._textElement = container.appendChild(document.createElement("div"));

    // Render to the target element
    this.chart = ReactDOM.render(
      <ImageViewer />,
      this._textElement
    );
    // console.log(`this.chart: ${Object.entries(this.chart)}`)
  },
  // Render in response to the data or settings changing
  updateAsync: function(data, element, config, queryResponse, details, done) {

    // Clear any errors from previous updates
    this.clearErrors();

    // Throw some errors and exit if the shape of the data isn't what this chart needs
    if (queryResponse.fields.dimensions.length == 0) {
      this.addError({title: "No Dimensions", message: "This chart requires dimensions."});
      return;
    }

    // Can use this to pass properties into the carousel component
    // Set the size to the user-selected size
    // if (config.font_size == "small") {
    //   this._textElement.className = "hello-world-text-small";
    // } else {
    //   this._textElement.className = "hello-world-text-large";
    // }

    // Finally update the state with our new data
    this.chart.setState({data, queryResponse})

    // We are done rendering! Let Looker know.
    done()
  }
});
