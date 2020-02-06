const { Documents } = require('../../models');

exports.seed = async knex => {
  await knex(Documents.tableName).insert([
    {
      id: 1,
      name: 'foo',
      type: Documents.TYPES.IDENTITY_CARD,
      mimetype: Documents.MIMETYPES.APPLICATION_PDF,
      extension: Documents.EXTENSIONS.PDF,
      size: 2156,
      storage_provider: Documents.STORAGE_PROVIDERS.DIGITALOCEAN,
      storage_details: {},
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    },
    {
      id: 2,
      name: 'bar',
      type: Documents.TYPES.IDENTITY_CARD,
      mimetype: Documents.MIMETYPES.APPLICATION_PDF,
      extension: Documents.EXTENSIONS.PDF,
      size: 2156,
      storage_provider: Documents.STORAGE_PROVIDERS.DIGITALOCEAN,
      storage_details: {},
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    }
  ]);

  await knex.raw(
    `select setval('${Documents.tableName}_id_seq', max(id)) from ${Documents.tableName}`
  );
};
