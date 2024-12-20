interface UrlParts {
  protocol: string;
  subdomain: string;
  domain: string;
  path: string;
}

export default class Url {
  /**
   * Extract the subdomain, domain, and path from a given URL.
   * @param {string} url - The URL to parse.
   * @returns {UrlParts} An object containing the subdomain, domain, and path.
   */
  static get(url: string): UrlParts {
    const parsedUrl = new URL(url);
    // Extract protocol
    const protocol = parsedUrl.protocol; // Includes trailing colon (:)

    // Get the hostname
    const hostname = parsedUrl.hostname;

    // Split the hostname into parts
    const hostnameParts = hostname.split(".");

    // Determine the domain and subdomain
    let subdomain = "";
    let domain = "";

    if (hostnameParts.length >= 3) {
      // Assume the last two parts are the domain (e.g., example.com)
      domain = hostnameParts.slice(-2).join(".");
      // The rest is the subdomain
      subdomain = hostnameParts.slice(0, -2).join(".");
    } else if (hostnameParts.length === 2) {
      // No subdomain, only domain (e.g., example.com)
      domain = hostname;
    } else {
      // Handle edge cases like localhost or other non-standard domains
      domain = hostname;
    }

    // Get the path
    const path = parsedUrl.pathname;

    return { protocol, subdomain, domain, path };
  }
}
