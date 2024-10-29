export default {
    name: 'accountdetails',
    title: 'Account Details',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'userId',
            type: 'string',
            
          },
        {
            name: 'name',
            title: 'nameId',
            type: 'string',
            
          },
        {
            name: 'email',
            title: 'emailId',
            type: 'string',
            
          },
        
        {
            name: 'gender',
            title: 'genderId',
            type: 'string',
            
          },
        {
            name: 'occupation',
            title: 'occupationId',
            type: 'string',
            
          },
      {
        name: 'image',
        title: 'image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }