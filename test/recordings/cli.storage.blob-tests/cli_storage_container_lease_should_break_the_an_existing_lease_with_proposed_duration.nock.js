// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4352df90-0001-002d-61aa-3f15c7000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-time': '20',
  date: 'Wed, 16 Nov 2016 01:39:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4352df90-0001-002d-61aa-3f15c7000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-time': '20',
  date: 'Wed, 16 Nov 2016 01:39:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '526300b9-0001-0036-37aa-3f3b55000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'breaking',
  date: 'Wed, 16 Nov 2016 01:39:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '526300b9-0001-0036-37aa-3f3b55000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'breaking',
  date: 'Wed, 16 Nov 2016 01:39:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '609d6764-0001-002b-19aa-3fe2bf000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:40:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '609d6764-0001-002b-19aa-3fe2bf000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:40:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a2303964-0001-0013-04aa-3fa3e6000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'broken',
  date: 'Wed, 16 Nov 2016 01:40:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a2303964-0001-0013-04aa-3fa3e6000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'broken',
  date: 'Wed, 16 Nov 2016 01:40:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8745bf9f-0001-0008-50aa-3f8d74000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:40:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:39:13 GMT',
  etag: '"0x8D40DC15EDA053C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8745bf9f-0001-0008-50aa-3f8d74000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:40:20 GMT',
  connection: 'close' });
 return result; }]];