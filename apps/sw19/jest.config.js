module.exports = {
  name: 'sw19',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw19',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
