import { ContentStatusName, ContentTypeName, IContentModel } from 'tno-core';

export const defaultContent: IContentModel = {
  id: 0,
  status: ContentStatusName.Published,
  contentType: ContentTypeName.Internet,
  uid: '',
  sourceUrl: '',
  licenseId: 0,
  otherSource: '',
  mediaTypeId: 0,
  headline: '',
  byline: '',
  edition: '',
  section: '',
  page: '',
  summary: '',
  body: '',
  publishedOn: '',
  isHidden: false,
  isApproved: true,
  isPrivate: true,
  actions: [],
  tags: [],
  labels: [],
  topics: [],
  tonePools: [],
  timeTrackings: [],
  fileReferences: [],
  links: [],
  quotes: [],
  userNotifications: [],
  versions: {},
  isCBRAUnqualified: false,
};
