/**
 * @typedef {Object} Parcel
 * @property {string} id
 * @property {string} apn
 * @property {string} address
 * @property {boolean} isFireHazard
 */

const api = {
  parcels: {
    /**
     * Simulates an API request to search parcels
     * @param {string} queryText
     * @returns {Promise<Array<Parcel>>}
     */
    async search(queryText) { // eslint-disable-line no-unused-vars
      // Simulate an API request delay
      await new Promise(resolve => {
        setTimeout(resolve, 500);
      });

      const response = Array(4).fill(null)
        .map((_, idx) => {
          // ID will never be 0
          const id = idx + 1;

          return {
            id,
            apn: (1000 + id).toString(10),
            address: `10${id} Example St.`,
            isFireHazard: Math.random() >= 0.5,
          };
        });

      return response;
    },
    /**
      * Simulates an API request to search parcels
      * @typedef {Object} SurroundingParcels
      * @property {string} acres
      * @property {string} address
      * @property {string} geom
      * @property {string} parcelid
      */
    async getSurroundingParcels(parcelId, distance) {
      const url = `/notify/parcel-and-distance?parcelid=${parcelId}&dist=${distance}`;
      const response = await fetch(url);
      const json = await response.json();
      return json;
    },
  },
};

export default api;
