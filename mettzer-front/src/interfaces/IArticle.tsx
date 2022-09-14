export interface IRepostory {
  id: string;
  openDoarId: number;
  name: string;
  urlHomepage: string | null;
  urlOaipmh: string | null;
  uriJournals: string | null;
  physicalName: string;
  source: string | null;
  software: string | null;
  metadataFormat: string | null;
  description: string | null;
  journal: string | null;
  roarId: number;
  baseId: number;
  pdfStatus: string | null;
  nrUpdates: number;
  disabled: boolean;
  lastUpdateTime: string | null;
  repositoryLocation: string | null;
}

export interface IRepositoryDocument {
  pdfStatus: number;
  textStatus: number;
  metadataAdded: number;
  metadataUpdated: number;
  timestamp: number;
  depositedDate: number;
  indexed: number;
  deletedStatus: string;
  pdfSize: number;
  tdmOnly: boolean;
  pdfOrigin: string | null;
}

export interface ISource {
  id: string;
  authors: string[];
  citations: (string | null)[];
  contributors: string[];
  datePublished: string;
  deleted: string;
  description: string;
  fullText: string | null;
  fullTextIdentifier: string | null;
  identifiers: (string | null)[];
  journals: string | null;
  language: string | null;
  duplicateId: string | null;
  publisher: string;
  rawRecordXml: string;
  relations: string[];
  repositories: IRepostory[];
  repositoryDocument: IRepositoryDocument;
  similarities: string | null;
  subjects: string[];
  title: string;
  topics: string[];
  types: string[];
  urls: string[];
  year: number;
  doi: string | null;
  oai: string;
  downloadUrl: string;
  pdfHashValue: string | null;
  documentType: string | null;
  documentTypeConfidence: string | null;
  citationCount: string | null;
  estimatedCitationCount: string | null;
  acceptedDate: string | null;
  depositedDate: number;
  publishedDate: number;
  issn: string | null;
  attachmentCount: number;
  repositoryPublicReleaseDate: string | null;
  extendedMetadataAttributes: string | null;
  crossrefDocument: string | null;
  magDocument: string | null;
  orcidAuthors: string | null;
}

export interface IArticle {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: ISource;
}

export interface IArticles {
  status: string;
  totalHits: number;
  data: IArticle[];
}
