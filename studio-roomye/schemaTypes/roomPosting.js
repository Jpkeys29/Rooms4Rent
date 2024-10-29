export default {
    name: 'roomposting',
    title: 'Room Postings',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'roomId',
            type: 'string',
            
          },
        {
            name: 'area',
            title: 'areaId',
            type: 'string',
            
          },
        {
            name: 'neighborhood',
            title: 'neighborhoodId',
            type: 'string',
            
          },
        
        {
            name: 'description',
            title: 'descriptionId',
            type: 'string',
            
          },
        {
            name: 'price',
            title: 'priceId',
            type: 'string',
            
          },
        {
            name: 'availability',
            title: 'availabilityId',
            type: 'string',
            
          },
        {
            name: 'amenities',
            title: 'amenitiesId',
            type: 'string',
            
          },
          { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], },
    ],
  }