import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  FC,
} from 'react';
import { IArticle, IArticles } from '../interfaces/IArticle';

type ContextType = {
  articles: IArticles;
  setArticles: Dispatch<SetStateAction<IArticles>>;
};

type Props = { children: ReactNode };

export const DEFAULT_VALUE = {
  articles: {
    status: 'OK',
    totalHits: 5851,
    data: [
      {
        _index: 'articles_2021_07_12',
        _type: 'article',
        _id: '142983038',
        _score: 19.547684,
        _source: {
          id: '142983038',
          authors: [
            'Barilli,Ana Lúcia Azevedo',
            'Passos,Afonso Dinis Costa',
            'Marin-Neto,José Antônio',
            'Franco,Laércio Joel',
          ],
          citations: [],
          contributors: [],
          datePublished: '2006-12-01T00:00:00',
          deleted: 'DELETED',
          description:
            'OBJETIVO: Verificar a freqüência das doenças periodontais (DP) em pacientes com cardiopatia isquêmica. As DP representam grave problema de saúde pública odontológica, com distribuições diferenciadas quanto a gravidade, faixa etária, tipo de infecção, comorbidades e fatores de risco. MÉTODOS: Foram examinados 480 pacientes no Ambulatório de Cardiopatia Isquêmica do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo, e 154 pacientes sem cardiopatia na mesma instituição. Preencheram os critérios de inclusão para a investigação periodontal, respectivamente, 58 e 62 pacientes, de trinta a 79 anos. Foram utilizados o Índice Periodontal Comunitário (IPC) e o Índice de Perda de Inserção Periodontal (PIP), recomendados pela OMS (1999). RESULTADOS: Houve predomínio de sextantes com DP moderada e grave nos pacientes com cardiopatia (76,3% versus 20,2%; p < 0,00001). Nesses pacientes, 1,1% dos sextantes exibiram saúde periodontal, contra 32,0% nos sem cardiopatia (p < 0,00001). No tocante à história pregressa das DP, 6,0% dos sextantes não exibiram perda de inserção entre os pacientes com cardiopatia, contra 68,0% nos sem cardiopatia (p < 0,00001). Observou-se biofilme dental em 100,0% dos pacientes com cardiopatia e em 82,3% dos sem cardiopatia (p < 0,001). Necessitavam de tratamento de bolsas periodontais > 6 mm, 79,3% dos pacientes com cardiopatia contra 9,7% dos sem cardiopatia (p < 0,0001). CONCLUSÃO: As DP mostraram-se muito prevalentes nos grupos estudados, sendo de maior gravidade naquele com cardiopatia isquêmica. A elevada prevalência de fatores de risco encontrada aponta para a necessidade de adoção de estratégias de intervenção',
          fullText: null,
          fullTextIdentifier: null,
          identifiers: [
            'oai:periodicos.ibict.br.ArquivosBrasileirosdeCardiologia:oai:scielo:S0066-782X2006001900003',
            null,
          ],
          journals: null,
          language: null,
          duplicateId: null,
          publisher: 'Sociedade Brasileira de Cardiologia - SBC',
          rawRecordXml:
            '<record><header><identifier>oai:periodicos.ibict.br.ArquivosBrasileirosdeCardiologia:oai:scielo:S0066-782X2006001900003</identifier><datestamp>2017-04-20T05:26:59Z</datestamp><setSpec>com_BR</setSpec><setSpec>BR</setSpec></header><metadata><oai_dc:dc xmlns:oai_dc="http://www.openarchives.org/OAI/2.0/oai_dc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:doc="http://www.lyncode.com/xoai" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/oai_dc/ http://www.openarchives.org/OAI/2.0/oai_dc.xsd" ><dc:title>\nDoenças periodontais em pacientes com doença isquêmica coronariana aterosclerótica, em Hospital Universitário</dc:title><dc:creator>\nBarilli,Ana Lúcia Azevedo</dc:creator><dc:creator>\nPassos,Afonso Dinis Costa</dc:creator><dc:creator>\nMarin-Neto,José Antônio</dc:creator><dc:creator>\nFranco,Laércio Joel</dc:creator><dc:subject>\nDoenças periodontais</dc:subject><dc:subject>\ncardiopatias</dc:subject><dc:subject>\níndice periodontal</dc:subject><dc:subject>\nperda de inserção periodontal</dc:subject><dc:description>\nOBJETIVO: Verificar a freqüência das doenças periodontais (DP) em pacientes com cardiopatia isquêmica. As DP representam grave problema de saúde pública odontológica, com distribuições diferenciadas quanto a gravidade, faixa etária, tipo de infecção, comorbidades e fatores de risco. MÉTODOS: Foram examinados 480 pacientes no Ambulatório de Cardiopatia Isquêmica do Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo, e 154 pacientes sem cardiopatia na mesma instituição. Preencheram os critérios de inclusão para a investigação periodontal, respectivamente, 58 e 62 pacientes, de trinta a 79 anos. Foram utilizados o Índice Periodontal Comunitário (IPC) e o Índice de Perda de Inserção Periodontal (PIP), recomendados pela OMS (1999). RESULTADOS: Houve predomínio de sextantes com DP moderada e grave nos pacientes com cardiopatia (76,3% versus 20,2%; p < 0,00001). Nesses pacientes, 1,1% dos sextantes exibiram saúde periodontal, contra 32,0% nos sem cardiopatia (p < 0,00001). No tocante à história pregressa das DP, 6,0% dos sextantes não exibiram perda de inserção entre os pacientes com cardiopatia, contra 68,0% nos sem cardiopatia (p < 0,00001). Observou-se biofilme dental em 100,0% dos pacientes com cardiopatia e em 82,3% dos sem cardiopatia (p < 0,001). Necessitavam de tratamento de bolsas periodontais > 6 mm, 79,3% dos pacientes com cardiopatia contra 9,7% dos sem cardiopatia (p < 0,0001). CONCLUSÃO: As DP mostraram-se muito prevalentes nos grupos estudados, sendo de maior gravidade naquele com cardiopatia isquêmica. A elevada prevalência de fatores de risco encontrada aponta para a necessidade de adoção de estratégias de intervenção.</dc:description><dc:date>\n2006-12-01</dc:date><dc:type>\ninfo:eu-repo/semantics/article</dc:type><dc:type>\ninfo:eu-repo/semantics/publishedVersion</dc:type><dc:identifier>\nhttp://www.scielo.br/scielo.php?script=sci_arttext&pid=S0066-782X2006001900003</dc:identifier><dc:language>\npor</dc:language><dc:rights>\ninfo:eu-repo/semantics/openAccess</dc:rights><dc:format>\ntext/html</dc:format><dc:publisher>\nSociedade Brasileira de Cardiologia - SBC</dc:publisher><dc:source>\nArquivos Brasileiros de Cardiologia  v.87 n.6 2006</dc:source><dc:source>\nreponame:Sociedade Brasileira de Cardiologia - SBC</dc:source><dc:source>\ninstname:SBC</dc:source>\n</oai_dc:dc>\n</metadata></record>',
          relations: [],
          repositories: [
            {
              id: '1730',
              openDoarId: 0,
              name: 'LAReferencia - Red Federada de Repositorios Institucionales de Publicaciones Científicas Latinoamericanas',
              urlHomepage: null,
              urlOaipmh: null,
              uriJournals: null,
              physicalName: 'noname',
              source: null,
              software: null,
              metadataFormat: null,
              description: null,
              journal: null,
              roarId: 0,
              baseId: 0,
              pdfStatus: null,
              nrUpdates: 0,
              disabled: false,
              lastUpdateTime: null,
              repositoryLocation: null,
            },
          ],
          repositoryDocument: {
            pdfStatus: 0,
            textStatus: 0,
            metadataAdded: 1513712200000,
            metadataUpdated: 1535067986000,
            timestamp: 1535120385000,
            depositedDate: 1492642800000,
            indexed: 0,
            deletedStatus: '1',
            pdfSize: 0,
            tdmOnly: false,
            pdfOrigin: null,
          },
          similarities: null,
          subjects: [
            'info:eu-repo/semantics/article',
            'info:eu-repo/semantics/publishedVersion',
          ],
          title:
            'Doenças periodontais em pacientes com doença isquêmica coronariana aterosclerótica, em Hospital Universitário',
          topics: [
            'Doenças periodontais',
            'cardiopatias',
            'índice periodontal',
            'perda de inserção periodontal',
          ],
          types: [],
          urls: [
            'http://www.scielo.br/scielo.php?script=sci_arttext&pid=S0066-782X2006001900003',
          ],
          year: 2006,
          doi: null,
          oai: 'oai:periodicos.ibict.br.ArquivosBrasileirosdeCardiologia:oai:scielo:S0066-782X2006001900003',
          downloadUrl: '',
          pdfHashValue: null,
          documentType: null,
          documentTypeConfidence: null,
          citationCount: null,
          estimatedCitationCount: null,
          acceptedDate: null,
          depositedDate: 1492642800000,
          publishedDate: 1164931200000,
          issn: null,
          attachmentCount: 0,
          repositoryPublicReleaseDate: null,
          extendedMetadataAttributes: null,
          crossrefDocument: null,
          magDocument: null,
          orcidAuthors: null,
        },
      },
    ],
  },
};

export const ArticlesContext = createContext<ContextType>({
  articles: DEFAULT_VALUE.articles,
  setArticles: (): void => {},
});

const ArticleProvider: FC<Props> = ({ children }) => {
  const [articles, setArticles] = useState<IArticles>(DEFAULT_VALUE.articles);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticleProvider;
