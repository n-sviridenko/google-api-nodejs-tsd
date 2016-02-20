/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        webmasters(version: string): any;
        webmasters(version: 'v3'): webmasters.v3.Webmasters;
    }

    namespace webmasters {
        namespace v3 {
            export interface Webmasters {
                new(options: any): Webmasters;

                'searchanalytics': {
                    'query': (parameters: {'siteUrl': string}, callback: (error: any, body: SearchAnalyticsQueryResponse, response: any) => void) => Request;
                };
                'sitemaps': {
                    'delete': (parameters: {'feedpath': string, 'siteUrl': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'feedpath': string, 'siteUrl': string}, callback: (error: any, body: WmxSitemap, response: any) => void) => Request;
                    'list': (parameters: {'siteUrl': string, 'sitemapIndex'?: string}, callback: (error: any, body: SitemapsListResponse, response: any) => void) => Request;
                    'submit': (parameters: {'feedpath': string, 'siteUrl': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'sites': {
                    'add': (parameters: {'siteUrl': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'delete': (parameters: {'siteUrl': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'siteUrl': string}, callback: (error: any, body: WmxSite, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: SitesListResponse, response: any) => void) => Request;
                };
                'urlcrawlerrorscounts': {
                    'query': (parameters: {'category'?: string, 'latestCountsOnly'?: boolean, 'platform'?: string, 'siteUrl': string}, callback: (error: any, body: UrlCrawlErrorsCountsQueryResponse, response: any) => void) => Request;
                };
                'urlcrawlerrorssamples': {
                    'get': (parameters: {'category': string, 'platform': string, 'siteUrl': string, 'url': string}, callback: (error: any, body: UrlCrawlErrorsSample, response: any) => void) => Request;
                    'list': (parameters: {'category': string, 'platform': string, 'siteUrl': string}, callback: (error: any, body: UrlCrawlErrorsSamplesListResponse, response: any) => void) => Request;
                    'markAsFixed': (parameters: {'category': string, 'platform': string, 'siteUrl': string, 'url': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };

            }

            interface ApiDataRow {
                'clicks': number;
                'ctr': number;
                'impressions': number;
                'keys': string[];
                'position': number;
            }

            interface ApiDimensionFilter {
                'dimension': string;
                'expression': string;
                'operator': string;
            }

            interface ApiDimensionFilterGroup {
                'filters': ApiDimensionFilter[];
                'groupType': string;
            }

            interface SearchAnalyticsQueryRequest {
                'aggregationType': string;
                'dimensionFilterGroups': ApiDimensionFilterGroup[];
                'dimensions': string[];
                'endDate': string;
                'rowLimit': number;
                'searchType': string;
                'startDate': string;
            }

            interface SearchAnalyticsQueryResponse {
                'responseAggregationType': string;
                'rows': ApiDataRow[];
            }

            interface SitemapsListResponse {
                'sitemap': WmxSitemap[];
            }

            interface SitesListResponse {
                'siteEntry': WmxSite[];
            }

            interface UrlCrawlErrorCount {
                'count': string;
                'timestamp': string;
            }

            interface UrlCrawlErrorCountsPerType {
                'category': string;
                'entries': UrlCrawlErrorCount[];
                'platform': string;
            }

            interface UrlCrawlErrorsCountsQueryResponse {
                'countPerTypes': UrlCrawlErrorCountsPerType[];
            }

            interface UrlCrawlErrorsSample {
                'first_detected': string;
                'last_crawled': string;
                'pageUrl': string;
                'responseCode': number;
                'urlDetails': UrlSampleDetails;
            }

            interface UrlCrawlErrorsSamplesListResponse {
                'urlCrawlErrorSample': UrlCrawlErrorsSample[];
            }

            interface UrlSampleDetails {
                'containingSitemaps': string[];
                'linkedFromUrls': string[];
            }

            interface WmxSite {
                'permissionLevel': string;
                'siteUrl': string;
            }

            interface WmxSitemap {
                'contents': WmxSitemapContent[];
                'errors': string;
                'isPending': boolean;
                'isSitemapsIndex': boolean;
                'lastDownloaded': string;
                'lastSubmitted': string;
                'path': string;
                'type': string;
                'warnings': string;
            }

            interface WmxSitemapContent {
                'indexed': string;
                'submitted': string;
                'type': string;
            }

        }
    }
}