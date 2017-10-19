<results>

  <spinner if={!has_results}></spinner>

  <div if={has_results}>
    <gif each={results} preview={images.preview_gif.url} download={images.original.url}></gif>
  </div>

  <script>
    // Results Array
    this.results = []

    // Listen for search started
    this.giphy.on('start', () => {

      // Show spinner
      this.has_results = false

      // Update DOM
      this.update()
    })

    // Listen for new results
    this.giphy.on('complete', (res) => {

      // Update results
      this.results = res.data

      // Show results
      this.has_results = true

      // Update DOM
      this.update()
    })
  </script>

  <style>
    :scope{
      display: block;
      padding: 1em;
      background: #234
    }
  </style>
</results>
