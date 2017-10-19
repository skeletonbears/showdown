// Giphy API Mixin

riot.mixin({
  // Public API key
  _key: 'dc6zaTOxFJmzC',

  // API request url
  _url: 'https://api.giphy.com/v1/gifs/search',

  // Observable object
  giphy: riot.observable(),

  // Search method
  giphySearch: function(term) {

    // Notify of search started
    this.giphy.trigger('start')

    // Encode search term
    term = encodeURIComponent(term)

    // Create search URL
    let req = `${this._url}?api_key=${this._key}&q=${term}`

    // Create new request with Wretch
    wretch(req).get().json(json => {
      this.giphy.trigger('complete', json)
    })
    
  }
})
