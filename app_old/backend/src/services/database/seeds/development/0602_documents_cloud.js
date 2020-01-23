const { DocumentsCloud } = require('../../models');

exports.seed = async knex => {
  await knex(DocumentsCloud.tableName).insert([
    {
      id: '184d23ca-547c-4cbe-8c2b-d93dff0b295d',
      document_id: 1,
      storage_details: {
        Bucket: 'foo',
        Key: 'folder/20191111/foo'
      },
      mimetype: 'application/pdf',
      extension: 'pdf',
      size: 13764,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    },
    {
      id: '5c851c0a-b475-4030-9b7e-0dcf40d106f9',
      document_id: 2,
      storage_details: {
        Bucket: 'bar',
        Key: 'folder/20191111/bar'
      },
      mimetype: 'application/pdf',
      extension: 'pdf',
      size: 13764,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    }
  ]);
};
