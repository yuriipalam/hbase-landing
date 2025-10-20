export interface Link {
  label: string;
  to: string;
  external?: boolean;
}

export const projectLinks: Link[] = [
  {
    label: "Overview",
    to: "/"
  },
  {
    label: "License",
    to: "https://www.apache.org/licenses/"
  },
  {
    label: "Downloads",
    to: "/downloads"
  },
  {
    label: "Release Notes",
    to: "https://issues.apache.org/jira/browse/HBASE?report=com.atlassian.jira.plugin.system.project:changelog-panel#selectedTab=com.atlassian.jira.plugin.system.project%3Achangelog-panel"
  },
  {
    label: "Issue Tracking",
    to: "https://issues.apache.org/jira/browse/HBASE"
  },
  {
    label: "Code of Conduct",
    to: "/code-of-conduct"
  },
  {
    label: "Mailing Lists",
    to: "/mailing-lists"
  },
  {
    label: "Team",
    to: "/team"
  },
  {
    label: "HBase Sponsors",
    to: "/sponsors"
  },
  {
    label: "Thanks",
    to: "https://www.apache.org/foundation/sponsors"
  },
  {
    label: "Powered by HBase",
    to: "/powered-by-hbase"
  },
  {
    label: "Other Resources",
    to: "/other-resources"
  }
];

export const documentationLinks: Link[] = [
  {
    label: "Reference Guide",
    to: "https://hbase.apache.org/book.html"
  },
  {
    label: "Reference Guide (PDF)",
    to: "https://hbase.apache.org/apache_hbase_reference_guide.pdf"
  },
  {
    label: "中文参考指南(单页)",
    to: "https://abloz.com/hbase/book.html",
    external: true
  },
  {
    label: "Video/Presentations",
    to: "https://hbase.apache.org/book.html#other.info"
  },
  {
    label: "Source Repository",
    to: "/source-repository"
  },
  {
    label: "Wiki",
    to: "https://cwiki.apache.org/confluence/display/HADOOP2/Hbase",
    external: true
  },
  {
    label: "ACID Semantics",
    to: "/acid-semantics"
  },
  {
    label: "Bulk Loads",
    to: "https://hbase.apache.org/book.html#arch.bulk.load"
  },
  {
    label: "Metrics",
    to: "https://hbase.apache.org/book.html#hbase_metrics"
  }
];

export const asfLinks: Link[] = [
  {
    label: "Apache Software Foundation",
    to: "http://www.apache.org/foundation/",
    external: true
  },
  {
    label: "How Apache Works",
    to: "http://www.apache.org/foundation/how-it-works.html",
    external: true
  },
  {
    label: "Sponsoring Apache",
    to: "http://www.apache.org/foundation/sponsorship.html",
    external: true
  },
  {
    label: "Privacy Policy",
    to: "https://privacy.apache.org/policies/privacy-policy-public.html",
    external: true
  }
];

type DocumentationOptions =
  | "ref"
  | "refPdf"
  | "userApi"
  | "userApiTest"
  | "devApi"
  | "devApiTest";

export const documentationOptionLabels: Record<DocumentationOptions, string> = {
  ref: "Reference Guide",
  refPdf: "Reference Guide (PDF)",
  userApi: "User API",
  userApiTest: "User API (Test)",
  devApi: "Developer API",
  devApiTest: "Developer API (Test)"
};

export function getDocsURL(
  version: string,
  option: DocumentationOptions
): string {
  const baseUrl = "https://hbase.apache.org/";
  switch (option) {
    case "ref":
      return `${baseUrl}${version}/book.html`;
    case "refPdf":
      return `${baseUrl}${version}/book.pdf`;
    case "userApi":
      return `${baseUrl}${version}/apidocs/index.html`;
    case "userApiTest":
      return `${baseUrl}${version}/testapidocs/index.html`;
    case "devApi":
      return `${baseUrl}${version}/devapidocs/index.html`;
    case "devApiTest":
      return `${baseUrl}${version}/testdevapidocs/index.html`;
  }
}

export const docsItems: Record<string, DocumentationOptions[]> = {
  "1.4": ["ref", "refPdf", "userApi", "userApiTest"],
  "2.3": ["ref", "refPdf", "userApi", "userApiTest", "devApi", "devApiTest"],
  "2.4": ["ref", "refPdf", "userApi", "userApiTest", "devApi", "devApiTest"],
  "2.5": ["userApi", "userApiTest", "devApi", "devApiTest"],
  "2.6": ["userApi", "userApiTest", "devApi", "devApiTest"]
};
