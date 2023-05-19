/**
 * SVG Path Handler
 */
class SVGPathHandler {
  /**
   *
   * @param {SVGPathElement} path - The path element of the path (requires it's "d" attribute's properties to be seperated by spaces.)
   * @param {object} options - Options
   * @param {bool} options.applyOnChange - Whether or not the path handler should apply on change
   */
  constructor(path, options) {
    this.options = options
    this.path = path
    this.pathRoute = path
      .getAttribute('d')
      .split(/ +/)
      .map(v => (!isNaN(v) ? +v : v))
  }

  get x() {
    return this.pathRoute[1]
  }
  get y() {
    return this.pathRoute[2]
  }
  get coords() {
    return [this.x, this.y]
  }
  get pr() {
    return this.pathRoute.join(' ')
  }
  set x(xTemp) {
    this.pathRoute[1] = xTemp
    if (this.options.applyOnChange) this.setAttributes()
  }
  set y(yTemp) {
    this.pathRoute[2] = yTemp
    if (this.options.applyOnChange) this.setAttributes()
  }
  set coords(coord) {
    this.x = coord[0]
    this.y = coord[1]
    if (this.options.applyOnChange) this.setAttributes()
  }

  /**
   * Edit the pathRoute
   * @param {Number|Number[]} index - The index of the value you want to edit
   * @param {Number|Number[]|String|String[]} value - The new value you want to set it to
   */
  editPath(index, value) {
    if (Array.isArray(index)) {
      for (let i = 0; i < this.pathRoute.length; i++) {
        for (let j = 0; j < index.length; j++) {
          if (i === index[j])
            this.pathRoute[index[j]] = Array.isArray(value) ? value[j] : value
        }
      }
    } else this.pathRoute[index] = value
    if (this.options.applyOnChange) this.setAttributes()
  }
  /**
   * Set the attributes of the path (Apply changes)
   */
  setAttributes() {
    this.path.setAttribute('d', this.pr)
    this.pathRoute = this.path
      .getAttribute('d')
      .split(/ +/)
      .map(v => (!isNaN(v) ? +v : v))
  }
}
