/**
 * creates a URL encoded SVG with dimensions matching the provided image
 * to act as a placeholder.
 * 
 * @see https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/
 */
export const placeholderSVG = {
  methods : {
    getPlaceholderSVG({width, height}) {
      return `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20${width}%20${height}%22%2F%3E`
    }
  }
}